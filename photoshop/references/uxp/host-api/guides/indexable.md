# Indexable

â–ª [index: *number*]: [_Guide_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/guide.md)

Accesses guides inside this collection.

Reach this collection through the [Document.guides](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#guides) property. For example,
the next sample appends a guide:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.0 | Count of [Guide](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/guide.md) elements held by this collection. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 23.0 | Owning document for this Guide collection. |

### Methods
