const express = require('express');
const app = express();

const _port = 8081;

app.get('/', (req, res) => {
    res.send('Hello World');
});

let server = app.listen(_port, () => {
    console.log("应用实例，在%s端口", _port)
});