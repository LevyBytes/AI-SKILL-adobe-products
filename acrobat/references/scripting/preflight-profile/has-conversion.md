# hasConversion

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only |

Determines whether the preflight profile includes a conversion targeting a particular PDF standard.

Parameters

| Parameter | Description |
| --- | --- |
| cVersion | A string naming the PDF standard. |

Valid standard keys:

PDF/X-1a:2001

PDF/X-1a:2003

PDF/X-3:2002

PDF/X-3:2003

PDF/X-4:2008

PDF/X-4p:2008

PDF/X-5g:2008

PDF/X-5n:2008

PDF/X-5pg:2008

PDF/A-1a:2005

PDF/A-1b:2005

PDF/E-1:2008

Returns

True when the profile has that conversion set up; otherwise false.
