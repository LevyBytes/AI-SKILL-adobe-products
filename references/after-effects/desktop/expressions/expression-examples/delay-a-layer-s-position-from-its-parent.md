# Delay a layer's Position from its parent

Staggering and delaying movement is one of the best tricks for giving animation a livelier, more lifelike feel. To build offsets like these, parent a group of layers to a single parent, then drop an expression onto each child's Position so the motion it picks up from the parent arrives late.

Keep in mind that this depends on the layers being parented.

```javascript
// Sets a delay amount in frames
var delay = 5;

// Offsets the layer's Position in time based on delay
parent.fromComp( toComp( anchorPoint, time - framesToTime( delay ) ) );
```

The size of that delay can also be tied to where the child sits in the stack relative to its parent. Because of that, shuffling the child layers up or down in the Timeline beneath the parent (or above it, should you want their motion to lead the parent) instantly reorders when their animation fires:

```javascript
// Sets a delay amount in frames
var delay = 5;

// Multiplies delay based on this layer's index relative to it's parent
var multiplyDelay = delay * ( index - parent.index )

// Offsets layer's Position in time based on delay
parent.fromComp( toComp( anchorPoint, time - framesToTime( multiplyDelay ) ) );
```
