# Index.generate

Community declaration reference: InDesign/2023.

Creates the story that contains the generated index.
@param on Spread or page that receives the story.
@param placePoint Coordinates for the story bounding box upper-left corner, in [x, y] format.
@param destinationLayer Layer that receives the story.
@param autoflowing When true, lets the story continue onto later pages if it cannot fit on the chosen page. If the document has no later pages, they are created as needed.
@param includeOverset When true, topics from overset story text are included.

```typescript
declare class Index {
    generate(on: Page | Spread | MasterSpread, placePoint: (number | string)[], destinationLayer: Layer, autoflowing?: boolean, includeOverset?: boolean): Story[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
