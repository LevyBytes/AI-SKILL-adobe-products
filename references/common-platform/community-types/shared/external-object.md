# ExternalObject

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface ExternalObject {
    /**

    - Set true to emit status details to standard output (the
    - JavaScript Console in the ExtendScript Toolkit). Set false to disable
    - logging. The default value is false.
      */
      log: boolean
    /**

    - Alternate search paths for shared library files, stored as a single
    - string containing multiple path specifications separated by semicolons
    - (;). Paths may be absolute or relative to Folder.startup.
      */
      searchFolders: string
    /**

    - Library version as reported by ESGetVersion().
      */
      version: number
    /**

    - Checks whether a compiled C/C++ library is discoverable without loading it. When logging is enabled, the
    - searched paths are printed to the JavaScript Console in the ExtendScript Toolkit.
    - Returns true when the library is found; otherwise returns false.
    - @param spec Compiled-library file specification; path information may be included or omitted.
      */
      search(spec: string): boolean
    /**

    - Explicitly shuts down the ExternalObject dynamic library represented by this instance.
    - Forcing external-library shutdown can help when the host application's shutdown sequence would otherwise
    - terminate external libraries in the wrong order.
      */
      terminate(): undefined
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
