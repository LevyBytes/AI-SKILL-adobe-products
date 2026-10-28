# Automatic legacy-text update

```javascript
// Opens a file with legacy text (AI 10 or older), using
// OpenOptions to automatically update the legacy text.

var fileRef = filePath;
if (fileRef != null) {
    var openOptions = new OpenOptions();
    openOptions.updateLegacyText = true;

    var docRef = open(fileRef, DocumentColorSpace.RGB, openOptions);
}
```
