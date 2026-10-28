# Create a trail of images

This expression tells a layer to mirror the position of whatever layer sits directly above it in the Timeline panel, only lagging behind by a set interval — half a second here. The same idea extends to the layer's other geometric properties if you write comparable expressions.

Begin with a shape layer sized down to roughly 30% of the composition.

Reveal the Position property and lay in keyframes. With the layer selected, press P to expose the Position property. Hold Alt and click on Windows, or Option-click on macOS, the stopwatch button to the left of the property name.

Type the following into the expression field:

```javascript
thisComp.layer(thisLayer, -1).position.valueAtTime(time - .5)
```

With that layer selected, press Ctrl+D (Windows) or Command+D (macOS) five times to make five duplicates. Every layer traces the identical path, with each one trailing the one above it by 0.5 seconds.
