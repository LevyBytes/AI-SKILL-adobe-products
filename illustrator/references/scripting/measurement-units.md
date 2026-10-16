# Measurement Units

Illustrator records nearly all distance values in points. One inch equals 72 points. Properties such as kerning, tracking, and the aki properties, which support Japanese text composition, are exceptions because they use em units. See Em space units.

Script communication with Illustrator uses points no matter which ruler units are currently shown. When script logic adds, subtracts, multiplies, or divides measurements expressed in non-point units, convert those values to points before passing them along. For coordinates or measurements in inches, for example, multiply each inch value by 72 in the script.

Conversion formulas for common measurement units:

| Unit | Conversion formula |
| --- | --- |
| centimeters | 28.346 points = 1 centimeter |
| inches | 72 points = 1 inch |
| millimeters | 2.834645 points = 1 millimeter |
| picas | 12 points = 1 pica |
| Qs | 0.709 point = 1 Q (1 Q equals 0.23 millimeter) |

The JavaScript UnitValue object type provides utilities for converting units. For details, see JavaScript Tools Guide
