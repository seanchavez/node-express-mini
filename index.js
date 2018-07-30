const express = require('express');
const data = require('./data/db');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gangee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    }
  ];

  res.status(200).json(hobbits);
});

server.get('/api/users', (req,res) => {
  data.find()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500)
      .json({ error: "The users information could not be retrieved." })
    );
});

server.listen(8000, () => console.log('API running on port 8000'));