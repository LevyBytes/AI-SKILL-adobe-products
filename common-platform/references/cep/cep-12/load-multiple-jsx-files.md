# Load Multiple JSX files

JSX files usually declare functions and objects meant to run inside the host application's ExtendScript environment.

An HTML extension can cause JSX files to load into the host application's ExtendScript environment in two ways.

- Add a `<ScriptPath>` node in `manifest.xml`; its value should be the
  relative path to the JSX file. For example:

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

- An HTML extension can call the CEP JavaScript API `evalScript` with `$.evalFile(jsxFile)` to load JSX files in the host application's ExtendScript environment. Before calling `evalScript`, developers may need additional script logic to calculate the path stored in `jsxFile`. One option is to read `$.fileName`; its value should point to the currently executing `JSX` file. Example:

```javascript
var extensionPath = $.fileName.split('/').slice(0, -1).join('/') + '/';  // The value of $.fileName should be ExtensionRootPath/jsx/example.jsx as mentioned above, while the value of extensionPath should be "ExtensionRootPath/jsx/"
$.evalFile(extensionPath + 'example1.jsx');
$.evalFile(extensionPath + 'example2.jsx');
$.evalFile(extensionPath + 'example3.jsx');
```

If `$.fileName` is read from the FIRST LOADED JSX file, it returns an incorrect value. In other words, running the preceding snippet inside `example.jsx` when that file is referenced from `manifest.xml` triggers the error. PLEASE AVOID using `$.fileName` in the FIRST LOADED JSX file; this may be an ExtendScript limitation. A practical workaround is to use it only from the second loaded JSX file or later files. For example:

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

Note: the scripts in this section execute in the host application's ExtendScript context, so `$` here is not the jquery global variable `$`.

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

Use a "namespace" when developers need to add a new variable, function, or object in Global Space or on the `$` object. When several JSX files declare the same name, whichever JSX file loads last supplies the active definition and replaces the earlier ones. For example, `$.ext` may be declared in a.jsx, b.jsx and c.jsx; if a.jsx defines `$.ext` as a function, b.jsx defines `$.ext` as an object, c.jsx defines `$.ext` as a string, and the load order is a.jsx->b.jsx->c.jsx, then `$.ext` ends up as a string instead of either earlier type. The same rule applies across separate extensions in the same point product: if a.jsx, b.jsx and c.jsx are owned by extension a,b,c separately, and the extensions load as extension a-> extension b-> extension c, `$.ext` still resolves to the string value supplied by c.jsx.
