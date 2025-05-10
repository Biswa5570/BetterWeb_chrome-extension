const express = require('express');
const path = require('path');

const app = express();
const PORT = 3080;

// Route to serve BetterWeb_Lite.zip
app.get('/download/BetterWeb_Lite', (req, res) => {
  const filePath = path.join(__dirname, '../BetterWeb_Lite.zip');
  res.download(filePath, 'BetterWeb_Lite.zip', (err) => {
    if (err) {
      console.error('Error downloading BetterWeb_Lite.zip:', err);
      res.status(500).send('Error downloading the file.');
    }
  });
});

// Route to serve BetterWeb.zip
app.get('/download/BetterWeb', (req, res) => {
  const filePath = path.join(__dirname, '../BetterWeb.zip');
  res.download(filePath, 'BetterWeb.zip', (err) => {
    if (err) {
      console.error('Error downloading BetterWeb.zip:', err);
      res.status(500).send('Error downloading the file.');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});