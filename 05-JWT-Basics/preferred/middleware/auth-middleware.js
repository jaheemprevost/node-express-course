const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({message: 'unauthorized'});
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = await jwt.verify(token, process.env.SECRET);

    req.user = {name: decoded.username};
  
    next();
  } catch(error) {
    return res.status(500).json({message: 'Something went wrong, please try again later.'});
  }
};

module.exports = authenticationMiddleware;
