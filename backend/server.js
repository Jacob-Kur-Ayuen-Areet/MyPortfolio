require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
  port: parseInt(process.env.DB_PORT || '3307'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test DB connection on startup
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database');
    connection.release();
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err.message);
    process.exit(1); // Exit app if DB is down
  }
})();

// Utility: Safe JSON parse
const safeJsonParse = (str) => {
  try {
    return JSON.parse(str);
  } catch {
    return [];
  }
};

// Routes
app.get('/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    const projects = rows.map(p => ({
      ...p,
      technologies: safeJsonParse(p.technologies),
    }));
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
});

app.get('/services', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM services');
    const services = rows.map(s => ({
      ...s,
      features: safeJsonParse(s.features),
    }));
    res.json(services);
  } catch (err) {
    console.error('Error fetching services:', err.message);
    res.status(500).json({ error: 'Failed to fetch services.' });
  }
});

app.post('/services', async (req, res) => {
  const { title, description, features, price } = req.body;

  if (!title || !description || !features || !price) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await pool.query(
      'INSERT INTO services (title, description, features, price) VALUES (?, ?, ?, ?)',
      [title, description, JSON.stringify(features), price]
    );
    res.json({ message: 'Service saved successfully.' });
  } catch (err) {
    console.error('Error inserting service:', err.message);
    res.status(500).json({ error: 'Failed to save service.' });
  }
});

app.get('/skills', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM skills');
    const skills = rows.map(s => ({
      ...s,
      skills: safeJsonParse(s.skills),
    }));
    res.json(skills);
  } catch (err) {
    console.error('Error fetching skills:', err.message);
    res.status(500).json({ error: 'Failed to fetch skills.' });
  }
});

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await pool.query(
      'INSERT INTO contacts (firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, email, subject, message]
    );
    res.json({ message: 'Contact message received.' });
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err);
    process.exit(1);
  }
});

// ✅ Export instead of listen()
module.exports = app;
