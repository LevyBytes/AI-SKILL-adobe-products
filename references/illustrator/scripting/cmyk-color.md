# CMYKColor

new CMYKColor()

### Description

CMYKColor defines CMYK color data for places that accept a Color object.

When an RGB document receives CMYK values for a page item, Illustrator converts those CMYK values into RGB. The reverse conversion also occurs when RGB values are supplied in a CMYK document.

Because conversion can discard color detail, choose the color class that corresponds to the document's actual color space.

## Construct and apply a color

Construct a color object with `new CMYKColor()`. Set its [cyan](#cyan), [magenta](#magenta), [yellow](#yellow) and [black](#black) properties to specify the component values, then assign the object to a path item's `fillColor`. The [guarded fill example](#setting-a-cmyk-color) shows the document and path checks and the fill assignment.

## Properties

| Property | Expression | Description | Range | Default | Type and access |
| --- | --- | --- | --- | --- | --- |
| <a id="black"></a> `CMYKColor.black` | `cmykColor.black` | Black component channel. | 0.0-100.0 | 0.0 | Number (double) |
| <a id="cyan"></a> `CMYKColor.cyan` | `cmykColor.cyan` | Cyan component channel. | 0.0-100.0 | 0.0 | Number (double) |
| <a id="magenta"></a> `CMYKColor.magenta` | `cmykColor.magenta` | Magenta component channel. | 0.0-100.0 | 0.0 | Number (double) |
| <a id="typename"></a> `CMYKColor.typename` | `cmykColor.typename` | Class name associated with the referenced object. | | | String; read-only. |
| <a id="yellow"></a> `CMYKColor.yellow` | `cmykColor.yellow` | Yellow component channel. | 0.0-100.0 | 0.0 | Number (double) |

Use [Illustrator color classes](color-classes.md) to choose another concrete color class or remove a fill or stroke.

## Setting a CMYK color

Apply C=30.4, M=32, Y=0 and K=0 to the first path in the active document. The example leaves Illustrator unchanged when no document or path is available.

```javascript
(function () {
    if (app.documents.length === 0) {
        return;
    }
    var paths = app.activeDocument.pathItems;
    if (paths.length === 0) {
        return;
    }

    var fill = new CMYKColor();
    fill.cyan = 30.4;
    fill.magenta = 32;
    fill.yellow = 0;
    fill.black = 0;

    paths[0].filled = true;
    paths[0].fillColor = fill;
}());
```
