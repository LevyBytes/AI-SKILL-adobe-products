# posterizeTime(framesPerSecond)

Return type: Number.

Argument type: framesPerSecond is a Number.

The supplied framesPerSecond becomes the frame rate governing the remainder of the expression. With it you can hold a property's frame rate below the composition's own frame rate. For instance, the expression below refreshes the property value with a fresh random value once each second:

posterizeTime(1); random()

### value

Return type: Number, Array, or String.

Gives the value at the current time for the property that holds the expression.
