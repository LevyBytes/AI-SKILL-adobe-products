# MasterSpread.placeAndLink

Community declaration reference: InDesign/2023.

Deprecated: use contentPlace method. Original Description: builds a linked story and inserts it into the target.
@param parentStory Story used as the placement/link source.
@param placePoint Placement point to use.
@param destinationLayer Layer that receives the placed content.
@param showingOptions Controls whether the link options dialog is shown.

```typescript
declare class MasterSpread {
    placeAndLink(parentStory: Story, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean): Story
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
