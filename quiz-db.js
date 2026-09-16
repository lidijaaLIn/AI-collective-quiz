// Deljena Firebase logika za host.html i index.html
// Koristi Firebase Realtime Database (compat SDK, učitan preko CDN u <head>).

// Vremensko ograničenje po pitanju, u sekundama. Menja se samo ovde —
// koristi ga i host.html (prikaz odbrojavanja) i index.html (zaključavanje odgovora).
const QUESTION_TIME_SEC = 30;

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const sessionRef = db.ref("quiz/" + SESSION_ID);
const stateRef = sessionRef.child("state");
const playersRef = sessionRef.child("players");
const answersRef = sessionRef.child("answers");

// Vreme sa servera. Host upisuje questionStartedAt svojim satom, a telefoni
// mere koliko je ostalo. Ako je nekome sat pomeren, bez ove korekcije bi
// video pogrešno odbrojavanje ili ne bi mogao da odgovori. Firebase nam daje
// razliku između sata uređaja i servera, pa svi mere isto vreme.
let _clockSkew = 0;
db.ref(".info/serverTimeOffset").on("value", (snap) => {
  _clockSkew = snap.val() || 0;
});
function serverNow() {
  return Date.now() + _clockSkew;
}

function getOrCreatePlayerId() {
  let id = localStorage.getItem("aic_quiz_player_id");
  if (!id) {
    id = "p_" + Math.random().toString(36).slice(2, 10);
    localStorage.setItem("aic_quiz_player_id", id);
  }
  return id;
}

async function joinAsPlayer(name) {
  const id = getOrCreatePlayerId();
  await playersRef.child(id).set({
    name: name,
    score: 0,
    joinedAt: firebase.database.ServerValue.TIMESTAMP,
  });
  return id;
}

async function submitAnswer(qIndex, choiceIndex, questionStartedAt) {
  const id = getOrCreatePlayerId();
  const now = serverNow();
  const elapsedSec = questionStartedAt ? Math.max(0, (now - questionStartedAt) / 1000) : 99;
  const correct = QUESTIONS[qIndex].correct === choiceIndex;
  const speedBonus = correct ? Math.max(0, Math.round(50 - elapsedSec * 3.5)) : 0;
  const points = correct ? 100 + speedBonus : 0;

  await answersRef.child(qIndex).child(id).set({
    choice: choiceIndex,
    correct: correct,
    ts: now,
    points: points,
  });

  if (points > 0) {
    const playerRef = playersRef.child(id);
    await playerRef.transaction((cur) => {
      if (!cur) return cur;
      cur.score = (cur.score || 0) + points;
      return cur;
    });
  }
  return { correct, points };
}

// ---- Host controls ----
async function hostReset() {
  await sessionRef.remove();
}
async function hostStart() {
  await stateRef.set({ status: "question", qIndex: 0, questionStartedAt: serverNow() });
}
async function hostReveal() {
  const snap = await stateRef.once("value");
  const s = snap.val() || {};
  await stateRef.update({ status: "reveal" });
}
async function hostNext() {
  const snap = await stateRef.once("value");
  const s = snap.val() || { qIndex: -1 };
  const nextIndex = (s.qIndex ?? -1) + 1;
  if (nextIndex >= QUESTIONS.length) {
    await stateRef.update({ status: "leaderboard", qIndex: nextIndex - 1 });
  } else {
    await stateRef.set({ status: "question", qIndex: nextIndex, questionStartedAt: serverNow() });
  }
}
async function hostShowFinal() {
  await stateRef.update({ status: "end" });
}
