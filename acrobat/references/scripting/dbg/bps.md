# bps

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | P | Array | R |

An array whose breakpoint generic objects line up with the breakpoints set in the debugger. Each such object carries the properties and methods below.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| fileName | string | R | A string pinpointing the script within the debugger. |
| condition | string | R | A JavaScript expression the debugger weighs to judge whether to halt at a breakpoint; this is what drives conditional breakpoints. Its default is the string “true”. |
| lineNum | number | R | The script line at which the breakpoint sits. |

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| toString | none | String | A string that spells out the breakpoint. |

Example: Enumerate the breakpoints that are active right now.

```javascript
var db = dbg.bps
for ( var i = 0; i < db.length; i++ )
{
    for ( var o in db[i] ) console.println(o + ": " + db[i][o]);
    console.println("------------------------------------");
}
```

See sb for another example of usage.
