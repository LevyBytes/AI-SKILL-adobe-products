# NotePreference

Community declaration reference: InDesign/2023.

Preferences for notes.

```typescript
declare class NotePreference extends Preference {
    /**
    - When true, Find/Change commands include inline notes content (in Galley and Story views only).
      */
      findAndReplaceNoteContents: boolean
    /**

    - Background color used for notes.
      */
      noteBackgroundColor: NoteBackgrounds
    /**

    - Note color, supplied either as three-double array values in the range 0 to 255 for R, G, and B, or as an InCopy UI color.
      */
      noteColor: [number, number, number] | InCopyUIColors
    /**

    - Color choice used for notes.
      */
      noteColorChoices: NoteColorChoices
    /**

    - When true, layout-view note anchors and galley/story-view note bookends show note information plus some content on hover.
      */
      showNoteTips: boolean
    /**

    - When true, Spell Check includes inline notes content (in Galley and Story views only).
      */
      spellCheckNotes: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
