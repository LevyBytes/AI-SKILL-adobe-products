# PathPointInfo sample script

```typescript
function drawLine(doc: Document, start: number[], stop: number[]) {
  const startPoint = new PathPointInfo();
  startPoint.anchor = start;
  startPoint.leftDirection = start;
  startPoint.rightDirection = start;
  startPoint.kind = Constants.PointKind.CORNERPOINT;

  const stopPoint = new PathPointInfo();
  stopPoint.anchor = stop;
  stopPoint.leftDirection = stop;
  stopPoint.rightDirection = stop;
  stopPoint.kind = Constants.PointKind.CORNERPOINT;

  const spi = new SubPathInfo();
  spi.closed = false;
  spi.operation = Constants.ShapeOperation.SHAPEXOR;
  spi.entireSubPath = [startPoint, stopPoint];

  const line = doc.pathItems.add("Line", [spi]);
  line.strokePath(Constants.ToolType.PENCIL);
  line.remove();
}

drawLine(app.activeDocument, [100, 100], [200, 200]);
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| anchor | _number_[] | R W | 23.3 | X and Y coordinate pair for the curve anchor. |
| kind | [_PointKind_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#pointkind) | R W | 23.3 | Indicates whether this point acts as a corner or smooth point inside the containing path segment. |
| leftDirection | _number_[] | R W | 23.3 | Coordinates for the left-direction endpoint, the 'in' position. |
| rightDirection | _number_[] | R W | 23.3 | Coordinates for the right-direction endpoint, the 'out' position. |
| typename | _string_ | R | 23.3 | Referenced object class name: _"PathPointInfo"_. |
