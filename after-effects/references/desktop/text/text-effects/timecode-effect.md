# Timecode effect

What the Timecode effect does is lay a text overlay across a layer showing either timecode or frame-number data. Timecode baked in from outside sources — QuickTime, say — is left untouched by it.

When you need finer command over how text is formatted and animated, reach for text layers instead. (See Creating and editing text layers.)

Note

Drop the Current Time Format animation preset onto a text layer and it'll display the current time, matching whatever time display the project is set to. (See Example: Animate text as a timecode display.)

8-bpc color is what this effect operates in.

Display Format

Picks how the timecode reads out: SMPTE format, plain frame numbers, or feet-and-frames of 35mm or 16mm film.

Time Source

Where the effect pulls its source from.

Layer Source

Pulls the displayed timecode from the layer's own source footage.

Composition

Pulls the displayed timecode straight from the composition.

Custom

Opens up the Custom section's settings, which is how the effect used to behave. Those settings are Time Units, Drop Frame and Starting Frame.

Time Units

The frames-per-second (fps) rate this particular Timecode effect instance should run at. All this setting touches is the numbers the Timecode effect shows — it leaves the composition frame rate and the layer's source-footage frame rate alone.

Drop Frame

Check Drop Frame for drop-frame timecode, or clear it for the non-drop-frame kind.

Starting Frame

Which frame number the layer's opening frame is given.

Text Position

Where the text overlay sits within composition space.

Text Size

How big the text is, measured in points.

Text Color

What color the text takes.

Show Box

Toggles whether that colored box behind the timecode value appears.

Box Color

The shade of the box sitting behind the timecode value.

Opacity

How opaque the box behind the timecode value is.

Composite on Original

Decides if the box composites over the original or over a transparent layer instead.
