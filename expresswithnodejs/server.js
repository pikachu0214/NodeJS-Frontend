//Variable referencing to Express Server
const express = require('express');

//Variable to call express
const app = express();

//Ajax call for endpoint to read presidents 
app.get('/api/presidents', (req, res) => {
    const presidents = [
        {
            id: 1, firstName: 'Adam', lastName: 'Smith',
        }, {
            id: 2, firstName: 'Thomas', lastName: 'Jefferson',
        }, {
            id: 3, firstName: 'Abraham', lastName: 'Lincoln',
        }, {
            id: 4, firstName: 'George', lastName: 'Washington'
        },
    ];
    res.json(presidents);
});

//Variable to reference for port when opening on website
const port = 5000;

//***npm run serverexpress from scripts: { scriptexpress: nodemon server.js (require nodemon to work)} to Render on port 5000
app.listen(port, () => console.log(`server started on port: ${port}`));