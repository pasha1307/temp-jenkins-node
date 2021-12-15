const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node application is here')
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app is at http://%s:%s', host, port)
})