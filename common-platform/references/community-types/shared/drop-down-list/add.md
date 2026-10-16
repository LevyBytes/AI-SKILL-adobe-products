# DropDownList.add

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Adds either an item or a separator to this list's choices.
For type="item", the returned value is the item control object; for type="separator", the returned value is null.
@param type Child element type. Either item, meaning a basic selectable item with a text label, or separator.
@param text Localizable item label text.
@param index Position in the current item list after which this entry is inserted. If it is not provided, or if it exceeds the current list length, the new entry is appended.

```typescript
declare class DropDownList extends _Control {
    add(type: "item", text?: string, index?: number): ListItem
}
```

```typescript
declare class DropDownList extends _Control {
    add(type: "separator", text?: string, index?: number): null
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
