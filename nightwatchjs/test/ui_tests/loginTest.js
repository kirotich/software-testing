const config = require('../../nightwatch.conf.js');

module.exports = {
    before : function( browser ){
        console.log("Setting up ");
    },
    'valid credential' : function( browser ){
    const page = browser.page.loginPOM(); //login page object model 
    const meta = browser.options.desiredCapabilities.browserName; //get browser name
    page
        .navigate()
        .validateForm()
        .setValue('@username', 'admin')
        .setValue('@pwd', '12345')
        .login()
        .assert.containsText('#case_login .success', 'WELCOME :)')
        .saveScreenshot(`./reports/${meta}success.png`)
    },
    
    'invalid credential' : function( browser ){
    const page = browser.page.loginPOM(); 
    const meta = browser.options.desiredCapabilities.browserName;
    
    page
        .navigate()
        .validateForm()
        .setValue('@username', 'admin')
        .setValue('@pwd', 'wrongpass')
        .login()
        .assert.containsText('#case_login .error', 'ACCESS DENIED!')
        .saveScreenshot(`./reports/${meta}error.png`)
  },
    after: function (browser) {
        console.log("Tests complete");  
        browser.end();
    }
}