const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database ' + err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create profiles table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  url TEXT,
  about TEXT,
  bio TEXT,
  location TEXT,
  follower_count INTEGER,
  connection_count INTEGER
)`);

// POST API to save profile data
app.post('/api/profiles', (req, res) => {
  const { name, url, about, bio, location, follower_count, connection_count } = req.body;
  db.run(`INSERT INTO profiles (name, url, about, bio, location, follower_count, connection_count) VALUES (?, ?, ?, ?, ?, ?, ?)`, 
  [name, url, about, bio, location, follower_count, connection_count], 
  function(err) {
    if (err) {
      return res.status(400).json({ error: 'Error saving profile' });
    }
    res.status(201).json({ id: this.lastID });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
