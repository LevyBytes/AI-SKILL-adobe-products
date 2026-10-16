# select

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Picks a media player to run a MediaRendition or a RenditionSelector. When the Rendition is a RenditionSelector, select looks over each MediaRendition inside it and settles on the best fit. (Look to type for what RenditionSelector and MediaRendition mean.)

What comes back is a MediaSelection object, which you can turn into a MediaSettings object and from there into a MediaPlayer object.

Parameters

| Parameter | Description |
| --- | --- |
| bWantRejects | (optional) When bWantRejects is true, the rejects property on the returned MediaSelection holds details about the media players passed over while selecting. |
| oContext | (optional) oContext is a MediaSelection.selectContext value carried over from an earlier Rendition.select call. With it you can build a loop that keeps calling Rendition.select until a media player turns up that meets whatever selection tests you care to run in JavaScript. |

Returns

A MediaSelection object

Example 1: Get a usable MediaSelection for this Rendition.

```javascript
var selection = rendition.select();
```

Example 2: Get the name of the selected rendition. This script is executed from a Rendition action event.

```javascript
var selection = event.action.rendition.select();
console.println( "Preparing to play " + selection.rendition.uiName);
```
