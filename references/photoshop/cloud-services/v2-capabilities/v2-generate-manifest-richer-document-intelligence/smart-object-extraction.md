# Smart object extraction

Embedded smart objects now include a manifest download link at `extracted.url`. Callers can fetch the raw embedded smart-object file, such as a PSD, PNG, or another file type, without launching Photoshop.

V1 only reported that a smart object existed, along with its filename and MIME type. It did not provide a way to retrieve the embedded content.

V2 `generate-manifest` adds `extracted` for non-linked, embedded smart objects:

```json
{
  "type": "smart_object_layer",
  "name": "button-component",
  "isSmartObject": true,
  "isLinked": false,
  "isValid": true,
  "smartObjectData": {
    "fileInfo": {
      "name": "button-component.psd",
      "fileType": "ps3"
    }
  },
  "extracted": {
    "mediaType": "image/vnd.adobe.photoshop",
    "url": "https://photoshop-api.adobe.io/v2/short-url/urn:aaid:ps:..."
  }
}
```

`extracted.url` is a short-URL redirect for the raw embedded content. Only embedded smart objects that are not CC-linked expose this value.

See [Manifest Response Migration](../../manifest-response-migration.md) for full smart object field details.
