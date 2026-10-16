# Window.Constructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Builds a new window instance.
@param type Window kind. One of: window: produces a simple application main window. (Not supported by Photoshop CS3.) palette: produces a floating palette, a non-modal dialog style. (Not supported by Photoshop CS3.) dialog: produces a modal dialog. This value may also be a ScriptUI resource specification; when it is, the remaining arguments are ignored.
@param title Localizable string for the window title.
@param bounds Position and dimensions for the window.
@param properties Object whose fields are used only while the window is created.

```typescript
declare class Window extends _Control {
    constructor(
      type: "dialog" | "palette" | "window",
      title?: string,
      bounds?: _Bounds,
      properties?: _AddControlPropertiesWindow,
      )
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
