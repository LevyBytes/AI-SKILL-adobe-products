# Keying effects — Use the Color Difference Key effect

Pick the layer you mean to render partly transparent, then choose Effect > Keying > Color Difference Key.

Over in the Effect Controls panel, set the View menu to Matte Corrected.

Want the source image, both partial mattes, and the final matte all on screen together? Set the View menu to [A, B, Matte] Corrected, Final.

The View menu offers further views worth getting to know.

Choose a key color that fits:

- For a bluescreen, just leave the default blue color in place.
  - Thumbnail eyedropper: choose it, then apply it to a fitting region of the Composition panel or the original thumbnail image.
  - Key Color eyedropper: choose it, then apply it to a fitting region of the Composition or Layer panel.
  - Key Color swatch: choose it, then pick a color out of the specified color space.

As the eyedropper tools are used, the sliders shift to follow them. Lean on those sliders to fine-tune the keying results.

Click the matte button so the final combined matte shows up in the matte thumbnail.

Grab the Black eyedropper and click the lightest black area inside the matte thumbnail to mark which regions go transparent. The thumbnail and the Composition panel both update their transparency values in response.

Grab the White eyedropper and click the darkest white area inside the matte thumbnail to mark which regions stay opaque. The thumbnail and the Composition panel both update their opaque values in response.

For the strongest key possible, drive the black and white regions as far apart as you can, so the image holds onto the widest range of gray tones.

From the Color Matching Accuracy menu, pick a matching accuracy. Stick with Faster unless your screen isn't a primary color (red, blue, or yellow); for screens like those, choose More Accurate, which lengthens render time but yields cleaner results.

Need still finer transparency control? Run through steps 5 and 6 again for either or both partial mattes. Click the Partial Matte B button or the Partial Matte A button to pick a partial matte, then repeat the steps.

Tune transparency on each partial matte and on the final matte by dragging any of the following sliders in the Matte Controls section:

Black sliders set the transparency level of each matte. The Black eyedropper can dial in those same levels.

White sliders set the opaque level of each matte. The White eyedropper can dial in those same levels.

Gamma sliders govern how tightly transparency values track a straight-line progression. Left at 1 (the default), that progression stays linear; any other value bends it into a nonlinear curve for specific tweaks or visual effects.

9. Use the matte controls sliders to set transparency on both the partial mattes and the final one.
   While you work on the individual mattes, use the View menu to weigh each matte against its unadjusted form:

Pick Uncorrected to see a matte stripped of any adjustments.

Pick Corrected to see a matte carrying every adjustment.

Before you shut the Effect Controls panel, set the View menu to Final Output. Unless Final Output is the active selection, After Effects won't render the transparency.

To clear reflected key color out of the image, run Spill Suppressor with Better For Color Accuracy. Should heavy color linger, apply the Simple Choker or Matte Choker effect.
