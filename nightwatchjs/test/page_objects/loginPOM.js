const loginCommands = {
    // validate login form
    validateForm : function () {
        return this.waitForElementVisible('body', 5000)
            .verify.visible('@username')
            .verify.visible('@pwd')
            .verify.value('@loginButton', 'Login')
    }, 
    login() {
        return this
            .click('@loginButton')
            .api.pause(1000);
    }
};

module.exports = {
    url : 'http://testing-ground.scraping.pro/login',
    commands : [loginCommands],
    elements: { //css selectors
        username : {
            selector : '#case_login input[name="usr"]'
        },
        pwd : {
            selector : '#case_login input[name="pwd"]'
        },
        loginButton : {
            selector : '[type=submit]'
        }
    }
};