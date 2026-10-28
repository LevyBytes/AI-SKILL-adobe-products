# LayerComp

One layer comp in the document is represented by this object.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| appearance | _boolean_ | R W | 24.0 | True makes the layer comp store layer appearance settings (layer style). |
| childComp | _boolean_ | R W | 24.0 | True records the Properties panel selection for Smart Object layer comps. |
| comment | _string_ | R W | 24.0 | Layer comp description. |
| docId | _number_ | R | 24.0 | Document ID associated with this layer comp. |
| id | _number_ | R | 24.0 | batchPlay can identify the layer comp by combining this layer comp ID with its document ID while the document or layer comp remains valid. |
| name | _string_ | R W | 24.0 | Layer comp name. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 24.0 | Document that owns this layer comp |
| position | _boolean_ | R W | 24.0 | True makes the layer comp store layer positions. |
| selected | _boolean_ | R | 24.0 | If true, the Layer Comps panel currently selects this layer comp. Note: selection is separate from whether the layer comp has been applied to the document. |
| typename | _string_ | R | 24.0 | Class name for the referenced LayerComp object |
| visibility | _boolean_ | R W | 24.0 | True makes the layer comp store layer visibilities. |

### Methods
