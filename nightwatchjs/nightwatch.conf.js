const seleniumServer = require("selenium-server");
const chromeDriver = require("chromedriver");
const geckoDriver = require("geckodriver");

module.exports = {
    "src_folders": [
      "test/ui_tests"
    ],
    "page_objects_path": "test/page_objects",
    "output_folder": "./reports",
    "selenium": {
      "start_process": true,
      "server_path": seleniumServer.path,
      "host": "127.0.0.1",
      "port": 4444,
      "cli_args": {
        "webdriver.chrome.driver" : chromeDriver.path,
        "webdriver.gecko.driver" : geckoDriver.path,

      }
    },
    "test_settings": {
      'default': {
        screenshots : {
          enabled : true
        },
        globals : {
          waitForConditionTimeout : 15000
        }
      },

      'chrome': {
        extends: 'selenium',
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions : {
            w3c: false
          }
        }
      },
     'firefox': {
       extends: 'selenium',
       screenshots : {
         enabled : true
       },
       desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled : true,
          acceptSslCerts : true,
       }
      }
    }
  }