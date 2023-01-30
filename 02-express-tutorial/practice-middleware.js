const consoleLog = (req, res, next) => {
  console.log('Server has been hit.');
  next();
};

module.exports = consoleLog;
