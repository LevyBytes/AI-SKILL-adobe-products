# XMLAttribute identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class XMLAttribute {
    /**
    - Position of the XMLAttribute within its containing object.
      */
      readonly index: number
    /**
    - Indicates whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the XMLAttribute.
      */
      name: string
    /**
    - Parent object for the XMLAttribute (a XMLElement).
      */
      readonly parent: XMLElement
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
