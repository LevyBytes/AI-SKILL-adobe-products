# SubPathItem

Community declaration reference: Photoshop/2015.5.

Path information. The sub path item object is not used to create a path; path segments are created with the sub path info object instead. Use the sub path item object when retrieving path details. All properties are read-only.

```typescript
declare class SubPathItem {
    /**
    - When true, the path is closed.
      */
      readonly closed: boolean
    /**

    - Operation for this sub path against other sub paths.
      */
      readonly operation: ShapeOperation
    /**

    - Container object.
      */
      readonly parent: object
    /**

    - PathPoints collection in the sub path.
      */
      readonly pathPoints: PathPoints
    /**

    - Object class name.
      */
      readonly typename: string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
