const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser

app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejection

process.on(' ', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

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
