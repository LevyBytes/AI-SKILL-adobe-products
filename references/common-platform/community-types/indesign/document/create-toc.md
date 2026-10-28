# Document.createTOC

Community declaration reference: InDesign/2023.

Creates a table of contents.
@param using TOC style defining the table of contents content, title, and format.
@param replacing True replaces the existing TOC.
@param fromBook Book whose documents are included in the TOC.
@param placePoint Page-coordinate point for placing the TOC story, formatted as [x, y].
@param includeOverset True includes overset text TOC entries in the TOC.
@param destinationLayer Destination layer for the TOC story.

```typescript
declare class Document {
    createTOC(using: TOCStyle, replacing?: boolean, fromBook?: Book, placePoint?: (number | string)[], includeOverset?: boolean, destinationLayer?: Layer): Story[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
