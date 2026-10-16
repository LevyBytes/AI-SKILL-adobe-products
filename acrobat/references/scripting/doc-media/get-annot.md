# getAnnot

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Searches the document for a ScreenAnnot object matched by page number together with either a name or a title, handing it back; if no screen annotation matches, null comes back instead. Supplying both name and title requires that both line up.

Parameters

| Parameter | Description |
| --- | --- |
| args | The object whose properties get handed to this method. Those properties appear below. |

Here are the properties carried by args.

| Parameter | Description |
| --- | --- |
| nPage | The page number (base 0) where the annotation sits. |
| cAnnotName | (optional) The screen annotation's name. - PDFs that Acrobat produces never make use of cAnnotName. |
| cAnnotTitle | (optional) The screen annotation's title. |

Note

This method's parameters have to arrive as an object literal rather than as an ordered parameter sequence.

Returns

ScreenAnnot object

Example: Because Acrobat's interface lets you set a screen annotation's title yet not its name, getAnnot is generally used like so:

```javascript
var annot= myDoc.media.getAnnot

     ({ nPage: 0,cAnnotTitle: "My Annot Title" });
```

For one more example, look at the one that follows getRendition.
