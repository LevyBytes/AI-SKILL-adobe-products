# Util, Xfa

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: util; XFA.

## util

### JavaScript APIs — util

A static JavaScript object that gathers a set of utility methods and convenience functions for formatting and parsing strings and dates.

### util methods

### crackURL

Version (Key)

Save-Prefs

Security

Product

7.05

No

No

All

| --- | --- | --- | --- |

Splits a URL apart into the pieces that make it up.

From version 9.0 on, util.crackURL can take apart a URL written with Internet Protocol version 6 (IPv6) addressing. To that end, the object util.crackURL returns gains an extra property, nURLType, which helps you tell the IP type of the URL handed to util.crackURL’s argument.

When a direct URL is skipped in favor of the matching DNS name, no attempt is made to work out the IP type.

Parameters

cURL

A string giving the URL.

Returns

An object holding these properties:

Property

Description

cScheme

The URL’s scheme. This can be file, http or https.

cUser

(Optional) Whatever user name the URL spells out.

cPassword

(Optional) Whatever password the URL spells out.

cHost

The URL’s hostname.

nPort

The URL’s port number.

cPath

(Optional) The path piece of the URL.

cQuery

(Optional) The parameter-string piece of the URL.

cFragment

(Optional) The URL’s fragments.

nURLType

(Version 9.0) An integer property holding 0 when cURL is IPv4 and 1 when cURL is IPv6. (IPv4 and IPv6 stand for Internet Protocol versions 4 and 6, in that order.)

| --- | --- |

A parameter error gets thrown by this method when the argument is absent, the URL is malformed, or the URL scheme is something other than file, http, or https.

Example 1: The following code

```
util.crackURL("http://example.org/myPath?name0=value0&name1=value1#frag");
```

would return

```
   {
       cScheme: "http",
       cHost: "example.org",
       nPort: 80,
       cPath: "/myPath",
       cQuery
: "name0=value0&name1=value1",
       cFragment: "frag"
   }
```

Example 2 (Version 9.0)

A URL built on Internet Protocol version 6 can be split into its parts by version 9.0.

```
var a = util.crackURL("http://[2001:1890:110b:15ce:250:56ff:febb:6111]/Ex");
if ( a.nURLType == 1 )
   console.println("host = [" + a.cHost + "]");
else
   console.println("host = " + a.cHost);
```

### iconStreamFromIcon

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Takes an XObject-based Icon object and produces from it an Icon Stream object.

Parameters

Parameter

Description

oIcon

The Icon object that gets converted, yielding an Icon Stream object.

| --- | --- |

Returns

Icon Stream object

By way of this method, an icon pulled from the Doc importIcon or getIcon methods becomes usable in a method like app.addToolButton, which on its own would take nothing but an Icon Stream object as input.

Example: Bring an icon into the document-level named icons tree and attach a toolbutton to the application.

```
this.importIcon("myIcon", "/C/temp/myIcon.jpg", 0);
var oIcon = util.iconStreamFromIcon(this.getIcon("myIcon"));
app.addToolButton({
    cName: "myButton",
    oIcon: oIcon,
    cExec: "console.println('My Button!');",

     cTooltext: "My button!",
    nPos: 0
});
```

### printd

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Hands back a date rendered in a format you choose.

Parameters

Parameter

Description

cFormat

How the date and time should be formatted. It accepts one of these kinds: - A string laid out as a pattern of supported substrings standing in for date and time data. The recognized date and time strings appear in the table below. - From Acrobat 5.0 on, a number naming the format. The supported values, each shown with a sample of its format, are:

0: PDF date format. Example: D:20000801145605+07’00’

1: Universal. Example: D:20000801145605+07’00’

2: Localized string. Example: 2000/08/01 14:56:05 - From Acrobat 7.0 on, when bXFAPicture is true, this parameter follows the XFA Picture Clause format.

oDate

A Date object to render. You can get Date objects from core JavaScript’s Date constructor or from the util.scand method.

bXFAPicture

(optional, Acrobat 7.0) A Boolean saying whether cFormat is read using the XFA Picture Clause format, which brings broad support for localized dates and times. Consult the date and time picture sections in XFA Specification. The default is false.

| --- | --- |

Returns

The rendered date string.

cFormat String Patterns

String

Effect

Example

mmmm

Long month

September

mmm

Abbreviated month

Sep

mm

Numeric month with leading zero

09

m

Numeric month without leading zero

9

dddd

Long day

Wednesday

ddd

Abbreviated day

Wed

dd

Numeric date with leading zero

03

d

Numeric date without leading zero

3

yyyy

Long year

1997

yy

Abbreviated Year

97

HH

24 hour time with leading zero

09

H

24 hour time without leading zero

9

hh

12 hour time with leading zero

09

h

12 hour time without leading zero

9

MM

minutes with leading zero

08

M

minutes without leading zero

8

ss

seconds with leading zero

05

s

seconds without leading zero

5

tt

am/pm indication

am

t

single digit am/pm indication

a

j

Japanese Emperor Year (abbreviated) - Introduced in Acrobat 6.0. In Acrobat 7.0, this format string has been deprecated in favor of the XFA Picture Clause format.

jj

Japanese Emperor Year - Introduced in Acrobat 6.0. In Acrobat 7.0, this format string has been deprecated in favor of the XFA Picture Clause format.

se as an escape character

| --- | --- | --- |

Example 1: Render the current date in long form:

```
var d = new Date();
console.println("Today is " + util.printd("mmmm dd, yyyy", d));
```

Example 2 (Acrobat 5.0)

Show the date in a local format

```
console.println(util.printd(2, new Date() ));
```

Example 3 (Acrobat 7.0)

Lean on the XFA-Picture Clause to print the current date to the console.

```
// Execute in console
console.println(
    util.printd("EEE, 'the' D 'of' MMMM, YYYY", new Date(), true));
// The output on this day is
Tue, the 13 of July, 2004
```

Locale-Sensitive Picture Clauses. As a rule, picture clauses get processed in the ambient locale. That said, you can direct that picture processing run in a specific locale instead. This comes in handy when you format or parse data tied to a locale other than the ambient one. Here is the syntax for this extension to compound picture clauses:

```
category-name(locale-name){picture-symbols}
```

Run in the console, this code,

```
util.printd("date(fr){DD MMMM, YYYY}", new Date(), true)
```

produces the output for the present day,

```
13 juillet, 2004
```

Broad coverage for Chinese, Chinese (Taiwan), Japanese, and Korean (CCJK) dates and times comes from the XFA-Picture Clause. The sample below — a text field’s custom-format script — renders today’s date for a Japanese locale.

```
event.value = util.printd("date(ja){ggYY/M/D}", new Date(), true)
```

### printf

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Renders one or more arguments into a string driven by a format string. It mirrors the C function that shares its name. The method takes the arguments coming in and turns them into a result string according to a format string (cFormat).

Two kinds of objects make up the format string:

Ordinary characters, which get copied straight into the result string.

Conversion specifications, each one triggering conversion and formatting of the next argument handed to printf in turn.

Every conversion specification is laid out like this:

```
%[,nDecSep][cFlags][nWidth][.nPrecision]cConvChar
```

The table that follows lays out the parts of a conversion specification.

nDecSep

A comma character (,) followed by a digit selects which decimal-and-separator convention applies:

0: Comma separated, period decimal point

1: No separator, period decimal point

2: Period separated, comma decimal point

3: No separator, comma decimal point

cFlags

Applies only to numeric conversions; supply any combination of these characters, in whatever order, to adjust the specification:

+: Forces a sign to be shown on the number every time.

space: When the leading character is not already a sign, one space is inserted ahead of it.

0: Pads the field on the left using zeros.

#: Selects an alternative rendering of the output. With f, a decimal point is always emitted.

nWidth

A number that sets the smallest width the field may occupy. The formatted argument spans at least that many characters — counting the sign and the decimal point — and grows beyond it when required. Should the formatted argument fall short of the requested width, characters are added on its left side until the width is reached. That fill character is a space by default, switching to 0 whenever the zero-padding flag has been requested (cFlags contains 0).

nPrecision

A period character (.) followed by a number stating how many digits trail the decimal point in float conversions.

cConvChar

States the way the argument is to be read:

d: Integer (truncating if necessary)

f: Floating-point number

s: String

x: Integer (truncating if necessary) and formatted in unsigned hexadecimal notation

| --- | --- |

Parameters

Parameter

Description

cFormat

The format string to use.

arguments

Optional argument(s) holding the data that gets substituted for the % tags listed in the format string (the first parameter). Supply exactly as many optional arguments as there are % tags.

| --- | --- |

Note

You cannot hand util.printf an object literal whose properties carry the arguments. Pass the arguments as a normal comma-separated list instead.

Returns

A result string formatted as specified.

Example: Take an irrational number and display it using various formats of util.printf.

```
var n = Math.PI * 100;
console.clear();
console.show();
console.println(util.printf("Decimal format: %d", n));
console.println(util.printf("Hex format: %x", n));
console.println(util.printf("Float format: %.2f", n));
console.println(util.printf("String format: %s", n));
```

Running the script above produces this output:

```
Decimal format: 314
Hex format: 13A
Float format: 314.16
String format: 314.159265358979
```

### printx

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Reshapes the input string cSource under the control of a formatting string, cFormat. Any string works as cFormat, and it may embed these special masking characters:

Value

Effect

?

Copy next character.

X

Copy next alphanumeric character, skipping any others.

A

Copy next alpha character, skipping any others.

9

Copy next numeric character, skipping any others.

‘’\*’’

Copy the rest of the source string from this point on.

‘’'’

Escape character.

>

Upper case translation until further notice.

<

Lower case translation until further notice.

=

Preserve case until further notice (default).

| --- | --- |

Parameters

cFormat

The formatting string to use.

cSource

The source string to use.

| --- | --- |

Returns

The formatted string.

Example: Format a string as a U.S. telephone number.

```
var v = "aaa14159697489zzz";
v = util.printx("9 (999) 999-9999", v);
console.println(v);
```

### readFileIntoStream

Version (Key)

Save-Prefs

Security

Product

10.0

No

No

All

| --- | --- | --- | --- |

Pulls an external file into a JavaScript stream, optionally base64-encodes it, and hands back the data as a base64-encoded stream.

Parameters

Parameter

Description

cDIPath

(optional) A device-independent path pointing at any file on the user's hard drive. Either an absolute path or one relative to the current document is accepted. Leave it out and the File Open dialog appears so the user can pick the file. When you do supply cDIPath, the method runs only in privileged context — during a batch or console event, or while the document carries a certificate trusted to run "embedded high privileged JavaScript".

bEncodeBase64

(optional) When true, the file content is base64-encoded.

| --- | --- |

Returns

The File content delivered as a ReadStream object, optionally base 64-encoded.

Example: Suppose this document holds a text field named myField. The snippet pulls the contents of file c:/data/myData.txt into a ReadStream object, turns that into a string, and shows it inside the multiline text field.

```
var rStream = util.readFileIntoStream("/c/data/myData.txt");
var cFile = util.stringFromStream(rStream);
this.getField("myTextField").value = cFile;
```

### scand

Version (Key)

Save-Prefs

Security

Product

4.0

No

No

All

| --- | --- | --- | --- |

Turns a date into a JavaScript Date object by following the conventions in a format string. Compared with calling the date constructor straight away, this routine gives you far more flexibility.

Note

When the input carries only a two-digit year, scand applies the date horizon heuristic to settle the ambiguity. A year below 50 is treated as belonging to the 21st century (so 2000 is added); a year of 50 or higher belongs to the 20th century (so 1900 is added).

Supply the date cDate in the very format that cFormat lays out.

Parameters

Parameter

Description

cFormat

The conventions used to format the date. The syntax of cFormat matches the one printd uses.

cDate

The date to convert.

| --- | --- |

Returns

A Date object holding the result, or null when the conversion does not succeed.

Example 1:

```
/* Turn the current date into a string. */
var cDate = util.printd("mm/dd/yyyy", new Date());
console.println("Today's date: " + cDate);
/* Parse it back into a date. */
var d = util.scand("mm/dd/yyyy", cDate);
/* Output it in reverse order. */
console.println("Yet again: " + util.printd("yyyy mmm dd", d));
```

Example 2: Pull a value out of a text field, check whether it is a date in the allowed format, then surface the result in an alert box or the console window.

A failed conversion returns null — which happens when the user supplies data other than what was expected. So check the return value against null here.

```
var d= util.scand("mm/dd/yyyy", this.getField("myDate").value);
    if ( d== null )
        app.alert("Please enter a valid date of the form" +

             " "mm/dd/yyyy".")
    else {
        console.println("You entered the date: "
            + util.printd("mmmm dd, yyyy",d));
}
```

### spansToXML

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Turns an array of Span objects into an XML(XFA) String of the kind documented in the PDF Reference.

Parameters

Parameter

Description

An array of Span objects

The Span-object array that gets turned into an XML string.

| --- | --- |

Returns

String

Example: Read the value out of a rich text field, recolor every bit of its text blue, turn it into an XML string, and print that to the console.

```
var f = getField("Text1");
var spans = f.richValue;
for(var index = 0; index < spans.length; index++)
    spans[index].textColor = color.blue;
console.println(util.spansToXML(spans));
```

### streamFromString

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Turns a string into a ReadStream object.

Parameters

Parameter

Description

cString

The string that gets turned into a ReadStream object.

cCharSet

(optional) Which encoding cString uses. Pick from utf-8, utf-16, Shift-JIS, BigFive, GBK, UHC; utf-8 is assumed when omitted.

| --- | --- |

Returns

ReadStream object

Example: Grab whatever response sits in a text field of this document and tack it onto an attached document.

```
var v = this.getField("myTextField").value;
var oFile = this.getDataObjectContents("MyNotes.txt");
var cFile = util.stringFromStream(oFile, "utf-8");
cFile += "rn" + cFile;
oFile = util.streamFromString( cFile, "utf-8");
this.setDataObjectContents("MyNotes.txt", oFile);
```

Here the Doc methods getDataObjectContents and setDataObjectContents work together with util.stringFromStream.

### stringFromStream

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Turns a ReadStream object into a string.

Parameters

Parameter

Description

oStream

The ReadStream object that gets turned into a string.

cCharSet

(optional) Which encoding the string in oStream uses. Pick from utf-8, utf-16, Shift-JIS, BigFive, GBK, UHC; utf-8 is assumed when omitted.

| --- | --- |

Returns

String

Example: Suppose a text file is embedded in this document. The snippet reads what the attachment holds and shows it inside the multiline text field.

```
var oFile = this.getDataObjectContents("MyNotes.txt");
var cFile = util.stringFromStream(oFile, "utf-8");
this.getField("myTextField").value = cFile;
```

In this case getDataObjectContents supplies the file stream belonging to the attached document.

### xmlToSpans

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Turns an XML (XFA) string of the kind documented in the PDF Reference into an array of Span objects, ready to assign as the richValue or richContents of a field or annotation.

Parameters

Parameter

Description

a string

An XML (XFA) string that becomes an array of Span objects.

| --- | --- |

Returns

An Array of Span objects

Example: Pull the rich text string out of "Text1", convert it into XML, then convert that back into an array of Span objects and refill the text field.

```
var f = getField("Text1");
var spans = f.richValue;
var str = util.spansToXML(spans);
var spans = util.xmlToSpans(str);
f.richValue = spans;
```

## XFA

### JavaScript APIs — XFA

Version (Key)

Save-Prefs

Security

Product

6.02

No

No

All

| --- | --- | --- | --- |

Through the XFA object you reach the XFA appModel container. The JavaScript Developer Guide goes into more depth on this.

Both the XMLData.parse and XMLData.applyXPath methods hand back an XFA object.

Example: The code below works out whether the PDF holds Acrobat forms or instead came from LiveCycle Designer with XML forms. You can run it from the console or as a batch sequence; run as a batch sequence, it sorts every selected document into an XML form (dynamic or static) or an Acrobat form.

```
// This script assumes you are using Acrobat 8.0.
console.println("Document name: " + this.documentFileName);
// The xfa object is undefined in an Acrobat form.
if ( typeof xfa == "object" ) {
    if ( this.dynamicXFAForm )
        console.println("  This is a dynamic XML form.");
    else
        console.println("  This is a static XML form.");
    if ( this.XFAForeground )
        console.println("  This document has imported artwork");
}
else console.println("  This is an Acrobat form.");
```
