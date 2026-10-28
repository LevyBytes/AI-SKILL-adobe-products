# RuleDataObjects.add

Community declaration reference: InDesign/2023.

Adds new preflight rule data to a preflight profile rule.
@param name Rule data name to add.
@param dataType Data type.
@param dataValue Data value. Can accept: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
@param withProperties Starting property values for the new RuleDataObject

```typescript
declare class RuleDataObjects {
    add(name: string, dataType: RuleDataType, dataValue: any, withProperties: object): RuleDataObject
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
