# File.saveDlg

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Displays the built-in platform file browser so the user can choose an existing location for saving information, then creates a new File object for the selected file.
Unlike the class method saveDialog(), this starts with the current folder set to this File object's parent folder and the file set to this object's associated file.
If OK is clicked, the selected file is returned as a File object.
If the user cancels, null is returned.
@param prompt Prompt text used when the dialog supports prompting.
@param filter Windows only: filter limiting which file types appear. A filter expression can look like "Javascript files:_.jsx;All files:_._". Mac OS does not use it.

```typescript
interface File {
    saveDlg(prompt?: string, filter?: any): File
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
