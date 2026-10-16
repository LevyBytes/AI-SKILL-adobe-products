# Cell Pattern effect

Cellular patterns built on cellular noise are what the Cell Pattern effect produces. Reach for it when you need still or animated background textures and patterns. Those patterns can then serve as textured mattes, transition maps, or the source for displacement maps.

Color depth of 8-bpc is supported by this effect.

Original image (left); the Cell Pattern effect creates a displacement map (center), which is used as a displacement map for the Displacement Map effect (right).

Cell Pattern

Which cell pattern to apply. The HQ tag marks high-quality patterns, which render sharper than the versions without the tag. Mixed Crystals comes only as a high-quality choice.

note: In appearance, the Static Plates option matches the Plates option. The difference shows during evolution: static plates hold a steady lightness value, whereas plates let the lightness of the cell pattern drift.

Invert

Flips the cell pattern, so black regions turn white and white regions turn black.

Contrast/Sharpness

Sets contrast for the cell pattern when you've chosen Bubbles, Crystals, Pillow, Mixed Crystals, or Tubular. For any of the Plate or Crystallize options, it sets sharpness instead.

note: Whatever you pick from the Overflow menu has a bearing on the contrast.

Overflow

How the effect handles values landing outside the 0-255 grayscale range. Overflow can't be used once a sharpness-based cell pattern is in play.

Clip

Anything above 255 maps to 255, and anything below 0 maps to 0. The Contrast amount drives how much of the image spills past the 0-255 range; crank contrast up and the image trends toward mostly black or white with little gray, so subtle cellular detail thins out at higher contrast settings.

Soft Clamp

Pulls grayscale values back inside the 0–255 range. Contrast looks softened, leaving cells mostly gray with only scattered patches of pure black or white.

Wrap Back

Values past 255 or under 0 fold back into the 0-255 range. A value of 258 (255+3), for example, folds to 252 (255-3), and a value of ‑3 folds to 3. Under this setting, Contrast values over 100 add complexity and detail.

Disperse

How randomly the pattern gets drawn. Smaller values yield more uniform, gridlike cell patterns.

note: Should you push the Disperse value past 1.0, switch the layer to Best quality so artifacts don't creep in.

Size

How big the cells are. Default size is 60.

Offset

Picks which slice of the fractal shape goes into building the pattern.

Tiling Options

Pick Enable Tiling to assemble the pattern from repeating tiles. Cells Horizontal and Cells Vertical set how many cells wide and how many cells tall each tile runs.

Evolution

Keyframe this setting and the pattern shifts over time.

note: Evolution is measured in units called revolutions, but keep in mind those revolutions move forward only. The Evolution state keeps advancing without end at every fresh value. Turn on Cycle Evolution to snap the Evolution setting back to where it started on each revolution.

Evolution Options

Evolution Options give you controls that render the effect across one brief cycle and then loop that for as long as your clip runs. Use them to pre-render cell pattern elements into loops, which trims render time.

Cycle Evolution

Builds a loop that drives the Evolution state back to its starting point.

Cycle

How many revolutions of the Evolution setting the cell pattern runs through before repeating. The spacing between Evolution keyframes sets the pace of the Evolution cycles.

note: The Cycle control touches only the cell pattern's state, leaving geometrics and other controls alone, so varying the Size or Offset settings yields different results.

Random Seed

Sets a value that seeds the cell pattern. Keyframing this property produces flashing between cell patterns (within the same cell pattern type), which usually isn't what you're after. For a smooth cell-pattern transition, keyframe the Evolution property instead.

note: Spin up fresh cell pattern animations by recycling Evolution cycles you built earlier and editing only the Random Seed value. A new Random Seed value reshapes the cell pattern while leaving the Evolution animation intact.
