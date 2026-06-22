# Keying Effects (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Keying effects — Apply the Unmult effect

Pick the layer whose black or white backdrop you want stripped away to isolate the subject, then head to Effect > Keying > Unmult.

Because the effect strips colors according to how bright they are relative to the chosen backdrop color, open the Background Color dropdown menu and pick from these choices:

- With a black backdrop, you tune the black level so darker regions drop out while the subject stays whole. ​
- With a white backdrop, you tune the white level so brighter regions drop out.

Should you set the Background color to Black, reach for the Black Level slider in the Effect Controls panel to handle the dark regions.

Slide the handle leftward and the threshold falls, leaving more dark regions opaque. Slide it rightward and the threshold climbs, turning more dark regions transparent.

3. In the Effect Controls panel, the Black Level slider is what you turn to for adjusting the chosen layer's dark areas.
   Should you set the Background color to White, reach for the White Level slider in the Effect Controls panel to handle the brighter regions.

Slide the handle leftward and the threshold falls, stripping colors brighter than the chosen value; slide it rightward and the threshold climbs, leaving more of the brighter regions opaque.

4. In the Effect Controls panel, the White Level slider is what handles the chosen layer's brighter areas.
   Reach for the Softness slider to govern how transparent and opaque regions meet, yielding a smoother gradient in place of an abrupt cutoff.

A Softness of 0 gives an abrupt transition; raising it produces a gradual falloff.

Tick Remove Color Matting to bring back the genuine, unblended colors of an image or footage by stripping the backdrop color's influence out of partly transparent regions. ​

The way it works: it pinpoints the backdrop color (e.g., white) and pulls it out of partly transparent regions in proportion. From there it restores the colors to roughly what they were ahead of blending against the backdrop. ​ As an example, where red paint had blended over a white backdrop, this option attempts to subtract the white influence and recover the original red. ​

Tick Clip HDR Results to cap color values within HDR footage, heading off extreme or unexpected outcomes while the Remove Color Matting process handles negative values or values above 1.

## Keying effects — Spill Suppressor effect

Note

As of the June 2014 release of After Effects CC, Spill Suppressor was relocated into the Obsolete effects category, with the Advanced Spill Suppressor effect now the recommended choice.

## Keying effects — Key Cleaner effect

Alpha-channel detail that a standard keying effect leaves behind in a scene gets recovered by the Key Cleaner effect, which also brings back detail surrendered to compression artifacts.

Note

Should stray semi-transparency turn up along edges meant to stay sharp, confine the Key Cleaner effect to the region you want by means of an effect mask carrying a touch of mask feather.

## Keying effects — Advanced Spill Suppressor effect

Where a colored backdrop has been used for color keying, the Advanced Spill Suppressor effect clears that color's spill off the foreground subject.

Two approaches to spill suppression ship with the Advanced Spill Suppressor effect:

1. Standard - Being the more straightforward route, the Standard method picks up the prevailing key color on its own and asks little of the user.
2. Ultra - Premiere's Ultra Key effect supplies the spill suppression that the Ultra method builds on. Learn more about Ultra Key in the Ultra Key section of Premiere.

A convenient route to these effects runs through the Keylight + Key Cleaner + Spill Suppressor animation preset.

Note

As of the June 2014 release of After Effects CC, Spill Suppressor was relocated into the Obsolete effects category, with the Advanced Spill Suppressor effect now the recommended choice.

## Keying effects — Keylight effect

Alongside a handful of native keying effects, After Effects ships the Academy Award–winning Keylight effect, a standout for professional-grade color keying.

Note

- To read up on the Keylight effect, consult the documentation living in the folder where the Keylight plug-in was installed.
- For a broader look at keying, with links to tutorials and further resources, see Keying introduction and resources.

An expression already ties the Key Color property to the Keylight effect's Screen Colour property, so leave it be unless you'd rather drive the despill process with another color. When you do want a different despill color, simply switch off or delete the Keylight expression.

## Keying effects — Using the Keylight + Key Cleaner + Advanced Spill Suppressor animation preset

Work through the steps below to lay down the Keylight effect together with the Key Cleaner and Advanced Spill Suppressor effect:

1. Lay all three effects onto the layer, in sequence, by way of the Keylight + Key Cleaner + Advanced Spill Suppressor animation preset. The Advanced Spill Suppressor effect arrives switched off so you can first sample the key color in the Keylight effect — and so it stays off where the footage has no color spill needing removal.
2. With the Keylight effect's Screen Colour eyedropper, pick up the key color off the layer over in the Composition panel. Fine-tune the rest of the Keylight effect settings just as you usually would for the best outcome.
3. Flip on the effect switch for the Advanced Spill Suppressor effect when the scene calls for color spill to be cleared.

Note

Should stray semitransparency appear along edges meant to stay sharp, confine Key Cleaner to the region you want by means of an effect mask carrying a little mask feather.

Read up on variable-width mask feathering, plus how to soften a mask's edges.

## Keying effects — Using Key Cleaner and Advanced Spill Suppressor effects with other keying effects

Work through the steps below to lay the Key Cleaner and Advanced Spill Suppressor effect onto a keying effect that isn't the Keylight effect:

1. Lay the keying effect onto the layer.
2. Dial the effect to whatever matches the Keylight effect's Indeterminate Result setting, which makes the keying effect hand back the full RGB result and skip any spill suppression of its own.
3. Once the keying effect is in place, add the Key Cleaner effect after it.
4. Following the Key Cleaner effect, add the Advanced Spill Suppressor effect.

## Keying effects — Learn Tutorial

Give this video a look to see how the new Key Cleaner effect pulls cleaner keys out of compressed or poorly shot green-screen footage, and how the Advanced Spill Suppressor controls clear away color spill.

### More like this

- Keying introduction and resources
- Matte Choker effect
- Simple Choker effect
