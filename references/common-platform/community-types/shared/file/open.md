# File.open

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Opens the referenced file for later read/write work, resolving aliases to locate the file.
A true return value means the file opened successfully. The method tries to infer the open file's encoding by reading a few bytes at the current location and checking for the Byte Order Mark character 0xFFFE. When that marker is present, the current position moves past it and the encoding property becomes one of UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If no marker appears, the method checks for zero bytes at the current location and infers one of those formats, except UTF-8. If every detection path fails, the encoding property uses the system encoding.
IMPORTANT: Opening the same file more than once is risky. The operating system often allows it, but writing through two different File objects can destroy your data.
@param mode Read-write mode as a one-character string. Accepted characters: r (read) reads only and fails when the file is missing or cannot be located; w (write) writes, clears existing contents, and creates a new empty file if required; e (edit) reads and writes an existing file; a (append) reads and writes an existing file after moving the current position to the file end.
@param type In Mac OS, 4-character type for a newly created file. Windows and UNIX ignore it.
@param creator In Mac OS, 4-character creator for a newly created file. Windows and UNIX ignore it.

```typescript
interface File {
    open(mode: string, type?: string, creator?: string): boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
