# Logging

Refer to the API docs for error and exception details.

For logging, the .NET SDK relies on [LibLog](https://github.com/damianh/LibLog) to bridge across the various logging frameworks. The sample projects wire up Log4net as the provider, with its settings supplied in log4net.config. To turn on logging, drop in the configuration for whichever provider you favor and set up the appender it needs.

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
