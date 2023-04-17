const express = require('express');
const mongoose = require('mongoose');
const signUpRouter = require('./signupForm');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://jamie666cameron:JgPeQNDLPzdyHget@cluster0.vuyni2b.mongodb.net/fitnessTracker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());

app.use('./signup', signUpRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
