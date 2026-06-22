# Keying

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Oct 24, 2024

## Keying introduction and resources

Note

A background that lacks a steady, distinctive color can't be stripped away with keying effects. In situations like that, rotoscoping may be your route—hand-drawing or painting across individual frames to separate a foreground object from what's behind it. (See Rotoscoping introduction and resources.)

## About keying: color keys, luminance keys, and difference keys

Setting transparency according to a specific color value or luminance value within an image is what keying is. Key out a value and every pixel whose color or luminance value sits close to it turns transparent.

Swapping in a new background becomes simple with keying, which pays off most when your objects are too intricate to mask with ease. Lay a keyed layer atop another layer and you get a composite: the background peeks through everywhere the keyed layer is transparent.

Composites built through keying turn up often in movies—think of an actor seeming to hang from a helicopter or drift through outer space. Pulling that off means filming the actor in a fitting pose in front of a solid-color background screen. That background color is then keyed out and the actor's scene is composited over a fresh background.

Keying out a background of one steady color often goes by the name bluescreening or greenscreening, though blue or green isn't required; any solid color works as a background. For shooting non-human subjects—miniature models of cars and spaceships, say—red screens get plenty of use. Magenta screens have served keying work on certain feature films celebrated for their visual effects. This style of keying also answers to color keying and chroma keying.

The way difference keying operates sets it apart from color keying. Transparency in difference keying is defined against a particular baseline background image. Rather than keying out a single-color screen, you can key out any arbitrary background. Difference keying calls for at least one frame holding nothing but the background; the rest of the frames get compared against it, and the background pixels turn transparent, leaving the foreground objects behind. In practice, noise, grain, and other small variations can render difference keying quite tricky to pull off.

## Keying effects, including Keylight

Bundled with After Effects are a handful of native keying effects, alongside the Academy Award-winning Keylight effect, a tool prized for delivering professional-grade color keys. (See Keying effects and Matte effects.)

Documentation specific to Keylight lives in the directory where the Keylight plug-in was installed, and is also published on the Foundry website.

Note

The native color keying effects shipped with After Effects do have their uses, but reach for Keylight first before falling back on them. A number of the older ones—the Color Key effect and the Luma Key effect among them—have since been replaced by more capable tools such as Keylight.

You get the best results from the Key Cleaner and Advanced Spill Suppressor effects by stacking them together in that sequence, immediately following a keying effect like Keylight.

All three effects can be dropped in at once through the Keylight + Key Cleaner + Advanced Spill Suppressor animation preset, which sits in the Image-Utilities presets folder. By default the Advanced Spill Suppressor effect arrives switched off, leaving you free to sample the key color within the Keylight effect, or covering the case where the footage carries no color spill that needs clearing. For more information, see Key Cleaner and Advanced Spill Suppressor effect.

Note

Bear in mind that a clean, high-quality key may demand that you chain several keying effects one after another and tune their properties with care—all the more so when the footage was captured without any thought for what the compositor would later need.

## Shooting and acquiring footage for keying

Keep the lighting on your color screen even across its surface, and make sure no wrinkles show.

Begin from the best-quality source you can lay your hands on, for instance film that you then scan and digitize.

Work from uncompressed footage whenever you can, or failing that, the lightest compression available. Plenty of compression schemes—those behind DV, HDV, and Motion JPEG in particular—throw away the faint blue gradations that a good bluescreen key often depends on. Pick footage whose color subsampling is as light as possible: favor 4:2:2 over 4:2:0 or 4:1:1.

On the Peachpit website, Robbie Carman and Richard Harrington share an excerpt from their book Video Made On A Mac walking through how to plan, shoot, key, and composite a greenscreen shot.

## Tips for keying with After Effects

- Sketch a garbage matte that loosely traces your subject, sparing you the wasted effort of keying out background regions nowhere near the foreground subject. (See Use a garbage matte.)
- Lay down a hold-out matte to loosely shield regions whose color resembles the background, so they aren't keyed away by mistake. (See Use a hold-out matte.)
- To make transparency easier to judge, swap the composition's background color temporarily, or slip a background layer in behind the one you're keying. With the keying effect applied to the foreground layer, that composition background (or background layer) becomes visible through it, so the transparent regions read clearly. (See Composition settings.)
- When the footage is lit evenly, set your keying controls on a single frame only. Pick the busiest frame in the scene—one packed with fine detail like hair, or transparent and semitransparent material such as smoke or glass. As long as lighting holds steady, whatever settings you dial in on that first frame carry over to every frame after it. Should the lighting shift, expect to retune the keying controls on additional frames. Drop keyframes for the first group of keying properties right where the scene begins. When only a single property is being keyframed, reach for Linear interpolation; footage that calls for keyframes across several properties acting together is better served by Hold interpolation. Once keying properties carry keyframes, it's worth stepping through the results one frame at a time, since in-between keying values can crop up and throw off the look unexpectedly.
- For well-lit footage shot against a color screen, open with the Color Difference Key. Layer on the Advanced Spill Suppressor effect to strip out residual key color, then bring in one or more of the other Matte effects if the shot still needs it. Should the outcome disappoint, take another run at it starting from the Linear Color Key.
- When the footage was lit well but shot against several colors, or lit unevenly against a bluescreen or greenscreen, begin instead with the Color Range key. Add the Advanced Spill Suppressor plus other effects to tighten up the matte. If you still aren't fully happy, try opening with the Linear Color Key or folding it in.
- The surest route through Keying effects is running the Key Cleaner and the Advanced Spill Suppressor effect back to back. You can pair Keylight with those two—Key Cleaner then Advanced Spill Suppressor in that order—on a layer by way of the Keylight+Key Cleaner+Advanced Spill Suppressor animation preset, found in the Image-Utlities folder under Animation Presets. That last effect arrives disabled out of the box, which lets you either sample the key color inside Keylight or leave it untouched on footage with no spill to remove. For more information, see Key Cleaner and Advanced Spill Suppressor effect.
- For keying out shadows or dark regions, apply the Extract Key to the Luminance channel.
- To drop out an unchanging background scene, turn to the Difference Matte Key. Bring in the Simple Choker and any other effects you need to refine the matte.
- Once a key has produced your transparency, lean on Matte effects to clear away leftover key color and tidy the edges.
- Softening the alpha channel with a blur after keying can ease the matte's edges and lift the quality of your composite.

## Use a garbage matte

A garbage matte—sometimes called a junk matte—strips away the parts of the scene you don't need, leaving a rough region holding only the subject you mean to keep. With a poorly lit or patchy color screen on your hands, such as a bluescreen or greenscreen, roughing in a garbage matte around the subject can slash how much background-keying work is left for you. Push it too far, though—lavishing time on a flawless garbage matte that hugs the subject's exact outline, which is really just rotoscoping—and you forfeit the very time savings keying was meant to give you.

1. Draw a mask that loosely traces the subject's outline.
2. Run one or more keying effects to drop out whatever background is left.
3. As the matte needs it, refine it with Matte effects.

## Use a hold-out matte

Reach for a hold-out matte (also known as a hold-back matte) when you need to patch up a scene that already has a keying effect on it.

What a hold-out matte amounts to is a masked-off region taken from a duplicate of the layer you keyed. You mask that duplicate down to just the slice of the image holding the key color you want kept opaque, then lay the hold-out matte straight over the keyed layer.

Example of using a hold-out matte

A. Original bluescreen image. The background for the number is also blue. B. After keying, the background for the number is also transparent. C. Hold-out matte containing the part of the image you want to remain opaque D. When the hold-out matte is placed on top of the keyed image, the background for the number is now opaque.

Example of using a hold-out matte

1. Make a copy of the layer that holds the color screen.
2. On the original layer, build transparency by running keying effects together with Matte effects.
3. Over on the copied layer, draw masks that hide all of the image apart from the region you mean to keep.
   Once you've made the duplicate, leave the Transform properties of just one layer alone—let the pair travel together. Parenting one layer to the other is worth considering. (See Parent and child layers.)

### More like this

- Keying effects
- Matte effects
- Creating shapes and masks
