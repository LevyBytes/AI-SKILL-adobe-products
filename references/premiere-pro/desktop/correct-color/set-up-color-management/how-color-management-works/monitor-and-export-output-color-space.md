# Monitor and export output color space

For each sequence, Output Color Space defines the color produced in the Program Monitor, through Transmit, and in rendered exports.

Selecting a Color Management preset automatically assigns the Output Color Space usually associated with that preset. You can still change Output Color Space at any time without changing the preset, so a sequence can be output to any supported format that matches delivery needs.

All Color Management presets included with Premiere default to Rec.709 output because it is the most common output. For other SDR or HDR color spaces, open the color parameters in Sequence Settings or the Lumetri Settings panel and set Output Color Space to the delivery target. Premiere Color Management then performs the required conversion so the sequence outputs correctly.

During video-file export, an incompatible Format or Bit Depth selection can prevent use of the current sequence's Output Color Space. In that situation, an Export Color Space may be assigned for conversion to an exportable color space. A warning appears; to export to the selected Output Color Space, choose a supported format or raise the bit depth.
