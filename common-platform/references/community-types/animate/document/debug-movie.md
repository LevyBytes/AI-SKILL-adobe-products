# Document.debugMovie

Community declaration reference: Animate/22.0.

Runs the Debug Movie command on the document.
@param abortIfErrorsExist Boolean; false is the default. When true, compiler errors prevent the debug session and the .swf window from opening. Compiler warnings do not abort the command.

```typescript
declare class Document {
    debugMovie(abortIfErrorsExist?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
