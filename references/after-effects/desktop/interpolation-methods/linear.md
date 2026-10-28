# linear(t, tMin, tMax, value1, value2)

Return type: Number or Array.

Argument type: t, tMin, and tMax are Numbers, and value1 and value2 are Numbers or Arrays.

Returns value1 when t <= tMin. Returns value2 when t >= tMax. Returns a linear interpolation between value1 and value2 when tMin < t < tMax.

As an illustration, placing this on the Opacity property drives Opacity in a straight-line ramp from 20% up to 80% across the interval from 0 seconds through 6 seconds:

linear(time, 0, 6, 20, 80)

As with every Interpolation method, this one is also handy for remapping one value range onto another. Here, for instance, the expression on the Opacity property takes Opacity readings in the 0%-100% band and rescales them into the 20%-80% band:

linear(value, 0, 100, 20, 80)

### linear(t, value1, value2)

Return type: Number or Array.

Argument type: t is a Number, and value1 and value2 are Numbers or Arrays.

As t moves across the span from 0 to 1, the result interpolates linearly from value1 toward value2. Returns value1 when t <= 0. Returns value2 when t >= 1.
