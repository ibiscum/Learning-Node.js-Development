module.exports.saveUser = (user) => {
  // Do not log sensitive data like password.
  console.log('Saving the user', {email: user.email});
}
