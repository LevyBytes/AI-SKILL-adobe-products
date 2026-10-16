# XML.replace

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Replaces matching XML property values on this XML object and returns this XML object.
This method behaves like assignment.
@param name Property name. It may be numeric, an XML element-set name, or the wildcard "\*". If this XML object has no property matching the name, the method returns without changing it.
@param value Replacement XML value. It may be an XML object, an XML list, or any value that toString() can convert to a String.

```typescript
interface XML {
    replace(name: string, value: XML): XML
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
