# viewState

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.05 | No | No | All | Object | R/W |

An opaque object standing in for the document's current view state. At a minimum that state captures the present page number, the scroll position, the zoom level, and where field focus sits.

Setting this value requires feeding back exactly what an earlier read of it returned. With that, you can bring a document's view state back.

Note

Only inside an embedded PDF is the object defined.

Example: This snippet reads the view state and ships it off to the host application, which is free to keep it and later hand it back to the viewer to reinstate the original view. A button inside the PDF document could run this code. That array's first element flags for the host what kind of message it is.

```javascript
if(this.hostContainer)
{
    cVState = this.viewState.toSource();
    aMsg = new Array( "viewState", cVState );
    this.hostContainer.postMessage(aMsg);
}
```

Over on the host application side, the message handler could be shaped like this:

```javascript
var cViewState=""; // Variable to save the viewState
function onMessageFunc( stringArray )
{
    var PDFObject = document.getElementById( PDFObjectID );
    if ( this != PDFObject.messageHandler )
        alert( "Incorrect this value in onMessage handler" );
    // The first entry in the encoming array is the signal
    var signal = stringArray[0];

    switch ( signal ) {
        case "Msg":
            var msgStr = "";
            for ( var i = 1; i < stringArray.length; i++ )
                msgStr += (stringArray[ i ] + "<br>");
            writeMsg( msgStr ); // A function to write to the document.
            break;

        case "viewState":
            // View state, let's save this
            cViewState = stringArray[1];
            break;
    }
}
```

A button lets you send the value of cViewState back into the embedded PDF. Down in the PDF's document-level JavaScript, you might write:

```javascript
if ( this.hostContainer )
{
    myHostContainer = this.hostContainer;
    myHostContainer.messageHandler = {
        onMessage: function(aMessage) {
            var f = this.doc.getField("msg4pdf");
            var strValue = "";
            var signal = aMessage[0];
            switch ( signal ) {
                case "Msg":
                    for(var i = 1; i < aMessage.length; i++)
                        strValue += aMessage[i] + "r";
                    f.value = strValue;
                    break;
                case "viewState":
                    var restoreViewState = eval( aMessage[1] );
                    // Reset the viewState, begin sure to acquire the correct
                    // Doc as the doc property of this.
                    this.doc.viewState = restoreViewState;
                    break;
            }
        },
        onError: function(error, aMessage) {
                console.println("error: "+ error.toString())
        },
        onDisclose: HostContainerDisclosurePolicy.SameOriginPolicy,
        allowDeliverWhileDocIsModel: true
    };
    // The this object will be the messageHandler instance that the

     // method is being called on, so we save the Doc as a doc

     // property of the messageHandler instance.
    myHostContainer.messageHandler.doc = this;
}
```
