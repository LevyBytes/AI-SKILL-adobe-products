# Character spacing for Variable Font animation

How letter spacing gets recalculated while font axes (weight, width, and the like) animate is governed by the Variable Font Spacing property in After Effects.

Animating settings such as weight or width can stretch or compress individual glyphs. To keep the result tidy, After Effects is able to retune the gaps between letters on its own, and this control decides both the timing and the manner of those spacing corrections.

Open up the Text property group on your text layer.

Bring in a Variable Font Axis you'd like to animate.

Within More Options, pick one of these from the Variable Font Spacing dropdown menu:

- Adaptive: Steps in with per-character tracking compensation only where it helps, so spacing stays natural as the axes move.
- Per-Character: Keeps per-character tracking compensation switched on at all times.
- Default: Turns off per-character tracking compensation completely. Glyphs hold onto their initial spacing regardless of how the font axis shifts. Handy for creative looks where you'd rather let the font's own width swings reshape the whole line of text.
