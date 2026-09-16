> English version: [README.md](README.md)

# AI Kviz

Live kviz u realnom vremenu za meetupe i radionice. Publika igra sa telefona, rezultati idu na projektor.
Bez servera, bez naloga, bez instalacije — dva HTML fajla i besplatan Firebase.

Napravljeno za **The AI Collective Serbia** (Beograd). Odigrano na Humans for Humans Serbia kickoff-u, septembar 2026, sa 40 ljudi u sali.

## Kako radi

- **`host.html`** — ekran za projektor: QR kod za ulaz, pitanje, tajmer, tabela, ekran pobednika
- **`index.html`** — telefon igrača: unos imena, odgovaranje, niz tačnih odgovora, mesto na tabeli
- **Firebase Realtime Database** — jedina "backend" stvar; sinhronizuje sve u realnom vremenu

Poeni: tačan odgovor + bonus za brzinu. Niz tačnih odgovora u nizu se prikazuje igraču.
Konfete na tačan odgovor, zvučni efekti (mogu se isključiti).

## Setup u 5 koraka

1. Klonirati ili preuzeti ovaj repo.
2. Na [console.firebase.google.com](https://console.firebase.google.com) napraviti besplatan projekat → **Build → Realtime Database → Create Database**.
3. **Project settings → Your apps → Web** → prekopirati config.
4. `cp firebase-config.example.js firebase-config.js` i popuniti vrednosti.
5. Prevući folder na [app.netlify.com/drop](https://app.netlify.com/drop) (ili bilo koji static hosting). Host ekran je `.../host.html`.

### Database Rules

Kviz ne koristi autentikaciju, pa pisanje mora biti otvoreno — **ali samo pod `/quiz`**, nikada na korenu baze. U Firebase → Realtime Database → Rules nalepiti sadržaj `database.rules.json` iz ovog repoa.

## Svoja pitanja

Urediti `questions.js`. Format:

```js
{ q: "Tekst pitanja?", a: ["Opcija A", "Opcija B", "Opcija C", "Opcija D"], correct: 1 }
```

`correct` je indeks tačnog odgovora (0-3).

## Novi event

Promeniti `SESSION_ID` u `firebase-config.js`, ili obrisati `/quiz` node u Firebase konzoli da se sesija resetuje. Host ekran ima i **Reset** dugme.

## Fajlovi

| Fajl | Šta je |
| --- | --- |
| `host.html` | ekran za projektor |
| `index.html` | telefon igrača |
| `style.css` | boje i stilovi |
| `questions.js` | pitanja |
| `quiz-db.js` | Firebase logika |
| `firebase-config.example.js` | šablon za config |
| `database.rules.json` | preporučena Firebase pravila |
| `test-load.html` | simulator za test opterećenja (40 igrača lokalno) |

## Licenca

MIT — vidi [LICENSE](LICENSE). Slobodno koristi za svoj meetup; kredit je dobrodošao, nije obavezan.
