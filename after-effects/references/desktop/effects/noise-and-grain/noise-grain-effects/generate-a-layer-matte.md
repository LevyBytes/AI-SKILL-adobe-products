# Generate a layer matte

Now and then you'll want a separate layer or track serving as the mask for the layer that runs a grain effect. A mask of this kind gives you boundless say over precisely which regions of an image change, and to what degree.

1. Apply a grain effect to the image.
   Within the Effect Controls panel, head to the Mask Layer control — it lives inside both the Blend with Original and the Masking Layer controls groups — and pick the layer you mean to use as a mask.

2. From the standard track matte mode options, settle on a masking mode.
   When the masking layer's size doesn't match the current layer, pick one of these from the If Mask Size Differs dropdown menu inside the Masking Layer controls:

- Center: sets the masking layer centered over the current layer.
- Stretch To Fit: rescales the masking layer so it matches the current layer's dimensions.

Should you be running a color matte and a layer mask together, pick one of these from the Combine Match and Mask Using menu:

- Screen: turns the matte white anywhere that either the mask or the color match is white.
- Multiply: turns the matte white where both inputs are white.

Choose Final Output from the Viewing Mode dropdown menu.

To shift where the preview region for a grain effect sits or how big it is, turn to the Preview Region controls group.

Since adding or pulling out grain can shift how sharp the detail looks, it's worth previewing a patch of fine detail — a human face or some text, say. When you're stripping grain with the Remove Grain effect, the sound move is to preview a spot where the grain shows up most plainly or bothers you most, like a broad stretch of solid color.

The surest path to good results is to experiment: nudge several controls in the Effect Controls panel by small amounts and check what happens in the Composition panel after each tweak.

Once a grain effect is on, click the Center button inside the Preview Region group of controls in the Effect Controls panel.

The Composition panel shows a crosshair at its center.

On the image, click where you want the preview region centered.

The preview region redraws itself, now centered at the new spot.

To resize the preview region, set the Width and Height values in the Effect Controls panel to whatever size you want, measured in pixels. (Bigger preview regions can drag rendering down.)

Turn on Show Box when you want the preview region outlined in color. To recolor that outline, next to Box Color do one of the following:

- Click the color swatch, then pick a color in the Color Picker dialog box.
- Click the eyedropper button, and click a color anywhere on the screen.

To check the results, do any of the following:

- When you want the noise structure's fine detail up close, zoom into the preview region.
- To study the noise channel by channel on its own, click the matching color channel icon in the Composition panel.
- To speed up interaction and stretch the preview duration, shrink the processed area with the Region of Interest icon in the Composition panel.
- To hold onto an image of the current frame as it stands, click the Take Snapshot icon in the Composition panel. After that you can click the Show Snapshot icon to view that latest snapshot in place of the live composition and to flip between the preview region's current and earlier states. The trick is enormously handy for judging subtle tweaks.
- To weigh the preview region with the grain effect against it without, click the effect switch beside the grain effect's name in the Effect Controls panel to switch the effect off for a moment. Click Take Snapshot in the Composition panel, flip the effect back on to re-enable it, then click and hold Show Snapshot to bring up the snapshot of the image minus the effect.
