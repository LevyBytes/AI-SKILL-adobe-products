# Rotate with time

Rotation values can be linked between layers with the pick whip to drive animated objects. Picture how a clock runs and treat these three circles as its three hands - the hour hand steps from hour to hour while the minute hand sweeps all the way around the clock face.

Bring in or build three solid-color circle layers. Treat one as the hour hand, a second as the minute hand, and the last as the seconds hand.

Place the anchor points out at the ends of the layers.

Slide the layers until those anchor points line up with the composition's center.

Lay down Rotation keyframes on the hour hand. For the minute hand, highlight its Rotation property and pick Animation > Add Expression.

Pull the pick whip over to the biggest circle's Rotation property, and this expression shows up:

```javascript
 thisComp.layer("circle").rotation
```

Want the second circle turning twelve times quicker than the first? Append \*12 to the expression, thus:

```javascript
thisComp.layer("circle").rotation*12
```

Do the same for the third circle, this time appending \*24 to the expression:

```javascript
thisComp.layer("circle").rotation*24
```
