const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Create routes for black and white versions
app.get('/black.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'black.html'));
});

app.get('/white.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'white.html'));
});

// Redirect root to the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export the app for testing or other usages
module.exports = app;
