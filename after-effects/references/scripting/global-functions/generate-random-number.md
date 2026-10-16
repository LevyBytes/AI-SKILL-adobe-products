# generateRandomNumber()

generateRandomNumber()

Note

This functionality was added in After Effects 13.6 (CC 2015)

### Description

Produces random numbers. When the random values are destined to become project values (e.g., when using setValue), reach for this rather than Math.random().

The reason: a multi-CPU-thread concurrency bug kept Math.random() from yielding truly random output in After Effects CC 2015 (13.5.x), and this method sidesteps that.

### Returns

Floating-point, pseudo-random number in the range [0..1].

### Example

```javascript
// change the position X of all layers with random number

var myComp = app.project.activeItem;
var x = 0;

for (var i = 1; i <= myComp.numLayers; i++) {
    // If you use Math.random(), this does not work
    // x = 400 * (Math.random()) - 200;
    // use new generateRandomNumber() instead

    x = 400 * generateRandomNumber() - 200;
    var currentPos = myComp.layer(i).property("Position").value;
    myComp.layer(i).property("Position").setValue([currentPos[0] + x, currentPos[1]]);
}
```
