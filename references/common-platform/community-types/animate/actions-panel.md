# ActionsPanel

Community declaration reference: Animate/22.0.

\*** Classes **\**

The actionsPanel object represents the displayed Actions panel and is exposed from the flash object; see fl.actionsPanel.

```typescript
declare class ActionsPanel {
    /**
    - Gets the current text selection from the Actions panel.
    - @returns String containing the current Actions panel selection.
      */
      getSelectedText(): string
    /**
    - Gets all text from the Actions panel.
    - @returns String containing the full Actions panel text.
      */
      getText(): string
    /**
    - Reports whether the Actions panel currently has selected text.
    - @returns Boolean result: true when text is selected in the Actions panel, false when no selection exists.
      */
      hasSelection(): boolean
    /**
    - Substitutes replacementText for the current selection.
    - When replacementText is longer than the selected span, text after the selection is shifted after replacementText instead of being overwritten.
    - @returns true when the Actions panel is found; otherwise false.
    - @param replacementText String to insert in place of the Actions panel selection.
      */
      replaceSelectedText(replacementText: string): boolean
    /**
    - Selects a character range in the Actions panel.
    - @returns Boolean result showing whether the requested character range can be selected.
    - @param startIndex Zero-based integer for the first character in the selection.
    - @param numberOfChars Integer count of characters to select.
      */
      setSelection(startIndex: number, numberOfChars: number): boolean
    /**
    - Removes the existing Actions panel text, then inserts replacementText.
    - @returns true when the specified text is placed in the Actions panel; otherwise false.
    - @param replacementText String to put into the Actions panel.
      */
      setText(replacementText: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
