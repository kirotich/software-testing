const config = require('../../nightwatch.conf.js');

module.exports = {
    before : function( browser ){
        console.log("Setting up ");
    },

    after: function (browser) {
        console.log("Tests complete");  
        browser.end();
    }
}