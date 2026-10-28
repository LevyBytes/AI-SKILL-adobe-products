# XMLElement.evaluateXPathExpression

Community declaration reference: InDesign/2023.

Runs an XPath expression from this XML element inside the structure.
@param using XPath expression to evaluate.
@param prefixMappingTable Namespace mapping table; accepted shape: nested arrays containing 2 strings each.

```typescript
declare class XMLElement extends XMLItem {
    evaluateXPathExpression(using: string, prefixMappingTable: any[]): XMLItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
