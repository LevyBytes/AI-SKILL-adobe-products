# CharacterStyleGroup object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class CharacterStyleGroup {
    /**
    - Copies the CharacterStyleGroup.
      */
      duplicate(): CharacterStyleGroup
    /**
    - Repositions the style.
    - @param to Placement relative to the reference object or inside the owning container.
    - @param reference Reference object. Needed for before/after placement.
      */
      move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CharacterStyleGroup
    /**
    - Removes the style.
    - @param replacingWith Style applied in place of the removed style.
      */
      remove(replacingWith: ParagraphStyle | CharacterStyle): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
