# Logging

Error and exception specifics are documented in the API docs.

- To handle logging, pair the [slf4j API](https://www.slf4j.org/) with a log4js-slf4j binding.
- You will find the logging configuration in src/main/resources/log4js.properties.
- Should you need different bindings, declare them in pom.xml.

**log4js.properties file**

```properties
name=PropertiesConfig
appenders = console

## A sample console appender configuration, Clients can change as per their logging implementation

rootLogger.level = WARN
rootLogger.appenderRefs = stdout
rootLogger.appenderRef.stdout.ref = STDOUT

appender.console.type = Console
appender.console.name = STDOUT
appender.console.layout.type = PatternLayout
appender.console.layout.pattern = [%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %c{1} - %msg%n

loggers = pdfservicessdk,validator,apache

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk

logger.pdfservicessdk.name = com.adobe.pdfservices.operation
logger.pdfservicessdk.level = INFO
logger.pdfservicessdk.additivity = false
logger.pdfservicessdk.appenderRef.console.ref = STDOUT

logger.validator.name=org.hibernate
logger.validator.level=WARN

logger.apache.name=org.apache
logger.apache.level=WARN
```

[Figure: Samples directory structure Java](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/samplefilesjava.png)
