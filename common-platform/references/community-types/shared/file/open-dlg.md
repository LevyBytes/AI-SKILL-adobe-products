# File.openDlg

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Displays the built-in platform file browser so the user can select one existing file or several files, then creates File objects for those selections.
Unlike the class method openDialog(), this starts with the current folder set to this File object's parent folder and the current file set to this object's associated file.
If OK is clicked, the return value is a File or Folder object for the chosen file or folder, or an array of objects.
If the user cancels, null is returned.
@param prompt Prompt text used when the dialog supports prompting.
@param filter Filter limiting which file types appear. On Windows, a filter expression can look like "Javascript files:_.jsx;All files:_.\*". On Mac OS, use a filter function that receives a File instance and returns true to include it in the display or false to exclude it.
@param multiSelect When true, the dialog permits multiple selections and returns File[] results.

```typescript
interface File {
    openDlg(prompt?: string, filter?: string | Function, multiSelect?: boolean): File | File[]
}
```

```typescript
interface File {
    openDlg(prompt: string, filter: string | Function, multiSelect: false): File
}
```

```typescript
interface File {
    openDlg(prompt: string, filter: string | Function, multiSelect: true): File[]
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
