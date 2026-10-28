# Group.bringToFront

Community declaration reference: InDesign/2023.

Moves the Group to its layer front, or ahead of a specific item.
@param reference Reference object before which to place the object (must have same parent)

```typescript
declare class Group extends PageItem {
    bringToFront(reference: PageItem): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
