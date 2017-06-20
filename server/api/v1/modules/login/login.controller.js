
const passport = require('passport');
const loginservice = require('./login.service');

const redirectGoogle = (req, res, next) => {
  // this function called by google callback to verify code
  const promise = new Promise((resolve, reject) => {
    passport.authenticate('google', (err, token) => {
      // console.log('token', token);
      if (err) {
        reject(err);
      }
      resolve(token);
    })(req, res, next);
  });
  return promise;
};

function getUser(userinfo, done) {
  loginservice.updateUser(userinfo, done);
}

module.exports = {
  getUser,
  redirectGoogle,
};
