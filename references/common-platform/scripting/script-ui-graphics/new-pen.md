# newPen()

controlObj.graphics.newPen(type, color, lineWidth);

### Description

Allocates a new drawing pen.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | PenType | Pen type. Choose one constant: - ScriptUIGraphics.PenType.`SOLID_COLOR` - ScriptUIGraphics.PenType.`THEME_COLOR` |
| color | Array of Numbers | Pen color. With type set to `SOLID_COLOR`, provide three or four numeric entries as [R, B, G, A], representing red, green, blue, and optionally opacity through the alpha channel. Each number must be in the range [0.0...1.0]. Opacity 0 is fully transparent; opacity 1 is fully opaque. With type set to `THEME_COLOR`, provide the theme name string. The host application defines the available theme colors. |
| lineWidth | Pixels | Line width, in pixels, used by this pen. The line is centered around the current point. For example, when lineWidth is 2, drawing from (0, 10) to (5, 10) paints the two pixel rows adjacent to y-position 10, one above and one below. |

### Returns

ScriptUIPen object.
