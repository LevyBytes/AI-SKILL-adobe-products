# ExternalObject object — ExternalObject constructor

obj = new ExternalObject ("lib:" + filespec, arg1, ...argn);

| Parameter | Description |
| --- | --- |
| filespec | The case-sensitive "lib:" specifier marks the target as a dynamic library. Attach it to the shared library base name, with or without an extension. When needed, ExtendScript supplies an operating-system extension: - .dll in Windows - .bundle or .framework in Mac OS (only Mach-O bundles are supported) - .so in UNIX (except for HP/UX, where the extension is .sl) - The name of the library is case sensitive in UNIX. |
| arg1...argn | Optional. Arguments supplied to the library's initialization routine; any count is allowed. |

For example:

```javascript
var mylib = new ExternalObject( "lib:myLibrary" );
```
