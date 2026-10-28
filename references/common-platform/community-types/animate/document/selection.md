# Document.selection

Community declaration reference: Animate/22.0.

Selected objects in the document. With no selection, the array length is zero; with no open document, the result is null.
Objects can be added to this array by selecting them in any of these ways:
- Select objects on the Stage manually.
- Call selection methods including document.setSelectionRect(), document.setSelectionBounds(), document.mouseClick(), document.mouseDblClk(), or document.selectAll().
- Select one or more frames manually.
- Use Timeline methods for frame selection, including timeline.getSelectedFrames(), timeline.setSelectedFrames(), or timeline.selectAllFrames().
- Identify all elements in a particular frame (see Element object). The first example below shows this.
- Create an array with one or more elements and assign it to document.selection. See the third example below.

```typescript
declare class Document {
    selection: any[] | null
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
