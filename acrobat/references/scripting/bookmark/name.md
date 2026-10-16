# name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader | String | R/W (Adobe Reader: R only) |

The string of text shown to the reader for this bookmark in the navigation panel.

Example: Put the top-level bookmark in bold.

```javascript
var bkm = this.bookmarkRoot.children[0];
console.println( "Top-level bookmark name: " + bkm.name );
```

The name property also shows up in the example that follows the children property.
