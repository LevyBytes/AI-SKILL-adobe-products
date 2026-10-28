# TextWrapPreference

Community declaration reference: InDesign/2023.

Preferences controlling text wrap.

```typescript
declare class TextWrapPreference extends Preference {
    /**
    - When true, text wraps on a master spread affect only that spread, not pages using that master spread.
      */
      applyToMasterPageOnly: boolean
    /**

    - Text-wrap contour settings, valid only for contour text wrap type.
      */
      readonly contourOptions: ContourOption
    /**

    - When true, reverses the text wrap.
      */
      inverse: boolean
    /**

    - Path collection.
      */
      readonly paths: Paths
    /**

    - Preferences object collection.
      */
      readonly preferences: Preferences
    /**

    - Text wrap mode.
      */
      textWrapMode: TextWrapModes
    /**

    - Minimum gap between text and the wrapped object's edges. Text wrap type determines the offset format: jump object text wrap uses 2 values in [top, bottom]; next column text wrap or contour uses one value; bounding box text wrap uses 4 values in [top, left, bottom, right].
      */
      textWrapOffset: number | number[] | NothingEnum
    /**

    - Options for the side used by text wrap.
      */
      textWrapSide: TextWrapSideOptions
    /**

    - True after the user has explicitly changed the text wrap path.
      */
      readonly userModifiedWrap: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
