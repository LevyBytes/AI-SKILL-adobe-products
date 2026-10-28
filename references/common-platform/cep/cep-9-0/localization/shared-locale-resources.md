# Shared locale resources

Starting with CEP 6.0, multiple locales can reuse the same `messages.properties` localization resources.

For example, if `es_MX` should use the `messages.properties` file from `es_ES`, place a file named `fallback.properties` in the `es_MX` folder as shown here.

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

Inside `fallback.properties`, identify the locale whose localized resources es_MX should reuse with this format:

```properties
fallback=es_ES
```

Side Notes:

- When both `messages.properties` and `fallback.properties` are present together, `fallback.properties` wins.
- If `fallback.properties` is malformed, or if it names a fallback locale that does not exist, CEP uses the `messages.properties` file from that same directory.
