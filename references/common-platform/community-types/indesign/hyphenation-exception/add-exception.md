# HyphenationException.addException

Community declaration reference: InDesign/2023.

Adds the supplied words to a hyphenation exceptions list.
@param addedExceptions Words to add.
@param removedList When true, place the words in removed exceptions; otherwise, store them with added exceptions.

```typescript
declare class HyphenationException {
    addException(addedExceptions: string[], removedList?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
