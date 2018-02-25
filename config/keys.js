//Check which set of keys to return
if (process.env.NODE_ENV === 'production') {
  // Return production set of keys
  module.exports = require('./prod');
} else {
  // Return development set of keys
  module.exports = require('./dev');
}
