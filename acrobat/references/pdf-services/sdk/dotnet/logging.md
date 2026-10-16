# Logging

For specifics on errors and exceptions, consult the API documentation.

To bridge across logging frameworks, the .NET SDK relies on [LibLog](https://github.com/damianh/LibLog). The sample projects wire up Log4net as the logging provider, with its settings supplied in log4net.config. Drop in the configuration for whichever provider you prefer and set up the appender you need to turn logging on.

**log4net.config file**

```html
<log4net>
  <root>
    <level value="INFO" />
    <appender-ref ref="console" />
  </root>
  <appender name="console" type="log4net.Appender.ConsoleAppender">
    <layout type="log4net.Layout.PatternLayout">
      <conversionPattern value="%date %level %logger - %message%newline" />
    </layout>
  </appender>
</log4net>
```
