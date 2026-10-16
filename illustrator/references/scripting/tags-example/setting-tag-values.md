# Setting tag values

```javascript
// Adds tags to all RasterItems and PlacedItems in the current document
if ( app.documents.length > 0 ) {
    var doc = app.activeDocument;

    if ( doc.placedItems.length + doc.rasterItems.length > 0 ) {
        for ( i = 0; i < doc.pageItems.length; i++ ) {
            var imageArt = doc.pageItems[i];

            if ( imageArt.typename == "PlacedItem" || imageArt.typename == "RasterItem") {
                // Create a new Tag with the name AdobeURL and the
                // value of the www link

                var urlTAG = imageArt.tags.add();
                urlTAG.name = "AdobeWebSite";
                urlTAG.value = "http://www.adobe.com/";
            }
        }
    } else {
        alert( "No placed or raster items in the document" );
    }
}
```
