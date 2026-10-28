# Application.aATFileSaveDialog

Community declaration reference: Illustrator/2022.

Shows a save, file-choice, or directory-choice dialog, then returns the selected file as a relative path string.
@param path Specifies the path relative to the folder specified by Relative.
@param relative Specifies the current relative path token.
@param type Dialog type expressed as a string.

```typescript
declare class Application {
    aATFileSaveDialog(path: string, relative: string, type: string): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
