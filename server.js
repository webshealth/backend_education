const http = require('http');
const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// const todos = [
//   { id: 1, test: 'Todo Own' },
//   { id: 2, test: 'Todo Two' },
//   { id: 3, test: 'Todo Three' },
// ];

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   let body = [];
//   req
//     .on('data', (a) => {
//       body.push(a);
//     })
//     .on('end', () => {
//       body = Buffer.concat(body).toString();

//       let status = 404;

//       const response = {
//         success: false,
//         data: null,
//       };

//       if (method === 'GET' && url === '/todos') {
//         status = 200;
//         response.success = true;
//         response.data = null;
//       } else if (method === 'POST' && url === '/todos') {
//         const { id, text } = JSON.parse(body);
//         todos.push({ id, text });
//         status = 201;
//         response.success = true;
//         response.data = todos;
//       }
//       res.writeHead(status, {
//         'Content-Type': 'application/json',
//         'X-Powered-By': 'Node.js',
//       });
//       res.end(JSON.stringify(response));
//     });
// });

// const PORT = 5000;

// server.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
