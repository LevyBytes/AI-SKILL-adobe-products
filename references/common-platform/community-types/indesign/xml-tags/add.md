# XMLTags.add

Community declaration reference: InDesign/2023.

Builds a tag.
@param name Tag name.
@param tagColor Tag color, either [R, G, B] using three doubles from 0 to 255, or a UI color.
@param withProperties Property values used at XMLTag creation.

```typescript
declare class XMLTags {
    add(name: string, tagColor: [number, number, number] | UIColors, withProperties: object): XMLTag
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
