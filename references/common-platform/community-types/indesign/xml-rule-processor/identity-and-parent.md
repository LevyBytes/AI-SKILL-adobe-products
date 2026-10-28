# XMLRuleProcessor identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class XMLRuleProcessor {
    /**
    - Unique XMLRuleProcessor ID.
      */
      readonly id: number
    /**
    - XMLRuleProcessor position inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - XMLRuleProcessor name, provided as an alias of the XMLRuleProcessor label property.
      */
      name: string
    /**
    - Parent object for XMLRuleProcessor (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
