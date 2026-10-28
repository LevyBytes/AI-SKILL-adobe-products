# ScriptUIBrush Object Attributes

These properties are available on the object:

| Property | Type | Description |
| --- | --- | --- |
| color | Array of Number | When type is `SOLID_COLOR`, color supplies the paint color. Use an array shaped [R, B, G, A], where red, green, blue, and opacity (alpha channel) are numbers in the range [0.0...1.0]. Opacity 0 means fully transparent; opacity 1 means fully opaque. |
| theme | String | For `THEME_COLOR`, theme names the color theme used as the fill texture. The host application defines the available theme colors. |
| type | Number | type chooses the brush kind, using one of these constants: - ScriptUIGraphics.BrushType.`SOLID_COLOR` - ScriptUIGraphics.BrushType.`THEME_COLOR` |
