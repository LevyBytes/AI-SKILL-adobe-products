# DrawState

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Describes input state when a ScriptUIGraphics.onDraw() event fires.
Its properties report whether the current control has input focus plus the mouse-button and keypress states. It is passed as the argument to ScriptUIGraphics.onDraw().

```typescript
declare class DrawState {
    /**
    - true while the Alt key is pressed (Windows only).
      */
      readonly altKeyPressed: boolean
    /**

    - true while Caps Lock is pressed.
      */
      readonly capsLockKeyPressed: boolean
    /**

    - true while the Command key is pressed (Mac OS only).
      */
      readonly cmdKeyPressed: boolean
    /**

    - true while the Ctrl key is pressed.
      */
      readonly ctrlKeyPressed: boolean
    /**

    - true when the element has input focus.
      */
      readonly hasFocus: boolean
    /**

    - true while the left mouse button is pressed.
      */
      readonly leftButtonPressed: boolean
    /**

    - true while the middle mouse button is pressed.
      */
      readonly middleButtonPressed: boolean
    /**

    - true while the cursor hovers over this element.
      */
      readonly mouseOver: boolean
    /**

    - true while Num Lock is pressed.
      */
      readonly numLockKeyPressed: boolean
    /**

    - true while the Option key is pressed (Mac OS only).
      */
      readonly optKeyPressed: boolean
    /**

    - true while the right mouse button is pressed.
      */
      readonly rightButtonPressed: boolean
    /**

    - true while the Shift key is pressed.
      */
      readonly shiftKeyPressed: boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
