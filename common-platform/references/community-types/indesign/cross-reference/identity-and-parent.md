# CrossReference identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class CrossReference {
    /**
    - Unique ID for the CrossReference.
      */
      readonly id: number
    /**
    - Position of the CrossReference inside its containing object.
      */
      readonly index: number
    /**
    - Boolean result indicating that the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name for the CrossReference, mapped to the CrossReference label property.
      */
      name: string
    /**
    - Parent object for the CrossReference (a Topic).
      */
      readonly parent: Topic
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
