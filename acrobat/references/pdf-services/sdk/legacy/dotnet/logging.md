# Logging

For error and exception details, consult the API docs.

To bridge the various logging frameworks, the .NET SDK relies on [LibLog](https://github.com/damianh/LibLog). The sample projects ship with Log4net as their logging provider, and log4net.config holds those logging configurations. Drop in the configuration for whichever provider you prefer and wire up the appropriate appender so logging is enabled.

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
