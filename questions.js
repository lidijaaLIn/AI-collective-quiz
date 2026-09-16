// The AI Collective Serbia — Kick Off AI Quiz
// 15 pitanja, sve činjenice proverene tokom pripreme (avgust 2026) —
// brojke o AI Collective-u poklapaju se sa "ai collective osnovno" (dvostruko
// proveren dokument, ažuriran 16.8.2026), opšta AI znanja su nesporne,
// istorijski utvrđene činjenice.
// Redosled opcija je namerno promešan po pitanju da tačan odgovor ne bude uvek na istom mestu.
//
// Ispravka 9.9.2026: pitanje 2 je preformulisano. Ranije je glasilo o broju
// članova zajednice sa odgovorom 250.000+, a 250.000 je doseg Humans in AI
// Week-a kroz preko 100 događaja, ne broj članova. Brojka od 70.000 članova je
// zastarela (vidi predlog tema, sekcija 8), pa se broj članova ne pita uopšte.
//
// Struktura (po dogovoru sa Lidijom, 19.8.2026):
//   1-5   = AI Collective (organizacija/chapter trivia) — zagrevanje
//   6-10  = Opšte AI znanje — dostupno i netehničkoj publici
//   11-15 = Naprednije/tehničke AI teme — za kraj

const QUESTIONS = [
  // --- 1-5: AI Collective ---
  {
    q: "Koliko chapter-a trenutno ima The AI Collective širom sveta?",
    options: ["12", "45", "120+", "500+"],
    correct: 2,
  },
  {
    q: "Koliko ljudi je Humans in AI Week dosegao u junu 2026, kroz preko 100 događaja?",
    options: ["25.000+", "70.000+", "250.000+", "1.000.000+"],
    correct: 2,
  },
  {
    q: "Koji je zvaničan moto The AI Collective-a?",
    options: [
      "Move fast and break things",
      "AI for everyone, everywhere",
      "Start small, start now, and dream impossibly big",
      "Innovation without limits",
    ],
    correct: 2,
  },
  {
    q: "Kako se The AI Collective zvao pre rebrendiranja, početkom juna 2025?",
    options: ["AI Builders Network", "GenAI Collective", "Future of AI Collective", "Global AI Alliance"],
    correct: 1,
  },
  {
    q: "Koja od ovih kompanija je zvaničan partner The AI Collective-a?",
    options: ["Tesla", "Anthropic", "Apple", "Netflix"],
    correct: 1,
  },

  // --- 6-10: Opšte AI znanje ---
  {
    q: "Šta znači skraćenica LLM u svetu veštačke inteligencije?",
    options: ["Linear Learning Machine", "Large Language Model", "Logic Language Module", "Low Latency Model"],
    correct: 1,
  },
  {
    q: "Koja kompanija stoji iza ChatGPT-ja?",
    options: ["Google", "Meta", "OpenAI", "Microsoft"],
    correct: 2,
  },
  {
    q: "Šta se u AI žargonu naziva 'halucinacija'?",
    options: [
      "Kad model radi presporo",
      "Kad se model ugasi bez razloga",
      "Kad model odbije da odgovori",
      "Kad model samouvereno izmisli netačnu informaciju",
    ],
    correct: 3,
  },
  {
    q: "Ko se smatra tvorcem termina 'veštačka inteligencija' (Artificial Intelligence), sredinom 1950-ih?",
    options: ["Alan Turing", "Marvin Minsky", "John McCarthy", "Geoffrey Hinton"],
    correct: 2,
  },
  {
    q: "Koja kompanija je razvila AlphaGo, program koji je 2016. pobedio svetskog šampiona u igri Go?",
    options: ["OpenAI", "Meta AI", "Microsoft Research", "DeepMind"],
    correct: 3,
  },

  // --- 11-15: Naprednije/tehničke AI teme ---
  {
    q: "Koje godine je objavljen rad 'Attention Is All You Need', koji je pokrenuo eru Transformer modela?",
    options: ["2014", "2017", "2019", "2021"],
    correct: 1,
  },
  {
    q: "Šta označava skraćenica GPU, hardver ključan za treniranje AI modela?",
    options: ["Global Parallel Unit", "Gradient Processing Unit", "Graphics Processing Unit", "General Processing Unit"],
    correct: 2,
  },
  {
    q: "Za šta se najčešće koriste 'diffusion' modeli u generativnom AI-ju?",
    options: ["Generisanje slika", "Prevođenje jezika", "Predviđanje vremena", "Generisanje muzike"],
    correct: 0,
  },
  {
    q: "Šta označava skraćenica RAG, tehnika koja AI modelu daje pristup eksternim izvorima podataka?",
    options: ["Rapid AI Generation", "Random Access Gateway", "Retrieval-Augmented Generation", "Reasoning and Grounding"],
    correct: 2,
  },
  {
    q: "Šta označava skraćenica AGI u kontekstu veštačke inteligencije?",
    options: ["Advanced Generative Interface", "Automated Growth Intelligence", "Artificial General Intelligence", "Applied Graph Inference"],
    correct: 2,
  },
];
