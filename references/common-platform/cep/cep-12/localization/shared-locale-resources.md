# Shared locale resources

CEP 6.0 introduced a way for several locales to share one set of localization resources (`messages.properties`).

For example, to make `es_MX` use the `messages.properties` from `es_ES`, place a file named `fallback.properties` in the `es_MX` folder as shown below.

```text
YourExtension/
     |-csxs/
     |-locale/
         |-- messages.properties
         |-- es_ES/
         |        |- messages.properties
         |-- es_MX/
                  |- fallback.properties
```

Inside `fallback.properties`, specify the locale whose localized resources es_MX should use in this format:

```properties
fallback=es_ES
```

Side Notes:

- When `messages.properties` and `fallback.properties` both exist, `fallback.properties` takes precedence.
- If `fallback.properties` is malformed or names a fallback locale that does not exist, CEP uses the messages.properties file in that same directory.
