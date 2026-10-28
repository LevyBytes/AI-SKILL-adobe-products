# Link identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Link {
    /**
    - Unique Link ID.
      */
      readonly id: number
    /**
    - Position of this link inside the links collection.
      */
      readonly index: number
    /**
    - True when the object specifier maps to valid objects.
      */
      readonly isValid: boolean
    /**
    - Link name.
      */
      readonly name: string
    /**
    - Object represented by the link.
      */
      readonly parent: Story | Graphic | Movie | Sound
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
