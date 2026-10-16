# Flash.getDocumentDOM

Community declaration reference: Animate/22.0.

Gets the DOM (Document object) for the active document (FLA file). If documents are open but none currently has focus, such as when a JSFL file has focus, this returns the DOM for the most recently active document.
@returns Document object, or null when no documents are open.

```typescript
declare class Flash {
    getDocumentDOM(): Document | null
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
