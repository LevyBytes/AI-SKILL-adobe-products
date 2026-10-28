# Using XMPFile for batch processing

This example walks through a folder of image files and processes their metadata. For each picture, the script does the following:

- Reads and parses metadata. If an image file lacks XMP metadata, its legacy metadata is automatically converted to XMP.
- Removes the current creator list and adds a new creator value.
- Saves the changed metadata back into the file.

```javascript
$.writeln( "XMPFiles batch processing example" );

// Define folder containing images (make sure that you use copies)
var picFolder = "/c/temp/photos";

// Load the XMPScript library
if ( ExternalObject.AdobeXMPScript == undefined ) {
    ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript" );
}

// Iterate through the photos in the folder
var pics = Folder(picFolder).getFiles();
for ( var i = 0; i < pics.length; i++ ) {
    var file = pics[i];
    $.writeln( "Process file: " + file.fsName );

    // Applies only to files, not to folders
    if ( file instanceof File ) {
        var xmpFile = new XMPFile( file.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
        var xmp = xmpFile.getXMP();

        // Delete existing authors and add a new one
        // Existing metadata stays untouched
        xmp.deleteProperty( XMPConst.NS_DC, "creator" );
        xmp.appendArrayItem( XMPConst.NS_DC, "creator", "Judy", 0, XMPConst.ARRAY_IS_ORDERED );

        // Write updated metadata into the file
        if ( xmpFile.canPutXMP( xmp ) ) {
            xmpFile.putXMP( xmp );
        }
        xmpFile.closeFile( XMPConst.CLOSE_UPDATE_SAFELY );
    }
}
```
