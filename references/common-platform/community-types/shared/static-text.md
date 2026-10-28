# StaticText

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Text label whose value cannot be edited by the user.

```typescript
declare class StaticText extends _Control {
    /**
    - Always false. This element cannot receive input focus.
    - The active control holds keyboard focus and accepts keystrokes. For a Button, Windows selects it with Return or Enter, while Mac OS uses the space bar.
      */
      active: boolean
    /**

    - Number of characters to reserve when computing the element's preferred size.
      */
      characters: number
    /**

    - Array containing child elements.
      */
      readonly children: object[]
    /**

    - Graphics object available for customizing this element during the onDraw() event.
      */
      readonly graphics: ScriptUIGraphics
    /**

    - Text justification style.
    - One of left, center, or right. Justification works only when this value is set while the element is created.
      */
      justify: _Justify
    /**

    - Key sequence that triggers this element's onShortcutKey() callback (Windows only).
      */
      shortcutKey: string
    /**

    - Localizable string displayed as text.
      */
      text: string
    /**

    - Sends a notification as though the specified user interaction event occurred.
    - @param eventName Control event handler name to call. One of: onClick, onChange, onChanging. By default, it simulates onChange for an edittext control and onClick for controls that support that event.
      */
      notify(eventName?: string): void
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
