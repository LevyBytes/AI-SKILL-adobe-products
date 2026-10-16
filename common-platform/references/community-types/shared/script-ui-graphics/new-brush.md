# ScriptUIGraphics.newBrush

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Allocates a new brush for painting.
@param type Brush kind. Use ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR.
@param color Brush color. For SOLID_COLOR, use [R, B, G, A] with three or four numeric entries for red, green, blue, and optional opacity (alpha channel). Numbers must fall in [0.0..1.0]; opacity 0 is fully transparent and opacity 1 is fully opaque. For THEME_COLOR, pass the theme name string. The host application supplies the available theme colors.

```typescript
declare class ScriptUIGraphics {
    newBrush(type: typeof ScriptUIGraphics.BrushType, color: number[]): ScriptUIBrush
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
