# Logging

Refer to the API docs for error and exception details.

Logging in the SDK runs on the [log4js API](https://www.npmjs.com/package/log4js). At runtime the SDK looks for config/pdfservices-sdk-log4js-config.json in the current working directory and pulls its logging properties from that file. Absent such a file, the default behavior writes INFO-level messages to the console. Adjust the logging configuration to suit your needs.

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
