var { dbPromise } = require('./db_connection');
dbPromise.then((database) => {
    //create documents 
    var data = [
        { tool: "VS Code", version: "1.87", extensionsCount: 42, theme: "Dracula", font: "JetBrains Mono", ligatures: true },
        { song: "Blinding Lights", artist: "The Weeknd", year: 2019, duration: "3:20", genre: "synth-pop", bpm: 171 },
        { planet: "Jupiter", type: "gas giant", moons: 95, diameterKm: 139820, dayLengthHours: 9.9, hasRings: true },
        { workout: "Deadlift", weightKg: 140, reps: 5, sets: 4, restSeconds: 180, pr: true },
        { currency: "EUR", amount: 1250.75, from: "USD", rate: 0.92, date: "2026-01-29", wallet: "Revolut" },
        { pet: "Cat", name: "Luna", breed: "Maine Coon", ageYears: 3, color: "tortoiseshell", spayed: true },
        { podcast: "The Portal", host: "Eric Weinstein", avgLengthMin: 145, episodes: 38, favorite: 17 },
        { camera: "Sony A7 IV", sensor: "full-frame", megapixels: 33, lens: "24-70mm f/2.8 GM", shutterCount: 12400 },
        { dream: { type: "lucid", remembered: true, flying: true, location: "floating islands", emotion: "euphoric" }, date: "2026-01-28" },
        { ramen: "Tonkotsu", broth: "pork bone", noodles: "medium", toppings: ["chashu", "egg", "nori", "bamboo"], spicyLevel: 6 },
        { password: { length: 19, hasSymbols: true, hasNumbers: true, memorable: false, manager: "Bitwarden" }, strength: "very strong" },
        { constellation: "Orion", visibleMonths: ["Nov", "Dec", "Jan", "Feb"], brightestStar: "Rigel", hasNebula: true, hunter: true },
        { keyboard: "Keychron Q1", layout: "75%", switches: "Gateron G Pro Red", keycaps: "PBT shine-through", rgb: true },
        { wine: "Barolo", vintage: 2019, producer: "Giacomo Conterno", region: "Piedmont", varietal: "Nebbiolo", priceEur: 185 },
        { habit: "Meditation", durationMin: 12, streakDays: 47, app: "Waking Up", position: "seated", goal: "daily" },
        { drone: "DJI Mini 4 Pro", weightG: 249, maxFlightTimeMin: 34, camera: "4K/100fps", obstacleAvoidance: true, registered: false },
        { sushi: { type: "uramaki", name: "Rainbow Roll", pieces: 8, price: 14.90, contains: ["salmon", "tuna", "avocado", "crab"] }, eatenToday: true },
        { browser: "Firefox", version: "134.0", tabsOpen: 28, memoryUsageMB: 1850, extensions: 9, defaultSearch: "DuckDuckGo" },
        { candle: "Scented", fragrance: "Sandalwood & Vanilla", burnTimeHours: 65, jar: "amber glass", wick: "cotton", litToday: true },
        { goal: "Learn Rust", progressPercent: 38, resources: ["The Rust Book", "Rustlings", "Zero to Production"], deadline: "2026-06-30", motivated: true }
    ];
    database.collection('data').insertMany(data, function (error, result) {
        console.log('documents added');
    });
}).catch((error) => {
    console.log('error = ' + error);
});
