const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./konyvek.db');

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS konyvek");
    db.run(`CREATE TABLE konyvek (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cim TEXT,
        leiras TEXT,
        borito_url TEXT,
        letoltes_url TEXT
    )`);

    
    // Egri Csillagok
    db.run("INSERT INTO konyvek (cim, leiras, borito_url, letoltes_url) VALUES (?, ?, ?, ?)", 
        ["Egri Csillagok", "Történelmi regény a török időkről.", "https://i.pinimg.com/736x/3c/d5/bb/3cd5bb104ac3d6353c43922beb47db9c.jpg", "https://drive.google.com/file/d/11KS9QXhTTq-SjOVcBvDxhQeSIsWOrk4O/view?usp=drive_link"]);

    // Pál utcai fiúk
    db.run("INSERT INTO konyvek (cim, leiras, borito_url, letoltes_url) VALUES (?, ?, ?, ?)", 
        ["Pál utcai fiúk", "Molnár Ferenc világhírű regénye a grundról.", "https://lira.erbacdn.net/upload/M_28/rek1/923/2960923.jpg", "https://drive.google.com/file/d/1HtAhoM3feCdxyzRpVsuJB2lljV1aOW85/view?usp=drive_link"]);

    // A kis herceg
    db.run("INSERT INTO konyvek (cim, leiras, borito_url, letoltes_url) VALUES (?, ?, ?, ?)", 
        ["A kis herceg", "Antoine de Saint-Exupéry meséje a szeretetről.", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8XMdHetUunUqhFL8pYxx1hAEAJCRlQrK_hy5f_i5hXTxxe_vKmQNfl8aqJY6nwo2fJCrzfdKRPUjY4V-dwr9afdjvSYyLsBPOb09ngDw&usqp=CAc", "https://drive.google.com/file/d/1KPbUbksyCMgA0GExdewT2Nqondih5_HC/view?usp=drive_link"]);

    // Harry Potter
    db.run("INSERT INTO konyvek (cim, leiras, borito_url, letoltes_url) VALUES (?, ?, ?, ?)", 
        ["Harry Potter", "J.K. Rowling regénye a varázsvilág titkairól.", "https://cdn.fanbase.hu/images/products/harry-potter-art-print-a-bolcsek-kove-konyvborito-fali-dekoracio-limitalt-kiadas-42-x-30-cm-4965.webp", "https://drive.google.com/file/d/1qU3sWO9OsitN0n5GHOpJ9t60jQXLxS1i/view?usp=drive_link"]);

    console.log("Adatbázis sikeresen frissítve 4 könyvvel!");
    //Tüskevár
    db.run("INSERT INTO konyvek (cim, leiras, borito_url, letoltes_url) VALUES (?, ?, ?, ?)", 
    [
        "Tüskevár", 
        "Fekete István regénye a nyári szünetről, a természetről és a felnőtté válásról.", 
        "https://alexandra.hu/content/2021/11/Product/9789634867777.jpg", 
        "https://drive.google.com/file/d/1dl3iLVUbu6Vcej-EzWgyOyxlb_Kv-dsm/view?usp=drive_link"
    ], (err) => {
        if (err) console.error("Hiba a Tüskevár hozzáadásakor:", err.message);
    }
);
});

db.close();