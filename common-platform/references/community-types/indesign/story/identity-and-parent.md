# Story identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Story {
    /**
    - Unique Story ID.
      */
      readonly id: number
    /**
    - Story index within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Story name; aliases the Story label property.
      */
      name: string
    /**
    - Parent object for the Story, either a XMLElement or Document.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
