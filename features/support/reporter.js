var reporter = require('cucumberjs-allure-reporter');
reporter.config(
    {
       // targetDir: "./../output"
    }
);
module.exports = reporter;