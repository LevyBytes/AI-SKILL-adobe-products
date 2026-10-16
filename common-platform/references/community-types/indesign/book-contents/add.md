# BookContents.add

Community declaration reference: InDesign/2023.

Creates a BookContent object.
@param fullName Full path name for the new book content object.
@param at Location of the book content object inside the book.
@param withProperties Initial property values for the new BookContent.

```typescript
declare class BookContents {
    add(fullName: File, at?: number, withProperties?: object): BookContent
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
