# name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | All | String | R/W (Adobe Reader: R only) |

The text the UI displays for this OCG. It serves to identify OCGs, though it need not be unique.

Note

Under Acrobat 6.0 this name can only be read; come Acrobat 7.0 it became readable and writable.

Example: a routine that flips every Watermark OCG.

```javascript
function ToggleWatermark(doc)
{
    var ocgArray = doc.getOCGs();
    for (var i=0; i < ocgArray.length; i++) {
        if (ocgArray[i].name == "Watermark") {
            ocgArray[i].state = !ocgArray[i].state;
        }
    }
}
```
