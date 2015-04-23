var path = require('path');

var appRoot = 'src/',
    i18nPath = 'i18n';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  i18nPath: i18nPath,
  i18n: appRoot + i18nPath + '/**/*.json',
  style: 'styles/**/*.css',
  output: './dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
