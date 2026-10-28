# Locale folder structure

Place each property file in the matching locale folder. For example, the en_US property file belongs at `<YourExtension>/locale/en_US/messages.properties`. Developers may also define the default property file `<YourExtension>/locale/messages.properties`, which is used when the corresponding locale-specific file is absent.

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

Write locale files as one `<key>=<value>` entry per line. Finish the file with a newline after the last entry.

```properties
key1=value1
key2=value2
key3.value=value3
key4.innerHTML=value4
```

CEP exposes a JS interface called `initResourceBundle` for initializing locale resources. Call it while the extension is loading. CEP initializes the extension resource bundle with property values for the current application and UI locale. After initialization, developers can read localized strings from the resource bundle object.

```js
var csInterface = new CSInterface();
csInterface.initResourceBundle();
```
