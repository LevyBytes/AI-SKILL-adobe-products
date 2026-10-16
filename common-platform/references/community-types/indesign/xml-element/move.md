# XMLElement.move

Community declaration reference: InDesign/2023.

Relocates the element to the requested position.
@param to Location relative to the reference object or inside the containing object.
@param reference Reference object; required when to requests before or after placement. .

```typescript
declare class XMLElement extends XMLItem {
    move(to: LocationOptions, reference: XMLItem | Text): XMLElement
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
