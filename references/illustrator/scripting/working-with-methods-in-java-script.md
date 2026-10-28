# Working with methods in JavaScript

For methods with several parameters, optional parameters may be left off only from the end of the parameter list; parameters in the middle cannot simply be skipped.

When a middle parameter should use its default, pass undefined in that position.

For an art object, rotate() is defined as follows.

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

Tip

Square brackets ( [] ) in the definition mark optional parameters.

To rotate the object 30 degrees while changing fillGradients, use this script statement:

```javascript
myObject.rotate(30, undefined, undefined, true);
```

Here, undefined is required for changePositions and changeFillPatterns. The two optional parameters after changeFillGradients can be omitted because they appear at the end of the parameter list.
