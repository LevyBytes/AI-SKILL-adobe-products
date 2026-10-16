# Application.print

Community declaration reference: InDesign/2023.

Prints the requested file or files.
@param from File path or paths.
@param printDialog Whether to display the print dialog.
@param using Printer preset used for printing.

```typescript
declare class Application {
    print(from: File | File[], printDialog: boolean, using: PrinterPresetTypes | PrinterPreset): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
