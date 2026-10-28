# Window.add

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Creates a control or container, returns it, and places it among this window's children.
@param type Child element type, using the same values as the type property. The JavaScript Tools Guide lists the available control types.
@param bounds Bounds data describing the new child element's size and position relative to the parent. When supplied, it is converted into a Bounds object and assigned to the new object's bounds property.
@param text Localizable text or label. This initial content becomes the title, label, or displayed contents according to the control type. When present, it is assigned to the new object's text property.
@param properties Object with creation properties for the new child, used only during element creation. The supported creation properties vary by element type. See the properties property for each control type.

```typescript
declare class Window extends _Control {
    add: _AddControl
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
