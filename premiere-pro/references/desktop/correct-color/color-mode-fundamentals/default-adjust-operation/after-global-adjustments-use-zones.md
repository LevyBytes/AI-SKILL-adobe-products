# After Global adjustments, use Zones

If the image already looks finished, you can continue without more corrections. When the clip is broadly improved but smaller problems become visible, the next option is to make zone-based changes with the same controls.

Zones divide the image by brightness or tonality. Each zone is based on a threshold, and everything above that threshold for highlight zones, or below it for shadow zones, receives the adjustment.

The starting setup provides two overlapping zones: one for highlights and one for shadows. They blend gradually through the midtones so the result stays natural. Premiere Pro creates those initial zones by analyzing the first frame of the clip at the playhead, either from the clip selected in the Clip Grid or from dragging in the time ruler of the Color viewer. Hover over a zone button to preview, through a monitor overlay, which parts of the image belong to that zone.

Choosing a zone applies the Color & Contrast controls to the image areas inside that zone, with the exception of Contrast and Black. Those two controls remain unavailable in zones because their math depends on the overall image. Exposure, Temperature, Balance, and Saturation can be adjusted inside individual zones.

Zones provide more precise color control in several ways:

- Different shadow and highlight ranges can be raised or lowered, similar to working with an exposure curve in another tool. A highlight zone, for example, can pull back detail that clipped after a global Contrast adjustment that otherwise works well.
- Temperature and Balance can warm a highlight zone or cool a shadow zone, which can suggest a different time of day or weather condition, much like using the Luma key of a secondary operation elsewhere.
- Saturation can target changes comparable to a Lum vs. Sat curve. If highlights or shadows look somewhat artificial after a global saturation increase, those zones can be reduced slightly.

In practice, zones let one set of controls handle many targeted corrections without switching among several unrelated toolsets and their extra steps.

The default Shadows and Highlights zones will likely handle most tone-specific corrections. For narrower shadow or highlight ranges, add zones until there are as many as three highlight zones and three shadow zones, giving six useful adjustment regions. Additional zones can be created from automatic analysis or with highlight- and shadow-specific eyedroppers that sample the tonal threshold you want to work on.

After making zone edits, select the Global button when you want to return to the overall controls.

Tip

Use zones sparingly. There is no need to adjust every zone, and if the image already looks right you may not need zones at all. Unless the intent is a highly stylized result, excessive zone work can make the grade look artificial or strange.

The value of multiple zones is in choosing the appropriate one. All highlight zones overlap each other, and all shadow zones overlap each other, so the reason to pick one over another is greater specificity or a particular color push or pull.

Zones are also not a substitute for the global Contrast control. You can lift the Highlight zone's Exposure and reduce the Shadow zone's Exposure to create a kind of contrast change, but it is usually less satisfying than using Global Contrast with its pivot option. Zone-specific Exposure changes are useful for extending a global Contrast adjustment you already like, not for replacing it.
