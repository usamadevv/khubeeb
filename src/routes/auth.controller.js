const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')
// const User = require('../models/User'); // Assuming you have a User model
const registerController =async (req,res,next)=>{
      const { email, password } = req.body;
    
      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
    
        // Save the user to the database
        const savedUser = await newUser.save();
    
        // Create a JWT token
        const token = jwt.sign({ id: savedUser._id, email: savedUser.email }, process.env.JWT_SECRET, {
          expiresIn: '1h', // Token expiration
        });
    
        // Respond with user data and token
        res.status(201).json({
          message: 'User registered successfully',
          user: {
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
          },
          token,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }

    

}



const loginController =(req,res,next)=>{


}



module.exports = {
    loginController,
    registerController
}