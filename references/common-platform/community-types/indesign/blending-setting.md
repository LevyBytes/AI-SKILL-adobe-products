# BlendingSetting

Community declaration reference: InDesign/2023.

Core settings for object blending.

```typescript
declare class BlendingSetting extends Preference {
    /**
    - BlendMode determining how the base color combines with the BlendingSetting color.
      */
      blendMode: BlendMode
    /**

    - True limits blending to the group; false also blends with objects underneath that group.
      */
      isolateBlending: boolean
    /**

    - True marks the BlendingSetting as a knockout group.
      */
      knockoutGroup: boolean
    /**

    - BlendingSetting fill opacity, expressed as a percentage. (Range: 0 to 100)
      */
      opacity: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
