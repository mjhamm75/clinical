// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/scripts/*.js',
      'app/scripts/filters/encounter.filter.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js',
      'app/views/**/*.html',
      'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'test/mocks/encounters',
      // fixtures
      {pattern: 'test/mocks/*.json', watched: true, served: true, included: false}
    ],

    preprocessors: {
      'app/views/*.html': 'ng-html2js'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 12121,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
