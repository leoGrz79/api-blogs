const isValidDisplayName = (displayName) => (!displayName || displayName.length < 8 
  ? '"displayName" length must be at least 8 characters long' 
  : null);

const isValidEmail = (email) => (!email || !/^\S+@\S+\.\S+$/.test(email)
  ? '"email" must be a valid email'
  : null);

const isValidPassword = (password) => (!password || password.length < 6
  ? '"password" length must be at least 6 characters long'
  : null);

const isValidUserInfo = (userInfo) => isValidDisplayName(userInfo.displayName)
    || isValidEmail(userInfo.email)
    || isValidPassword(userInfo.password);

module.exports = {
  isValidUserInfo,
};