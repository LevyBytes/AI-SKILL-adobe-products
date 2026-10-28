# Reflection

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Describes a class.

```typescript
interface Reflection {
    /**
    - Extended description text.
      */
      readonly description: string
    /**

    - Brief description text.
      */
      readonly help: string
    /**

    - Array containing method descriptions.
      */
      readonly methods: ReflectionInfo[]
    /**

    - Class name.
      */
      readonly name: string
    /**

    - Array containing property descriptions.
      */
      readonly properties: ReflectionInfo[]
    /**

    - Example source code, when available.
      */
      readonly sampleCode: string
    /**

    - File containing example source code. May be null.
      */
      readonly sampleFile: File
    /**

    - Array containing class method descriptions.
      */
      readonly staticMethods: ReflectionInfo[]
    /**

    - Array containing class property descriptions.
      */
      readonly staticProperties: ReflectionInfo[]
    /**

    - Locates an element description by name.
    - @param name Name of the element to locate.
      */
      find(name: string): ReflectionInfo
    /**

    - Serializes this class metadata to OMV-format XML.
      */
      toXML(): XML
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
