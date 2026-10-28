# Broadcast-safe colors

The amplitude of an analog video signal gets measured in IRE units (PAL video states it in volts instead). Whatever falls between 7.5 and 100 IRE counts as broadcast-safe, meaning such colors won't trigger problems like audio noise or color smearing. (Realistically a few spikes past 100 IRE still pass, yet treating 100 IRE as the hard ceiling keeps things simple here.) Mapped to a black-to-white span, that 7.5-100 IRE window matches 64-940 in 10-bpc values for Y' in Y'CbCr, which equals 16-235 once you drop to 8-bpc. Because of this, plenty of video hardware and software read black as 16 and white as 235 rather than 0 and 255. No direct mapping ties these figures to RGB values.

Should imported footage strike you as off — blacks that aren't dark enough, whites that aren't bright enough — double-check that the right input color profile has been assigned. Among the standard video color profiles that ship with After Effects, you'll find versions built for these narrowed ranges, the HDTV (Rec. 709) 16-235 color profile being one, since it treats 16 as black and 235 as white.

Note

- Certain video cards and encoders presume the output spans 0-255, in which case clamping the colors of your composition and rendered movie becomes pointless and may squeeze the color range in a way you don't want. When an output movie ends up looking dull, try an output color profile that draws on the full color range instead.
- Footage that looks washed out is worth checking with the Levels effect: open the histogram and see whether the lowest and highest color values sit at or close to 16 and 235. When they do, interpret that footage with one of the 16-235 input color profiles.

To pull luminance or saturation down to a safe level you can reach for the Broadcast Colors effect, though limiting output to the broadcast-safe range works best when you simply build your composition to stay inside that range from the start.

Bear these pointers in mind:

Steer clear of pure black and pure white values.

Hold back on heavily saturated colors.

Render a test movie and watch it on a video monitor to confirm the colors reproduce faithfully.

Note

Instead of leaning on the Broadcast Colors effect to drop luminance or saturation, pair that effect with either the Key Out Unsafe or Key Out Safe option. Drop the effect onto an adjustment layer sitting at the top of the layer stack to reveal which regions of the image fall outside the broadcast-safe range.

Bundled with After Effects, the Color Finesse plug-in carries first-rate tools for keeping colors inside the broadcast-safe range. Consult the Color Finesse documentation located in the folder that holds the Color Finesse plug-in for further detail. Learn more about color correction, color grading, and color adjustment.

Note

In After Effects 7.0, the Interpret Footage dialog box offered an Expand ITU-R 601 Luma Levels option. Open such a project in After Effects CS3 or later and any footage items created with that option get a matching profile assigned.

### More like this

- Interpret footage items
- Output modules and output module settings
- Color models and color spaces
- Color depth and high dynamic range color
