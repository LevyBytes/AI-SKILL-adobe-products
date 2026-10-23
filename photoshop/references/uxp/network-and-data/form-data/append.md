# window.FormData - append(name, value, fileName)

Adds a key/value pair to FormData.
When the value is ArrayBuffer or TypedArray, both its buffer and the object are copied.
For a File object value, the File object is cloned, but the underlying content is not cloned.
As a result, the File object and its clone share identical content.

**See**: [FormData - append](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Pair key string |
| value | `string` \| `ArrayBuffer` \| `TypedArray` \| `File` \| `Blob` | Pair value |
| fileName | `string` | 'Optional' name applied when the value is a File or Blob object. Blob object defaults to "blob"; File object uses the file name from the name property. |
