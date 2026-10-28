# Path identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Path {
    /**
    - Path position within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully to valid objects.
      */
      readonly isValid: boolean
    /**
    - Path parent, one of SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings, or TextWrapPreference.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
