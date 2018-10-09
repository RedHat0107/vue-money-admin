const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
// 引入user
const users = require('./routers/api/users');
const profiles = require('./routers/api/profiles');

// DB config
const db = require('./config/keys').mongodbURL;

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 连接数据库
mongoose.connect(db).then(() => {
    console.log('数据库连接成功');
}).catch((err) => {
    console.log(err);
    })

// passport初始化
app.use(passport.initialize());

// 配置passport
require('./config/passport')(passport);

// 使用router,
app.use('/api/users', users);
app.use('/api/profiles', profiles);

var port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('server is connected ' + port)
})