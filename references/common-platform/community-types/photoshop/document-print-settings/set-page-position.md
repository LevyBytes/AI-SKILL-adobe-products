# DocumentPrintSettings.setPagePosition

Community declaration reference: Photoshop/2015.5.

Positions the image on the page.
@param docPosition Printed-image position; choices are centered, user defined, or scale to fit.
@param posX Image X position on the page.
@param posY Image Y position on the page.
@param scale Printed-image placement scale; choices are centered, user defined, or scale to fit.

```typescript
declare class DocumentPrintSettings {
    setPagePosition(
      docPosition: DocPositionStyle,
      posX?: UnitValue | number,
      posY?: UnitValue | number,
      scale?: number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
