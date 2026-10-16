# convert

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Takes the color space plus the color values held by the color object and recasts them into the named color space:

Going to the gray color space throws information away (much as showing a color TV broadcast on a black-and-white set throws information away).

Turning RGB into CMYK ignores whatever black generation or undercolor removal parameters might apply.

Parameters

| Parameter | Description |
| --- | --- |
| colorArray | A color-value array. See Color arrays. |
| cColorspace | Names the destination color space for the conversion. |

Returns

A color array.

Example: running the single line of code shown here yields the array ["CMYK", 0, 1, 1, 0].

```javascript
color.convert(["RGB",1,0,0], "CMYK");
```
