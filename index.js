const express = require('express');
const app = express();
app.post('/webhook', (req, res) => {
    console.log(req.body);
    // res.status(200).send('Webhook received');
  });  
  const server = app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  
