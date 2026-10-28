# Folder.getFiles

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Gets this folder's contents, limited by the supplied mask.
Returns an array containing File and Folder objects, or null when this object's referenced folder does not exist.
@param mask Search mask for file names, supplied as either a string or a function. A string mask may use question mark (?) and asterisk (_) wild cards. The default is "_", matching every file name. It may also be a function name that accepts a File or Folder object argument. Each found item is passed to it; when the function returns true, that object is added to the returned array. NOTE: In Windows, aliases always have the .lnk extension. ExtendScript removes that extension from the file name when it finds one, preserving compatibility with other operating systems. Supplying the search mask "_.lnk" searches for all aliases, but code using it is not portable.

```typescript
interface Folder {
    getFiles(mask?: any): Array<File | Folder>
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
