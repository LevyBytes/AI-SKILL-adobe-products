# Group.sendToBack

Community declaration reference: InDesign/2023.

Moves the Group to its layer back, or behind a specific item (must have same parent).
@param reference Reference object behind which to place the object

```typescript
declare class Group extends PageItem {
    sendToBack(reference: PageItem): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
