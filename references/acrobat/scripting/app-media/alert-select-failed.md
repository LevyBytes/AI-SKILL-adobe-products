# alertSelectFailed

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Brings up the usual warning shown after a rendition.select call does not succeed.

Parameters

| Parameter | Description |
| --- | --- |
| oDoc | This alert hangs off the Doc named in oDoc |
| oRejects | (optional) When supplied, this is an array of MediaReject objects of the kind PlayerInfoList.select hands back. |
| bCanSkipAlert | (optional) When set true and the box is ticked by the user, true comes back from the method; otherwise false does. The default is false. |
| bFromUser | (optional) A Boolean that shapes how the alert text reads. Set it true when the code fired from a direct user action, or false when something else — say, choosing a bookmark — set it off. The default is false. |

Returns

With bCanSkipAlert set true, a ticked check box gives back true and an unticked one gives back false.

Note

Should rendition.select come up empty on a usable player while the select parameter bWantRejects is true, the MediaSelection object that comes back holds an array of MediaReject objects; feed that array in here as the oRejects parameter. From there, alertSelectFailed prompts the user to head to the web and grab a suitable player.

Example: Displays Cannot Play Media Clip, with check box.

```javascript
var bRetn = app.media.alertSelectFailed({
    oDoc: this,
    bCanSkipAlert: true
});
```
