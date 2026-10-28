# Timeline.expandFolder

Community declaration reference: Animate/22.0.

Opens or closes the specified folder layer or layers. If no layer is specified, the operation targets the current layer.
@param bExpand Boolean that, when true, opens the folder; false closes it.
@param bRecurseNestedParents Boolean that, when true, opens or closes every layer inside the specified folder according to bExpand. This parameter is optional.
@param index Optional zero-based index for the folder to open or close. Use -1 to target all layers; bRecurseNestedParents must also be true. In the Flash authoring tool, this property corresponds to the Expand All/Collapse All menu items.

```typescript
declare class Timeline {
    expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, index?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
