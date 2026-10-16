# Item.removeGuide()

app.project.item(index).removeGuide(guideIndex)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Deletes a guide that already exists, identified by its position within the Item.guides object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| guideIndex | Integer | The index of the guide to be removed. |

### Returns

Nothing.

### Example

Deletes the first guide of activeItem.

```javascript
app.project.activeItem.removeGuide(0);
```

Warning

Once a guide is removed, every guide above it in the index list slides down one position.
