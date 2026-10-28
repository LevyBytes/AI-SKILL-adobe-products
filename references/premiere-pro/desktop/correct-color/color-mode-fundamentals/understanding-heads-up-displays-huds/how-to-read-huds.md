# How to read HUDs

HUDs are made from these parts:

- Video Scope Graph: Most HUDs include a video scope graph matched to the scope best suited for judging the part of the video signal being adjusted.
- Min: (Only appears with Waveform and Parade scopes) This line sits at the bottom of the HUD and marks absolute black in the image. Moving any portion of the video signal below min clips shadow pixels to black.
- Max: (Only appears with Waveform and Parade scopes) This top HUD line represents the Output Peak Luminance selected by the sequence color management. Any video signal pushed above Max loses highlight detail because those pixels clip completely.
- Reference White: (Shown only with an HDR setting for Output color space) Reference White, also called diffuse white or graphics white, marks where normally lit reflective whites would appear on the Waveform scope, including examples like a white wall, white paper, a white napkin, or a white t-shirt. Values beyond Reference White become extra-bright "HDR-strength" highlights, such as chrome reflections, direct sunlight, explosions, eye-glints, direct light sources, or mirror reflections. The Reference White level helps separate ordinary bright areas from the high-intensity "sparkly bits" that give a graded HDR image its extra-bright accents.
- Hue Angles graticule: (Only appears on Vectorscopes) Diagonal lines indicate each hue angle in the Vectorscope, including Red, Magenta, Blue, Cyan, Green, and Yellow. Their center intersection is the neutral zero-saturation point. These lines help evaluate test-signal accuracy and show which image areas sit closest to each pure hue.
- Texture graphs: (Only appears for Texture controls) This high-contrast texture rendering of the current frame makes it clear which clip areas are influenced by sharpening or softening applied to the image.
