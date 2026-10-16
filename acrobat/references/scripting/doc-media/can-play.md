# canPlay

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Object | R |

Reports whether a document is permitted to play multimedia. Whether playback can happen hinges on the user's Trust Manager preferences plus additional factors. Authoring mode, for instance, blocks playback.

What doc.media.canPlay hands back is an object carrying both a yes/no verdict and, where playback is blocked, the reason behind it.

When playback is permitted, the presence of canPlay.yes signals as much. (For now it is an empty object, though future versions may stuff data inside it.) Here is one easy way to probe for it:

```javascript
if( doc.media.canPlay.yes )
{
    // We can play back multimedia for this document
}
```

When playback is blocked, what shows up instead is the canPlay.no object. Just as with canPlay.yes, you can either test simply whether canPlay.no is present or dig into it for the reason playback was denied. Inside canPlay.no you will find at least one of the following properties, and possibly others added down the road:

| Property | Description |
| --- | --- |
| authoring | Cannot play when in authoring mode. |
| closing | Cannot play because the document is closing. |
| saving | Cannot play because the document is saving. |
| security | Cannot play because of security settings. |
| other | Cannot play for some other reason. |

On top of that, canPlay.canShowUI tells you whether alert boxes or any other interface elements may be shown in reaction to this specific playback denial.

Example: Fetch the canPlay object and examine the situation where the document's media cannot be played.

```javascript
var canPlay = doc.media.canPlay;
if( canPlay.no )
{
    // We can't play, why not?
    if( canPlay.no.security )
    {
        // The user's security settings prohibit playback,
        // are we allowed to put up alerts right now?
        if( canPlay.canShowUI )
            app.alert( "Security prohibits playback" );
        else
            console.println( "Security prohibits playback" );
    }
    else
    {
        // Can't play for some other reason, handle it here
    }
}
```
