# Topic identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Topic {
    /**
    - Position of the Topic inside its containing object.
      */
      readonly index: number
    /**
    - Boolean result indicating that the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the Topic.
      */
      name: string
    /**
    - Parent object for the Topic (a IndexSection, Topic or Index).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
