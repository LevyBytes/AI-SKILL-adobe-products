# Document.suspendHistory

Community declaration reference: Photoshop/2015.5.

Creates one history state for the whole script, giving all script actions a single undo point.
@param historyString Text assigned to the history state.
@param javaScriptString JavaScript code string executed while history is suspended.

```typescript
declare class Document {
    suspendHistory(historyString: string, javaScriptString: string): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
