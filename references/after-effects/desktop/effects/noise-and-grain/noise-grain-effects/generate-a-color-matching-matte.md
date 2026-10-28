# Generate a color-matching matte

The first time a grain effect is applied, a neutral gray seeds a default color-matching matte, so most images show a matte you can see. Color matching is how the Color Matching group of controls pins down a matte exactly. That matte singles out the parts of the image where the layer running the grain effect blends with the input.

Put a grain effect on the image.

To pick a color the effect should either skip or be confined to, do one of the following next to the Matching Color control inside the Blend with Original and Color Matching controls groups:

- Click the color swatch, then pick a color in the Color Picker dialog box.
- Click the eyedropper and then a color anywhere on the screen.

- So the grain effect leaves the chosen color alone, confirm the Invert Match control is turned off.
- To pen the grain effect in to just the chosen color and spare everything else, turn on Invert Match.

When you'd like colors near the matching color excluded as well, push up the Matching Tolerance value, which fixes the threshold for color matching. The higher it climbs, the more the matte takes in pixels whose colors stray further from the matching color.

Pick an option under the Match Color Using control whenever you want to swap out the default test (RGB) for judging whether a color resembles the matching color.

Work the Matching Softness controls to fix how wide the transition band runs between fully matched and fully unmatched pixels — in other words, how gently the affected regions blend into the original image.

Turn on Invert Match when you want the matte flipped so white turns to black and black turns to white. (Within the matte the matching color reads as black and gets processed by the grain effect no matter the Amount setting. Inverting leaves every other setting untouched.)

Should you be running a color matte and a layer mask together, pick one of these from the Combine Match and Mask Using menu:

- Screen: turns the matte white anywhere that either the mask or the color match is white.
- Multiply: turns the matte white where both inputs are white.

Choose Final Output from the Viewing Mode dropdown menu.
