const express = require('express');
const userControl = require('./controllers/userController');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));

app.get('/', async(req,res) => {
    res.json({
        'instructions': {
            'URLS': {
                'get': '/get',
                'add': '/add',
                'update': '/update/:id',
                'delete': '/delete/:id'
            }
        }
    });
});

app.get('/get', userControl.get);

app.get('/update/:id', userControl.updateUser);

app.get('/delete/:id', userControl.deleteUser);

app.post('/add/', userControl.createUser);

module.exports = app;