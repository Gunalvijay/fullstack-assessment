const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: 'User registered', user });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
