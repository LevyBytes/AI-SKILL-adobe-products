# Logging

For specifics on errors and exceptions, consult the API documentation.

Logging in the SDK runs on the [log4js API](https://www.npmjs.com/package/log4js). As it executes, the SDK hunts for config/pdfservices-sdk-log4js-config.json inside the working directory and loads its logging properties from that file. Absent such a file, the default behaviour writes INFO messages to the console. Tune the logging however suits you.

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
