# Limited support for the $. (Dollar) object

Belonging to ExtendScript, the methods and properties hanging off the $. (Dollar) object are for the most part absent from the JavaScript engine. Which uses of the $. (Dollar) object carry over and which don't is laid out in the table below:

| Unsupported $. | Supported $. |
| --- | --- |
| $.fileName<br>$.hiresTimer<br>$.stack<br>$.evalFile()<br>$.list()<br>$.setenv()<br>$.getenv()<br>$.appEncoding<br>$.buildDate<br>$.decimalPoint<br>$.dictionary<br>$.error<br>$.flags<br>$.includePath<br>$.level<br>$.line<br>$.locale<br>$.localize<br>$.memCache<br>$.os<br>$.screens<br>$.strict<br>$.version | $.build<br>$.engineName (this is unsupported in the Legacy ExtendScript engine)<br>$.global |
