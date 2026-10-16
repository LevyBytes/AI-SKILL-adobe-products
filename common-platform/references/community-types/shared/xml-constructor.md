# XMLConstructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface XMLConstructor {
    readonly prototype: XML
    /**

    - Parses text into XML and throws when the XML is invalid.
    - @param text Source text.
      */
      new (text: string): XML
    (text: string): XML
    /**

    - Controls whether XML comments are parsed (false) or skipped (true).
      */
      ignoreComments: boolean
    /**

    - Controls whether XML processing instructions are parsed (false) or skipped (true).
      */
      ignoreProcessingInstructions: boolean
    /**

    - Controls whether whitespace is parsed (false) or skipped (true).
      */
      ignoreWhitespace: boolean
    /**

    - Number of spaces used for indentation in pretty-printed XML.
      */
      prettyIndent: number
    /**

    - True causes XML to be pretty-printed during string conversion.
      */
      prettyPrinting: boolean
    /**

    - Returns an object with default XML parsing and printing settings.
      */
      defaultSettings(): object
    /**

    - Applies XML parsing and printing settings from an object returned by settings().
    - @param obj Object containing the settings to apply.
      */
      setSettings(obj: object): void
    /**

    - Returns an object with the current XML parsing and printing settings.
      */
      settings(): object
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
