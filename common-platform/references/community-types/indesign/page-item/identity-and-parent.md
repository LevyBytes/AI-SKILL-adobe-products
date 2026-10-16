# PageItem identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class PageItem {
    /**
    - Unique ID for the PageItem.
      */
      readonly id: number
    /**
    - Index of the PageItem inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the PageItem.
      */
      name: string
    /**
    - Parent of the PageItem; possible parent types include Snippet or XMLElement; ComboBox or ListBox; TextBox or SignatureField; CheckBox or RadioButton; Spread or MasterSpread; Polygon or GraphicLine; Rectangle or Oval; SplineItem or Group; State or Cell; Button or MultiStateObject; EndnoteTextFrame or TextFrame; Character or Sound; PlaceGun or Movie; HtmlItem or FormField; MediaItem or EPSText; SVG or ImportedPage; PICT, WMF, PDF, EPS, Image, Graphic or PageItem.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
