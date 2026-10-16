# Add the animation to another composition

With the intros, outros, and protected regions of an animation defined, you're free to reuse them inside other sequences or compositions.

The walkthrough below shows how it plays out:

- Give the animation that carries protected regions a name — say, Comp A.
- Give the composition that will receive the animation a name too — say, Comp B.

Bring Comp B up in the Timeline panel.

Within that timeline, drop Comp A on top of Comp B.

Blue shading appears in the timeline wherever protected regions sit. Grab Comp A's end point and pull it until it lines up with the end point of Comp B.

Previewing the comp now shows the protected stretches animating over the same span as before, with only the unprotected stretches getting scaled.

- Dragging the in and out points of a composition that holds one or more protected regions while it sits nested inside another composition stretches the comp in time rather than trimming it, and the protected regions keep their original length. Take a 5-second clip whose protected regions run 2 seconds: stretch it out to 10 seconds and those protected regions stay at 2 seconds.
- Should you want to trim the layer's in or out point rather than stretch it in time, hold Option (macOS) or Alt (Windows) as you drag the in and out points.
- Protected regions amount to composition markers that have the Protected Region option switched on, distinguished by different handle icons for quick recognition. These markers act just like any other composition marker, with one exception: once you nest a composition carrying protected regions, the markers become locked from editing, and the nested composition's layer bar gets shaded to flag the protected regions instead.
- Change a protected region after the composition is already nested and the marker on the nested composition layer won't refresh on its own. Refresh markers on a nested composition layer by selecting that layer and going to Layer > Markers > Update Markers from Source.
- The Protected Region option is also reachable from scripting or expressions by way of the protectedRegion attribute on composition markers.

Export a composition that contains protected regions as a Motion Graphics template, drop it into a Premiere sequence, and you can resize its length straight away without resorting to time remap.

Pulling the clip's in and out points stretches the composition in time rather than trimming the in or out point, and protected-region durations stay intact.

- A composition that carries audio, once exported as a Motion Graphics template, will not stretch adaptively in time within Premiere.
- Smooth animation of the non-protected stretches during a time-stretch can break down for compositions that rely on the CINEMA 4D renderer alongside 3D layers, or that include a CINEMA 4D layer driving the CINEWARE effect.
