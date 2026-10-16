# state

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

Holds the OCG's present on/off state.

Flipping an OCG's state leaves the document clean; the OCGs snap back to their initial state the next time the document loads.

Example: switch on every OCG belonging to the supplied document.

```javascript
function TurnOnOCGsForDoc(doc)
{
    var ocgArray = doc.getOCGs();
    for (var i=0; i < ocgArray.length; i++)
        ocgArray[i].state = true;
}
```
