# MenuItems.add

Community declaration reference: InDesign/2023.

Creates a new menu item object.
@param associatedMenuAction Menu action used to implement the menu item.
@param at Placement for the menu item, either relative to the reference object or inside the containing object.
@param reference Reference object; required when at is before or after.
@param withProperties Starting property values for the MenuItem being created.

```typescript
declare class MenuItems {
    add(associatedMenuAction: MenuAction, at?: LocationOptions, reference?: MenuElement, withProperties?: object): MenuItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
