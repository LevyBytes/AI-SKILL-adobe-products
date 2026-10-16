# ListItem

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Item object used by a list box, drop-down list, or tree view.
Creation parameters for the parent list can include initial items. Add later items from the parent list by calling add() (ListBox.add(), DropDownList.add(), TreeView.add()) with control type="item"; DropDownList controls can also use type="separator". In a multi-column list box, this object stands for one selectable row. Its text and image values provide the first-column label, and subitems provides labels for additional columns.

```typescript
declare class ListItem {
    /**
    - Checked state for a list item.
    - When true, the item shows the platform-appropriate checkmark. When false, no checkmark is drawn, but the left margin still reserves room so the item aligns with other checkable items. When undefined, no checkmark space is reserved.
      */
      checked: boolean
    /**

    - Expansion state for an item of type node that belongs to a TreeView list control.
    - True means the item is expanded and its children are visible; false means the item is collapsed and its children are hidden.
      */
      expanded: boolean
    /**

    - Image object used as this item's icon.
    - When provided, ScriptUI draws the version appropriate for the current selection state before the text label. For a parent multi-column list box, this applies to the first-column label. The subitems property covers labels in later columns.
      */
      image: ScriptUIImage
    /**

    - 0-based position of this item inside the parent list control's items collection.
      */
      readonly index: number
    /**

    - Parent element, which is a list control.
      */
      readonly parent: _Control
    /**

    - Selection state for this item.
    - True places this item in the parent list's selection. False means the item is not selected. Assign true to select this item in a single-selection list, or to append it to the selection array in a multi-selection list.
      */
      selected: boolean
    /**

    - For a parent that is a multi-column ListBox, labels for this selectable row's extra columns are described here.
    - This array contains JavaScript objects, with length one less than the column count. The member at position 0 supplies the second-column label. Each object can define either or both of these properties:
    - text: display string for the matching label.
    - image: ScriptUIImage object for the matching label.
      */
      readonly subItems: any[]
    /**

    - Localizable label text shown for this item.
    - In a multi-column list box, this is the first-column label. Additional-column labels are described by the subitems property.
      */
      text: string
    /**

    - Element type.
    - The usual value is "item", but an item whose parent is a DropDownList control may have type "separator". Separator items do not react to the mouse and appear as horizontal rules in the menu.
      */
      readonly type: string
    /**

    - Adds an item to this list's choices.
    - The return value is the item control object.
    - @param type Child element type; use the string "item" or "node".
    - @param text Localizable item label text.
    - @param index Position in the current item list after which this entry is inserted. If it is not provided, or if it exceeds the current list length, the new entry is appended.
      */
      add(type: "item" | "node", text?: string, index?: number): ListItem
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
