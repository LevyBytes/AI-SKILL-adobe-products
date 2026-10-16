# Document.currentTimeline

Community declaration reference: Animate/22.0.

Stores the active timeline index. Assigning this property switches the active timeline, almost like document.editScene(); unlike that call, an invalid timeline index produces no error message and the assignment simply fails silently.

```typescript
declare class Document {
    currentTimeline: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
