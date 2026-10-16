# Document.enterEditMode

Community declaration reference: Animate/22.0.

Changes the authoring tool to the editing mode named by the parameter. If omitted, the method defaults to symbol-editing mode, matching a right-click on the symbol followed by Edit from the context menu.
@param editMode String selecting the editing mode. Allowed values are "inPlace" or "newWindow". If omitted, symbol-editing mode is the default. Optional.

```typescript
declare class Document {
    enterEditMode(editMode?: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
