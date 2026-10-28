# Working with measurement units

InDesign reports coordinates and other measurements using the publication's current units. In some situations, the returned values differ from what the InDesign Transform panel displays. For example, when picas are active, fractional values come back as decimals rather than the picas-and-points notation shown in the Transform panel. "1p6," for example, is returned as "1.5." This avoids forcing scripts/plugins to do arithmetic with measurement strings; adding "0p3.5" to "13p4" fails, while adding .2916 to 13.333, the converted pica values, succeeds.

When adding, subtracting, multiplying, or dividing particular measurement values, first set the related measurement units. After the operation, restore the previous measurement units if needed.

Measurement values can be set as numbers, such as 14.65, or as strings, such as "1p7.1". Numeric values use the publication's current units of measurement. Measurement strings, as shown in the table below, use the units encoded in the string.

Another option is to use measurement overrides, as many sample scripts do. A measurement override is a string with a special character, shown here:

| Override  | Meaning                                      | Example |
| --------- | -------------------------------------------- | ------- |
| c         | Ciceros, with didots after the c when needed | 1.4c    |
| cm        | Centimeters                                  | .635cm  |
| i (or in) | Inches                                       | .25i    |
| mm        | Millimeters                                  | 6.35mm  |
| p         | Picas, with points after the p when needed   | 1p6     |
| pt        | Points                                       | 18pt    |
