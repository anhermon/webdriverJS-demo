var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({
        'browserName': 'firefox',
    }).build();

driver.get('http://www.google.com');
driver.quit();