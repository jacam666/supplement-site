const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a User schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create a User model using the User schema
const User = mongoose.model('User', userSchema);

// Sign up route
router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
