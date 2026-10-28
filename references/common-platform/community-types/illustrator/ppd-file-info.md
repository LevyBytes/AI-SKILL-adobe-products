# PPDFileInfo

Community declaration reference: Illustrator/2022.

Reference note: pPD file information.

```typescript
declare class PPDFileInfo {
    /**
    - PPD file path specification.
      */
      static PPDFilePath: File
    /**

    - PostScript language level.
      */
      static languageLevel: string
    /**

    - Reference note: list of color separation screens.
      */
      static screenList: Screen[]
    /**

    - Reference note: list of color separation screen spot functions.
      */
      static screenSpotFunctionList: ScreenSpotFunction[]
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
