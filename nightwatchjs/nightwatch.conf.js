const seleniumServer = require("selenium-server");
const chromeDriver = require("chromedriver");
const geckoDriver = require("geckodriver");

const path = require('path');

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
    const moduleName = nightwatchClient.currentTest.module,
        testName = nightwatchClient.currentTest.name

    return path.join(process.cwd(), basePath, moduleName, testName, fileName)
}
 
module.exports = {
    "globals": {
        "visual_regression_settings": {
            "generate_screenshot_path": generateScreenshotFilePath,
            "latest_screenshots_path": "reports/vrt/latest",
            "latest_suffix": "",
            "baseline_screenshots_path": "reports/vrt/baseline",
            "baseline_suffix": "",
            "diff_screenshots_path": "reports/vrt/diff",
            "diff_suffix": "",
            "threshold": 0,
            "prompt": false,
            "always_save_diff_screenshot": false
        }
    },
    "src_folders": [
      "test/ui_tests"
    ],
        custom_commands_path: [
        'node_modules/nightwatch-vrt/commands'
    ],
    custom_assertions_path: [
        'node_modules/nightwatch-vrt/assertions'
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
          enabled : true,
          path : './reports/screenshots'
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
            w3c: false,
          }
        }
      },
     'firefox': {
       extends: 'selenium',
       desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled : true,
          acceptSslCerts : true,
       }
      }
    }
}