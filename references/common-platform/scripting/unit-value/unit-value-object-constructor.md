# UnitValue object constructor

The UnitValue constructor returns a new UnitValue object. The keyword new may be omitted:

```javascript
myVal = new UnitValue (value, unit);
myVal = new UnitValue ("value unit");
myVal = new UnitValue (value, "unit");
```

The value is numeric, while the unit is given as a string in abbreviated, singular, or plural form, as listed in the following table.

| Abbreviation | Singular | Plural | Comments |
| --- | --- | --- | --- |
| "in" | "inch" | "inches" | 2.54 cm |
| "ft" | "foot" | "feet" | 30.48 cm |
| "yd" | "yard" | "yards" | 91.44 cm |
| "mi" | "mile" | "miles" | 1609.344 m |
| "mm" | "millimeter" | "millimeters" |  |
| "cm" | "centintimeter" | "centimeters" |  |
| "m" | "meter" | "meters" |  |
| "km" | "kilometer" | "kilometers" |  |
| "pt" | "point" | "points" | inches / 72 |
| "pc" | "pica" | "picas" | points \* 12 |
| "tpt" | "traditional point" | "traditional points" | inches / 72.27 |
| "tpc" | "traditional pica" | "traditional picas" | 12 tpt |
| "ci" | "cicero" | "ciceros" | 12.7872 pt |
| "px" | "pixel" | "pixels" | baseless (see below) |
| "%" | "percent" | "percent" | baseless (see below) |

When an unrecognized unit type is supplied, the type becomes "?", and the UnitValue object is printed as "UnitValue 0.00000".

For example, these formats all produce the same value:

```javascript
myVal = new UnitValue (12, "cm");
myVal = new UnitValue ("12 cm");
myVal = UnitValue ("12 centimeters");
```
