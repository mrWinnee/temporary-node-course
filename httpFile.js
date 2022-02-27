const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<div style="color:red">home page</div>');
    } else if (req.url === '/about') {
        res.end('<div style="color:red">about page</div>');
    } else {
        res.end(`
        <div style="color:red">we can't find what you are looking for</div>
        <a href='/'>back home</a>
        `);
    }
});
server.listen(5000);