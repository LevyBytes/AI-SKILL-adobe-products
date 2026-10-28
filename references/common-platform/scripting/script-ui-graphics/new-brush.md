# newBrush()

controlObj.graphics.newBrush(type, color);

### Description

Allocates a new painting brush.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | BrushType | Brush type. Choose one constant: - ScriptUIGraphics.BrushType.`SOLID_COLOR` - ScriptUIGraphics.BrushType.`THEME_COLOR` |
| color | Array of Numbers | Brush color. With type set to `SOLID_COLOR`, provide three or four numeric entries as [R, B, G, A], representing red, green, blue, and optionally opacity through the alpha channel. Each number must be in the range [0.0...1.0]. Opacity 0 is fully transparent; opacity 1 is fully opaque. With type set to `THEME_COLOR`, provide the theme name string. The host application defines the available theme colors. |

### Returns

ScriptUIBrush object.
