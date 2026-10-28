# Checkbox

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Two-state control that shows a checked box when value is true and an empty box when value is false.
The onClick() callback runs when the user clicks the control or when notify() is called.

```typescript
declare class Checkbox extends _Control {
    /**
    - True when this element has the active state.
    - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
      */
      active: boolean
    /**

    - Character count reserved while calculating this element's preferred size.
      */
      characters: number
    /**

    - Child elements stored as an array.
      */
      readonly children: object[]
    /**

    - ScriptUIGraphics object available for customizing this element's appearance from onDraw().
      */
      readonly graphics: ScriptUIGraphics
    /**

    - Default justification style applied to child text elements.
    - Valid values are left, center, and right. Justification works only when this value is set during element creation.
      */
      justify: _Justify
    /**

    - Key sequence that triggers this element's onShortcutKey() callback; Windows only.
      */
      shortcutKey: string
    /**

    - Localizable text shown by the control.
      */
      text: string
    /**

    - Control selection state.
    - True puts the control in the selected or set state and shows the check mark. False shows an empty box.
      */
      value: boolean
    /**

    - Dispatches a notification message that imitates the requested user-interaction event.
    - @param eventName Control event handler name to invoke. One of: onClick, onChange, onChanging. By default, an edittext control simulates onChange, while controls supporting click behavior simulate onClick.
      */
      notify(eventName?: string): void
    /**

    - Event-handler callback invoked when this element receives keyboard focus.
    - It runs when the user focuses the control by clicking it or tabbing into it.
      */
      onActivate(): void
    /**

    - Event-handler callback invoked after this element is clicked.
      */
      onClick(): void
    /**

    - Event-handler callback invoked when this element gives up keyboard focus.
    - It runs when the user transfers focus from the formerly active control to another control.
      */
      onDeactivate(): void
    /**

    - Event-handler callback invoked just before the window draws.
    - The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
      */
      onDraw(drawState: DrawState): void
    /**

    - Callback run when this element's shortcutKey sequence is entered while its window is active.
    - Windows only.
      */
      onShortcutKey(): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
