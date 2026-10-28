# Logging

Error and exception specifics are covered in the API docs.

For logging, the SDK leans on the [log4js API](https://www.npmjs.com/package/log4js). As it runs, the SDK looks in the working directory for config/pdfservices-sdk-log4js-config.json and pulls its logging properties from that file. Absent any configuration file, the default behavior writes INFO-level output to the console. Adjust the logging settings to suit your needs.

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
