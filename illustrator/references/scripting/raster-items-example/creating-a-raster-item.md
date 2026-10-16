# Creating a raster item

```javascript
// Creates a new raster item in a new document from a raster file
// jpgFilePath contains the full path and file name of a jpg file
function createRasterItem(jpgFilePath) {
    var rasterFile = File(jpgFilePath);
    var myDoc = app.documents.add();

    var myPlacedItem = myDoc.placedItems.add();
    myPlacedItem.file = rasterFile;
    myPlacedItem.position = Array(0, myDoc.height);
    myPlacedItem.embed();
}
```
