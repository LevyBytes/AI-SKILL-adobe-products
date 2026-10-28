# ScriptUIFont

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Represents the font attributes used when drawing text into a control.
Create it with newFont(). It can be used as a font value and passed to drawString() and measureString().

```typescript
declare class ScriptUIFont {
    /**
    - Font family name.
      */
      readonly family: string
    /**

    - Complete font name, combining the family and style when a style is specified.
      */
      readonly name: string
    /**

    - Font size in points.
      */
      readonly size: number
    /**

    - Font style, chosen from ScriptUI.FontStyle constants.
      */
      readonly style: typeof ScriptUI.FontStyle
    /**

    - Name of a substitution font used when the requested font family or style is unavailable.
      */
      readonly substitute: string
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
