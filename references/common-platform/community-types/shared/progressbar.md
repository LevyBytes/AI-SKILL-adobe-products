# Progressbar

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Horizontal bar with an indicator showing operation progress.
Progressbar controls are always horizontal. The value property stores the progress indicator's current position, defaulting to 0. A minvalue property exists, but it is always 0; assignments to any other value are ignored without error.

```typescript
declare class Progressbar extends _Control {
    /**
    - Child elements stored as an array.
      */
      readonly children: object[]
    /**

    - ScriptUIGraphics object available for customizing this element's appearance from onDraw().
      */
      readonly graphics: ScriptUIGraphics
    /**

    - Highest value in the range. Default is 100.
      */
      maxvalue: number
    /**

    - Lowest value in the range; always 0. Assignments to other values are ignored.
      */
      minvalue: number
    /**

    - Indicator's current position.
    - Values outside the 0 to maxvalue range are automatically clamped to the nearest boundary.
      */
      value: number
    /**

    - Event-handler callback invoked just before the window draws.
    - The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
      */
      onDraw(drawState: DrawState): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
