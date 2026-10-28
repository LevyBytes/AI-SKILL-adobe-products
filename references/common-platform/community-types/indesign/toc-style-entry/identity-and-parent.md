# TOCStyleEntry identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TOCStyleEntry {
    /**
    - Position index for the TOCStyleEntry inside its container.
      */
      readonly index: number
    /**
    - True when object specifier resolution yields valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the TOCStyleEntry.
      */
      name: string
    /**
    - Parent object for the TOCStyleEntry (a TOCStyle).
      */
      readonly parent: TOCStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
