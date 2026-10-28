# util.printd

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Hands back a date rendered in a format you choose.

Parameters

| Parameter | Description |
| --- | --- |
| cFormat | How the date and time should be formatted. It accepts one of these kinds: - A string laid out as a pattern of supported substrings standing in for date and time data. The recognized date and time strings appear in the table below. - From Acrobat 5.0 on, a number naming the format. The supported values, each shown with a sample of its format, are:<br><br>0: PDF date format. Example: D:20000801145605+07’00’<br><br>1: Universal. Example: D:20000801145605+07’00’<br><br>2: Localized string. Example: 2000/08/01 14:56:05 - From Acrobat 7.0 on, when bXFAPicture is true, this parameter follows the XFA Picture Clause format. |
| oDate | A Date object to render. You can get Date objects from core JavaScript’s Date constructor or from the util.scand method. |
| bXFAPicture | (optional, Acrobat 7.0) A Boolean saying whether cFormat is read using the XFA Picture Clause format, which brings broad support for localized dates and times. Consult the date and time picture sections in XFA Specification. The default is false. |

Returns

The rendered date string.

cFormat String Patterns

| String | Effect | Example |
| --- | --- | --- |
| mmmm | Long month | September |
| mmm | Abbreviated month | Sep |
| mm | Numeric month with leading zero | 09 |
| m | Numeric month without leading zero | 9 |
| dddd | Long day | Wednesday |
| ddd | Abbreviated day | Wed |
| dd | Numeric date with leading zero | 03 |
| d | Numeric date without leading zero | 3 |
| yyyy | Long year | 1997 |
| yy | Abbreviated Year | 97 |
| HH | 24 hour time with leading zero | 09 |
| H | 24 hour time without leading zero | 9 |
| hh | 12 hour time with leading zero | 09 |
| h | 12 hour time without leading zero | 9 |
| MM | minutes with leading zero | 08 |
| M | minutes without leading zero | 8 |
| ss | seconds with leading zero | 05 |
| s | seconds without leading zero | 5 |
| tt | am/pm indication | am |
| t | single digit am/pm indication | a |
| j | Japanese Emperor Year (abbreviated) - Introduced in Acrobat 6.0. In Acrobat 7.0, this format string has been deprecated in favor of the XFA Picture Clause format. |  |
| jj | Japanese Emperor Year - Introduced in Acrobat 6.0. In Acrobat 7.0, this format string has been deprecated in favor of the XFA Picture Clause format. |  |
|  | se as an escape character |  |

Related references:

- [Date formatting and localized picture clauses](date-formatting-examples.md)
