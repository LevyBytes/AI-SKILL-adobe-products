# PathItem

Use `PathItem` for a path or drawing object, including shape outlines and straight or curved lines. Sub paths define its geometry.

Find it under the [Document.pathItems](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#pathitems) property. Example: select a path item by name.

```javascript
const currentPathItem = app.activeDocument.pathItems.getByName("myPath");
currentPathItem.select();
```

Create these objects by passing a set of SubPathInfo objects to the [PathItems.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitems.md#add)() method. For each [SubPathInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathinfo.md) object, the method creates a [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md) object, then returns a new [PathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md) object that represents the combined-subpath path.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| docId | _number_ | R | 23.3 | Document ID associated with this pathItem. |
| id | _number_ | R | 23.3 | Identifier for batchPlay operations. Together with the document ID, this pathItem ID can represent the pathItem while the document remains open. |
| kind | [_PathKind_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#pathkind) | R W | 23.3 | Specific path kind. |
| name | _string_ | R W | 23.3 | This path's name |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 23.3 | Document containing the path. |
| subPathItems | [_SubPathItems_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitems.md) | R | 23.3 | [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md)s contained by this path. |
| typename | _string_ | R | 23.3 | Referenced object class name: _"PathItem"_. |

### Methods
