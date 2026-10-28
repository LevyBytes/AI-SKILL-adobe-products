# ArrayConstructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface ArrayConstructor {
    readonly prototype: Array<any>
    /**

    - Creates and returns a new array.
    - Any number of arguments can become array elements; a single argument instead becomes the length for an empty array. Because the single argument is treated as length, it cannot create a one-element array. The result is the new array.
    - @param arrayLength With no later arguments, initial length for the empty array; otherwise, the first element.
    - @param values When more than one argument is supplied, these arguments initialize the array.
      */
      new (arrayLength?: number): any[]
    new <T>(arrayLength: number): T[]
    new <T>(...values: T[]): T[]
    (arrayLength?: number): any[]
    <T>(arrayLength: number): T[]
    <T>(...values: T[]): T[]
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
