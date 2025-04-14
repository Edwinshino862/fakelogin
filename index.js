const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
  res.send('Login successfully submitted!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
