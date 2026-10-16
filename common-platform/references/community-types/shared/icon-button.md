# IconButton

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Mouse-sensitive pushbutton that shows an image rather than text.
The onClick() callback runs when the control is clicked or when notify() is called.

```typescript
declare class IconButton extends _Control {
    /**
    - true when this element is active.
    - The active control holds keyboard focus and accepts keystrokes. For a Button, Windows selects it with Return or Enter, while Mac OS uses the space bar.
      */
      active: boolean
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
    - Same as IconButton.image.
      */
      icon: ScriptUIImage
    /**

    - Key sequence that triggers this element's onShortcutKey() callback (Windows only).
      */
      shortcutKey: string
    title: string
    titleLayout: _TitleLayout
    /**

    - Sends a notification as though the specified user interaction event occurred.
    - @param eventName Control event handler name to call. One of: onClick, onChange, onChanging. By default, it simulates onChange for an edittext control and onClick for controls that support that event.
      */
      notify(eventName?: string): void
    /**

    - Event-handler callback function invoked when this element receives keyboard focus.
    - Runs after the user gives keyboard focus to the control by clicking it or tabbing into it.
      */
      onActivate(): void
    /**

    - Event-handler callback function invoked after this element is clicked.
      */
      onClick(): void
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
