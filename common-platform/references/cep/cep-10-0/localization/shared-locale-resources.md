# Shared locale resources

CEP 6.0 added a mechanism that lets multiple locales share the same localization resources (`messages.properties`).

For a case where `es_MX` should reuse the `messages.properties` file for `es_ES`, place a file named `fallback.properties` under the `es_MX` folder as shown below.

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

Inside `fallback.properties`, name the locale whose localized resources es_MX should use, using this format:

```properties
fallback=es_ES
```

Side Notes:

- When both `messages.properties` and `fallback.properties` are present together, `fallback.properties` takes precedence.
- If `fallback.properties` is malformed or points at a fallback locale that does not exist, CEP uses the messages.properties file in the same directory.
