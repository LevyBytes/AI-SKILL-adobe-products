# PS Arbitrary Map effect

The only reason the PS Arbitrary Map effect exists is backward compatibility with projects from older After Effects releases that relied on the Arbitrary Map effect. Reach for the Curves effect on anything new.

What the PS Arbitrary Map effect does is lay a Photoshop arbitrary map file onto a layer. Such a map reworks an image's brightness levels, pushing a chosen brightness band toward darker or lighter tones. Photoshop's Curves window is where you build an arbitrary map file, either across the whole image or per channel.

This effect works with 8-bpc and 16-bpc color.

Bringing in and applying an arbitrary map file happens through Options in the Effect Controls panel. Once it loads into After Effects, the map gets applied to the layer — or to one or several of its channels — according to how the file was authored. When no arbitrary map is chosen, After Effects falls back on the default map, which spreads brightness linearly across the layer. Direct import of .acv files or Photoshop spline files into the PS Arbitrary Map effect isn't supported, but converting them in Photoshop yields files the After Effects Curves effect can read.

Note

Converting .acv and Photoshop spline files goes like this: open the .acv file (Windows) or the Photoshop spline file (Mac OS) inside the Curves dialog box, pick the Pencil tool, then write the result out as an .amp file (Windows) or Photoshop lookup file (Mac OS).

Phase

Steps through the arbitrary map cyclically. Raising the phase nudges the map rightward (the way it looks in the Curves dialog box), while lowering it slides the map to the left.

Apply Phase Map To Alpha

Puts the chosen map and phase onto the layer's alpha channel. Should the chosen map lack an alpha channel, After Effects substitutes the default map — a linear brightness spread — for that alpha channel.
