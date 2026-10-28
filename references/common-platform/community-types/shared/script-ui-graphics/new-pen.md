# ScriptUIGraphics.newPen

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Creates a new drawing pen object.
@param type Pen kind. Use ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR.
@param color Pen color. For SOLID_COLOR, use [R, B, G, A] with three or four numeric entries for red, green, blue, and optional opacity (alpha channel). Each number must be in [0.0..1.0]; opacity 0 is fully transparent and opacity 1 is fully opaque. For THEME_COLOR, use the theme name string. The host application supplies theme colors.
@param width Pen-line width in pixels. The line is centered on the current point. For example, value 2 causes a line from (0, 10) to (5, 10) to paint the two pixel rows around y = 10.

```typescript
declare class ScriptUIGraphics {
    newPen(type: typeof ScriptUIGraphics.PenType, color: number[], width: number): ScriptUIPen
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
