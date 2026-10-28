# ReflectionInfo

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Describes a method, property, or method parameter.

```typescript
interface ReflectionInfo {
    /**
    - Descriptions for method or function arguments.
      */
      readonly arguments: ReflectionInfo[]
    /**

    - Data type value.
      */
      readonly dataType: string
    /**

    - Default value.
      */
      readonly defaultValue: any
    /**

    - Extended description text.
      */
      readonly description: string
    /**

    - Brief description text.
      */
      readonly help: string
    /**

    - True when the class represents a collection class.
      */
      readonly isCollection: boolean
    /**

    - Maximum allowed value.
      */
      readonly max: number
    /**

    - Minimum allowed value.
      */
      readonly min: number
    /**

    - Element name.
      */
      readonly name: string
    /**

    - Class object that owns this element.
      */
      readonly parent: Reflection
    /**

    - Example source code, when available.
      */
      readonly sampleCode: string
    /**

    - File containing example source code. May be null.
      */
      readonly sampleFile: File
    /**

    - Element type value.
    - Allowed values: unknown, readonly, readwrite, createonly, method, or parameter.
      */
      readonly type: string
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
