# SelectionType

23.3

Selection handling when an existing selection is already present.
Used in [PathItem.makeSelection](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md#makeselection)(), [Selection.saveTo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/selection.md#saveto)() and [Selection.load](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/selection.md#load)()

| Name | Description |
| --- | --- |
| DIMINISH | Removes the new selection area from what is already selected |
| EXTEND | Adds the new selection to the already selected area |
| INTERSECT | Keeps only the overlap between the new selection and the already selected area |
| REPLACE | Substitutes the active selection |
