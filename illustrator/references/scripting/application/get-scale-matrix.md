# Application.getScaleMatrix()

app.getScaleMatrix([scaleX][, scaleY])

### Description

Creates a transformation matrix that contains one scale.

Note

The value must be a percentage.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double), optional | X scale used for the matrix |
| scaleY | Number (double), optional | Y scale used for the matrix |

### Returns

Matrix

### Example

Set the object's scale to 60% of the original size:

```javascript
app.getScaleMatrix(60, 60);
```

Increase the object's bounds to twice their size:

```javascript
app.getScaleMatrix(200, 200);
```
