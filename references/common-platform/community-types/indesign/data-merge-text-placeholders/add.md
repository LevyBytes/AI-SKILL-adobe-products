# DataMergeTextPlaceholders.add

Community declaration reference: InDesign/2023.

Creates a text placeholder for data merge.
@param parentStory Story that receives the placeholder.
@param storyOffset Story position for the placeholder, given as an offset number or InsertionPoint.
@param field Field used for insertion.
@param withProperties Starting property values assigned to a created DataMergeTextPlaceholder

```typescript
declare class DataMergeTextPlaceholders {
    add(parentStory: Story, storyOffset: InsertionPoint | number, field: DataMergeField, withProperties: object): DataMergeTextPlaceholder
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
