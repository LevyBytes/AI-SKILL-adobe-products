# Binary operators (+, -, \*, /, %)

When one operand is a unitValue object and the other operand is a number, JavaScript combines the number with the object's numeric value. The result is a new unitValue object whose value is the computed result.

For example:

```javascript
val = new UnitValue ("10 cm");
res = val * 20;
// res is a UnitValue (200, "cm");
```

When both operands are unitValue objects, JavaScript converts the right operand to the left operand's unit, then applies the operation to the converted numbers. The result is a new unitValue object that keeps the left operand's unit and carries the computed value.

For example:

```javascript
a = new UnitValue ("1 m");
b = new UnitValue ("10 cm");
a + b;
// res is a UnitValue (1.1, "m");
b + a;
// res is a UnitValue (110, "cm");
```
