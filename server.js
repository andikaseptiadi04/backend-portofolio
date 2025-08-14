const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load file .env

const app = express();

app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Backend portfolio berjalan 🚀');
});

// Route form kontak
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Pesan dari ${name} (${email}): ${message}`);

  res.json({
    success: true,
    message: 'Pesan berhasil diterima'
  });
});

// Gunakan port dari .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
