# PrintEvent

Community declaration reference: InDesign/2023.

Print event.

```typescript
declare class PrintEvent extends Event {
    /**
    - Fires once printing finishes for a PrintEvent; it bubbles and cannot be canceled.
      */
      static readonly AFTER_PRINT: string
    /**

    - Fires before printing starts for a PrintEvent; it bubbles and can be canceled.
      */
      static readonly BEFORE_PRINT: string
    /**

    - Print document UI options.
      */
      documentPrintUiOption: DocumentPrintUiOptions[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
