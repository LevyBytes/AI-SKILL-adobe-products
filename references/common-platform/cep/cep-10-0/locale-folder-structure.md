# Locale folder structure

Place each property file in the folder for its locale. Put the en_US property file at `<YourExtension>/locale/en_US/messages.properties`, for instance. You can also define a default property file at `<YourExtension>/locale/messages.properties`; CEP uses that file when the matching locale file is absent.

```text
YourExtension/
     |-csxs/
     |-locale/                      <-- Directory for localized resources
         |-- messages.properties    <-- The one to fallback to if no localized resources is provided for a locale
         |-- en_US/
         |        |- messages.properties
         |-- zh_CN/
                  |- messages.properties
```

A locale file is made of `<key>=<value>` lines. Add a newline after the final property key/value.

```properties
key1=value1
key2=value2
key3.value=value3
key4.innerHTML=value4
```

CEP exposes the JS interface `initResourceBundle` for initializing locale resources. Call it while the extension loads. CEP initializes the extension's resource bundle with property values for the current application and UI locale, after which users can read localized strings from the resource bundle object.

```javascript
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```
