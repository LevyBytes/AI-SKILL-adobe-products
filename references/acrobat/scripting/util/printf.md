# util.printf

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Renders one or more arguments into a string driven by a format string. It mirrors the C function that shares its name. The method takes the arguments coming in and turns them into a result string according to a format string (cFormat).

Two kinds of objects make up the format string:

Ordinary characters, which get copied straight into the result string.

Conversion specifications, each one triggering conversion and formatting of the next argument handed to printf in turn.

Every conversion specification is laid out like this:

Reference data, output or notation; not an executable JavaScript program.

```text
%[,nDecSep][cFlags][nWidth][.nPrecision]cConvChar
```

The table that follows lays out the parts of a conversion specification.

| Format component | Description |
| --- | --- |
| nDecSep | A comma character (,) followed by a digit selects which decimal-and-separator convention applies:<br><br>0: Comma separated, period decimal point<br><br>1: No separator, period decimal point<br><br>2: Period separated, comma decimal point<br><br>3: No separator, comma decimal point |
| cFlags | Applies only to numeric conversions; supply any combination of these characters, in whatever order, to adjust the specification:<br><br>+: Forces a sign to be shown on the number every time.<br><br>space: When the leading character is not already a sign, one space is inserted ahead of it.<br><br>0: Pads the field on the left using zeros.<br><br>#: Selects an alternative rendering of the output. With f, a decimal point is always emitted. |
| nWidth | A number that sets the smallest width the field may occupy. The formatted argument spans at least that many characters — counting the sign and the decimal point — and grows beyond it when required. Should the formatted argument fall short of the requested width, characters are added on its left side until the width is reached. That fill character is a space by default, switching to 0 whenever the zero-padding flag has been requested (cFlags contains 0). |
| nPrecision | A period character (.) followed by a number stating how many digits trail the decimal point in float conversions. |
| cConvChar | States the way the argument is to be read:<br><br>d: Integer (truncating if necessary)<br><br>f: Floating-point number<br><br>s: String<br><br>x: Integer (truncating if necessary) and formatted in unsigned hexadecimal notation |

Parameters

| Parameter | Description |
| --- | --- |
| cFormat | The format string to use. |
| arguments | Optional argument(s) holding the data that gets substituted for the % tags listed in the format string (the first parameter). Supply exactly as many optional arguments as there are % tags. |

Note

You cannot hand util.printf an object literal whose properties carry the arguments. Pass the arguments as a normal comma-separated list instead.

Returns

A result string formatted as specified.

Related references:

- [Formatted numeric and string output](formatted-output-example.md)
