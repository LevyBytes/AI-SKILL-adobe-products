# XMPMetaInstance

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface XMPMetaInstance {
    doesPropertyExist(namespace: string, value: string): boolean
    getProperty(namespace: string, property: string): XMPProperty
    setProperty(namespace: string, property: string, value: string): boolean
    countArrayItems(namespace: string, property: string): number
    getArrayItem(namespace: string, property: string, itemIndex: number): XMPProperty
    deleteProperty(namespace: string, property: string): boolean
    appendArrayItem(
    namespace: string,
    property: string,
    arrayOptions: string,
    valueToAppend: string,
    valueOptions: string,
    ): boolean
    dumpObject(): string
    serialize(): string
    getNamespaceURI(ns: string): string
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
