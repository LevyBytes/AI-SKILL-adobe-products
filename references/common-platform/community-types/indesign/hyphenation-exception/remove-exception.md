# HyphenationException.removeException

Community declaration reference: InDesign/2023.

Removes the supplied words from a hyphenation exceptions list.
@param removedExceptions Words to remove.
@param removedList When true, delete from removed exceptions; otherwise, put the words under added exceptions.

```typescript
declare class HyphenationException {
    removeException(removedExceptions: string[], removedList?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
