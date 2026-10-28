# Application.getTranslationMatrix()

app.getTranslationMatrix([deltaX][, deltaY])

### Description

Creates a transformation matrix that contains one translation.

Note

The value must be in points.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | X-axis delta |
| deltaY | Number (dobule), optional | Y-axis delta |

### Returns

Matrix

### Example

Move the object 100 pt. right and 200 pt. up:

```javascript
app.getTranslationMatrix(100, 200);
```

Move the same objects in the opposite direction:

```javascript
app.getTranslationMatrix(-100, -200);
```
