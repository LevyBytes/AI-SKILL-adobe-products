# Load Multiple JSX files

JSX files normally define functions and objects meant to run inside the host application's ExtendScript environment.

An HTML extension has two ways to cause JSX files to load into the host application's ExtendScript environment.

- Put a `<ScriptPath>` node in `manifest.xml`; its value is the JSX file's relative path. For example:

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

- Call CEP JavaScript API `evalScript` from the HTML extension with `$.evalFile(jsxFile)` as the script. Extra script code may be needed to determine `jsxFile` before `evalScript`; one option is `$.fileName`, which provides the path of the currently executing `JSX` file. Example:

```javascript
var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';  // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + 'example1.jsx');
$.evalFile(extensionPath + 'example2.jsx');
$.evalFile(extensionPath + 'example3.jsx');
```

When `$.fileName` is used in the FIRST LOADED JSX file, however, the returned value is wrong. If the snippet above runs in `example.jsx` referenced from `manifest.xml`, it produces an error. Avoid `$.fileName` in the FIRST LOADED JSX file; this appears to be an ExtendScript limitation. Use it instead from the second loaded JSX file or any later one. For example:

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

Note: Because this section's script is intended for the host application's ExtendScript environment, `$` here is not the same as jquery global variable `$`.

Use a "namespace" when defining a new variable/function/object in Global Space or on the `$` object. If multiple JSX files define the same name, the last loaded definition wins and earlier ones are replaced. One example uses `$.ext` across a.jsx, b.jsx and c.jsx: a.jsx sets it as a function, b.jsx changes it to an object, c.jsx changes it to a string, and the load order is a.jsx->b.jsx->c.jsx. After loading finishes, `$.ext` resolves to a string, not an object or a function. The same behavior can cross extension boundaries inside one point product. In a separate scenario, extension a, extension b, and extension c each provide a.jsx, b.jsx, and c.jsx respectively; with load order extension a-> extension b-> extension c, the final `$.ext` value remains the string.
