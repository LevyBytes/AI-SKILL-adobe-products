# $.appEncoding

$.appEncoding

### Description

Default character encoding for the application, expressed as an Internet name; examples include "CP1252" and "X-SHIFT-JIS". The implementation and OS determine which values are valid.

Assign a value to change the application's default encoding. The value returned may differ from the value assigned. On Windows, for example, setting "x-latin1" can return the synonymous value "ISO-8859-1".

### Type

String
