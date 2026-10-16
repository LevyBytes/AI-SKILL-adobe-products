# Locale folder structure

Put every property file into the matching locale directory. For instance, the en_US property file belongs at `<YourExtension>/locale/en_US/messages.properties`. A default property file can be defined at `<YourExtension>/locale/messages.properties`; CEP uses it when a matching locale file is absent.

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

CEP supplies the JS interface `initResourceBundle` for initializing locale resources. Call it as the extension loads. CEP fills the extension's resource bundle with property values for the current application and UI locale; afterward, code can read localized strings from the returned object.

```javascript
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```
