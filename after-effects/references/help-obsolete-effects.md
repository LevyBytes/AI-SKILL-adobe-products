# Obsolete Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 27, 2025

Effects parked in the Obsolete category stay around so that projects built in earlier After Effects releases still open. Reach for newer effects and methods instead of these whenever you refresh an existing project or start a fresh one.

## Basic 3D effect

Should the Basic 3D effect already sit on one or more layers in a project built with an earlier After Effects release, leaving it in place is fine; otherwise flip the 3D layer switch to turn those layers into 3D layers. (See 3D layers.)

This effect works with 8-bpc color.

Use the Basic 3D effect to move a layer through 3D space.

Layer quality feeds into Basic 3D: at Draft quality pixel positions are rounded to the nearest whole number, while Best quality resolves them down to the subpixel level.

Swivel

Drives rotation in the horizontal plane, turning the layer about a vertical axis. Carry it beyond 90° and the image's reverse face appears — a mirrored version of the front.

Tilt

Drives rotation in the vertical plane, turning the layer about a horizontal axis.

Distance To Image

How far the image stands from the viewer.

Specular Highlight

Drops in a glance of light bouncing off the layer's surface. That light always originates above, behind, and to the left of where the viewer sits. Since it falls from overhead, you have to tip the image backward before the reflection shows. Only Best quality renders the specular highlight. With Draw Preview Wireframe turned on, a red plus sign (+) flags a highlight that can't be seen on the layer (its center misses the layer), and a green plus sign (+) flags one that can.

Preview

Sketches a wireframe outline of the 3D image, and that outline renders fast. Once you're done adjusting the wireframe, clear Draw Preview Wireframe to view the finished render. Draft quality is the only mode that draws the preview wireframe; switch to Best quality and the actual image content gets drawn instead. That safeguard keeps you from rendering a Best quality movie while still in Preview mode.

## Basic Text effect

Should the Basic Text effect already sit on one or more layers in a project built with an earlier After Effects release, leaving it in place is fine; otherwise switch to text layers, which give you far more command over formatting and animation. (See Creating and editing text layers.)

Rather than spawning its own layer the way text on text layers does — or the way text imported from Adobe Photoshop or Adobe Illustrator does — the Basic Text effect drops text onto a layer that already exists.

This effect works with 8-bpc color.

Note

A layer's dimensions don't cap how wide or tall the text can grow; they only mark the region in which that text is visible.

Position

The position of the text on the layer.

Note

How the Position point behaves depends on the Alignment setting chosen in the Basic Text dialog box. Vertically the point always anchors the text's center to the layer. Horizontally, though, left-aligned text is anchored at its left edge, center-aligned text at its center, and right-aligned text at its right edge.

## Color Key effect

See Keying introduction and resources for general background on keying, along with links to tutorials and further material.

Every image pixel close to a chosen key color gets keyed out by the Color Key effect, which touches nothing but the layer's alpha channel.

This effect works with 8-bpc and 16-bpc color.

Pick the layer you want partly transparent, then go to Effect > Obsolete > Color Key.

To name a color, click the Key Color swatch so the Color dialog box opens, then choose one there.

Alternatively, grab the eyedropper and click any color on the screen.

3. Set how wide a color band gets keyed out by dragging the Color Tolerance slider. Keep it low and only colors hugging the key color drop out; raise it and a broader spread of color goes.
4. Tune the keyed region's border thickness with the Edge Thin slider. Push it positive to expand the mask and grow the transparent zone; push it negative to contract the mask and shrink that zone.
5. Decide how soft the edge looks by dragging the Edge Feather slider. Bigger numbers soften the edge but cost more render time.

## Fast Blur effect

Set layer quality to Best and Fast Blur comes very near to matching Gaussian Blur.

On his ProLost blog, Stu Maschwitz puts the Box Blur, Fast Blur, and Gaussian Blur effects side by side.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

## Gaussian Blur (Legacy) effect

Softening and smoothing the image while clearing out noise is the job of the Gaussian Blur effect, and layer quality has no bearing on it. Render results from the Gaussian Blur (Legacy) effect differ a little from those of the Gaussian Blur effect.

On his ProLost blog, Stu Maschwitz puts the Box Blur, Fast Blur, and Gaussian Blur (Legacy) effects side by side.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

## Lightning effect

Should the Lightning effect already sit on one or more layers in a project built with an earlier After Effects release, you may keep using it; otherwise turn to the Advanced Lightning effect. (See Advanced Lightning effect.)

This effect works with 8-bpc color.

Start Point, End Point

Where the lightning begins and ends.

Segments

How many segments make up the primary bolt. Raise the count for finer detail at the cost of less fluid motion.

Amplitude

How large the bolt's undulations run, given as a percentage of the layer width.

Detail Level, Detail Amplitude

The quantity of detail layered onto the main bolt and its branches. Detail Level usually sits around 2–3, and Detail Amplitude around 0.3. Larger settings on either suit stills best but tend to muddy animation.

Branching

How much forking shows up where bolt segments end. At 0 there's no branching at all; at 1.0 every single segment branches.

Rebranching

How much the branches branch in turn. Crank it up for treelike bolts.

Branch Angle

How far a branch diverges in angle from the bolt it grows off.

Branch Seg. Length

Each branch segment's length stated as a fraction of the bolt's average segment length.

Branch Segments

The ceiling on segment count per branch. For long branches, raise both Branch Seg. Length and Branch Segments.

Branch Width

Each branch's average width given as a fraction of the bolt's width.

Speed

How fast the lightning bolt undulates.

Stability

How tightly the bolt tracks the line running between the start and end points. Low settings hold the bolt near that line; high ones make it bounce hard. Pair Stability with Pull Force to fake a Jacob's Ladder effect, snapping the bolt back toward the start line once it has been dragged in the Pull Force direction. Too low a Stability won't let the bolt stretch into an arc before snapping back; too high a value sets it bouncing about.

Fixed Endpoint

Sets whether the bolt's end point stays pinned. Leave this control off and the bolt's end wanders around the end point.

Width, Width Variation

The main bolt's width plus how much that width may shift from one segment to the next. Those width shifts are randomized. At 0 there are no width shifts; at 1 the width shifts are maxed out.

Core Width

The inner glow's width, set by the Inside Color value. Core Width is gauged against the bolt's full width.

Outside Color, Inside Color

Which colors fill the bolt's outer and inner glows. Because the Lightning effect lays these colors over whatever colors already sit in the composition, primary colors tend to read best. Bright ones often wash out a lot, sometimes all the way to white, depending on how bright the colors underneath are.

Pull Force, Pull Direction

How hard, and which way, a tugging force drags the bolt. Combine Pull Force with Stability to fake a Jacob's Ladder look.

Random Seed

The figure fed into the random noise generator that drives the Lightning effect. When the lightning's random motion clashes with another image or layer, keep entering fresh Random Seed values until one suits you.

Blending Mode

Which blending mode composites the lightning over the original layer. These work just like their counterparts in the Timeline panel.

Rerun At Each Frame

Rebuilds the lightning on every frame. Leave this option off to have the lightning act the same at a given frame each run. Turning it on lengthens render time.

## Luma Key effect

Any layer region sitting at a given luminance or brightness gets keyed out by the Luma Key effect, and layer quality has no sway over it.

Turn to this effect when the subject you're matting differs sharply in luminance from its backdrop. Say you want a matte for musical notes on a white field: key out the brighter tones and the dark notes are left as the only opaque regions.

This effect works with 8-bpc and 16-bpc color.

## Key out a luminance value with the Luma Key effect

Pick the layer you want partly transparent, then go to Effect > Obsolete > Luma Key.

2. Choose a Key Type to fix which range drops out.
3. In the Effect Controls panel, drag the Threshold slider to set which luminance value the matte builds from.
4. Set the spread of values to key out by dragging the Tolerance slider. Keep it low and only values near the threshold drop out; raise it and a wider band of values goes.
5. Adjust the keyed region's border thickness with the Edge Thin slider. Positive numbers grow the mask and widen the transparent area; negative numbers shrink it.
6. Decide how soft the edge looks by dragging the Edge Feather slider. Bigger numbers soften the edge but cost more render time.

## Path Text effect

Should the Path Text effect already sit on one or more layers in a project built with an earlier After Effects release, you may keep using it; otherwise switch to text layers for far more command over formatting and animation. (See Creating and animating text on a path.)

With the Path Text effect you can run text along a path, where that path may be a straight line, a circle of any diameter, or a Bezier curve. A path made in another program — Adobe Photoshop or Adobe Illustrator, say — can be imported too. The effect handles nonsquare pixels, reshaping both the characters and the path to match.

This effect works with 8-bpc color.

Note

When you rely on Adobe Type Manager (ATM) and big text turns blocky or otherwise won't render cleanly, bump up the Character Cache Size in the ATM control column.

As you reshape a Bezier path over time, be sure to lay down initial keyframes on all four path control points; shift a control point that has no initial keyframe and it won't move over time. Animating a path can be simpler if you edit the individual control points' motion paths in the Layer panel.

Note

For handles to show in the Composition panel, the effect has to be selected in the Effect Controls panel and you must not be animating text along a mask or path.

To slide a Bezier path across the composition without altering its shape, animate the layer instead of the path. To stretch, shrink, or wag one half of the Bezier path while the other half stays put, shift a tangent-vertex pair as a unit — make keyframes for both by dragging the outer circle of the relevant vertex.

Note

While animating a Bezier path's control points, don't mix up the Bezier path shape and the keyframes' Bezier spatial interpolation. As with keyframes for other position controls, a vertex or tangent keyframe on a Bezier path may be linear or Bezier. Default spatial interpolation is set in General Preferences. For a single keyframe, set its spatial interpolation by choosing Animation > Keyframe Interpolation.

Motion you build with the Path Text effect can take motion blur, and that blur lands on each character. As with layer motion blur, the faster the movement the more obvious the character blur. It shows up strongly, for example, when you dial in negative jitter values that produce jumpy motion.

## Path Options controls

Shape Type

Sets what shape the path takes. For the path to show in the Composition panel, you have to select the Path Text effect name within the Effect Controls panel.

Bezier

Runs text along a Bezier curve built from these four control points: Vertex 1/Circle Center, Tangent 1/Circle Point, Tangent 2, and Vertex 2. Any characters that overrun the path trail off its end in a straight line.

Circle

Bends text around a circle's edge, fixed by this pair of control points: Tangent 1/Circle Point, and Vertex 1/Circle Center. Text longer than that circumference laps over itself. If you pick an arbitrary path that happens to be closed, this property runs the text along the path rather than looping it.

Loop

Bends text around the circle's edge, fixed by this pair of control points: Vertex 1/Circle Center, and Tangent 1/Circle Point. Text exceeding the circumference spills off the Tangent 1 point in a straight line. Margin controls can also send text into or out of a circle along a straight line.

Line

Runs text along a straight line fixed by this pair of control points: Vertex 1/Circle Center, and Vertex 2. Just like the Bezier case, how far apart those two control points sit has no effect on text spacing unless alignment is set to Force.

Control Points

Set where the points sit on the path.

Tangent 1/Circle Point

Marks these points: the starting tangent of a Bezier curve, a circle's diameter together with the start or end of the text (per the chosen alignment), and a loop's diameter along with the spot where text enters.

Vertex 1/Circle Center

Marks the starting vertex of a Bezier curve, the center of a circle or loop, and the start or end of text on a line (per the chosen alignment).

Tangent 2

Marks the ending tangent of the Bezier curve. The line drawn between Tangent 2 and Vertex 2 fixes the curve's slope at its end point. On circles or loops, Tangent 2 goes unused.

Vertex 2

Marks the ending vertex of a Bezier curve and a line's angle. On circles or loops, Vertex 2 goes unused.

Custom Path

Marks an arbitrary path. The mask you use can come from the Layer panel or from Adobe Illustrator.

Reverse Path

Flips the path's direction.

Fill and Stroke

Set the path text's fill and stroke options here.

### Options

Fill Only

Switches on the fill color control while shutting off every stroke option.

Stroke Only

Switches on the stroke color and width controls only, with the fill option shut off.

Fill Over Stroke

Lets you build text whose fill sits over the stroke.

Stroke Over Fill

Lets you build text whose stroke sits over the fill.

Fill Color

Give the path text a fill color.

Stroke color

Give the path text a stroke color.

Stroke width

Adjust how wide the path text's stroke runs.

## Character controls

Size

Size of the characters.

Tracking

Average distance between characters.

Kerning

Sets the horizontal gap between a pair of characters. Edit the text and the kerning you set carries over for every character pair you didn't change. Kerning changes can't be reversed with the Undo command. To vary horizontal spacing between characters over time, turn to Kerning Jitter Max or keyframe Tracking.

Kerning Pair

Names the character pair to kern. Click the arrow to step through the pairs.

Kerning Value

How much kerning gets applied.

Orientation

Sets each character's orientation, or its rotation values.

Character Rotation

Turns each character the stated number of degrees from its present angle, pivoting at the spot where the character meets the path. Perpendicular To Path resets the characters' initial angle.

Perpendicular To Path

Turns each character so it stands perpendicular to the path. Clear Perpendicular To Path and the characters stay upright at all times (unless Character Rotation turns them).

Vertical Writing

Stands each character upright and vertical as it follows the path.

Rotate Roman Characters

Stands Roman characters vertically along the path; leave Rotate Roman Characters off and only the non-Roman characters get rotated.

Horizontal Shear

Tilts characters left or right in the manner of italics, with the slant keyed to where the character meets the path. To tilt characters about their own centers, use Baseline Shift to route the path through those centers.

Horizontal Scale, Vertical Scale

Stretch the characters horizontally and vertically by the percentage you give. Scaling starts from the rasterization size set in Size, and going above 100 can blur the edges. For the cleanest result, pick a Size point value large enough that you never have to scale past 100% to reach your biggest desired text. To take text from 44 up to 88 points, for instance, set Size to 88, start both Vertical and Horizontal Scale at 50%, then raise both to 100% when you want it shown at 88 points.

## Paragraph controls

Alignment

Sets how the text aligns horizontally along the path you've chosen.

Left

Pins the first character where Left Margin sits and arranges every other character relative to it. Right Margin is ignored.

Right

Pins the last character where Right Margin sits and arranges every other character relative to it; here Left Margin has no effect.

Center

Sits the text midway between the Left Margin and Right Margin points.

Force

Pins the first character at Left Margin and the last at Right Margin, then spreads all the rest evenly between them. Tracking is ignored.

Left Margin, Right Margin

Set the margins. Left Margin gives the first character's position in pixels measured from the starting point, and Right Margin gives the last character's position measured from the ending point. Across path shapes, Bezier curves and lines start at Vertex 1 while circles and loops start at Tangent 1. Bezier curves and lines end at Vertex 2, and circles and loops end at Tangent 1. To run text along the path shape you've laid out, keyframe or write expressions for the Left or Right margin (whichever the chosen alignment uses). Positive values slide the text rightward; negative values slide it leftward.

Line Spacing

Sets how much room separates one line of characters from the next.

Baseline Shift

Gives, in pixels, how far the character bottoms sit from the path. With some path shapes the text reads as better spaced once the path passes through the middle of each character. Make Baseline Shift negative and those character centers land right on the path.

## Advanced controls

Visible Characters

How many characters show at the current time. Keyframe Visible Characters to reveal characters one or more at a time and mimic the look of typing. A positive count reveals characters from the start of the text toward the end; a negative count reveals them from the end back toward the start. Bear in mind that spaces count as characters too.

This control also teams with Fade Time to fade characters in. With Fade Time at 0, the next character pops in once Visible Characters reaches the halfway mark toward the next whole number. So the second character shows at a Visible Characters value of 1.5, the third at 2.5, and so on. A Fade Time of 0 yields that typing-on look.

Note

Wherever the path and the other controls have placed the characters, Visible Characters leaves those positions alone.

Fade Time

Sets the stretch of time across which a given character is only partly visible, working hand in hand with Visible Characters. At a Fade Time of 0, every letter snaps to full opacity at its matching Visible Characters value. At 100%, a character grows steadily more opaque as Visible Characters climbs between whole numbers, its opacity equaling the fractional part of that value. For example, with Visible Characters at 7.10 and Fade Time at 100% the eighth character shows at 10% opacity, and at 7.60 the same character shows at 60% opacity, and so on.

When Fade Time falls between 0% and 100%, a character's opacity is mapped across the halfway point between whole-number Visible Characters values. With Fade Time at 20%, for instance, the eighth character starts showing at a Visible Character value of 7.40 and reaches full opacity at 7.60. Set Fade Time to 60% and that same character starts at 7.20 and is fully opaque at 7.80.

Mode

Which blending mode applies wherever characters overlap.

Jitter Settings

Set the largest random deviation added to baseline, kerning, rotation, or scale. Bigger values mean bigger deviations. Positive values yield smooth motion while negative ones yield jumpy motion. The movement arrives without keyframes or expressions, though you may keyframe or write expressions to vary the maximum values.

Any given jitter value drives the same apparently random motion for matching text and settings. When a composition holds duplicate animated text, you can give each copy its own motion by tweaking a setting in a way that doesn't show. You might, for example, add a space to a second text copy and then kern it so the space stays invisible — an unseen change that nonetheless produces different motion.

You can specify the following Jitter options:

Baseline Jitter Max

Caps how far, in pixels, characters get nudged at random above or below the path once Baseline Shift has been applied.

Kerning Jitter Max

Caps how far, in pixels, characters get nudged apart from each other along the horizontal axis once kerning and tracking have been applied.

Rotation Jitter Max

Caps how much, in degrees, characters get turned at random once Character Rotation has been applied.

Scale Jitter Max

Caps how much, as a percentage, characters get scaled at random once Horizontal Scale and Vertical Scale have been applied. For the best result, characters shouldn't scale past 100%.

## Move vertices, circle centers, and tangents

- Dragging the outer circle of the Vertex 1/Circle Center shifts it and the Tangent 1/Circle Point as a unit.
- To shift the Vertex 1/Circle Center by itself, drag its cross hair.
- To have the Tangent 1/Circle Point snap straight onto the Vertex 1/Circle Center, grab the Pen tool and then click Tangent 1's outer circle (Windows) or Command-click that outer circle, not the cross hair (Mac OS).
- To lock the Tangent 1/Circle Point to 45° steps around the Vertex 1/Circle Center, Shift-drag Tangent 1's outer circle.
- Dragging the outer circle of Vertex 2 shifts it and Tangent 2 as a unit.
- To shift Vertex 2 by itself, drag its cross hair.

## Reduce Interlace Flicker

Reach for the Reduce Interlace Flicker effect to cut down the flicker that crops up in interlaced footage, particularly with high-contrast or finely detailed material.

Softness

Lays a gentle vertical blur over the footage to tame flicker. Raise the value and the blur — and the flicker reduction — grows.

## Spill Suppressor Effect

From a screen that's already been keyed, the Spill Suppressor effect strips out leftover traces of the key color. Most often you'd use it to clear key-color spill from an image's edges — spill that comes from light bouncing off the screen onto the subject.

Note

If the Spill Suppressor doesn't get you the look you want, try running the Hue/Saturation effect on the layer after keying and lowering the saturation to play down the key color. (See Hue/Saturation effect.)

This effect works with 8-bpc and 16-bpc color. In After Effects CS6 or later, this effect works in 32-bit color.

Use the Spill Suppressor effect:

1. Pick the layer, then go to Effect > Keying > Spill Suppressor.

- When you've already keyed the color out with a key in the Effect Controls panel, click that key's Color To Suppress eyedropper and then click the screen color in its Key Color swatch.
- Within Spill Suppressor, click the Key Color swatch and pick a color off the color wheel. To work the eyedropper from the Layer panel, choose Spill Suppressor in that panel's View menu.

3. In the Color Accuracy menu, pick Faster to suppress blue, green, or red. Pick Better for other colors, since After Effects may have to study the colors more closely to land accurate transparency — and Better can add to render time.
4. Drag the Suppression slider until the color is sufficiently suppressed.

## See also

- [Keyframe Interpolation](help-keyframe-interpolation.md)
