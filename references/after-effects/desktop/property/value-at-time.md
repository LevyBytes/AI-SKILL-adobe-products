# valueAtTime(t)

Return type: Number or Array.

Argument type: t is a Number.

Hands back a property's value at the time you name, in seconds.

Suppose you want each frame's property value picked at random from a set of four. Drop those four values as keyframes at 0, 1, 2, and 3 seconds, then attach the following expression to the property:

valueAtTime(random(4))
