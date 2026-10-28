# LinkedPageItemOption

Community declaration reference: InDesign/2023.

Options controlling a linked Page Item.

```typescript
declare class LinkedPageItemOption extends Preference {
    /**
    - When true, update preserves appearance edits.
      */
      preserveAppearance: boolean
    /**

    - When true, update preserves frame content edits.
      */
      preserveFrameContent: boolean
    /**

    - When true, update preserves interactivity edits.
      */
      preserveInteractivity: boolean
    /**

    - When true, update preserves text wrap, hyperLinks, text frame options, and object export settings.
      */
      preserveOthers: boolean
    /**

    - When true, update preserves size and shape edits.
      */
      preserveSizeAndShape: boolean
    /**

    - When true, the linked Page Item updates during save.
      */
      updateLinkWhileSaving: boolean
    /**

    - When true, shows a warning if updating the link would override local edits.
      */
      warnOnUpdateOfEditedPageItem: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
