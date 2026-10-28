# _AddControlPropertiesListBox

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Properties accepted when creating a ListBox.
@param name Unique control name.
@param multiselect false, the default, restricts selection to a single item. true permits selecting several items.
@param selected true permits selecting several items.
@param items String array used for the text of each list item. Each entry creates an item object. The text string "-" produces a separator item. Choose one source for entries: this property or the items argument to add(). Do not supply both. Resource Specifications are the main use case for this form.
@param numberOfColumns Number of columns used to show the items; default is 1. With multiple columns, each ListItem object represents one selectable row. Its text and image values define the first-column label, and subitems contains labels for the remaining columns.
@param showHeaders true shows column titles.
@param columnWidths Array of numbers giving each column's preferred width in pixels.
@param columnTitles Matching string array containing the title for each column, appearing only if showHeaders is enabled.

```typescript
interface _AddControlPropertiesListBox {
    name?: string
    multiselect?: boolean
    selected?: boolean
    items?: string[]
    numberOfColumns?: number
    showHeaders?: boolean
    columnWidths?: number[]
    columnTitles?: string[]
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
