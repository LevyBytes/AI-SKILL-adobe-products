# CompilerErrors

Community declaration reference: Animate/22.0.

fl.compilerErrors exposes the Compiler Errors panel through the flash object (fl); see flash object (fl).

```typescript
declare class CompilerErrors {
    /**
    - Empties the Compiler Errors panel.
      */
      clear(): void
    /**
    - Writes the Compiler Errors panel contents to a local text file.
    - @param fileURI A string in file:/// URI form that names the saved file. If fileURI already exists and bAppendToFile is not set to true, the existing file is overwritten without warning.
    - @param bAppendToFile Optional Boolean value that chooses whether Compiler Errors panel contents are appended to fileURI (true) or are not appended (false). Default: false.
    - @param bUseSystemEncoding Optional Boolean value that chooses whether Compiler Errors panel text is saved with the system encoding. When this value is false (the default), text from the Compiler Errors panel is saved with UTF-8 encoding and Byte Order Mark characters at the beginning. Default: false.
      */
      save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
