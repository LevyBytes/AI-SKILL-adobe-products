# CellStyleGroup object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyleGroup {
    /**
    - Creates another CellStyleGroup with the same settings.
      */
      duplicate(): CellStyleGroup
    /**
    - Relocates the style to the requested position.
    - @param to Target position, either relative to a reference object or inside the containing object.
    - @param reference Reference object, needed for before and after placements.
      */
      move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CellStyleGroup
    /**
    - Deletes this style.
    - @param replacingWith Style used in place of the removed style.
      */
      remove(replacingWith: ParagraphStyle | CharacterStyle): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
