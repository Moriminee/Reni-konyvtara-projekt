const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./konyvek.db');

app.use(express.static('frontend'));

app.get('/api/konyvek', (req, res) => {
    db.all("SELECT * FROM konyvek", [], (err, rows) => {
        if (err) {
            console.error("Backend hiba az SQL lekérdezésnél:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(rows || []);
    });
});

app.listen(3000, () => console.log('Szerver fut: http://localhost:3000'));