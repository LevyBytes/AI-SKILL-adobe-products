# Logging

The API docs spell out error and exception details.

For its logging, the SDK turns to the [log4js API](https://www.npmjs.com/package/log4js). As it runs, the SDK looks for config/pdfservices-sdk-log4js-config.json in the working directory and loads the logging properties from that file. When no configuration file is supplied, the default behavior writes INFO-level output to the console. Tune the logging settings however suits you.

**log4js.properties file**

```json
{
  "appenders": {
    "consoleAppender": {
      "_comment": "A sample console appender configuration, Clients can change as per their logging implementation",
      "type": "console",
      "layout": {
        "type": "pattern",
        "pattern": "%d:[%p]: %m"
      }
    }
  },
  "categories": {
    "default": {
      "appenders": ["consoleAppender"],
      "_comment": "Change the logging levels as per need. info is recommended for pdfservices-node-sdk",
      "level": "info"
    }
  }
}
```
