# Loop

Rather than laying down extra keyframes, you can stretch and repeat an animation with expressions — say, keeping a set of shapes spinning right through to the end of a composition. The recipe is simple: give the Rotation property one keyframe holding the start angle and a second holding the finish angle. Once the loopOut() method is attached to that keyframed Rotation property, the layer carries on rotating past the final keyframe.

How the spin behaves is controlled by the arguments handed to loopOut(), which decide the loop style and the span of keyframes the loop covers.

```javascript
//loopOut set to cycle all keyframes
loopOut("cycle", 0);
```

Here the opening argument, "cycle", picks one of the four loop styles loopOut supports; the remaining choices are "continue", "offset", and "ping-pong". With "cycle", playback restarts at the final keyframe and jumps back to the values held by the first keyframe inside the range that the second argument establishes.

That second argument states how many keyframes the loop reaches back through, tallied from the last keyframe toward the front. Leave it out or set it to 0 and every keyframe on the property repeats once the final keyframe passes. Pass 1 and only the stretch between the last keyframe and its immediate predecessor repeats. Pass 2 and the repeated span runs from the last keyframe back across the two keyframes preceding it, and the pattern continues upward from there.
