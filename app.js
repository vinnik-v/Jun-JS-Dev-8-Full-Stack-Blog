const express = require('express');
const mongoose = require('mongoose');
const path = require ('path');
const keys = require('./keys');
const postRouter = require('./routes/post');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000; //проверяем существует ли системная переменная порта, если ее нет задаем вручную
const clientPath = path.join(__dirname, 'client');

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.')) //промис если соединение прошло успешно
    .catch(err => console.error(err)) //если не успешно

const app = express();
app.use(bodyParser.json());
app.use('/api/post', postRouter);
app.use(express.static(clientPath));

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});
