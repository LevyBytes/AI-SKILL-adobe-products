# buttonGetCaption

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Reads back the caption attached to a button.

To assign the caption, turn to buttonSetCaption.

Parameters

| Parameter | Description |
| --- | --- |
| nFace | (optional) When given, fetches a caption of the stated type:<br><br>0: (default) normal caption<br><br>1: down caption<br><br>2: rollover caption |

Returns

The button's caption string.

Example: This one sets pointing arrows on either side of the caption of a button field that carries both icon and text.

```javascript
// A mouse enter event
event.target.buttonSetCaption("=> "+ event.target.buttonGetCaption()
    +" <=");

// A mouse exit event
var str = event.target.buttonGetCaption();
str = str.replace(/=>  <=/g, "");
event.target.buttonSetCaption(str);
```

You could get the same look by reusing the same icon for rollover along with the same text plus the inserted arrows for the rollover caption. That route is slower and makes the icon flicker. The code above is fast and smooth because it touches only the caption and leaves the icon alone.
