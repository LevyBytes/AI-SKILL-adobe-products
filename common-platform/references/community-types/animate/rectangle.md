# Rectangle

Community declaration reference: Animate/22.0.

Rectangle is a shape drawn with the Rectangle Primitive tool. Use shape.isRectangleObject when checking whether an item is a Rectangle object.

```typescript
declare class Rectangle extends Shape {
    /**
    - Sets the Rectangle object's bottom-left corner radius. If RectangleObject.lockFlag is true, attempts to change this value have no effect.
    - To set this value, use document.setRectangleObjectProperty().
      */
      readonly bottomLeftRadius: number
    /**
    - Sets the Rectangle object's bottom-right corner radius. If RectangleObject.lockFlag is true, attempts to change this value have no effect.
    - To set this value, use document.setRectangleObjectProperty().
      */
      readonly bottomRightRadius: number
    /**
    - Controls whether rectangle corners can use separate radius values. If true, every corner uses the value assigned to RectangleObject.topLeftRadius. If false, each corner radius can be changed independently.
    - To set this value, use document.setRectangleObjectProperty().
      */
      readonly lockFlag: number
    /**
    - Sets every rectangle corner radius when RectangleObject.lockFlag is true, or only the top-left corner radius when RectangleObject.lockFlag is false.
    - Assign it with document.setRectangleObjectProperty().
      */
      readonly topLeftRadius: number
    /**
    - Sets the Rectangle object's top-right corner radius. If RectangleObject.lockFlag is true, attempts to change this value have no effect.
    - To set this value, use document.setRectangleObjectProperty().
      */
      readonly topRightRadius: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
