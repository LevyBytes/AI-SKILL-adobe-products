# Selecting Arranging Layers (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 21, 2026

### Learn how to select, reorder, and organize layers in After Effects to keep your compositions clean and easy to manage.

## Select layers

In the Timeline panel, a layer drawn with a hollow highlight is one whose properties are also selected; when only the layer itself is picked with none of its properties, the highlight appears solid instead.

- A layer can be chosen by clicking it in the Composition panel, by clicking its name or its duration bar in the Timeline panel, or by clicking its name over in the Flowchart panel.
- When a layer sits hidden behind others in the Composition panel, reach it by right-clicking (Windows) or Control-clicking (macOS) at that spot in the Composition panel and then picking Select > [layer name].
- If a layer is already open in its own Layer panel, you can also pick it by its name from the Window menu or from the Layer panel viewer menu.
- Each layer can be chosen by its position number: just type that number on the numeric keypad. When the number runs to more than a single digit, enter the digits in quick succession so that After Effects reads them together as one value.
- Step down one slot in the stacking order with Ctrl+Down Arrow (Windows) or Command+Down Arrow (macOS); step up to the layer above with Ctrl+Up Arrow (Windows) or Command+Up Arrow (macOS).
- Add the next layer down to the current selection using Ctrl+Shift+Down Arrow (Windows) or Command+Shift+Down Arrow (macOS); add the layer above with Ctrl+Shift+Up Arrow (Windows) or Command+Shift+Up Arrow (macOS).
- With the Timeline or Composition panel active, grab every layer at once through Edit > Select All, and clear the whole selection through Edit > Deselect All. Note that when the composition has its Hide Shy Layers switch turned on, running Select All from an active Timeline panel skips the shy layers. There's more on revealing and concealing layers within the Timeline panel elsewhere.
- To flip your selection — releasing whatever is currently chosen and grabbing every other layer, as long as at least one layer is selected — pick Invert Selection from the context menu in the Composition or Timeline panel.
- Every layer sharing one color label can be grabbed together: click that color label in the Timeline panel and pick Select Label Group, or click a layer carrying the label and then choose Edit > Label > Select Label Group.
- To pull in all the children of a given parent, select the parent layer and pick Select Children from the context menu in the Composition or Timeline panel; those child layers join whatever was already selected.
- Several layers can be chosen at once inside the Composition panel. With the Selection tool, drag a marquee box around the layers to capture them. Holding Shift while you click or drag lets you tack on more layers or peel selected ones away.

## Change the stacking order for selected layers

How the layers stack vertically in the Timeline panel is the layer stacking order, and that ordering ties straight into the render order. Reordering the stack is how you change the sequence in which one layer is composited against another.

Note

3D layers carry depth properties, so where they land in the Timeline panel stacking order won't necessarily match where they actually sit in space within the composition.

- Within the Timeline panel, drag layer names up or down to reposition them in the stacking order.
- Nudge the chosen layers up a single level with Ctrl+Alt+Up Arrow (Windows) or Command+Option+Up Arrow (macOS), and down a single level with Ctrl+Alt+Down Arrow (Windows) or Command+Option+Down Arrow (macOS).
- Jump the chosen layers all the way to the top of the stack with Ctrl+Alt+Shift+Up Arrow (Windows) or Command+Option+Shift+Up Arrow (macOS) – send them all the way to the bottom with Ctrl+Alt+Shift+Down Arrow (Windows) or Command+Option+Shift+Down Arrow (macOS).
- Pick Layer > Arrange, then choose Bring Layer Forward, Send Layer Backward, Bring Layer To Front, or Send Layer To Back.

Note

Copying (or cutting) and then pasting layers drops them back top-to-bottom in the Timeline panel in whatever order you had selected them before the copy (or cut). Because you can Ctrl-click (Windows) or Command-click (macOS) layers to pick them up in any order at all, you can cut them and paste them right back to reshuffle them into that selection sequence.

## Coordinate systems: Composition space and layer space

A layer's own coordinate system is its layer space, while each composition has its own composition space. Anything living inside a layer — effect control points, anchor points, and the like — carries values in layer space, gauged from the origin of that particular layer's layer space. A layer's Position property is the exception: it states where the layer falls inside a composition, so it is read in that composition's composition space.

Slide the pointer across the layer frame in the Layer panel and the Info panel reports, in layer space, the coordinates of whatever pixel is beneath it. Horizontal placement is given by the X coordinate and vertical placement by the Y coordinate, both stated in pixels. Both are measured relative to the origin (0,0), which stays pinned at the layer's upper left corner.

The rulers' zero point is adjustable, but layer space's origin is not. Should the two no longer coincide, the Info panel adds X' and Y' coordinates beneath the X and Y values, reporting position relative to the rulers' zero point.

Slide the pointer over the composition frame in the Composition panel and the Info panel switches to composition-space coordinates. While you drag a layer, the bottom of the Info panel reports the coordinates of that layer's anchor point.

## Move layers in space

Shifting a layer through space is a matter of altering its Position property.

A Position property's pieces can be split apart into standalone properties — X Position, Y Position, and, on 3D layers, Z Position — letting you edit or animate each one on its own.

Note

- To bring the chosen layers' anchor points to the center of the current view, pick Layer > Transform > Center In View or press Ctrl+Home (Windows) or Command+Home (macOS).
- To park a layer's anchor point dead-center in the composition, right-click (Windows) or Control-click (macOS) the Position property, pick Edit Value, set the Units menu to % Of Composition, and type 50 into each of the Position property's components.

Keep a layer's Position values whole rather than fractional whenever the image isn't in motion, so a still image stays crisp. Doing so heads off the resampling that kicks in when a layer set to Best image quality lands on subpixels.

## Move layers by dragging in the Composition panel

Note

While dragging, you can make a layer's edges snap to grids or guides by turning on View > Snap To Grid or View > Snap To Guides.

Choose one or more layers, then drag any one of the selected layers with the Selection tool . As you reposition a layer by dragging it in the Composition panel, the Info panel reports the running change in its Position property.

## Move layers by directly modifying the Position property

1. Select one or more layers.
   Hit P to reveal the Position property over in the Timeline panel.

Edit the Position property right there in the Timeline panel.

## Move layers with arrow keys

1. Select one or more layers.
   Tapping an arrow key shifts the chosen layers a single pixel — left, right, up, or down. Hold Shift along with the arrow key to jump 10 pixels at a time.

That one-pixel step is measured at whatever zoom level you're currently viewing. For finer control with the arrow keys, magnify the Composition panel first. Learn more about zooming an image for preview.

## Separate dimensions of Position to animate components individually

Out of the box, a Position property holds either two or three components, each one carrying the value for a single spatial dimension (axis). You're free to break those components out into separate properties — X Position, Y Position, and, for 3D layers, Z Position. Once split apart, the layer's position along the x axis, y axis, and z axis can each be edited or animated on its own.

To break a chosen Position property into its own X Position, Y Position, and (on 3D layers) Z Position properties, take one of these routes:

- Pick Animation > Separate Dimensions.
- Or, from a Position property's context menu — reached by right-click (Windows) / Control-click (macOS) — choose Separate Dimensions.

Rejoining a batch of individual Position properties back into one multi-component Position property uses the very same commands you used to split them.

Note

Folding separate Position properties back into a single Position property costs you some motion-path and speed detail, because the several Bezier curves standing in for the individual components get flattened into one Bezier curve at every keyframe. Splitting dimensions likewise sheds a little speed detail, though the motion path itself is untouched. For any given property, stick with separate dimensions or stay without them across a whole project instead of flipping between the two.

Whether separate dimensions suit you comes down to your goal. Driving position from a single property has the upside of yielding smooth motion with less effort. A single position property also opens the door to roving keyframes, which deliver even speed. Splitting dimensions trades away some of that automatic smoothing in exchange for tighter command over spatial animation. It can also simplify certain simulations, particularly when the simulated forces pushing on a layer run orthogonal (perpendicular) to one another.

Take a ball thrown sideways while bouncing up and down: separating dimensions makes that far easier to animate. Two keyframes handle the X Position property — one at the start point, one at the end — and this horizontal pass captures the speed of the throw. A lone expression then drives the Y Position property, modeling gravity's pull and the vertical rebound off the floor. A boat drifting downriver under a shifting crosswind is much the same kind of case.

## Align or distribute layers in 2D space

Reach for the Align panel when you need selected layers lined up or spaced out at even intervals. Layers can be aligned or distributed either vertically or horizontally.

1. Select the layers to align or distribute.
   From the Align Layers To menu in the Align panel, pick either Selection or Composition.

Selection

Lines the chosen layers up against the layer boundaries of those selected layers.

Composition

Lines the chosen layers up against the boundaries of the composition frame.

Click the button standing for whichever alignment or distribution you're after.

Distribution calls for three or more layers selected. With Selection picked in the Align Layers To menu, alignment needs two or more layers; with Composition picked there, a single layer is enough to align.

Whenever Selection is the choice in the Align Layers To menu, each alignment option snaps the selected layers to the layer that best stands for the new alignment. Take right-edge alignment: every chosen layer lines up to the one selected layer whose edge reaches farthest right.

A distribution option spreads the chosen layers evenly across the gap between the two outermost ones. With a vertical distribution option, for instance, the selected layers get parceled out between the topmost and bottommost picks.

Distributing layers of unequal size can leave the gaps between them uneven. Distributing by center, say, puts equal spacing between centers, yet layers of different sizes reach by different amounts into the space separating them.

Locked layers stay put — alignment and distribution options can't budge them.

The Align panel has no bearing on how characters line up inside a text layer.

Note

To bring the chosen layers' anchor points to the center of the current view, pick Layer > Transform > Center In View or press Ctrl+Home (Windows) or Command+Home (macOS).

## Trim, extend, or slip-edit a layer

A layer's duration opens at its In point and closes at its Out point. The stretch between those two is the duration, and the bar running from the In point across to the Out point is the layer duration bar.

Trimming a layer means shifting its In point or Out point so the layer runs for a different length. On a layer built from moving source footage, trimming governs which frames of that source footage item show up in the layer — the In point holds the first frame shown, the Out point the last. Trimming snips nothing from the footage item itself; it only governs which frames the layer plays.

Drawing on a single footage item across several layers, you can trim each one differently to surface different stretches of the source. None of that touches the footage item or the original source file.

Tip

Trimming is done by editing the In Point and Out point inside the Layer panel or the Timeline panel. There's separate guidance on trimming a footage item ahead of building a layer from it in After Effects.

A layer's In point , Out point , and duration values sit along the bottom of the Layer panel. To surface that same data for every layer in the Timeline panel, click the In/Out/Duration/Stretch button down in the lower-left corner of the Timeline panel. The Info panel, too, reports the duration, In point, and Out point of the chosen layer.

The Layer panel states In and Out points in layer time; the Timeline panel states them in composition time. Either way the duration reads the same — unless time-remapping or time-stretching is switched on for the layer.

Plenty of layer types can be stretched to any length, their In points and Out points pushed out beyond where they originally fell. That goes for time-remapped layers, shape layers, layers built on still-image footage items, camera layers, light layers, and text layers. Push a layer back far enough that it crosses into negative layer time (earlier than layer time zero) and a run of hash marks appears along the bottom of the layer bar, flagging the stretches sitting in negative layer time. That flag comes in handy when you've applied effects — Particle Playground or Shatter, say — that lean on layer time to compute their output.

## Trim or extend layers in the Timeline panel

Pick one or more layers in the Timeline panel.

Drag whichever end of a layer duration bar you need to.

Park the current-time indicator wherever you want the In point or Out point to land. Snap the In point to that time with Alt+[ (Windows) or Option+[ (macOS); snap the Out point to it with Alt+] (Windows) or Option+] (macOS).

## Use keyboard shortcuts to move, trim, or extend time for sets of layers

Moving or trimming several layers at once in the Timeline panel, you can hold their timing relative to one another by adding a modifier key. That way the chosen layers travel together as a group rather than every In or Out point collapsing onto a single time.

Shortcut

Result

- Windows: [
- macOS: [

Drops every selected layer's In point straight onto the CTI.

- Windows: ]
- macOS: ]

Drops every selected layer's Out point straight onto the CTI.

- Windows: Shift+[
- macOS: Shift+[

Slides all selected layers until the earliest In point lands on the CT, carrying every layer along and holding their relative offsets.

- Windows: Shift+]
- macOS: Shift+]

Slides all selected layers until the latest Out point lands on the CTI, carrying every layer along and holding their relative offsets.

- Windows: Alt+[
- macOS: Option+[

Trims or stretches every selected layer's In point straight onto the CTI.

- Windows: Alt+]
- macOS: Option+]

Trims or stretches every selected layer's Out point straight onto the CTI.

- Windows: Alt+Shift+[
- macOS: Option+Shift+[

Trims or stretches all selected layers until the earliest In point lands on the CTI, holding their relative offsets.

- Windows: Alt+Shift+]
- macOS: Option+Shift+]

Trims or stretches all selected layers until the latest Out point lands on the CTI, holding their relative offsets.

| --- | --- |

## Slip-edit a layer

Once you've trimmed a layer built on moving footage, a faint slip-edit bar stands for the footage item's frames that you're holding out of the composition. That pale rectangle won't show up for a trimmed layer built on a still footage item. Dragging the slip-edit bar lets you pick which frames play inside the trimmed span, and the layer's In and Out points stay put.

Shifting only a layer's In or Out point leaves keyframes where they are. Dragging the layer duration bar carries every keyframe with it. Dragging the slip edit bar carries the selected keyframes but leaves the unselected ones behind.

Note

In the middle of a slip edit, you'll often want certain keyframes — mask keyframes, for one — to ride along with the source footage, while others should hold their place in time. Hit Shift+F2 to clear the keyframe selection while keeping the layer itself selected.

- Drag the slip-edit bar leftward or rightward.
- Drag the layer leftward or rightward with the Pan Behind (Anchor Point) tool.

## Remove part of the duration of a layer

In the Timeline panel, dial the work area down to just the slice of the layers' duration you mean to cut. Park the current-time indicator where the work area should open and press B; move it to where the work area should close and press N.

Pick the layers you want a section removed from.

Turn on the Lock switch for any layers you'd rather the extraction leave alone. Press F2 to clear the layer selection.

With nothing selected, the next step pulls the section out of every unlocked layer.

To cut the section yet leave behind a gap matching its length, pick Edit > Lift Work Area.

To cut the section outright, pick Edit > Extract Work Area. A ripple deletion then closes the gap.

## Place or move a layer in time

Visually, the layer duration bar is what shows the layer's duration; numerically, that same duration shows up across the In, Out, and Duration columns of the Timeline panel.

Note

Which columns appear in the Timeline panel is your call. Either choose Columns from the panel menu, or, over a column heading, right-click (Windows) / Control-click (macOS).

The steps below relocate a whole layer in time.

- Set an In point or Out point by the numbers by clicking the figure in that layer's In or Out column in the Timeline panel.
- Snap an In point or Out point to the current time by Alt-clicking (Windows) or Option-clicking (macOS) the figure in that layer's In or Out column in the Timeline panel.
- Bring the In points of the chosen layers to the composition's start with Alt+Home (Windows) or Option+Home (Mac OS).
- Bring the Out points of the chosen layers to the composition's end with Alt+End (Windows) or Option+End (macOS).
- Push the chosen layers one frame later with Alt+Page Down (Windows) or Option+Page Down (macOS); push them 10 frames later with Alt+Shift+Page Down (Windows) or Option+Shift+Page Down (macOS).
- Pull the chosen layers one frame earlier with Alt+Page Up (Windows) or Option+Page Up (macOS); pull them 10 frames earlier with Alt+Shift+Page Up (Windows) or Option+Shift+Page Up (macOS).
- To slide the whole layer through time by dragging, drag its layer duration bar left or right. Shift-drag the bar to snap it onto meaningful moments in time, such as markers or the composition's start or end.

Note

Dragging a layer in the Timeline panel makes the Info panel show that layer's name, its duration, how much it has moved in time, and its In and Out points.

## Arrange layers in time sequentially

Lean on the Sequence Layers keyframe assistant to string layers into a sequence automatically. Run it, and the first layer you picked holds its starting time while the rest shift to fresh times in the Timeline panel, following the order in which you selected them.

Any layer headed into a sequence has to be shorter than the composition itself, leaving room for the others. Trimming, extending, and slip-editing a layer are each covered separately.

Inside the Timeline panel, with Ctrl (Windows) or Command (macOS) held down, click the layers one by one in order — beginning with whichever should appear first.

Pick Animation > Keyframe Assistant > Sequence Layers.

Inside the Sequence Layers dialog box, take one of these paths:

For a straight end-to-end arrangement, leave the Overlap option turned off.

To overlap the layers, turn on Overlap, type a Duration value for how long the overlap runs, and pick a transition. Choose Cross Dissolve Front And Back Layers to draw on the selected layers' transparency; otherwise pick Dissolve Front Layer.

To leave gaps separating the layers, turn on Overlap and type a negative Duration value.

## Quickly offset your layers and keyframes

Quick Offset makes building staggered layer or keyframe animations in the Timeline panel effortless. By nudging each layer at steady time intervals while keeping its keyframes intact, you get smooth, sequential animations in which every layer kicks off just behind the one before it. The upshot is a rhythmic flow with none of the manual timing fuss in the Timeline panel.

In the Timeline panel, pick the layers you intend to move.

Because Quick Offset moves layers by the order you selected them, picking them in any sequence you like lets you sprinkle a bit of randomness through your timeline.

On macOS hold Command + Option, or on Windows hold Ctrl + Alt, and drag your layers.

The cursor turns into ; the first layer you picked holds its spot while the last one you picked travels the full distance you drag, and every layer between them gets spaced out evenly in time across that range.

3. Here, layers picked from the foot of the stack going up are spread out evenly across time by Quick Offset.
   Move the layers and their keyframes travel right along, so the animation keyframes survive intact.

4. Shifting layers via Quick Offset carries their keyframes too, leaving the animation's integrity untouched.
   Drag the layers to build an offset and an overlay pops up reporting these timing details:

- Total Offset: the full span — duration or frame count — that all the selected layers are spread over.
- Per Layer: the exact interval or gap separating each individual layer within the staggered run.

Whatever unit the overlay shows follows the unit set in the timeline. Switch the offset between timecode and frames by Ctrl-click (Windows) and Command-click on the timecode up in the upper left of the Timeline panel.

The very same move applies to offsetting keyframes. With keyframes picked across a number of layers, hold Command + Option (macOS) or Ctrl + Alt (Windows), and their timing fans out in a stagger from one layer to the next.

Across several layers, keyframes get picked and then offset into a staggered run at a steady time interval.

Across several layers, keyframes get picked and then offset into a staggered run at a steady time interval.

## Copy or duplicate a layer

Copying a layer brings along the whole of its properties — effects, keyframes, expressions, and masks alike.

Duplicating is just a one-command shortcut for copying and pasting a layer. When the layer carries a track matte, duplicating keeps the relative ordering of the layer and that matte intact.

Pasted layers land in whatever order you selected them before the copy. Whichever layer you picked first is the last one laid down, so it winds up on top of the stacking order. Select your layers top-first and they keep that same stacking order once pasted.

Note

When a piece of a layer — a mask or a keyframe, for instance — is selected at the moment you copy, only that piece gets copied. Press Shift+F2 first to clear every component of a layer while leaving the layer itself selected.

- To copy the chosen layers and set the copies' In points at the current time, pick Edit > Copy, then press Ctrl+Alt+V (Windows) or Command+Option+V (macOS).
- To copy the chosen layers and lay the copies at the same time as the originals, pick Edit > Copy, then pick Edit > Paste.

Note

To land the copies at the top of the layer stack in the Timeline panel rather than directly above the originals, press F2 to deselect the originals before pasting.

- To duplicate the chosen layers, pick Edit > Duplicate or press Ctrl+D (Windows) or Command+D (macOS).
