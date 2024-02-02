const path = require('path');

module.exports = {
  // other configuration options

  resolve: {
    alias: {
      'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js')
    }
  }
};