# Motion tracking options

A tracker — meaning the cluster of track points produced during a single tracking session — is what these settings govern. Reach them by clicking Options inside the Tracker panel.

Track Name

What the tracker is called. Renaming a tracker is also possible by selecting it in the Timeline panel and hitting Enter on the main keyboard (Windows) or Return (macOS).

Tracker Plug-in

Whichever plug-in carries out motion tracking for the tracker. The default reading here is Built-in, the sole tracking plug-in that ships with After Effects.

Channel

Which parts of the image data get compared while hunting for a feature-region match. Reach for RGB when the tracked feature has a distinct color. Reach for Luminance when the tracked feature differs in brightness from what surrounds it (for instance, a lit candle being carried through a room). Reach for Saturation when the tracked feature packs a heavy concentration of color and sits among variations of that same color (for instance, a vivid red scarf set against a brick wall).

Enhance Before Match

Briefly blurs or sharpens the image to aid tracking. Blur cuts noise out of the footage. A setting of 2 to 3 pixels is generally plenty to yield cleaner tracks in grainy or noisy footage. Enhance plays up or tightens an image's edges, which makes them simpler to follow.

Note

The blurring or enhancing that After Effects performs is for tracking purposes only. None of that blurring touches the motion source layer itself.

Track Fields

Briefly doubles the composition's frame rate and interpolates each field up to a full frame, letting you track motion across both fields of interlaced video.

Subpixel Positioning

With this on, keyframes get generated to a precision finer than a whole pixel. With it off, the tracker snaps generated-keyframe values to the closest pixel.

Adapt Feature On Every Frame

Makes After Effects re-fit the tracked feature on a per-frame basis. Rather than searching the search region for the image data captured in the feature region when analysis began, it searches for the image data that occupied the feature region one frame earlier.

If Confidence Is Below

Sets which action runs once the Confidence property value drops under the percentage you've entered.

Note

Figuring out a workable confidence threshold means tracking the motion first, then inspecting the Confidence values for the track point in the Timeline panel on the frames that gave trouble. Enter a confidence value a touch above the highest confidence value among those troublesome frames.

- Pick Continue Tracking to disregard the Confidence value. That's how it behaves out of the box.
- Pick Stop Tracking to bring the motion tracking to a halt.
- Pick Extrapolate Motion to approximate where the feature region is. No attach-point keyframes get made for the low-confidence frames, and any attach-point keyframes left over from earlier tracks on those low-confidence frames get removed.
- Pick Adapt Feature to stick with the originally tracked feature right up until confidence sinks past the threshold you set. From there, After Effects re-fits the tracked feature to whatever fills the feature region on the frame just ahead of the low-confidence one, then keeps tracking. You can't use this option when Adapt Feature On Every Frame is turned on in the Motion Tracker Options dialog box – switching on feature adaptiveness forces After Effects to re-fit the feature region on every frame no matter the confidence level.

Options

Brings up the Tracker Plug-in Options dialog box, home to options for the AE Original Built-in Tracker. You'll only see this command when you've opted to run the older After Effects tracker plug-in.

Note

Showing or hiding motion paths in the Layer panel comes down to checking or unchecking the Display Motion Paths option within the Tracker panel's panel menu. (That panel menu is the one you open from the icon at a panel's upper-right corner.) The same menu also lets you drop in a new track point, surface the current track in the Timeline panel, and switch feature-region magnification on or off.
