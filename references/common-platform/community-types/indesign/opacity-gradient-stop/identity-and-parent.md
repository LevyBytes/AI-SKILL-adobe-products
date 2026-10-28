# OpacityGradientStop identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class OpacityGradientStop {
    /**
    - OpacityGradientStop index inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier maps to valid objects.
      */
      readonly isValid: boolean
    /**
    - Parent object for the OpacityGradientStop, either GradientFeatherSetting or FindChangeGradientFeatherSetting.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
