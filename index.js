const express = require('express');
const app = express();
const port = 8081;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:1234@boiler-plate.z5vdylw.mongodb.net/?retryWrites=true&w=majority&appName=boiler-plate')
.then(() => {
    console.log('DB 연결됨');
})
.catch(err => {
    console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});