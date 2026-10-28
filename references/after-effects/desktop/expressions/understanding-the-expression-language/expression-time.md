# Expression time

Inside an expression, time always runs on composition time — not layer time — and is counted in seconds (the sourceRectAtTime() expression being the exception). Any expression takes the current composition time at its moment of evaluation as the default. The two expressions below both fall back on that default composition time and yield identical values:

```javascript
thisComp.layer(1).position
thisComp.layer(1).position.valueAtTime(time)
```

For a relative time, fold an incremental time value into the time argument. To grab the Position value as it stood 5 seconds earlier, for instance, use:

```javascript
thisComp.layer(1).position.valueAtTime(time-5)
```

Properties in nested compositions referenced at default time draw on the original default composition time rather than remapped time. Pull a property in via the source function, though, and remapped time takes over.

Picture a layer in the containing composition whose source is a nested composition, with time remapped in that containing composition. Fetch the position values of a layer in the nested composition through the expression below, and those position values run on the composition's default time:

```javascript
comp("nested composition").layer(1).position
```

Reach layer 1 by way of the source function instead, however, and the position values switch to remapped time:

```javascript
thisComp.layer("nested composition").source.layer(1).position
```

Note

Pin down a specific time in an expression and After Effects disregards the remapped time.

Since expressions reckon time in seconds rather than frames, you'll occasionally have to call on time conversion methods to recast time values before working on frames.
