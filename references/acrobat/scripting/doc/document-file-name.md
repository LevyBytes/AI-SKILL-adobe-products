# documentFileName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

The Doc's referenced document, given as the bare file name plus extension. The device-independent path is left out. See also the path and URL properties. For the document's file size, turn to the filesize property.

Example: Get the document file name.

```javascript
console.println('"The file name of this document is '
    + this.documentFileName +'."');
```

Run that script against this document — the JavaScript for Acrobat API Reference — and it prints the statement below:

```javascript
"The file name of this document is js_api_reference.pdf"
```
