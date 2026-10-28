# Footnotes.add

Community declaration reference: InDesign/2023.

Adds a footnote.
@param at Where the main-text footnote reference number is placed, either against reference or inside the story.
@param reference Reference object. Must be an insertion point or a note. Required when at is before or after.
@param withProperties Starting property values for the Footnote being created.

```typescript
declare class Footnotes {
    add(at?: LocationOptions, reference?: Note | InsertionPoint, withProperties?: object): Footnote
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
