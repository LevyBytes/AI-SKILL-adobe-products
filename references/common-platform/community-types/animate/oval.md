# Oval

Community declaration reference: Animate/22.0.

Oval is a shape drawn with the Oval Primitive tool. Use shape.isOvalObject when checking whether an item is an Oval object.

```typescript
declare class Oval extends Shape {
    /**
    - Reports whether the Close Path check box in the Property inspector is selected. When the object's start angle and end angle are equal, changing this property has no effect until those angle values change.
    - To set this value, use document.setOvalObjectProperty().
      */
      readonly closePath: boolean
    /**
    - Gives the Oval object's end angle. Range: 0 to 360.
    - Assign it with document.setOvalObjectProperty().
      */
      readonly endAngle: number
    /**
    - Gives the Oval object's inner radius as a percentage. Range: 0 to 99.
    - Assign it with document.setOvalObjectProperty().
      */
      readonly innerRadius: number
    /**
    - Gives the Oval object's start angle. Range: 0 to 360.
    - Assign it with document.setOvalObjectProperty().
      */
      readonly startAngle: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
