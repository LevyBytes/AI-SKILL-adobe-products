# Flash.closeAll

Community declaration reference: Animate/22.0.

Closes every open file, including FLA files, SWF files, JSFL files, and related file types. Pass false for bPromptToSave to close without saving changes. This method leaves the application running.
@param bPromptToSave Optional Boolean that controls whether changed files show the Save dialog box, and never-saved files show the Save As dialog box. The default value is true.

```typescript
declare class Flash {
    closeAll(bPromptToSave?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
