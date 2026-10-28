# View

Community declaration reference: Illustrator/2022.

View object.

```typescript
declare class View {
    /**
    - Bounding rectangle for this view.
      */
      readonly bounds: Rect
    /**

    - Center point used by this view.
      */
      centerPoint: Point | [number, number]
    /**

    - Owning container for this object.
      */
      readonly parent: object
    /**

    - Display mode for the view.
      */
      screenMode: ScreenMode
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Zoom factor used by this view.
      */
      zoom: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
