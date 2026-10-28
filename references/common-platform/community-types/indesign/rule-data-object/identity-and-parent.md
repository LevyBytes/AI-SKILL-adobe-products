# RuleDataObject identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class RuleDataObject {
    /**
    - ID assigned to this rule data object.
      */
      readonly id: string
    /**
    - Position of the RuleDataObject inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name of the RuleDataObject.
      */
      readonly name: string
    /**
    - Parent object for the RuleDataObject (a PreflightProfileRule or PreflightRuleInstance).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
