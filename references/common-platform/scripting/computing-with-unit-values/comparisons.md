# Comparisons (=, ==, <, >, <=, >=)

When a unitValue object is compared with a number, JavaScript compares that number to the object's numeric value.

When two unitValue objects are compared, JavaScript converts both to a shared unit and compares the resulting numeric values.

For example:

```javascript
a = new UnitValue ("98 cm");
b = new UnitValue ("1 m");
a < b;   // => true
a < 1;   // => false
a == 98; // => true
```
