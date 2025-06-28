const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    // ✅ Send response clearly
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log("Backend error:", err);
    return res.status(500).json({ message: 'Server error' }); // ✅ Use consistent message format
  }
});


// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials (email not found)' });
    }

    // Add .trim() and log
    console.log("DB password:", `"${user.email}"`);
    console.log("Entered password:", `"${password}"`);

    if (user.password.trim() !== password.trim()) {
      return res.status(400).json({ message: 'Invalid credentials (password mismatch)' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.log("Login error:", err);
    return res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
