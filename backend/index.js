const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'S Omnin',
        student: 'Yuri'
    });
});

app.listen(3333);
