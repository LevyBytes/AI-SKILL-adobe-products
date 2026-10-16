# dispatch

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Invoked by app.media.alert to deal with alert situations.

Parameters

alert An Alert object (see below).

Returns

A Boolean — true halts any further alert processing, false lets processing carry on.

Alert object

| Properties | Type | Description |
| --- | --- | --- |
| type | String | All alert types |
| doc | Doc object | All alert types |
| fromUser | Boolean | All alert types |
| error | Object | Comes with the Exception type alert. A message property hangs off the error object:<br><br>error: { message: String } |
| errorText | String | Comes with the PlayerError type alert. |
| fileName | String | Comes with the FileNotFound type alert. |
| selection | MediaSelection object | Comes with the SelectFailed type alert. |

Example 1: Bring up a media player while suppressing all of its alerts.

```javascript
app.media.openPlayer({ alerter: null });

// A more elaborate way to do the same thing
app.media.openPlayer(
{
    alerter:
    {
        dispatch() { return true; }
    }
});
```

Example 2: Across every player in the document, record any alerts into a text field and still let the standard alert box show.

These are two alternative alert handlers. Choose one for the document; the `AlertLog` field must exist. The first keeps its count in a closure and the second stores it on the handler.

```javascript
function logAlerts( doc )
{
    var count = 0;
    doc.alerter =
    {
        dispatch: function( alert )
        {
            doc.getField("AlertLog").value += "Alert #"
                + ++count + ": " + alert.type + "\n";
        }
    }
}
logAlerts( this );

// Another way to keep the counter
function logAlertsWithMember( doc )
{
    doc.alerter =
    {
        count: 0,
        dispatch: function( alert )
        {
            doc.getField("AlertLog").value += "Alert #"
                + ++this.count + ": " + alert.type + "\n";
        }
    }
}
logAlertsWithMember( this );
```

Example 3: Take care of the PlayerError alert right here, leaving the rest to default handling.

```javascript
this.media.alerter =
{
    dispatch( alert )
    {
        switch( alert.type )
        {
            case "PlayerError":
            app.alert( "Player error: " + alert.errorText );
            return true;
        }
    }
}
```
