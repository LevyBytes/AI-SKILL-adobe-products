# _AddControlPropertiesWindow

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Properties accepted when creating a Window.
@param resizeable true lets the user resize the window. Default is false.
@param su1PanelCoordinates Photoshop only. true makes the child panels in this window automatically adjust their own children for compatibility with Photoshop CS. Photoshop CS measured vertical coordinates from outside the frame. Default is false. Child panels may override the parent window's setting.
@param closeButton Bridge only. true adds a close button to the title bar when the platform and window type support it. false omits that button. Default is true. Dialogs do not use it.
@param maximizeButton Bridge only. true adds a title-bar button that expands the window to its maximum size, usually the full screen, when the platform and window type support it. false omits that button. Default is false for type palette and true for type window. Dialogs do not use it.
@param minimizeButton Bridge only. true adds a title-bar button that minimizes or iconifies the window when the platform and window type support it. false omits that button. Default is false for type palette and true for type window. In Mac OS, main windows do not support a minimize button. Dialogs do not use it.
@param independent true makes a type window independent from other application windows, allowing it to be hidden behind them in Windows. In Mac OS, this has no effect. Default is false.
@param borderless true removes the title bar and borders. Settings for title-bar and border controls have no effect.

```typescript
interface _AddControlPropertiesWindow {
    resizeable?: boolean
    su1PanelCoordinates?: boolean
    closeButton?: boolean
    maximizeButton?: boolean
    minimizeButton?: boolean
    independent?: boolean
    borderless?: boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
