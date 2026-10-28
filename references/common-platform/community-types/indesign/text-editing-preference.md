# TextEditingPreference

Community declaration reference: InDesign/2023.

Preferences for text editing.

```typescript
declare class TextEditingPreference extends Preference {
    /**
    - When true, text can be dragged and dropped in story editor or galley view.
      */
      allowDragAndDropTextInStory: boolean
    /**

    - When true, text drag-and-drop is allowed on a layout page.
      */
      dragAndDropTextInLayout: boolean
    /**

    - When true, a single Type tool click changes non-text frames into text frames.
      */
      singleClickConvertsFramesToTextFrames: boolean
    /**

    - When true, cutting and pasting text automatically adjusts spacing among words and between words and punctuation marks.
      */
      smartCutAndPaste: boolean
    /**

    - When true, a triple click selects a text line. When false, the same gesture selects a paragraph.
      */
      tripleClickSelectsLine: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
