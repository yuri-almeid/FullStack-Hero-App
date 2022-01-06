const express = require('express');

const routes = express.Router();

routes.post('/', (request, response) => {
    
    const body = request.body;
    console.log(body);
    
    return response.json({
        event: 'S Omnin',
        student: 'Yuri'
    });
});

module.exports = routes;