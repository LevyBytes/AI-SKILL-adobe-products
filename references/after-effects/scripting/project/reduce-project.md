# Project.reduceProject()

app.project.reduceProject(array_of_items)

### Description

Strips out every project item apart from the ones you list, equivalent to the File > Reduce Project command.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| array_of_items | Array of Item objects | The items to be kept. |

### Returns

Integer; the total number of items removed.

### Example

```javascript
var items = [];
items[items.length] = app.project.item(1);
items[items.length] = app.project.item(3);
app.project.reduceProject(items);
```
