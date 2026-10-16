# Formatted numeric and string output

Example: Take an irrational number and display it using various formats of util.printf.

```javascript
var n = Math.PI * 100;
console.clear();
console.show();
console.println(util.printf("Decimal format: %d", n));
console.println(util.printf("Hex format: %x", n));
console.println(util.printf("Float format: %.2f", n));
console.println(util.printf("String format: %s", n));
```

Running the script above produces this output:

Reference data, output or notation; not an executable JavaScript program.

```text
Decimal format: 314
Hex format: 13A
Float format: 314.16
String format: 314.159265358979
```

Related: [util.printf](printf.md).
