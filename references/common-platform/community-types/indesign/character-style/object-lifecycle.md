# CharacterStyle object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class CharacterStyle {
    /**
    - Makes a duplicate CharacterStyle.
      */
      duplicate(): CharacterStyle
    /**
    - Moves the style to a requested location.
    - @param to Location relative to the reference object or inside the containing object.
    - @param reference Reference object; required for adjacent placement requests.
      */
      move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CharacterStyle
    /**
    - Deletes the style.
    - @param replacingWith Style applied instead of the deleted style.
      */
      remove(replacingWith: CharacterStyle): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
