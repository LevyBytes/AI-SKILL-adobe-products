# Item.setGuide()

app.project.item(index).setGuide(position,guideIndex)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Repositions a guide that already exists, picked out by its guideIndex inside the Item.guides array.

After a guide exists, its orientationType is locked and cannot be switched.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| position | Integer | The new X or Y coordinate position of the guide in pixels, depending on its existing orientationType. |
| guideIndex | Integer | The index of the guide to be modified. |

### Returns

Nothing.

### Example

Moves activeItem's first guide to the 1200-pixel mark.

```javascript
app.project.activeItem.setGuide(1200, 0);
```
