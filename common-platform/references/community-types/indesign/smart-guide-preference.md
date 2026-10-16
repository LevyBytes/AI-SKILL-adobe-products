# SmartGuidePreference

Community declaration reference: InDesign/2023.

Smart Guide configuration.

```typescript
declare class SmartGuidePreference extends Preference {
    /**
    - When true, smart alignment can snap to object centers.
      */
      alignToObjectCenter: boolean
    /**

    - When true, smart alignment can snap to object edges.
      */
      alignToObjectEdges: boolean
    /**

    - When true, smart guides are turned on.
      */
      enabled: boolean
    /**

    - Guide color, provided as a UI color or as a three-double R, G, and B array with values from 0 to 255.
      */
      guideColor: [number, number, number] | UIColors
    /**

    - When true, smart dimensions guides are active.
      */
      smartDimensions: boolean
    /**

    - When true, smart spacing guides are active.
      */
      smartSpacing: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
