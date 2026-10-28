# TextPath identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TextPath {
    /**
    - Unique ID for the TextPath.
      */
      readonly id: number
    /**
    - Position of the TextPath inside its parent object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - TextPath name; alias for the TextPath's label property.
      */
      name: string
    /**
    - TextPath parent; accepted classes include SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame or EPSText.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
