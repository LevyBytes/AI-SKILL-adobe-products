# TransformationMatrix identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TransformationMatrix {
    /**
    - Index of the TransformationMatrix inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the TransformationMatrix.
      */
      readonly name: string
    /**
    - Parent object for the TransformationMatrix (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
