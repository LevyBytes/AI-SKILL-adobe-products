# Taper Shape Strokes

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Refine vector stroke design in Adobe After Effects by tapering stroke width along paths for greater visual control and polished animations.

On shape layers you can build wavy, pointy, or rounded strokes and animate how they look to produce eye-catching graphic elements. After Effects differs from Illustrator here: rather than letting you set any thickness at any point along the shape, it gives you parameters for tapering or waving the ends.

Beyond just tapering the strokes, the feature eases their thickness down gradually for a cleaner finish. You can also emphasize how gently the tapering of your animations builds up and winds down over time. New to making strokes on shape layers? Strokes and fills for shapes is a good place to begin.

## Tapered Strokes let's you:

Adjust where the taper begins along the path

Tapering the stroke's start, setting how long the taper runs, and governing its ease are all within reach. Say you want the taper to kick in only at the midpoint—with the Length Unit set to Percentage, set the Start Length property to 50%.

Taper a stroke at either end

Either side of the stroke can be tapered by means of the Start Length and End Length properties. Picture wanting both ends of a wave to flow more smoothly and seamlessly than its middle does.

Adjust the roundness of the taper

Although tapering tends toward pointy edges, you can round those off on both sides. The Start Ease and End Ease properties handle that.

Create waves of variable thickness along the full length of the stroke

Waves can be layered onto your strokes too, with adjustable thickness for an experimental feel. Adding them is what the Wave parameter is for.

Combine tapering with other stroke customization

On top of that, other stroke treatments—dashes, or trim paths for fresh looks—are fair game. You might, for instance, build a write-on text animation and set it in motion with the Trim Paths property.

## Controls

To get going, these are the controls you'll use for tapered strokes:

## Taper: Use it to adjust the width of the stroke along the path.

Length Units: Pick one of two options—Percentage and Pixels. Pixels are the better choice when you animate the size of the path (by trimming it, for instance), since they hold the taper length steady regardless of the path's length. Reach for percentage when you'd rather the length scale with the path, as in tapering from the midpoint to the end with 50%.

Start Length: Sets how far the taper reaches in from the stroke's start.

End Length: Sets how far the taper reaches in from the stroke's end.

Start Width: Sets the taper's thickness over the path's starting length. The start length has to carry a non-zero value for any effect to show.

End Width: Sets the taper's thickness over the path's ending length. The end length has to carry a non-zero value for any effect to show.

Start Ease: Governs how round the taper is across the start length. It takes the taper's sharp edges along the stroke and softens them toward a more natural look. On the slider, a negative value yields pointy tapering, 0 yields linear tapering, and anything higher yields rounder tapering.

End Ease: Governs how round the taper is across the end length. It takes the taper's sharp edges along the stroke and softens them toward a more natural look. On the slider, a negative value yields pointy tapering, 0 yields linear tapering, and anything higher yields rounder tapering.

## Wave: Use it to add waves to a stroke along the path.

- Amount: Sets both how strong the waves are and how many appear in a stroke. Lower values make shallow waves; higher ones make deeper waves.
- Units: Decides whether the wavelength reads in Pixels or Cycles. Cycles suit closed shape paths because they keep the edges continuous.
- Wavelength: Sets how far apart the waves sit. A small number spreads them out sparsely; a larger one packs them tightly.

- Phase: Shifts the wave along the path, which lets the wave travel across the path's length as it animates.

### Choose from the different units of wave for different results

Unit set to Cycles

Unit set to Cycles

With Units on Cycles, the Wavelength parameter turns into Cycles. Set that Wavelength value to 1 and a lone wave shows up in your stroke; bumping the wavelength up adds more waves. Closed shapes are where it shines.

Unit set to Pixels

Unit set to Pixels

With Units on Pixels, the wavelength parameter reads in pixels. Open shape strokes are where it shines.

## How to start tapering the shape strokes?

With the controls now clear and everything in place, move ahead and put strokes on your shape.

## Taper

Start a composition through the menu: Composition > New Composition.

OR

On the home screen, click the New Composition tile.

OR

Over in the Projects panel, click the Comp icon.

Reach for the Pen tool, or press G. Lay down a straight line and reshape it as needed, then set the stroke size and fill color. The results read more clearly when the stroke size is thick.

Over in the Timeline panel, click the triangle to expose the components. Select Shape layer > Contents > Stroke1 > Taper.

3. Taper parameter
   To taper at the start of the length, grab the Start Length property and slide it to the value you want. The other controls in the Taper parameter work the same way for any other adjustments.

Want to put this in motion? Use keyframes. Click the stopwatch beside the properties and set the values. Begin small and work upward bit by bit. Each value change drops a keyframe at the spot marked by the current time indicator.

## Wave

Follow these steps to bring waves to your strokes:

Inside that same Stroke1 parameter, just under Taper, sits Wave. Open its triangle to expose the properties.

1. Wave parameter
   Reach for the Amount property to set how strong you want the waves.

Tighter waves—for a leaf, say—call for a lower wavelength. Looser ones, such as flowing hair strands, call for a higher wavelength.

Use the phase to shift the wave along the path so the wave travels across the path's length as it animates. Run it from 0 to 360 over a 4 second span.

Note

Tapered strokes can't be brought in from Illustrator. For now, only tapered strokes made natively in After Effects are available to you.

## Example - Create a write-on effect with tapered strokes

Eager to make and tinker with this animation? Grab the sample .aep project as your starting point. Experiment freely with the taper and wave parameters and build your own animation on top of it.

## Download the sample file

Download

Get file Tapered stroke demo

## Have a question or an idea?

With a handle on how this feature works, join the community for some real-world examples and to show off your work. We'd be glad to hear from you and to see whatever you make with tapered strokes!
