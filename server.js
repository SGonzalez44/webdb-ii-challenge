// Basic imports
const express = require('express')
const server = express()
const helmet = require('helmet')
const carRoutes = require('./routes/carRoutes');

// Basic server usage
server.use(express.json())
server.use(helmet())

// Routes
server.use("/api/cars", carRoutes);

module.exports = server