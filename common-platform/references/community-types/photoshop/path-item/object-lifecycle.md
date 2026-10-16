# PathItem object lifecycle

Community declaration reference: Photoshop/2015.5.

```typescript
declare class PathItem {
    /**
    - Creates a duplicate of this object.
    - @param relativeObject
    - @param insertionLocation
      */
      duplicate(relativeObject: object, insertionLocation: ElementPlacement): PathItem
    /**
    - Creates a copy of this path item.
    - @param name Name for the new path.
      */
      duplicate(name?: string): PathItem
    /**
    - Removes this object.
      */
      remove(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
