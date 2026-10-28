# ScriptUIBrush

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Painting brush object that stores the color or pattern used to fill paths.
Construct it with ScriptUIGraphics.newBrush(). It can be assigned to backgroundColor properties and passed to fillPath().

```typescript
declare class ScriptUIBrush {
    /**
    - Brush color data.
    - For SOLID_COLOR, this paint color is an array [R, B, G, A] with red, green, blue, and alpha values in the range [0.0..1.0]. opacity 0 means fully transparent; opacity 1 means fully opaque.
      */
      readonly color: number[]
    /**

    - Theme identifier.
    - For THEME_COLOR, this is the color theme name used for drawing. The host application defines the available theme colors.
      */
      readonly theme: string
    /**

    - Brush kind, either solid-color or theme-color.
    - Allowed constants: ScriptUIGraphics.BrushType.SOLID_COLOR and ScriptUIGraphics.BrushType.THEME_COLOR
      */
      readonly type: typeof ScriptUIGraphics.BrushType
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
