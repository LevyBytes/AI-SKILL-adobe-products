# Table.convertToText

Community declaration reference: InDesign/2023.

Converts the table into text.
@param columnSeparator Character inserted between each column's content in the converted text. It may be any single character, including a letter, number, punctuation mark, space, or tab. Enter the character itself, not a named label; for example, use ',' instead of 'Comma'. Escape double quotes, single quotes, or a backslash by adding an extra backslash before them. Use ^p for paragraphs.
@param rowSeparator Character used between each row's content in the converted text. It may be any single character, including a letter, number, punctuation mark, space, or tab. Enter the character itself, not a named label; for example, use , instead of Comma. Escape double quotes, single quotes, or a backslash by adding an extra backslash before them. Use ^p for paragraphs.

```typescript
declare class Table {
    convertToText(columnSeparator: string, rowSeparator: string): Text
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
