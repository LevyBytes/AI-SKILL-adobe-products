# Window.AFTER_CLOSE

Community declaration reference: InDesign/2023.

Fires while a Window is closing after the close has already been committed, so cancellation is no longer possible. The event bubbles and cannot be canceled.

```typescript
declare class Window {
    static readonly AFTER_CLOSE: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
