// ====================================================================
// Firebase config za The AI Collective Serbia.
// Ako koristis ovaj kviz za svoj event: zameni vrednosti ispod svojima
// (vidi firebase-config.example.js i README).
// ====================================================================
const firebaseConfig = {
  apiKey: "AIzaSyB8SncUCIfZGLsu4o78NatAAfa5SNiheTE",
  authDomain: "ai-collective-serbia-quiz.firebaseapp.com",
  databaseURL: "https://ai-collective-serbia-quiz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ai-collective-serbia-quiz",
  storageBucket: "ai-collective-serbia-quiz.firebasestorage.app",
  messagingSenderId: "572441882669",
  appId: "1:572441882669:web:e68c7847312ca76cc108a4",
};

// Naziv sesije — može da ostane "kickoff" za prvi event.
// Ako se host ekran otvori sa ?session=test, cela sesija (igrači, odgovori,
// poeni) ide u odvojen prostor u bazi i QR kod automatski nosi isti parametar,
// pa se test podaci nikad ne mešaju sa pravim eventom.
const SESSION_ID = (function () {
  var m = location.search.match(/[?&]session=([A-Za-z0-9_-]{1,40})/);
  return m ? m[1] : "kickoff";
})();
