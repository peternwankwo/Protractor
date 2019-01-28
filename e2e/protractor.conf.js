// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: './src/seleniumDriver/selenium-server-standalone-2.53.1.jar',
  seleniumPort: 4444,
  seleniumArgs: ['-browserTimeout=60'],
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.js'
  ],
  capabilities: {
    //'browserName': 'chrome',
	//chromeOptions: {
		//args: [ "--headless", "--disable-gpu"]
	//}
	'browserName': 'PhantomJs',
	'phantomjs.binary.path': require('phantomjs').path,
	'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false']
	
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};