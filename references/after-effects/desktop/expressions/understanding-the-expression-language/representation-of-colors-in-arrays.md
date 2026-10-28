# Representation of colors in Arrays

A color is stored as a 4D array:

- Red
- Green
- Blue
- Alpha

When a project's color depth is 8 bpc or 16 bpc, every entry in a color array falls between 0 (black) and 1 (white) — red, say, spans 0 (no color) through 1 (red). That makes [0,0,0,0] black and transparent and [1,1,1,1] white and opaque. At a color depth of 32 bpc, the range opens up to permit values below 0 and above 1.

Reference an index higher than the top-dimension component of an Array object and After Effects throws an error. myArray[2], for one, errors out, yet position[2] hands back the z coordinate of Position.

Quite a few of the expression language's properties and methods either accept Array objects as arguments or hand them back as values. Take thisLayer.position: it's an Array object that comes out two-dimensional or three-dimensional according to whether its layer is 2D or 3D.

### Examples

To craft an expression that holds an animated Position's y value steady while pinning x at 9, write:

```javascript
  y = position[1];
  [9,y]
```

Tighter still is this version:

```javascript
  [9, position[1]]
```

The point matters, so here's a second example. Pairing Layer A's x position value with Layer B's y position value calls for the following:

```javascript
  x = thisComp.layer("Layer A").position[0];
  y = thisComp.layer("Layer B").position[1];
  [x,y]
```

You're free to build an expression aimed at just one value inside a 2D or 3D property's array. Absent any instruction otherwise, the first value applies. Drag the pick whip from Layer A's Rotation property onto Layer B's Scale property, for example, and this expression turns up:

```javascript
  thisComp.layer("Layer B").scale[0]
```

That defaults to the Scale property's first value, namely width. To go with the height value in its place, either drag the pick whip straight to the second value rather than the property name, or rewrite the expression this way:

```javascript
  thisComp.layer("Layer B").scale[1]
```

Run it the other direction — pick whip from Layer B's Scale property to Layer A's Rotation property — and After Effects spins up a variable on its own, hands the one-dimensional Rotation property value to it, then feeds that variable into both of the Scale property's dimensions:

```javascript
  temp = thisComp.layer(1).transform.rotation;
  [temp, temp]
```
