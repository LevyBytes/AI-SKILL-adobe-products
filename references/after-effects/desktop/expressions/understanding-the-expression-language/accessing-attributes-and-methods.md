# Accessing attributes and methods

Reaching the attributes and methods of layer properties is what the expression language is for. Getting at a value means stringing object references together with the period (.) operator. Parentheses let you reach past the layer level too — say, to address Effect properties, masks, or text animators. Suppose you want Layer A's Opacity property tied to the Blurriness property of Layer B's Gaussian Blur effect; in the expression field for Layer A's Opacity, you'd type:

```javascript
thisComp.layer("Layer B").effect("Gaussian Blur")("Blurriness")
```

Scanning that left to right walks you from the outermost, containing object inward to the exact property:

thisComp is the global object pointing at the current composition.

layer("Layer B") names a particular layer object inside that composition.

effect("Gaussian Blur") names a particular effect object inside that layer.

("Blurriness") names a particular effect property inside that effect.

Want the nth piece of a multidimensional property — for instance the y component of an effect control point? Tack [n] on at the end, like so:

```javascript
thisComp.layer("Layer B").effect("Advanced Lightning")("Origin")[1]
```

An expression defaults first to the property it's written on and then to that property's layer, so naming the property is unnecessary. A wiggle on a layer's Position property, for example, can be written any of these ways:

```javascript
wiggle(5, 10)
position.wiggle(5, 10)
thisProperty.wiggle(5, 10)
```

When you're pulling a layer and property in from outside the layer and property the expression lives on, spell both out. An expression on Layer B's Opacity property that links it to Layer A's Rotation property reads like this:

```javascript
thisComp.layer("Layer A").rotation
```

Note

For a fuller sense of how expressions behave, drag the pick whip to connect one layer property to another and study the expressions it generates.
