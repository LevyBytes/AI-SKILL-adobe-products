# Opening a Photoshop file

```javascript
// Opens a Photoshop file containing layers with
// preferences set to preserve layers
var psdOptions = preferences.photoshopFileOptions;
psdOptions.preserveLayers = true;
psdOptions.pixelAspectRatioCorrection = false;

// open a file using these prefs
var fileRef = File(psdFilePath);
if (fileRef != null) {
    var docRef = open(fileRef, DocumentColorSpace.RGB);
}
```
