// ====================================================================
// KOPIRAJ OVAJ FAJL KAO firebase-config.js I POPUNI SVOJIM PODACIMA
//
// Gde ih naći:
//   1. console.firebase.google.com -> napravi besplatan projekat
//   2. Build -> Realtime Database -> Create Database (izaberi regiju)
//   3. Project settings -> General -> Your apps -> Web app -> Config
//   4. Prekopiraj vrednosti ispod
//
// Napomena: Firebase web API ključ nije tajna — javan je po dizajnu.
// Bezbednost zavisi od Realtime Database Rules (vidi README).
// ====================================================================
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Naziv sesije — može da ostane "kickoff" za prvi event.
// Ako se host ekran otvori sa ?session=test, cela sesija (igrači, odgovori,
// poeni) ide u odvojen prostor u bazi i QR kod automatski nosi isti parametar,
// pa se test podaci nikad ne mešaju sa pravim eventom.
const SESSION_ID = (function () {
  var m = location.search.match(/[?&]session=([A-Za-z0-9_-]{1,40})/);
  return m ? m[1] : "kickoff";
})();
