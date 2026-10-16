# MenuSeparators.add

Community declaration reference: InDesign/2023.

Creates a new menu separator object.
@param at Placement for the menu separator, either relative to the reference object or inside the containing object.
@param reference Reference object; required when at is before or after.
@param withProperties Initial property values for the new MenuSeparator.

```typescript
declare class MenuSeparators {
    add(at?: LocationOptions, reference?: MenuElement, withProperties?: object): MenuSeparator
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
