import express from 'express';

const app = express();

app.get('/', (req, res) => {
  if (req.query.name) {
    res.send(`Hello, ${req.query.name}!`);
  } else {
    res.send('Hello World!');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});