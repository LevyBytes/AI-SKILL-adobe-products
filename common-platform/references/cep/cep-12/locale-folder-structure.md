# Locale folder structure

Store each property file under the folder for its locale. For en_US, use `<YourExtension>/locale/en_US/messages.properties`. Users can also define the default property file (`<YourExtension>/locale/messages.properties`), which CEP uses when no locale-specific file exists.

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

A locale file uses multiple `<key>=<value>` lines. Add a newline after the final property key/value.

```properties
key1=value1
key2=value2
key3.value=value3
key4.innerHTML=value4
```

The JS interface `initResourceBundle` initializes localized resources. Call it while the extension loads. CEP fills the extension resource bundle with property values for the current application and UI locale. After initialization, users read localized strings from that resource-bundle object.

```javascript
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```
