# Output Cycle controls

Use Preset Palette

Presets for the Output Cycle. The top palettes suit fast color correction and adjustment jobs. The lower choices supply an assortment of built-in color palettes for creative ends.

Output Cycle

Tailor the output color palette by reworking the colors and positions of the triangles on the Output Cycle wheel. Each triangle pins down where on the color wheel a given color sits. Color between triangles is interpolated smoothly, unless Interpolate Palette is turned off. Every Output Cycle holds anywhere from 1-64 triangles.

Drag a triangle to reposition it. Shift-drag to lock the triangle to 45-degree steps. Up at the top of the wheel, the triangle locks to either the start position or the end position depending on whether you drag from the left or the right.

Click in or beside the wheel to add a triangle, then pick a color from the color picker. Click just left of the top arrows for the end color, just right for the start color.

To copy a triangle, Ctrl-drag (Windows) or Command-drag (Mac OS) it.

To remove a triangle, drag it off the wheel.

To adjust the opacity, pick a triangle on the color wheel, then drag the attached triangle above the opacity slider. Confirm that Modify Alpha is on if you want the opacity data to carry into your output.

Note

As you animate the Output Cycle, a triangle's position and color are interpolated from keyframe to keyframe. For the best outcome, see that every keyframe carries the same count of Output Cycle triangles.

Cycle Repetitions

How many passes of the Output Cycle the input color range maps onto. At the default of 1, the input range maps to a single pass of the Output Cycle — beginning at input black up top on the Output Cycle wheel and sweeping clockwise back around to input white at that same top point. A value of 2 maps the input range across two passes of the Output Cycle. Use this to craft a simple palette and echo it repeatedly through a gradient.

Interpolate Palette

Colors between triangles are interpolated smoothly. Switch this off and the output colors become posterized.
