# valueAsString

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | All | String | R |

Gives back a field's value as a JavaScript string.

The difference from value is that value tries to coerce a field's contents into an accepted format. Take a field holding "020": value yields the integer 20, whereas valueAsString yields the string "020".

Fields

all except button
