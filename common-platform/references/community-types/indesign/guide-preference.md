# GuidePreference

Community declaration reference: InDesign/2023.

Preferences for guides.

```typescript
declare class GuidePreference extends Preference {
    /**
    - When true, guides sit behind every other object on the spread.
      */
      guidesInBack: boolean
    /**

    - When true, guides are locked against moving, adding, and deleting.
      */
      guidesLocked: boolean
    /**

    - When true, guides are shown.
      */
      guidesShown: boolean
    /**

    - When true, created, moved, or resized objects inside the specified range snap to the nearest guide. For range details, see guide snapto zone.
      */
      guidesSnapto: boolean
    /**

    - Color for the guide; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
      */
      rulerGuidesColor: [number, number, number] | UIColors
    /**

    - Magnification percentage below which ruler guides are hidden. (Range: 5 to 4000)
      */
      rulerGuidesViewThreshold: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
