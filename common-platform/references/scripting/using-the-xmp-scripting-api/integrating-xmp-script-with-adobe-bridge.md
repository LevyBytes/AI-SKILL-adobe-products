# Integrating XMPScript with Adobe Bridge

This script adds a Thumbnail context-menu command that displays selected XMP properties.

It shows how to read XMP metadata stored with a Thumbnail object, create an XMPMeta object from it, and then retrieve several kinds of property values from that object.

To use the script, put it in the "Startup Scripts" folder for Adobe Bridge (see Startup scripts). After Adobe Bridge starts, select a document thumbnail that has XMP metadata; open its context menu and choose Show XMP Properties.

```javascript
$.writeln("XMPFiles batch processing example");

// Define folder containing images (make sure that you use copies)
var picFolder = "/c/temp/photos";

// Load the XMPScript library
$.writeln("XMPScript Adobe Bridge Integration Example");

// Load the XMPScript library
if ( ExternalObject.AdobeXMPScript == undefined ) {
    ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript" );
}
// Add a context menu item to Thumbnails
var xmpCommand = new MenuElement( "command", "Show XMP Properties", "at the end of Thumbnail", "showProperties" );

// Define command behavior
xmpCommand.onSelect = function(m) {

// Get the first selected thumbnail
var thumb = app.document.selections[0];

// If there is one, and it has metadata
if ( thumb && thumb.metadata ) {

    // Retrieve metadata from the thumbnail into an XMPMeta object`
    // ( if app.synchronousMode is set, use thumb.metadata )

    var xmp = new XMPMeta( thumb.synchronousMetadata.serialize() );

    // Retrieve some of the XMP property values
    // A simple property with a localized string value
    var msg = "Title: " + xmp.getLocalizedText( XMPConst.NS_DC, "title", null, "en" ) + "\n";

    // An array property
    msg += "Authors of the document:\n";
    var num = xmp.countArrayItems( XMPConst.NS_DC, "creator" );

    for ( var i = 1; i <= num; i++ ) {
        msg += "* " + xmp.getArrayItem( XMPConst.NS_DC, "creator", i ) + "\n";
    }

    // A simple property with a date value
    msg += "Creation Date: " + xmp.getProperty( XMPConst.NS_XMP, "CreateDate" )

    // Display the values
    Window.alert( msg );
} else {
    Window.alert( "No thumbnail selected or no XMP contained" );
}
};
```
