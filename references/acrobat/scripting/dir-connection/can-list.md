# canList

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | All | Boolean | R |

Reports whether the directory connection can enumerate every one of its entries. In practice some directories carry so many entries that doing so isn't feasible.

Example: Listing the local trusted identity list is something the AAB directory permits.

```javascript
var sh = security.getHandler( "Adobe.AAB" );
var dc = sh.directories[0].connect();
console.println( "CanList = " + dc.canList );
```
