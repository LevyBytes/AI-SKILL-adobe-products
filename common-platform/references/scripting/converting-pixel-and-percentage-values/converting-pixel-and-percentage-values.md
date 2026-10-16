# Specifying measurement values — Converting pixel and percentage values

Converting a measurement from one unit to another depends on a shared base unit. For length measurements, for example, the meter serves as that base. Every length unit can be translated into meters, which allows conversion from any length unit to any other.

Pixels and percentages lack a universal base unit. Pixel values depend on display resolution, while percentage values depend on a fixed total measurement.

- To convert pixels to length units, the size of one pixel must be known. Pixel size varies with display resolution. A common display-resolution value is 72 dpi, meaning 72 pixels per inch. At 72 dpi, the pixel conversion base is 0.013889 inches (1/72 inch).
- Percentage values refer to a total measurement. For example, 10% of 100 inches equals 10 inches, while 10% of 1 meter equals 0.1 meters. A percentage conversion base is the unit value that represents 100%.

A unitValue object's default baseUnit is 0.013889 inches, which is the 72 dpi pixel base. For pixels at another dpi, or for percentages, set baseUnit to the required value. The baseUnit value is also a unitValue object, with both magnitude and unit.

For systems with a different DPI, modify the UnitValue.baseUnit class value to change the default applied to newly created unitValue objects. To double pixel resolution, for example:

```javascript
UnitValue.baseUnit = UnitValue (1/144, "in"); //144 dpi
```

To reinstate the default, set the class property to null:

```javascript
UnitValue.baseUnit = null; //restore default
```

For a specific unitValue object, override the default by setting that object's property. This example creates a 96 dpi pixel unitValue object:

```javascript
pixels = UnitValue (10, "px");
myPixBase = UnitValue (1/96, "in");
pixels.baseUnit = myPixBase;
```

With percentage measurements, assign baseUnit to the measurement value that represents 100%. This example defines 40% against a 10 feet base:

```javascript
myPctVal = UnitValue (40, "%");
myBase = UnitValue (10, "ft")
myPctVal.baseUnit = myBase;
```

Call as() to express the percentage in another unit:

```javascript
myFootVal = myPctVal.as ("ft"); // => 4
myInchVal = myPctVal.as ("in"); // => 36
```

The same approach converts an absolute measurement to pixels or percents:

```javascript
myMeterVal = UnitValue (10, "m"); // 10 meters
myBase = UnitValue (1, "km");
myMeterVal.baseUnit = myBase; //as a percentage of 1 kilometer
pctOfKm = myMeterVal.as ('%'); // => 1
myVal = UnitValue ("1 in"); // Define measurement in inches
// convert to pixels using default base
myVal.convert ("px"); // => value=72 type=px
```
