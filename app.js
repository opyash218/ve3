require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { swaggerUi, swaggerDocs } = require('./swagger'); 

const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Connect to MongoDB
const url="mongodb+srv://yashsatyajit38:NpUVBGtaVedxdZXC@cluster0.odtsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
