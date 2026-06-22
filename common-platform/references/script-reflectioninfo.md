# Reflectioninfo, Localizing Extendscript Strings, Locale Names, Testing Localization ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ReflectionInfo; Localizing ExtendScript strings; Locale names; Testing localization; Global localize function; User notification dialogs; Global Methods; Specifying measurement values; UnitValue; Converting pixel and percentage values; Computing with unit values; Preprocessor directives; #include file; #includepath path; #script name; #strict on; #target name; #targetengine enginename.

## ReflectionInfo

### ExtendScript Reflection Interface — ReflectionInfo Object

A ReflectionInfo object carries metadata for a property, a method, or one argument of a method.

ReflectionInfo objects are reachable from a Reflection object's properties and methods arrays, using either names or indexes:

```
obj = new String ("hi");
obj.reflect.methods[0];
obj.reflect.methods["indexOf"];
```

For a method, its argument metadata is stored in the arguments array on that method's ReflectionInfo object and is addressed with an index:

```
obj.reflect.methods["indexOf"].arguments[0];
obj.reflect.methods.indexOf.arguments[0];
```

### ReflectionInfo Attributes

### arguments

obj.reflect.methods[0].arguments

### Description

For a reflected method, this is an array of ReflectionInfo objects, one for each argument.

### Type

Array of ReflectionInfo objects

### dataType

obj.reflect.methods[0].dataType

### Description

Data type reported for the reflected item.

### Type

String. One of:

- "boolean"
- "number"
- "string"
- "Classname": Names an object's class. !!! note Class names start with a capital letter. In that convention, the value String indicates a JavaScript string, while String names a JavaScript String wrapper object.
- \*: Any type; this is the fallback.
- null
- undefined: Return type for a function that returns no value.
- unknown

### defaultValue

obj.reflect.methods[0].defaultValue

### Description

Default assigned to a reflected property or method argument. The value is undefined when no default exists, when the property itself is undefined, or when the reflected item is a method.

### Type

Any

### description

obj.reflect.methods[0].description

### Description

Brief text for the reflected object; undefined is returned when no description exists.

### Type

String

### help

obj.reflect.methods[0].help

### Description

More complete descriptive text for the reflected object; undefined is returned when no description exists.

### Type

String

### isCollection

obj.reflect.methods[0].isCollection

### Description

True means the reflected property or method produces a collection; false means it does not.

### Type

Boolean

### max

obj.reflect.methods[0].max

### Description

Largest numeric value accepted by the reflected item. The value is undefined if no maximum exists or if the item is a method.

### Type

Number

### min

obj.reflect.methods[0].min

### Description

Smallest numeric value accepted by the reflected item. The value is undefined if no minimum exists or if the item is a method.

### Type

Number

### name

obj.reflect.methods[0].name

### Description

Name of the reflected item, expressed as a string or as a numeric array position.

### Type

String or Number

### type

obj.reflect.methods[0].type

### Description

Kind of reflected item.

### Type

String. One of:

- readonly: Read only property.
- readwrite: Property can be read and written.
- createonly: Property is usable only while an object is being created.
- method: Method.

## Localizing ExtendScript strings

Localization adapts an interface through translation and related changes so that it appears designed for a target language. In ExtendScript, scripts can localize the strings used by their user interfaces. At startup, the application selects the language from the operating system's current locale.

For text that appears on screen, localizing the displayed string is often useful. Any string can be localized explicitly with the Global localize function, which receives a localization object containing the string's localized versions.

A localization object is a JavaScript object literal. Its property names are locale names, and its property values are the translated text strings. A locale name uses a standard language code and can also include a region identifier. For the exact syntax, see Locale names.

In this example, the msg object stores text for two locales. That object provides the alert dialog text:

```
msg = { en: "Hello, world", de: "Hallo Welt" };
alert (msg);
```

ExtendScript compares the active locale and platform with the object's properties, then selects the corresponding string. On a German system, for example, de: "Hallo Welt" becomes the string "Hallo Welt".

## Locale names

### Localizing ExtendScript strings — Locale names

A locale name is an identifier string that includes an ISO 639 language specifier. It can also include an ISO 3166 region specifier, with an underscore between the language and region portions. ISO 639 supplies language codes of two letters, including en for English and de for German.

ISO 3166 supplies a separate two-letter region code, which can be appended to the language identifier after an underscore. For instance, en_US means U.S. English, and en_GB means British English.

The following object defines one message for British English, one for every other English variant, and one for all German variants:

```
message = {
    en_GB: "Please select a colour."
    en: "Please select a colour."
    de: "Bitte wÃ¤hlen Sie eine Farbe."
};
```

When platform-specific messages are needed, add another underline character followed by one of the platform names Win, Mac, or Unix. For example, this object supplies a British English message for Mac OS, a different English message for other Mac OS locales, and a general English message for every other platform:

```
pressMsg = {
    en_GB_Mac: "Press Cmd-S to select a colour.",
    en_Mac: "Press Cmd-S to select a color.",
    en: "Press Ctrl-S to select a color."
};
```

Case matters in these identifiers; for example, `EN_US` is invalid.

### How locale names are resolved

1. ExtendScript reads the host application's locale; for example, en_US.
2. It adds the platform identifier; for example, en\_`US_W`in.
3. It searches for a property with that combined name, returning the value string if one exists.
4. If there is no match, it drops the platform identifier (for example, en_US) and tries again.
5. If that still does not match, it removes the region identifier (for example, en) and tries again.
6. If no property is found, it next checks en (that is, the default language is English).
7. If there is still no match, the complete localizer object is returned.

## Testing localization

### Localizing ExtendScript strings — Testing localization

ExtendScript keeps the active locale in $.locale. Whenever the host application's locale changes, this variable is refreshed.

For testing localized strings, temporarily assign another locale to $.locale. To return to normal selection, use null, false, 0, or a zero-length string. Example:

```
$.locale = "ru"; // try your Russian messages
$.locale = null; // restore to the locale of the app
```

## Global localize function

### Localizing ExtendScript strings — Global localize function

### localize()

localize (localization_obj[, args])

localize (ZString)

### Description

The global localize function supplies localized text wherever a displayed string value is needed.

It accepts a specially formatted group of localized versions for a display string and returns the locale-appropriate version.

### Parameters

Parameter

Type

Description

localization_obj

Object

A JavaScript literal object: keys are locale names, and values are the localized text strings. The locale name follows the identifier form specified by the ISO 3166 standard, using two-letter language codes, for instance "en" for English and "de" for German. Example: btnText = { en: "Yes", de: "Ja", fr: "Oui" }; b1 = w.add ("button", undefined, localize (btnText)); Each property's string value can include variables in the forms %1, %2, and so on, which correspond to extra arguments. In the returned string, each variable is replaced by the evaluated result of its matching argument.

args

Any

Optional. Additional JavaScript expressions that match variables in the localization object's string values. The first expression maps to %1, the second maps to %2, and so forth. Each expression is evaluated, and the result is inserted at that variable's location in the returned string.

ZString

ZString

Internal use only. ZString is an internal Adobe format for localized strings that can appear in Adobe scripts. It begins with $$$ and includes a path to the localized string in a ZString dictionary installed with Adobe software. Example: w = new Window ("dialog", localize ("$$$/UI/title1=Sample"));

| --- | --- | --- |

Example:

```
today = {
    en: "Today is %1/%2",
    de: "Heute ist der %2.%1."
};
d = new Date();
alert (localize (today, d.getMonth()+1, d.getDate()));
```

## User notification dialogs

ExtendScript includes global functions for showing brief user messages in standard dialogs for the current platform. Message dialogs come in three forms:

- Alert - Shows a short message with an OK button.
- Confirm - Shows a short message with Yes and No buttons, letting the user accept or decline an action.
- Prompt - Shows a short message, a text entry field, and OK and Cancel buttons so the user can enter a value for the script.

These dialogs support limited customization. Their visual style depends on the platform.

## Global Methods

### User notification dialogs — Global Methods

### alert()

alert(message[, title="Script Alert", errorIcon=false]);

### Description

Displays the platform's standard alert dialog, with OK as its only button and a brief message.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | The string for the displayed message. |
| title | String | Optional. A string to appear as the title of the dialog, if the platform supports a title. Mac OS does not support titles for alert dialogs. The default title string is "Script Alert". |
| errorIcon | Boolean | Optional. When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Default is false. |

### Returns

Returns nothing

### Examples

This figure presents simple alert dialogs on Windows and Mac OS.

This figure presents alert dialogs that use error icons.

### confirm()

confirm(message[,noAsDflt=false, title="Script Alert"]);

### Description

Displays the platform's standard confirmation dialog, with a brief message and choices labeled Yes and No.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | The string for the displayed message. |
| noAsDflt | Boolean | Optional. When true, the No button is the default choice, selected when the user types ENTER. Default is false, meaning that Yes is the default choice. |
| title | String | Optional. A string to appear as the title of the dialog, if the platform supports a title. Mac OS does not support titles for confirmation dialogs. The default title string is "Script Alert". |

### Returns

Returns true when the user clicks Yes, and false when the user clicks No.

### Examples

This figure presents simple confirmation dialogs on Windows and Mac OS.

This figure presents confirmation dialogs where No is the default button.

### prompt()

prompt(message, preset[, title="Script Alert"]);

### Description

Displays the platform's standard prompt dialog, with a brief message, a text edit field, and choices labeled OK and Cancel.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | The string for the displayed message. |
| preset | String | The initial value to be displayed in the text edit field. |
| title | String | Optional. A string to appear as the title of the dialog, if the platform supports a title. Mac OS does not support titles for confirmation dialogs. The default title string is "Script Alert". |

### Returns

Returns the text edit field value when OK is clicked, or null when Cancel is clicked.

### Examples

This figure presents simple prompt dialogs on Windows and Mac OS.

This figure presents confirmation dialogs with a title value specified.

## Specifying measurement values

ExtendScript uses the UnitValue object to model measurements. UnitValue properties and methods let scripts adjust the number, the unit, or both, and convert measurements between units.

## UnitValue

### Specifying measurement values — UnitValue object

Represents a measurement containing both a numeric magnitude and its measurement unit.

### UnitValue object constructor

The UnitValue constructor returns a new UnitValue object. The keyword new may be omitted:

```
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

```
myVal = new UnitValue (12, "cm");
myVal = new UnitValue ("12 cm");
myVal = UnitValue ("12 centimeters");
```

## Converting pixel and percentage values

### Specifying measurement values — Converting pixel and percentage values

Converting a measurement from one unit to another depends on a shared base unit. For length measurements, for example, the meter serves as that base. Every length unit can be translated into meters, which allows conversion from any length unit to any other.

Pixels and percentages lack a universal base unit. Pixel values depend on display resolution, while percentage values depend on a fixed total measurement.

- To convert pixels to length units, the size of one pixel must be known. Pixel size varies with display resolution. A common display-resolution value is 72 dpi, meaning 72 pixels per inch. At 72 dpi, the pixel conversion base is 0.013889 inches (1/72 inch).
- Percentage values refer to a total measurement. For example, 10% of 100 inches equals 10 inches, while 10% of 1 meter equals 0.1 meters. A percentage conversion base is the unit value that represents 100%.

A unitValue object's default baseUnit is 0.013889 inches, which is the 72 dpi pixel base. For pixels at another dpi, or for percentages, set baseUnit to the required value. The baseUnit value is also a unitValue object, with both magnitude and unit.

For systems with a different DPI, modify the UnitValue.baseUnit class value to change the default applied to newly created unitValue objects. To double pixel resolution, for example:

```
UnitValue.baseUnit = UnitValue (1/144, "in"); //144 dpi
```

To reinstate the default, set the class property to null:

```
UnitValue.baseUnit = null; //restore default
```

For a specific unitValue object, override the default by setting that object's property. This example creates a 96 dpi pixel unitValue object:

```
pixels = UnitValue (10, "px");
myPixBase = UnitValue (1/96, "in");
pixels.baseUnit = myPixBase;
```

With percentage measurements, assign baseUnit to the measurement value that represents 100%. This example defines 40% against a 10 feet base:

```
myPctVal = UnitValue (40, "%");
myBase = UnitValue (10, "ft")
myPctVal.baseUnit = myBase;
```

Call as() to express the percentage in another unit:

```
myFootVal = myPctVal.as ("ft"); // => 4
myInchVal = myPctVal.as ("in"); // => 36
```

The same approach converts an absolute measurement to pixels or percents:

```
myMeterVal = UnitValue (10, "m"); // 10 meters
myBase = UnitValue (1, "km");
myMeterVal.baseUnit = myBase; //as a percentage of 1 kilometer
pctOfKm = myMeterVal.as ('%'); // => 1
myVal = UnitValue ("1 in"); // Define measurement in inches
// convert to pixels using default base
myVal.convert ("px"); // => value=72 type=px
```

## Computing with unit values

### Specifying measurement values — Computing with unit values

UnitValue objects are valid inside JavaScript computation expressions. How the object participates depends on the operator category.

### Unary operators (~, !, +, -)

| Operator | Behaviour |
| --- | --- |
| ~unitValue | Result is a new UnitValue with the same type, but value converted to a 32-bit integer and inverted bitwise. |
| !unitValue | Result is true if the numeric value is nonzero, false if it is not. |
| +unitValue | Result is a new UnitValue with the same type and value as the original. |
| -unitValue | Result is a new UnitValue with the same type and negated value from the original |

### Binary operators (+, -, \*, /, %)

When one operand is a unitValue object and the other operand is a number, JavaScript combines the number with the object's numeric value. The result is a new unitValue object whose value is the computed result.

For example:

```
val = new UnitValue ("10 cm");
res = val * 20;
// res is a UnitValue (200, "cm");
```

When both operands are unitValue objects, JavaScript converts the right operand to the left operand's unit, then applies the operation to the converted numbers. The result is a new unitValue object that keeps the left operand's unit and carries the computed value.

For example:

```
a = new UnitValue ("1 m");
b = new UnitValue ("10 cm");
a + b;
// res is a UnitValue (1.1, "m");
b + a;
// res is a UnitValue (110, "cm");
```

### Comparisons (=, ==, <, >, <=, >=)

When a unitValue object is compared with a number, JavaScript compares that number to the object's numeric value.

When two unitValue objects are compared, JavaScript converts both to a shared unit and compares the resulting numeric values.

For example:

```
a = new UnitValue ("98 cm");
b = new UnitValue ("1 m");
a < b;   // => true
a < 1;   // => false
a == 98; // => true
```

## Preprocessor directives

ExtendScript includes preprocessor directives for bringing in external scripts, naming scripts, choosing a JavaScript engine, and setting selected flags.

Write directives either as a C-style statement whose first character is #, or in comment form with @:

```
#include "file.jsxinc"
//@include "file.jsxinc"
```

When a directive accepts arguments and an argument contains any nonalphanumeric character, wrap that argument in single or double quotes. Paths and file names commonly require quotes because they include dots or slashes.

## #include file

### Preprocessor directives — #include file

Includes a JavaScript source file located elsewhere. The named file's contents are inserted into the current file at the directive's position. The file argument uses an Adobe portable file specification. See Specifying paths.

By convention, JavaScript include files use the .jsxinc extension. For example:

```
#include "../include/lib.jsxinc"
//@include "../include/file.jsxinc"
```

Use the #includepath preprocessor directive to define one or more paths searched by an #include statement.

When the include file cannot be located, ExtendScript raises a run-time error. Included source code does not appear in the debugger, so breakpoints cannot be placed in it.

## #includepath path

### Preprocessor directives — #includepath path

Specifies one or more paths used by #include when finding files to include. Semicolons (;) separate the path names.

When a #include file name begins with a slash (/), it is treated as an absolute path, and the include paths are bypassed. In other cases, ExtendScript tries to locate the file by adding each #includepath path before the file name.

For example:

```
#includepath "include;../include"
#include "file.jsxinc"
//@includepath "include;../include"
//@include "file.jsxinc"
```

Multiple #includepath statements can be used; each execution changes the active path list.

As a fallback, ExtendScript also reads JSINCLUDE from the environment and treats its contents as include paths.

Some engines may define include paths in advance. If they do, #includepath entries are searched before those predefined paths. For example, if an engine has predefined paths predef;predef/include, the previous example produces this lookup order:

- file.jsxinc: literal lookup
- include/file.jsxinc: first #includepath path
- ../include/file.jsxinc: second #includepath path
- predef/file.jsxinc: first predefined engine path
- predef/include/file.jsxinc: second predefined engine path

## #script name

### Preprocessor directives — #script name

Gives a script a name. Quotes can be omitted, except when the name includes whitespace or special characters. For example:

```
#script SetupPalette
#script "Load image file"
```

The Toolkit Editor tab displays the name value. Scripts without a name receive a generated unique name based on a number.

## #strict on

### Preprocessor directives — #strict on

Enables strict error checking. For the related setting on the Dollar ($) object, see strict property.

## #target name

### Preprocessor directives — #target name

Targets this JSX file at the named application. Treat name as an application specifier; see Application and namespace specifiers. Quotes around the value are optional.

When the Toolkit is the registered handler for the .jsx extension, as it normally is, opening that file launches the target application so the script can run.

Without this directive, the Toolkit opens the script and shows it. A user may launch a file by double-clicking it in a file browser; a script may also open one through a File object's execute method.

## #targetengine enginename

### Preprocessor directives — #targetengine enginename

Identifies the JavaScript engine, inside the selected target application, that should run this JSX file.

Adobe Illustrator CS5 and Adobe InDesign CS5 support this directive; other applications skip over it.

- In Adobe Illustrator CS5 and Adobe InDesign CS5, when the requested engine is missing and the script begins inside the application, rather than from the ExtendScript Toolkit or an interapplication message, the application creates a JavaScript engine with this name and keeps it available until the application session ends.
- When the script comes from outside the application and no engine with that name exists, the directive has no effect.

## Operator overloading

In ExtendScript, a class can supply a method whose name matches an operator, letting that class customize or replace the behavior of a math or Boolean operator. The following sample defines the addition (+) operator for MyClass. Here, the overloaded addition operator adds the operand to the value property:

```
// define the constructor method
function MyClass (initialValue) {
    this.value = initialValue;
}

// define the addition operator
MyClass.prototype ["+"] = function (operand) {
    return this.value + operand;
}
```

After that definition, objects of this class can participate in the "+" operation:

```
var obj = new MyClass (5);
Result: [object Object]
obj + 10;
Result: 15
```

The operators listed below can be overloaded:

Category

Operators

Unary

+, ~

Binary

- +, \*, /, %, ^
- <, <=, ==
- <<, >>, >>>
- &, \|, ===

| --- | --- |

- Operators > and >= use NOT applied to operator <= and operator <.
- Compound assignment forms, including \*=, are unsupported.

Each operator overload implementation has to return the operation result. Return undefined when the default operation should be used.

Unary operator functions act on this, while binary versions use this plus the first argument. Both + and - can be implemented in unary and binary form. An undefined first argument means the operation is unary; a supplied first argument means it is binary.

For a binary operator, the second argument tells you which operand order is being evaluated. With noncommutative operators, either support both operand orders in the function or return undefined for unsupported combinations. Example implementation:

```
this ["/"] = function (operand, rev) {
    if (rev) {
        // do not resolve operand / this
        return;
    } else {
        // resolve this / operand
        return this.value / operand;
}
```

## Integrating XML into JavaScript

ExtendScript includes XML support through the XML object, letting JavaScript scripts work with XML content. The feature covers part of ECMA-357, the E4X specification. Details are available at: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-357.pdf
