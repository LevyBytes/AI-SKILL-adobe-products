# LinkedStoryOption

Community declaration reference: InDesign/2023.

Options controlling a linked story.

```typescript
declare class LinkedStoryOption extends Preference {
    /**
    - When true, linked story creation or update applies style mappings.
      */
      applyStyleMappings: boolean
    /**

    - When true, story creation or update removes forced line breaks.
      */
      removeForcedLineBreaks: boolean
    /**

    - When true, the linked story updates during save.
      */
      updateWhileSaving: boolean
    /**

    - When true, shows a warning if updating the link would override local edits.
      */
      warnOnUpdateOfEditedStory: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
