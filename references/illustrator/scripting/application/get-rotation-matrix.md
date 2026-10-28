# Application.getRotationMatrix()

app.getRotationMatrix([angle])

### Description

Creates a transformation matrix that contains one rotation.

Note

The value must be in degrees.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double), optional | Angle for the matrix |

### Returns

Matrix

### Example

Rotate the object counterclockwise by 30 degrees:

```javascript
app.getRotationMatrix(30);
```

Use a negative value for a 30-degree clockwise rotation:

```javascript
app.getRotationMatrix(-30);
```
