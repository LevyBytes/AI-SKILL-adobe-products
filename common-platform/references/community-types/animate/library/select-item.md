# Library.selectItem

Community declaration reference: Animate/22.0.

Selects the named library item.
@returns Boolean result: true means the named item exists; false means it does not.
@param namePath String naming the item. For an item inside a folder, include its name and path with slash notation.
@param bReplaceCurrentSelection Boolean value choosing whether to replace the current selection or add the item to it. The default value is true, replacing the current selection. This parameter is optional.
@param bSelect Boolean value choosing whether an item is selected or deselected. Default: true, meaning select. Optional.

```typescript
declare class Library {
    selectItem(namePath: string, bReplaceCurrentSelection: boolean, bSelect?: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
