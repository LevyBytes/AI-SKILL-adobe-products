# FileConstructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface FileConstructor {
    readonly prototype: File
    /**

    - Creates a File object that points at a file-system location.
    - @param path Full or partial path name, in platform-specific form or URI form. The object stores the absolute path. The referenced file is not required to already exist. If path identifies an existing folder, File returns a Folder object instead of a File object, while new creates a File object named for a file that is not yet present.
      */
      new (path?: string): File
    (path?: string): File
    /**

    - Name of the file system.
    - Read this as a class property on the File constructor. Possible results: "Windows", "Macintosh", and "Unix".
      */
      readonly fs: string
    /**

    - Decodes a UTF-8 string according to RFC 2396 and returns the decoded result.
    - See also String.decodeURI().
    - @param uri UTF-8 string that should be decoded.
      */
      decode(uri: string): string
    /**

    - Encodes a string according to RFC 2396 and returns the encoded result.
    - Special characters are encoded as UTF-8 and represented by percent escapes followed by two hexadecimal digits. For example, "my file" becomes "my%20file".
    - Characters treated as special have numeric values greater than 127, except for these characters: / - _ . ! ~ \* ' ( )
    - See also encodeURI().
    - @param name String to encode.
      */
      encode(name: string): string
    /**

    - Reports whether the named encoding can be used.
    - @param name Encoding name. Common examples include "ASCII", "binary", and "UTF-8". See the JavaScript Tools Guide for the complete supported-encoding list.
      */
      isEncodingAvailable(name: string): boolean
    /**

    - Shows a dialog where the user may choose one file or several files to open.
    - The built-in platform file browser is displayed for selecting existing files, and matching File objects are created for the choices.
    - If OK is clicked, the return value is a File object for one selected file or an array when multiple files are chosen.
    - If the user cancels, null is returned.
    - @param prompt Prompt text shown when the dialog supports a prompt.
    - @param filter Filter limiting which file types appear. On Windows, a filter expression can look like "Javascript files:_.jsx;All files:_.\*". On Mac OS, use a filter function that receives a File instance and returns true to include it in the display or false to exclude it.
    - @param multiSelect When true, the dialog permits multiple selections and returns File[] results.
      */
      openDialog(prompt?: string, filter?: string | Function, multiSelect?: boolean): File | File[]
    openDialog(prompt: string, filter: string | Function, multiSelect: false): File
    openDialog(prompt: string, filter: string | Function, multiSelect: true): File[]
    /**

    - Shows a dialog where the user chooses a file name for saving.
    - The built-in platform file browser is displayed for selecting an existing file location, and a new File object is created for that selected location.
    - If OK is clicked, the selected save location is returned as a File object.
    - If the user cancels, null is returned.
    - @param prompt Prompt text shown when the dialog supports a prompt.
    - @param filter Windows only: filter limiting which file types appear. A filter expression can look like "Javascript files:_.jsx;All files:_._". Mac OS does not use this value.
      */
      saveDialog(prompt?: string, filter?: any): File
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
