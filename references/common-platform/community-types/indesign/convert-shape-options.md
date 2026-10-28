# ConvertShapeOptions

Community declaration reference: InDesign/2023.

Choices indicating the shape type to which an object is converted.

```typescript
declare enum ConvertShapeOptions {
    /**
    - Changes the object into a rectangle with beveled corners.
      */
      CONVERT_TO_BEVELED_RECTANGLE = 1129529938,
    /**

    - Changes the object into a closed path.
      */
      CONVERT_TO_CLOSED_PATH = 1129530224,
    /**

    - Changes the object into a rectangle with inverse rounded corners.
      */
      CONVERT_TO_INVERSE_ROUNDED_RECTANGLE = 1129531730,
    /**

    - Changes the object into a diagonal line from the bounding box's upper-left corner to its lower-right corner.
      */
      CONVERT_TO_LINE = 1129532489,
    /**

    - Changes the object into an open path.
      */
      CONVERT_TO_OPEN_PATH = 1129533296,
    /**

    - Changes the object into an ellipse.
      */
      CONVERT_TO_OVAL = 1129533270,
    /**

    - Changes the object into a polygon.
      */
      CONVERT_TO_POLYGON = 1129533519,
    /**

    - Changes the object into a rectangle.
      */
      CONVERT_TO_RECTANGLE = 1129534021,
    /**

    - Changes the object into a rectangle with rounded corners.
      */
      CONVERT_TO_ROUNDED_RECTANGLE = 1129534034,
    /**

    - Changes the object into a straight line. For a square, circle, or bounding box that is wider than tall, the line is horizontal and joins the midpoint of each vertical side. When the bounding box is taller than wide, the line joins the midpoint of each horizontal side.
      */
      CONVERT_TO_STRAIGHT_LINE = 1129534284,
    /**

    - Changes the object into a triangle.
      */
      CONVERT_TO_TRIANGLE = 1129534546,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
