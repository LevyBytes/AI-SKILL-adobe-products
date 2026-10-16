# ContentPlacerObject

Community declaration reference: InDesign/2023.

Content placer object representation.

```typescript
declare class ContentPlacerObject extends Preference {
    /**
    - Indicates whether the Content Placer currently holds content ready for placement.
      */
      readonly loaded: boolean
    /**

    - Loads one or more objects into the Content Placer.
    - @param pageItems Page items to load or place.
    - @param linkPageItems Whether the content placer should link pageItems; true overrides the link stories value.
    - @param linkStories Whether stories are linked in the content placer; applies only to a single story, and pageItem links are also made when more than one item is present.
    - @param mapStyles Whether styles should be mapped in the content placer.
    - @param showingOptions Whether the link options dialog should appear.
      */
      load(pageItems: PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
