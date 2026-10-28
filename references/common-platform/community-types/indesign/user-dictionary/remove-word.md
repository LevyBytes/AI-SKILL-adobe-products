# UserDictionary.removeWord

Community declaration reference: InDesign/2023.

Removes the supplied words from the chosen dictionary list.
@param removedWords Words to remove.
@param removedList When true, delete the words from the removed words list; when false or omitted, delete them from the added words list.

```typescript
declare class UserDictionary {
    removeWord(removedWords: string[], removedList?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
