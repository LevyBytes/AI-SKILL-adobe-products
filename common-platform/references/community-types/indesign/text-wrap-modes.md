# TextWrapModes

Community declaration reference: InDesign/2023.

Object text-wrap mode choices.

```typescript
declare enum TextWrapModes {
    /**
    - Makes text follow the object's bounding box.
      */
      BOUNDING_BOX_TEXT_WRAP = 1651729523,
    /**

    - Makes text follow the object using the specified contour options.
      */
      CONTOUR = 1835233134,
    /**

    - Forces text above or below the object so no text appears to the right or left of it.
      */
      JUMP_OBJECT_TEXT_WRAP = 1650552420,
    /**

    - Sends text onward to the next column that can accept it.
      */
      NEXT_COLUMN_TEXT_WRAP = 1853384306,
    /**

    - Applies no text wrap.
      */
      NONE = 1852796517,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
