# ArticleMembers.add

Community declaration reference: InDesign/2023.

Creates another member entry.
@param itemRef Page item to add to the article.
@param at Location relative to a reference object or inside the containing object.
@param reference Reference object; required when to is before or after.
@param withProperties Property values applied during ArticleMember creation.

```typescript
declare class ArticleMembers {
    add(itemRef: PageItem, at?: LocationOptions, reference?: ArticleMember, withProperties?: object): ArticleMember
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
