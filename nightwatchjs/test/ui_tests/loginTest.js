const config = require('../../nightwatch.conf.js');

module.exports = {
    before : function( browser ){
        console.log("Setting up ");
        browser.resizeWindow(2530, 1354);
    },
    'valid credential' : function( browser ){
    const page = browser.page.loginPOM(); //login page object model 

    page
        .navigate()
        .validateForm()
        .setValue('@username', 'admin')
        .setValue('@pwd', '12345')
        .login()
        .assert.containsText('#case_login .success', 'WELCOME :)');


    browser.assert.screenshotIdenticalToBaseline('body');  //image validation
          
    },   
    
    'invalid credential' : function( browser ){
    const page = browser.page.loginPOM(); 

    
    page
        .navigate()
        .validateForm()
        .setValue('@username', 'admin')
        .setValue('@pwd', 'wrongpass')
        .login()
        .assert.containsText('#case_login .error', 'ACCESS DENIED!');

  
    browser.assert.screenshotIdenticalToBaseline('body'); //image validation
    },
    
    after: function (browser) {
        console.log("Tests complete");  
        browser.end();
    }
}