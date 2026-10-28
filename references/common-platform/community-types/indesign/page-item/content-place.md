# PageItem.contentPlace

Community declaration reference: InDesign/2023.

Adds a duplicate object inside the destination page item.
@param pageItems Page item objects to place or load.
@param linkPageItems Whether pageItems are linked in the content placer; true overrides the link stories value.
@param linkStories Whether stories are linked in the content placer; this applies only to a single story, and pageItem links are also created when more than one item is used.
@param mapStyles Whether styles are mapped in the content placer.
@param showingOptions Controls whether the link options dialog is shown.

```typescript
declare class PageItem {
    contentPlace(pageItems: PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): any[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
