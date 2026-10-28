# Coordinates

Like other page-layout and drawing tools, InDesign uses simple two-dimensional geometry to place objects on a page or spread. In a coordinate pair, x is the horizontal value and y is the vertical value. When an object is selected with the Selection tool, those values appear in the Transform panel or Control.

[Figure: Transform panel](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/fundamentals/measurements-and-positioning/transform-panel.png)

Keep these coordinate rules in mind:

- Coordinates are measured from the **current** ruler zero point.
- On the vertical, or y, axis, values below the zero point are positive, while values above it are negative.
- Path-point locations are returned as x and y, and path-point coordinates should be set in that same order.
- An object's bounding box coordinates are stored in a four-coordinate array. The order is top, left, bottom, and right, corresponding to y1, x1, y2,x2.
