# Layer Properties

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 21, 2026

Find out how to handle layer properties and tune them to animate a range of layer attributes — transform properties, effects, masks, and layer styles among them.

## Layer properties in the Timeline panel

Every layer carries properties, and you can edit and animate a good many of them. The one group present on every layer is the Transform group, which holds the Position and Opacity properties. Add features to a layer — masks, effects, or a conversion to a 3D layer, for instance — and it picks up further properties bundled into property groups.

Layer properties are all temporal, meaning they can alter the layer as time passes. A few, Opacity among them, carry only a temporal component. Others, such as Position, are spatial as well — they can shift the layer or its pixels through composition space.

Expand the layer outline and you can see the layer properties and edit their values.

A stopwatch sits beside most properties. Wherever there's a stopwatch, that property can be animated. There's more to learn about animation, keyframes, and expressions.

An example of a layer's property group shown collapsed and then expanded in the Timeline panel.

Properties living in the Effects property group (the effect properties) count as layer properties too. A great many effect properties can also be adjusted from the Effect Controls panel.

## Show or hide properties in the Timeline panel

- Expanding or collapsing a property group is done by clicking the triangle to the left of the layer name or the property group name.
- Opening or closing a group along with everything nested under it: Ctrl-click (Windows) or Command-click (macOS) the triangle.
- Every group on the selected layers opens or closes at once when you press Ctrl+` (accent grave) (Windows) or Command+` (accent grave) (macOS).
- An effect property comes into the Timeline panel when you double-click its name over in the Effect Controls panel.
- Hiding any property or group is a matter of Alt+Shift-click (Windows) or Option+Shift-click (macOS) on its name in the Timeline panel.
- To narrow the Timeline panel down to just the selected properties or property groups, press SS.

Tip

That SS shortcut comes in especially handy with paint strokes. Click the paint stroke in the Layer panel and press SS, and the property group for that stroke opens in the Timeline panel.

- To display only one specific property or property group, press its shortcut key or keys. There's more to learn about using keyboard shortcuts to reveal properties and groups in the Timeline panel.
- To tack a property or property group onto what's already shown in the Timeline panel, hold Shift while you press that property's or group's shortcut key.
- To see only the properties changed from their defaults, press UU or choose Animation > Reveal Modified Properties.
- To see only the properties holding keyframes or expressions, press U or choose Animation > Reveal Animating Properties.

Tip

The U and UU commands are great for figuring out how animation presets, template projects, or other animated items operate, because they single out exactly the properties you altered.

You can also filter the layers in the Timeline panel down to those whose properties match a search string. There's more to learn about searching and filtering across the Timeline, Project, and Effects & Presets panels.

## Select a property or property group in the Timeline panel

Clicking a property's name in the Timeline for a layer gives you a fast way to edit and animate that property.

Clicking a property's name in the Timeline for a layer gives you a fast way to edit and animate that property.

- To pick a property or property group — values, keyframes, and expressions and all — click its name in the layer outline within the Timeline panel.

## Copy or duplicate a property or property group in the Timeline panel

- Copying properties from one layer or property group onto another goes like this: pick the layer, property, or property group, hit Ctrl + C (Windows) or Command + C (macOS), then pick the destination layer, property, or property group and hit Ctrl + V (Windows) or Command + V (macOS).
- A property group is duplicated by selecting it, then pressing Ctrl + D (Windows) or Command + D (macOS).

Only some property groups can be duplicated — shapes, masks, and effects among them. Top-level property groups such as Contents, Masks, Effects, and Transforms can't be. Try to duplicate one of those top-level groups and you'll get the whole layer duplicated instead.

## Copy a value from a layer property that contains no keyframes

The current value of a layer property can be copied onto another layer, and the source layer doesn't need any keyframes for this to work.

In the Timeline panel, reveal the layer property whose value you'd like to copy.

Click the layer property's name to select it.

Choose Edit > Copy.

4. Select the layer you want to paste the value into.
5. Where the target layer has keyframes, drag the current-time indicator to the moment you want the value pasted at. Where it has none, the new value takes effect across the layer's whole duration.
   Choose Edit > Paste.

## Set a property value

Select several layers, change a property on one of them, and that change carries across to every selected layer. Sliders, angle controls, and a handful of other property controls live only in the Effect Controls panel.

Note

To switch a property's units, right-click (Windows) or Control-click (macOS) the underlined value, choose Edit Value, and pick from the Units menu. Which units are offered varies by property type, and a few properties won't let you change their units at all.

- Hover the pointer over the underlined value and drag it left or right.
- Click the underlined value, type a new one, and press Enter (Windows) or Return (macOS).

Note

Simple arithmetic expressions work in place of plain numbers for property values and other number fields. You might type 2\*3 rather than 6, 4/2 rather than 2, or 2e2 rather than 200. These come in particularly handy when you want to bump a value up by a set amount from where it started.

- Right-click (Windows) or Control-click (macOS) the underlined value and choose Edit Value.
- Drag the slider to the left or right.
- Click a spot inside the angle control, or drag the angle control's line.

Note

Once you've clicked inside the angle control, dragging beyond it buys you extra precision.

- A 1-unit nudge to the property value comes from clicking the underlined value, then tapping Up Arrow or Down Arrow. Want 10-unit steps? Add Shift as you press Up Arrow or Down Arrow. For 0.1-unit steps, add Ctrl (Windows) or Command (macOS) as you press Up Arrow or Down Arrow.
- To return a property group's properties to their defaults, click Reset beside the property group's name. To reset just one property, right-click (Windows) or Control-click (macOS) the property name — not its value — and choose Reset from the context menu.

Where the property holds keyframes, a keyframe carrying the default value gets added at the current time.

## Layer anchor points

Transformations like rotation and scaling pivot about the layer's anchor point — sometimes called the transformation point or transformation center. Out of the box, that anchor point sits at the middle of the layer for most layer types.

There are moments when you'll want to animate the anchor point, but far more often you'll fix a layer's anchor point before any animating begins. Picture animating a person built from one layer per body part: you'd likely drag each hand's anchor point up to the wrist so the hand pivots around that spot throughout the whole animation.

Note

Animating the Anchor Point and Scale properties is the simplest route to panning and scanning across a large image.

## Move a layer anchor point

- Drag the anchor point with the Selection tool in the Layer panel

Note

Some layer types — text layers and shape layers among them — can't be opened in the Layer panel.

- To shift a layer anchor point by 1 pixel, choose Anchor Point Path from the View menu at the lower-right of the Layer panel and press an arrow key. For 10 pixels, hold Shift while pressing an arrow key. Those pixel amounts are measured at the Layer panel's current magnification.
- Shifting a layer anchor point in the Composition panel while leaving the layer in place: with the layer selected, grab the Pan Behind (Anchor Point) tool and drag the anchor point.

Note

Dragging an anchor point with the Pan Behind (Anchor Point) tool adjusts the Position and Anchor Point values together so the layer stays put in the composition right where it sat before the anchor point moved. To alter the Anchor Point value alone, Alt-drag (Windows) or Option-drag (macOS) with the Pan Behind (Anchor Point) tool.

## Reset a layer anchor point

- Restoring the anchor point to where it defaults within the layer: double-click the Pan Behind (Anchor Point) tool button over in the Tools panel.
- For that same default position, but with the layer relocating to the composition's center, Alt-double-click (Windows) or Option-double-click (macOS) the Pan Behind (Anchor Point) tool button.

## Set layer anchor point to center of content

Any of the following will place the anchor point at the center of the layer's content:

- Choose Layer > Transform > Center Anchor Point In Layer Content
- Press Ctrl + Alt + Home (Windows) or Command + Option + Home (macOS)
- Ctrl + double-click (Windows) or Command + double-click (macOS) the Pan Behind (Anchor Point) tool

A handful of ways this command comes in useful:

- Dropping a shape layer's anchor point onto the center of a single shape, or onto the centroid of a group of shapes within a shape layer.
- Putting a text layer's anchor point at the center of the text content.
- Setting a layer's anchor point at the center of the visible region inside a masked area.

## Quick Set Anchor to change the anchor point

Use new beta features

Quick Set Anchor is open for testing and feedback right now. Give it a go in After Effects (beta).

Get started

In the newest After Effects (beta), Quick Set Anchor offers a quicker way to move the anchor point on your 2D layers to any of nine frequently used spots — every corner and every edge-center of the layer. Quick Set Anchor is reachable from the Properties panel or through the keyboard shortcut Shift + Tab.

To launch Quick Set Anchor, select a layer and then click the Anchor Point icon sitting beside the Anchor Point property in the Properties panel. A temporary pop-over Quick Set Anchor dialog opens. From there you can hold the mouse button and drag your cursor to the anchor point, or simply pick it from the pop-over.

Click the Anchor Point icon beside the Anchor Point property to bring up the Quick Set Anchor dialog.

Click the Anchor Point icon beside the Anchor Point property to bring up the Quick Set Anchor dialog.

The Quick Set Anchor dialog can also be opened right where your cursor sits by pressing Shift+Tab. Pick any point in the Quick Set Anchor dialog and the anchor point updates for all selected layers as the dialog closes. To dismiss it without changing anything, click somewhere outside it.

Press Shift + Tab to move the anchor point on your 2D layers to any of those frequently used positions.

Press Shift + Tab to move the anchor point on your 2D layers to any of those frequently used positions.

Jump into the conversation about Quick Set Anchor over in the After Effects (Beta) community.

## Scale or flip a layer

Scaling, like the other transformations, happens around the layer's anchor point. Shift that anchor point off the layer's center and the layer can travel when you flip it. A handful of layers — cameras, lights, and audio-only layers among them — have no Scale property at all.

Flipping a layer amounts to multiplying the horizontal or vertical part of its Scale property value by -1, and the flip occurs around the anchor point.

Note

A layer can be scaled past the bounds of the composition frame. There's more to read about scaling exponentially — the way a zoom lens does — and about scaling or resizing whole movies instead of one layer.

- Flipping selected layers is done from Layer > Transform > Flip Horizontal or Layer > Transform > Flip Vertical.
- In the Composition panel, Shift-drag any layer handle for a proportional scale.
- In the Composition panel, dragging a corner layer handle scales it freely.
- In the Composition panel, dragging a side layer handle confines the change to one dimension.
- A 1% bump to Scale on a selected layer comes from holding Alt (Windows) or Option (macOS) while you tap + or – over on the numeric keypad.
- For a 10% step on selected layers, hold Alt+Shift (Windows) or Option+Shift (macOS) and tap + or – on that same numeric keypad.
- An entire composition gets scaled through File > Scripts > Scale Composition.jsx.
- Choosing Layer > Transform > Fit To Comp scales selected layers and centers them within the composition frame.
- Layer > Transform > Fit To Comp Width or Fit To Comp Height scales and centers selected layers against the frame's width or height, the layer's aspect ratio left intact.
- For a proportional scale from the Timeline panel: select the layer, hit S so the Scale property shows, click the Constrain Proportions icon sitting left of the Scale values, then type a fresh value for x, y, or z scale.

Note

Want the Constrain Proportions icon on with the height matched to the width? Alt-click (Windows) or Option-click (macOS) it.

- For an exact pixel size, right-click (Windows) or Control-click (macOS) the Scale value over in the Timeline panel, pick Edit Value, and flip the units across to pixels inside the Scale dialog box. Switch on Include Pixel Aspect Ratio if you'd like the dimensions shown and adjustable against the composition's pixel aspect ratio.

Scaling a raster (non-vector) layer down can leave the image looking slightly soft or blurred. Scaling a raster layer up by a wide margin can make it look blocky or pixelated.

## Detail-preserving Upscale effect

With the Detail-preserving Upscale effect, you can enlarge images by wide margins and still hold on to their detail.

## Bilinear and bicubic sampling

For any selected layer, you can pick whether pixels are sampled bicubically or bilinearly; that choice governs how scaling — and every transformation routed through the Transform effect — resamples the layer. Further reading covers layer image quality together with subpixel positioning.

## Other tools and resources for scaling

Note

Resampling for image scaling is something Adobe Photoshop lets you tune in detail. When you need that finer level of control, send your frames out to Photoshop, resize them there, and bring the adjusted frames back into After Effects.

Content-aware scaling in Photoshop isn't really a good match for moving footage, yet it shines when you need to stretch or enlarge still images. It comes in handy whenever artwork built for standard-definition has to be repurposed to fill wide-screen formats.

## Rotate a 2D layer

Just like the other transformations, a layer spins about its anchor point when rotated.

Note

Pressing R is the keyboard shortcut that exposes the Rotation property value for whatever layers you have selected in the Timeline panel.

In the Rotation property value, the leading figure counts complete revolutions, while the trailing figure gives the leftover rotation measured in degrees.

- Rotating a layer by dragging in the Composition panel is done with the Rotation tool; keep Shift held while you drag to lock the rotation into 15° steps.
- Tapping + (Plus) or - (Minus) on the numeric keypad nudges the selected layers by 1 degree.
- Adding Shift to + (Plus) or - (Minus) on the numeric keypad bumps the selected layers by 10 degrees.

Tip

A 3D layer can be turned by editing either its Orientation or its Rotation values. There's guidance available on rotating or orienting a 3D layer.

## Adjust audio volume levels

With footage that carries audio, playback starts at a default level of 0 dB, so After Effects leaves the level untouched. Dial in a positive decibel figure to raise the volume; dial in a negative one to lower it.

Tip

The Audio panel opens when you double-click an Audio Levels keyframe.

As the audio plays, the Audio panel's VU meter shows the volume range, and the red blocks across the top of that meter mark your system's volume ceiling.

Note

Stretching the Audio panel taller gives you more precision when you set audio levels by dragging the sliders.

Inside the Audio panel, use any of these to change the volume:

Drag the middle slider up or down to move the left and right channels together.

For the left channel alone, drag the left slider up or down, or enter a fresh value in the levels box beneath that left slider.

For the right channel alone, drag the right slider up or down, or enter a fresh value in the levels box beneath that right slider.

## Parent and child layers

Parenting is the tool you reach for when you want one layer's transformations to drive another's. Once a layer becomes the parent of a second layer, that second layer is referred to as the child. Assigning a parent makes the child's transform properties measure against the parent rather than against the composition. Move a parent 5 pixels to the right of where it began, for instance, and its child slides 5 pixels to the right as well. The behavior resembles grouping, where any transformation done to the group is reckoned from the parent's anchor point.

Position, Scale, Rotation, and Orientation (on 3D layers) all respond to parenting; Opacity does not.

Tip

As you parent layers, descriptive text about alternate parenting behaviors shows up on the layer bar just under the cursor and over in the Info panel.

Any layer is limited to a single parent, yet that one layer can serve as parent to as many layers as you like within the same composition.

Child layers remain free to be animated apart from their parents. Parenting can also run through null objects, which are simply hidden layers.

The assigning or removing of a parent designation itself can't be animated — meaning you can't tag a layer as a parent at one moment and treat it as an ordinary layer at another.

As you set up a parenting relationship, you get to decide whether the child adopts the parent's transform property values or hangs on to its own. Choose to adopt them and the child snaps to the parent's position; choose to keep its own and the child stays put. Either way, any later edits to the parent's transform property values carry through to the child. You likewise get to decide whether the child jumps once the parenting relationship is severed.

Note

Holding Shift while parenting layers shifts the child layer onto the parent's location. That's handy when you want to bind a layer to a null but have the layer travel to the null's spot — say, attaching a 3D text layer to a null produced by the 3D Camera Tracker.

Dragging the pick whip in the Timeline panel from Shape layer 1 (child layer) to designate Shape Layer 2 as the parent layer

Dragging the pick whip in the Timeline panel from Shape layer 1 (child layer) to designate Shape Layer 2 as the parent layer

- Showing or hiding the Parent column in the Timeline panel is done by picking Columns > Parent from the Timeline panel menu.
- To set up parenting, drag the pick whip in the Parent column from the layer meant to be the child onto the layer meant to be the parent.
- Alternatively, parent a layer by opening the menu in the Parent column for the layer you want as the child and selecting a parent layer name from it.
- Stripping a parent off a layer means opening that layer's menu in the Parent column and choosing None.
- Right-click (Windows) or Control-click (macOS) a parent layer in the Composition or Timeline panel and pick Select Children to widen the selection to take in all of that parent's child layers.
- Hold Alt (Windows) or Option (macOS) while assigning or removing the parent to make a child layer jump at that moment.
- To clear a parent (that is, reset Parent to None), Ctrl-click (Windows) or Command-click (macOS) the child layer's parenting pick whip in the Timeline panel. Use Alt+Ctrl-click (Windows) or Option+Command-click (macOS) on that pick whip to drop the parent and have the child layer jump.

## Null object layers

Reach for a null object when you need a parent layer that never shows up as a visible part of your project. Being invisible while still carrying every property a visible layer has, a null object can parent any layer in the composition. You tweak and animate one exactly as you would any layer, and the same commands that adjust a solid-color layer apply to it (Layer > Solid Settings).

Note

Because Expression Controls effects can be applied to null objects, a null can act as a control layer driving effects and animations across other layers. With a camera or light layer, for example, build a null object layer and write an expression tying the camera's or light's Point Of Interest property to the null's Position property. Moving the null then animates the Point Of Interest. Spotting and selecting a null tends to be easier than spotting and selecting the point of interest itself.

There's no limit to how many null objects a composition can hold. A null shows up only within the Composition and Layer panels, appearing in the Composition panel as a rectangular outline fitted with layer handles. Effects never render on null objects.

Building a null object means selecting the Timeline or Composition panel and then choosing Layer > New > Null Object.

Note

- A fresh null object layer puts its anchor point at the layer's upper-left corner, and the layer sits anchored at the composition's center by that anchor point. Move the anchor point however you would for any layer.
- Should a null object clutter the composition frame visually, drag it off the frame and onto the pasteboard.

There's also Nulls Controllers for Positional Properties, which spins up Nulls to govern the positional properties and motion of objects — a real time-saver in After Effects once you're juggling lots of layers or intricate animations. It lets you single out and steer the movement of one specific point (a Position or an Anchor Point inside a Shape, object, or layer) on its own, apart from the rest of that same layer.

## Guide layers

Existing layers can be turned into guide layers that serve as reference inside the Composition panel, helping you place and edit your elements. They're useful as visual reference, for timing audio, for timecode reference, or for jotting notes to yourself.

In the Timeline panel, a guide layer icon sits beside the name of any guide layer or its source.

Out of the box, guide layers stay out of your rendered output, though you can include them when you want by adjusting the composition's render settings.

Note

A guide layer that lives in a nested composition won't show through in the composition that contains it.

- Turning selected layers into guide layers is done with Layer > Guide Layer.
- Want the visible guide layers included in a render? In the Render Queue panel open Render Settings, and in that dialog box set the Guide Layers menu to Current Settings.
- Want them left out entirely? Again open Render Settings from the Render Queue panel, and this time set that same Guide Layers menu to All Off.

### More like this

- Effects and animation presets overview
- Keyboard shortcuts in After Effects
- Selecting and arranging layers
- Modifying and using views
- Basics of rendering and exporting
