# TableStyle object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyle {
    /**
    - Creates a duplicate TableStyle.
      */
      duplicate(): TableStyle
    /**
    - Relocates the style to the requested position.
    - @param to Location relative to the reference object or inside the containing object.
    - @param reference Reference object. Note: Needed if the to parameter names after or before.
      */
      move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): TableStyle
    /**
    - Removes the style.
    - @param replacingWith Style used in place of the removed style.
      */
      remove(replacingWith: TableStyle): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
