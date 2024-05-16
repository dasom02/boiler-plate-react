const express = require('express');
const app = express();
const port = 8081;

const config = require('./config/key');

const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// application/json
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
.then(() => {
    console.log('DB 연결됨');
})
.catch(err => {
    console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', (req, res) => {
    // 회원가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);
    user.save()
        .then((userInfo) => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            res.json({ success: false, err})
        });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});