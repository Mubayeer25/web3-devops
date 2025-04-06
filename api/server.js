const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Web3 API Running');
});
app.listen(3000, () => console.log('API ready on port 3000'));
