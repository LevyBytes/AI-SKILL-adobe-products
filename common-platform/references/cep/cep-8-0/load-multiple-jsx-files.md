# Load Multiple JSX files

JSX files usually define functions and objects that are meant to execute inside the host application's ExtendScript environment.

An HTML extension can cause JSX files to load into the host application's ExtendScript environment in two ways.

- Define a `<ScriptPath>` node in `manifest.xml`; set that node's value to the relative path of the JSX file. Example:

```xml
Extension Id="com.adobe.CEPHTMLTEST.Panel1">
		...........................
```

- The HTML extension can call the CEP JavaScript API `evalScript` with `$.evalFile(jsxFile)` to make JSX files load into the host application's ExtendScript environment. Developers may need extra script code before the `evalScript` call to determine the `jsxFile` path. For example, `$.fileName` can be used to locate the path, and `$.fileName` should contain the currently executing `JSX` file path. Example:

```js
var extensionPath = $.fileName.split("/").slice(0, -1).join("/") + "/"; // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + "example1.jsx");
$.evalFile(extensionPath + "example2.jsx");
$.evalFile(extensionPath + "example3.jsx");
```

When `$.fileName` is referenced from the FIRST LOADED JSX file, however, the value is wrong. In other words, running the snippet above inside `example.jsx` when that file is referenced by `manifest.xml` produces an error. For that reason, AVOID using `$.fileName` in the FIRST LOADED JSX file; this may be an ExtendScript limitation. The workaround is to reference it in the second and later loaded JSX files. Example:

```js
// After finishing loading the jsx file refered in the manifest.xml, please use evalScript of CSInterface to load other jsx files.
// "anotherJSXFile" is not the first loaded jsx file, so the value of "$.fileName" in it's stage is correct.
CSInterface.evalScript("$.evalFile(anotherJSXFile)", callback);

// Or in the first loaded jsx file, load another jsx file, and the value of "$.fileName" is correct in this file.
// Given the code is running this example.jsx which is referred in the manifest.xml.
// In the stage of "hardCodeJSXFile", the value of "$.fileName" is correct too.
$.evalFile(hardCodeJSXFile);
```

Note: In this section, the script is intended for the host application's ExtendScript environment, so `$` here is not the same as the jquery global variable `$`.

Use "namespace" when adding a new variable, function, or object in Global Space or on the `$` object. If multiple JSX files reuse the same name, the last loaded file supplies the active definition and replaces earlier ones. For example, suppose `$.ext` appears in a.jsx, b.jsx and c.jsx; a.jsx makes `$.ext` a function, b.jsx makes `$.ext` an object, and c.jsx makes `$.ext` a string. With load order a.jsx->b.jsx->c.jsx, the final `$.ext` value is the string from c.jsx, not the object or function from the earlier files. The behavior also spans multiple extensions in one point product. If a.jsx, b.jsx and c.jsx belong separately to extension a,b,c and the load order is extension a-> extension b-> extension c, `$.ext` still ends as the string value instead of the earlier function or object.
