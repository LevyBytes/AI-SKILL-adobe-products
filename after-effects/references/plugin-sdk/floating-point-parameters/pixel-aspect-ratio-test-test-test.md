# Pixel Aspect Ratio — Test Test Test!

Run your tests at 1/2, 1/4, and custom resolutions, then line the outputs up against each other. An anamorphic (2:1) pixel aspect ratio composition is excellent for flushing out pixel-aspect-ratio handling bugs — it puts them on full display — and don't forget to vary the horizontal and vertical downsample factors independently while testing.

A few developers have run into zero-valued downsample factors coming from certain "After Effects compatible" plug-in hosts. Guard against a zero before you divide by it.
