# Image

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Shows an icon or image.

```typescript
declare class Image extends _Control {
    /**
    - Array containing child elements.
      */
      readonly children: object[]
    /**

    - Graphics object available for customizing this element during the onDraw() event.
      */
      readonly graphics: ScriptUIGraphics
    /**

    - Image object that supplies the image to draw.
      */
      image: ScriptUIImage
    /**

    - Image object that supplies the image to draw.
    - Same as Image.image.
      */
      icon: ScriptUIImage
    /**

    - Key sequence that triggers the onShortcutKey() callback for this element (Windows only).
      */
      shortcutKey: string
    title: string
    titleLayout: _TitleLayout
    /**

    - Event-handler callback function invoked when this element receives keyboard focus.
    - Runs after the user gives keyboard focus to the control by clicking it or tabbing into it.
      */
      onActivate(): void
    /**

    - Event-handler callback function invoked when this element gives up keyboard focus.
    - Runs when focus moves from the previously active control to another control.
      */
      onDeactivate(): void
    /**

    - Event-handler callback function invoked just before the window is drawn.
    - The script may adjust or control appearance through the control's associated ScriptUIGraphics object. The handler receives one DrawState object.
      */
      onDraw(drawState: DrawState): void
    /**

    - Event-handler callback function invoked when this element's shortcutKey sequence is typed in the active window.
    - Windows only.
      */
      onShortcutKey(): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
