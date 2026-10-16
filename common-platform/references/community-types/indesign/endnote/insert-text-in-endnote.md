# Endnote.insertTextInEndnote

Community declaration reference: InDesign/2023.

Inserts contents into the endnote text range at the specified text index; the insertion point must be inside the start and end range indices and exclude the markers.
@param storyOffset InsertionPoint location within the story.
@param contents Text content to insert.

```typescript
declare class Endnote {
    insertTextInEndnote(storyOffset: InsertionPoint, contents: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
