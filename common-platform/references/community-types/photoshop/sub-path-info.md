# SubPathInfo

Community declaration reference: Photoshop/2015.5.

Array-style container of path point info objects describing a straight or curved path segment.

```typescript
declare class SubPathInfo {
    /**
    - When true, closes the path.
      */
      static closed: boolean
    /**

    - Complete path point collection for the sub path item.
      */
      static entireSubPath: PathPointInfo[]
    /**

    - Sub path operation applied against other sub paths.
      */
      static operation: ShapeOperation
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
