# ProjectItem.name

app.project.rootItem.children[index].name

### Description

Project item name.

### Type

String; read/write.

### Example

Renames the first project item.

```javascript
var item = app.project.rootItem.children[0];
if (item) {
    item.name = item.name + ', updated by PProPanel.';
} else {
    alert('Could not rename project item');
}
```
