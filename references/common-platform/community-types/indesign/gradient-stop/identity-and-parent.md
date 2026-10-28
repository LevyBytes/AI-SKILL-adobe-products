# GradientStop identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class GradientStop {
    /**
    - GradientStop index inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier maps to valid objects.
      */
      readonly isValid: boolean
    /**
    - Parent Gradient for this GradientStop.
      */
      readonly parent: Gradient
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
