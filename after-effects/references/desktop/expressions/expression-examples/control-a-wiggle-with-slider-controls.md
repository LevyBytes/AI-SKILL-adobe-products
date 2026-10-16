# Control a wiggle with Slider controls

You can turn expressions into keyframeable values by swapping the values for links to expression controls, such as a Slider Control. Swap the wiggle() expression's second argument for a link to a Slider Control and you gain the ability to keyframe when the behavior kicks in and cuts out.

Onto any Layer, drop a Slider Control effect and label it Wiggle Amount.

On that same layer's Position property, put the expression below:

```javascript
// Uses the pick-whip to create the "effect(...)" link to the Slider
var wiggleAmount = effect("Wiggle Amount")("Slider");

// Wiggles 4 times per second by the amount set by the Slider
wiggle( 4, wiggleAmount );
```
