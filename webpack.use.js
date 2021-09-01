const path = require('path');
const config = require('./webpack.config.js');
config.entry = path.join(path.resolve(__dirname, 'src'), 'use.js'),
config.mode = 'production';
config.output.filename = 'formio-contrib.use.min.js';
module.exports = config;
