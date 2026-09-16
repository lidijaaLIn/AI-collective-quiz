# AI Quiz

A live, real-time quiz for meetups and workshops. The audience plays from their phones, results appear on the projector.
No server, no accounts, no installs — two HTML files and a free Firebase database.

Built by **Lidija Abović** for **The AI Collective Serbia** (Belgrade) and played at our Humans for Humans kickoff, September 2026, with 40 people in the room.

🇷🇸 [Srpska verzija](README.sr.md)

![Host screen with the join QR code](screenshot.png)

## Why we built it

Our kickoff needed an icebreaker that got people talking to each other, not just watching a stage — and that worked for a room where most people had never met. A quiz on everyone's phone turned out to be the cheapest way to do it: people lean over to compare answers, argue about the correct one, and the leaderboard gives the room a shared story by the end.

We couldn't find anything that was free at 40 players, ran without accounts, and could be reworded for a local audience in five minutes. So this is that.

## Try it

**[Host screen](https://sunny-bublanina-db865d.netlify.app/host.html)** · **[Player screen](https://sunny-bublanina-db865d.netlify.app/index.html)**

This is our live instance, shared openly — feel free to click through it. If you plan to actually run an event, deploy your own copy (5 steps below) so nobody resets your game mid-round.

## How it works

- **`host.html`** — the projector screen: join QR code, question, countdown, leaderboard, winner
- **`index.html`** — the player's phone: name entry, answer buttons, personal streak and rank
- **Firebase Realtime Database** — the only backend; keeps every device in sync

Scoring is a correct answer plus a speed bonus, so the leaderboard keeps moving until the last question. Confetti on a correct answer, sound effects that can be muted. All timing is measured from the server clock, not each phone's — otherwise a device with a slightly wrong clock loses its speed bonus or gets locked out of answering.

## Set it up in 5 steps

1. Clone or download this repo.
2. At [console.firebase.google.com](https://console.firebase.google.com), create a free project → **Build → Realtime Database → Create Database**.
3. **Project settings → Your apps → Web** → copy the config.
4. `cp firebase-config.example.js firebase-config.js` and fill in the values.
5. Drop the folder on [app.netlify.com/drop](https://app.netlify.com/drop) (or any static host). Your host screen is `.../host.html`.

### Database rules

The quiz has no authentication — people join by scanning a QR code — so writes must be open, **but only under `/quiz`**, never at the database root. Paste the contents of `database.rules.json` into Firebase → Realtime Database → Rules, and click **Publish**.

Worth knowing: the Firebase web API key in `firebase-config.js` is public by design and is committed here on purpose. Your data is protected by those rules, not by hiding the key.

## Your own questions

Edit `questions.js`:

```js
{ q: "Question text?", a: ["Option A", "Option B", "Option C", "Option D"], correct: 1 }
```

`correct` is the index of the right answer (0-3). Fifteen questions, thirty seconds each, is what fit our 20-minute slot.

A note from running it live: questions about your own community land better than trivia. Ours asked how many people Humans in AI Week reached — the room cared about the answer because it was about them.

## Running a second event

Change `SESSION_ID` in `firebase-config.js`, or delete the `/quiz` node in the Firebase console. The host screen also has a **Reset** button.

Open the host screen with `?session=test` and the whole session — players, answers, scores — goes to a separate space in the database, and the join QR code carries the same parameter automatically. Test data never mixes with a real event.

`test-load.html` simulates 40 players at once, which is how we found the clock bug before the event rather than during it.

## Files

| File | What it is |
| --- | --- |
| `host.html` | projector screen |
| `index.html` | player's phone |
| `style.css` | colors and styles |
| `questions.js` | the questions |
| `quiz-db.js` | Firebase logic |
| `firebase-config.example.js` | config template |
| `database.rules.json` | recommended Firebase rules |
| `test-load.html` | 40-player load simulator |

## Use it, change it, tell us how it went

MIT licensed — see [LICENSE](LICENSE). Take it for your chapter or your meetup; credit is welcome but not required. If you run it somewhere, we'd genuinely like to hear what you changed — open an issue.

Built by [Lidija Abović](https://github.com/lidijaaLIn) for The AI Collective Serbia 🇷🇸
