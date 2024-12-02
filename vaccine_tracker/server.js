const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vaccination_tracker'
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM Users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
