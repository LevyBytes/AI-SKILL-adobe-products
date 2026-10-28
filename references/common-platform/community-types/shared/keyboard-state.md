# KeyboardState

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Reports the keyboard's active state.
Access through the ScriptUI.environment.keyboardState property.
Query this object's properties at any time to learn the key currently held down and any pressed modifiers.

```typescript
declare class KeyboardState {
    /**
    - True when the Alt or Option key is pressed.
      */
      readonly altKey: boolean
    /**

    - True when the Ctrl key is pressed.
      */
      readonly ctrlKey: boolean
    /**

    - String naming the key currently pressed, such as "a", or an empty string.
      */
      readonly keyName: string
    /**

    - True when the Cmd key on Mac OS or Windows key on Windows is pressed.
      */
      readonly metaKey: boolean
    /**

    - True while Shift is down.
      */
      readonly shiftKey: boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
