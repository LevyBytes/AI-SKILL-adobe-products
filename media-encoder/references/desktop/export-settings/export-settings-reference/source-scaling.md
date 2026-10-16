# Source Scaling

In the Output tab, Source Scaling controls how the cropped image fits the final resolution.

Source Scaling in the Output tab adjusts the cropped image against the final resolution.

When source and export frame sizes differ, the Source Scaling menu determines source placement inside the exported video frame. This setting appears for output formats with editable frame dimensions.

Scale to Fit fits the source frame inside the output frame without distortion or cropping. Black bars can be added at the top and bottom (letter-box) or sides (pillar-box) as needed.

If the source video has been cropped, the cropped dimensions are fitted inside the exported video frame.

Source Scaling dropdown in the Output tab with Scale to Fit selected.

Scale to Fit selected in the Output tab Source Scaling dropdown.

Scale to Fill preserves proportions while enlarging the source until no empty area remains; edges can be removed vertically or horizontally.

Source Scaling dropdown in the Output tab with Scale to Fill selected.

Scale to Fill selected in the Output tab Source Scaling dropdown.

Stretch to Fill stretches the source frame to fill the output frame with no cropping. If exported frame size and source frame size differ greatly, distortion can appear in the output video.

Source Scaling dropdown in the Output tab with Stretch to Fill selected.

Stretch to Fill selected in the Output tab Source Scaling dropdown.

Scale To Fit With Black Borders includes cropped areas while fitting the source frame into the output frame without distortion. The video receives a black border even when the output frame is smaller.

Source Scaling dropdown in the Output tab with Scale To Fit With Black Borders selected.

Scale To Fit With Black Borders selected in the Output tab Source Scaling dropdown.

Change Output Size To Match Source sets output video frame dimensions from the source video's height and width, replacing the current output frame size settings. Use this setting when output frame size must always match source frame size.

Source Scaling dropdown in the Output tab with Change Output Size To Match Source selected.

Change Output Size To Match Source selected in the Output tab Source Scaling dropdown.

Note

Some export formats do not offer Change Output Size to Match Source. For the same behavior, use the video tab's Match Source button or select a Match Source preset.
