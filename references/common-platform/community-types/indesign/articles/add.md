# Articles.add

Community declaration reference: InDesign/2023.

Creates another Article.
@param name Article name value.
@param articleExportStatus Article export-state value.
@param at Location relative to a reference object or inside the containing object.
@param reference Reference object; required when to is before or after.
@param withProperties Property values applied during Article creation.

```typescript
declare class Articles {
    add(name: string, articleExportStatus: boolean, at?: LocationOptions, reference?: Article, withProperties?: object): Article
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
