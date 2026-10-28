# AVItem.usedIn

app.project.item(index).usedIn

### Description

Every composition in which this AVItem appears. Be aware that the array is copied when you read it, so it does not refresh on its own. If you read this value and then place the item into another composition, read it once more to obtain an array that takes the new use into account.

### Type

Array of CompItem objects; read-only.
