# Page.placeAndLink

Community declaration reference: InDesign/2023.

Deprecated: use contentPlace method. Original behavior creates and places a linked story in the target.
@param parentStory Story used as the source for placement and linking.
@param placePoint Point used for placement.
@param destinationLayer Layer receiving the story.
@param showingOptions Open link-options controls.

```typescript
declare class Page {
    placeAndLink(parentStory: Story, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean): Story
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
