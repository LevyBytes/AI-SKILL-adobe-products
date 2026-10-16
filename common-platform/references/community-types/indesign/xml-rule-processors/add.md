# XMLRuleProcessors.add

Community declaration reference: InDesign/2023.

Adds an XMLRuleProcessor.
@param rulePaths XPath condition paths belonging to rules in the rule set.
@param prefixMappingTable Namespace mapping table; accepted shape: Array of Arrays of 2 Strings.
@param withProperties Starting property values for the new XMLRuleProcessor

```typescript
declare class XMLRuleProcessors {
    add(rulePaths: string[], prefixMappingTable: any[], withProperties: object): XMLRuleProcessor
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
