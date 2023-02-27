const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password) {
    return res.status(400).json({message: 'Please enter a valid email or password.'});
  }
  
  try {
    const token = await jwt.sign(
      {username}, 
      process.env.SECRET, 
      {expiresIn: process.env.LIFE_TIME}
    );
    
    res.status(200).json({token});
  } catch(error) {
    res.status(500).json({message: 'Something went wrong, please try again later.'});
  }
};

const hello = async (req, res) => {
  const username = req.user.name;
  res.status(200).json({message: `Welcome back, ${username}`});
};

module.exports = {
  logon,
  hello
};
