# Cineon and DPX footage items

Scanning developed film and writing each frame out as Cineon or DPX is a routine stage in producing motion-picture film. DPX, short for Digital Picture Exchange, is a standardized format that sits very close to Cineon.

Either Cineon 4.5 or Digital Picture Exchange (DPX) files can be brought straight into an After Effects project, whether as single frames or as a numbered run of stills. With a Cineon or DPX file imported, you can drop it into a composition and afterward render that composition out as an image sequence.

So that the entire dynamic range of motion-picture film survives, Cineon files hold their color in logarithmic 10-bpc form. Internally, though, After Effects runs on 8-bpc, 16-bpc, or 32-bpc color, whichever matches the project's color bit depth. Handle Cineon files inside a 16- or 32-bpc project—out of the box, After Effects expands the logarithmic values across the whole range of values on offer.

In Cineon data the 10-bit white point sits at 685 and the 10-bit black point at 95. Anything past 685 is kept but handled as highlights. Instead of clipping highlights hard to white, After Effects eases them in along a gentle ramp governed by the Highlight Rolloff value. Both the 10-bit white point and 10-bit black point input levels, along with the output (converted) white point and black point levels, can be adjusted to suit your particular footage items or creative aims.

Set a project color depth of 32 bpc for Cineon footage items, which keeps highlights intact and removes any need to roll them off.

Picking DPX/Cineon Sequence from the Format menu within the Output Module Settings dialog box lets you then bring up the Cineon Settings dialog box to set output options. In the File Format section of the Cineon Settings dialog box, decide whether the output goes to DPX (.dpx) files or FIDO/Cineon 4.5 (.cin) files.

There are three fundamental approaches After Effects offers for handling the colors in Cineon footage items:

Simplest—and the recommended route—is to turn on color management and, in the Color Management tab of the Interpret Footage dialog box, give the Cineon footage item an input color profile that matches the film stock the footage was shot on. When the goal is film output, point the output color profile at that same profile so the output file lines up with the film stock. A side benefit of leaning on color management for Cineon footage items is that combining them with images from other footage types becomes simpler.

- Should the interpretation settings for the Cineon footage item need to shift over time, apply the Cineon Converter effect to a layer whose source is that Cineon footage item.

- When the settings for a Cineon footage item have to be tweaked by hand, or when color management isn't something you want to use, reach for the Cineon Settings dialog box. To bring it up, head to the Interpret Footage dialog box, open its Color Management tab, and click the Cineon Settings button there.

Manual settings in the Cineon Settings dialog box:

Converted Black Point

Sets which black point the layer uses inside After Effects.

Converted White Point

Sets which white point the layer uses inside After Effects.

10 Bit Black Point

Sets the black level (minimum density) applied when a 10-bit Cineon layer is converted.

10 Bit White Point

Sets the white level (maximum density) applied when a 10-bit Cineon layer is converted.

Current Gamma

Sets the gamma value you're aiming for.

Highlight Rolloff

Sets the rolloff value that tames bright highlights. For over-range values while working in 32 bpc, drop this to 0.

Logarithmic Conversion

Takes the Cineon sequence out of log color space and into the target gamma named by the Current Gamma setting. Once you're set to generate output from the Cineon file, reversing that conversion matters. (Going from logarithmic back to linear means setting Current Gamma to 1.)

Units

Sets which units After Effects shows for dialog values.

### More like this

- Memory and storage
- Copy a path from Illustrator,Photoshop, or Fireworks
- Output modules and output module settings
- Import footage items
