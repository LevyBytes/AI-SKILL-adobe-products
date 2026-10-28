# Load Multiple JSX files

JSX files usually define functions and objects that are meant to run inside the host application's ExtendScript environment.

An HTML extension can trigger JSX files to load in the host application's ExtendScript through either of these approaches:

- In `manifest.xml`, define a `<ScriptPath>` node whose value is the JSX file's relative path. For example:

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<Extension Id="com.adobe.CEPHTMLTEST.Panel1">
<DispatchInfo>
       <Resources>
           <MainPath>./html/index.html</MainPath>
            <CEFCommandLine>
                <Parameter>--enable-speech-input</Parameter>
          		<Parameter>--enable-media-stream</Parameter>
            </CEFCommandLine>
	            <ScriptPath>./jsx/example.jsx</ScriptPath> <!-- ExtensionRootPath/jsx/example.jsx -->
	        </Resources>
		<!-- Other manifest settings omitted. -->
	</DispatchInfo>
</Extension>
```

- The HTML extension calls the CEP JavaScript API `evalScript` with the script `$.evalFile(jsxFile)` to make the host application's ExtendScript load JSX files. Developers may need additional script code to determine the `jsxFile` path before calling `evalScript`. For example, they may use `$.fileName` to identify the path; `$.fileName` should hold the path of the currently executed `JSX` file. Example:

```javascript
var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';  // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + 'example1.jsx');
$.evalFile(extensionPath + 'example2.jsx');
$.evalFile(extensionPath + 'example3.jsx');
```

If `$.fileName` is referenced in the FIRST LOADED JSX file, however, its value is not correct. In other words, running the snippet above inside `example.jsx`, when that file is referenced from `manifest.xml`, causes an error. Avoid using `$.fileName` in the FIRST LOADED JSX file; this may be an ExtendScript limitation. The workaround is to reference it from the second and subsequent loaded JSX files. For example:

In the CEP JavaScript context, supply the ExtendScript expression `anotherJSXFile` and the callback:

```javascript
// After finishing loading the jsx file refered in the manifest.xml, please use evalScript of CSInterface to load other jsx files.
// "anotherJSXFile" is not the first loaded jsx file, so the value of "$.fileName" in it's stage is correct.
(new CSInterface()).evalScript('$.evalFile(anotherJSXFile)', callback);
```

Alternatively, inside the host JSX file, supply `hardCodeJSXFile`:

```javascript
$.evalFile(hardCodeJSXFile);
```

The host-file example preserves the documented `$.fileName` timing requirement.

Note: The script in this section is intended for execution in the host application's ExtendScript environment, so `$` here is not the jQuery global variable `$`.

Use a "namespace" when developers define a new variable, function, or object in Global Space or on the `$` object. If multiple JSX files define the same name, whichever file loads last supplies the active definition and replaces earlier ones. For example, if a.jsx, b.jsx, and c.jsx all define `$.ext`, with a.jsx making it a function, b.jsx making it an object, and c.jsx making it a string, and the load order is a.jsx->b.jsx->c.jsx, then `$.ext` ends as a string, not as an object or function. The same rule crosses extension boundaries inside one point product. If a.jsx, b.jsx, and c.jsx belong separately to extensions a, b, and c, and the extension load order is extension a-> extension b-> extension c, `$.ext` still ends as a string rather than a function or object.
