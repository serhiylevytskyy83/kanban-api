const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, 'PASV_REACT');

    req.user = decode;
    next();
  } catch (error) {
    res.json({
      message: 'Authentication Failed!',
    });
  }
};
module.exports = authorization;
