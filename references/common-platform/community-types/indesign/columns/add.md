# Columns.add

Community declaration reference: InDesign/2023.

Adds a Column.
@param at Placement for the Column relative to a reference object or inside the table.
@param reference Reference object. Note: it must belong to the table, and is needed only when at contains before or after.
@param withProperties Initial property values supplied during Column creation

```typescript
declare class Columns {
    add(at?: LocationOptions, reference?: Row | Column | Cell | Table, withProperties?: object): any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
