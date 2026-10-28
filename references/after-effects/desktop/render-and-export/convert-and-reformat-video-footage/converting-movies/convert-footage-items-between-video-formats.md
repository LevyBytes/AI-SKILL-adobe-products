# Convert footage items between video formats

After Effects lets you turn footage of one video type into another. As you carry out such a conversion, bear these pointers in mind:

Shifting the resolution can cost you some sharpness in the picture, and that loss shows up most when you scale a standard-definition source up to a high-definition target.

Altering the frame rate may call for frame blending so the interpolated frames look smooth. On lengthier footage items, that frame blending can push render times out quite far.

1. Pull the footage you want to convert into a composition built from the preset of your target format. To take a case: going from NTSC to PAL, you'd drop your NTSC footage item onto a composition set to the right PAL composition settings preset.
   Pick the layer holding the footage you’re converting, then select Layer > Transform > Fit to Comp Width or Fit to Comp Height.

When the two formats share the same frame aspect ratio, the two Fit commands behave identically; once the frame aspect ratios diverge (say, moving from 4:3 to 16:9), choosing fit-to-width versus fit-to-height decides whether the result gets cropped or letterboxed.

For footage with no scene cuts, reach for Layer > Frame Blending > Pixel Motion. Pixel Motion yields the finest frame interpolation, though the trade-off is potentially lengthy rendering times.

When the footage does carry scene cuts, or whenever you’d rather trade quality for quicker renders, pick Layer > Frame Blending > Frame Mix.

Choose Composition > Add to Render Queue.

Within the Render Queue panel, beside Render Settings, pick the matching preset off the menu. As an example, when your target is DV footage, choose DV Settings from that menu.

Still in the Render Queue panel, beside Output Module, grab the right output module preset from the menu, or pick Custom to dial in your own values. Converting to DV PAL, for one, you'd pick the D1/DV-PAL output module preset and pair it with whatever audio sampling rate is called for.

Click the name of the output module preset you settled on back in step 6 to reach more Format Options.

In the Render Queue panel, use the controls sitting just past the Output To heading on its right side to set the output file's name and where it lands.

Hit the Render button to render your movie.
