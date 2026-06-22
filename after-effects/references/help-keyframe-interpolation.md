# Keyframe Interpolation

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Shape how your animation is timed in Adobe After Effects, tuning motion, speed, and the transitions from one keyframe to the next through keyframe interpolation.

Filling in the unknown data that sits between two known values is what interpolation does. By setting keyframes you pin a property's values at particular key times, and After Effects then works out that property's values for every moment falling between those keyframes.

Since interpolation produces the property values lying between keyframes, it sometimes goes by the name tweening. What it can drive between keyframes runs the gamut: movement, effects, audio levels, image adjustments, transparency, color shifts, and plenty of other visual and audio elements.

Once your keyframes and motion paths are in place to vary values over time, you might want finer control over how that variation plays out. To that end, After Effects supplies a range of interpolation methods governing how the in-between values get computed.

Interpolating values across time is temporal interpolation; interpolating them across space is spatial interpolation. A few properties — Opacity among them — carry only a temporal component. Others, Position for one, add spatial components as well.

## Temporal interpolation and the value graph

The value graph in the Graph Editor lets you fine-tune the temporal property keyframes you've laid down for an animation. On that value graph, x values appear red, y values green, and z values (3D only) blue. It tells you everything about a keyframe's value at any moment within a composition and hands you control over it. The Info panel, meanwhile, reports the temporal interpolation method for whichever keyframe is selected.

## Spatial interpolation and the motion path

Apply or alter spatial interpolation for a property like Position and you're reshaping the motion path inside the Composition panel. Each keyframe sitting on that motion path signals which interpolation type is in force at any given moment. The spatial interpolation method of the selected keyframe shows up in the Info panel.

Make spatial changes within a layer and After Effects falls back on Auto Bezier as its default spatial interpolation.

Note

Want linear interpolation as the default instead? Choose Edit > Preferences > Composition (Windows) or After Effects > Settings > Composition (macOS), then turn on Default Spatial Interpolation To Linear. Flipping that preference leaves untouched any keyframes that already exist as well as new keyframes added to properties that already carry keyframes.

Motion path interpolation

A. Linear B. Auto Bezier C. Continuous Bezier D. Bezier E. Hold

Motion path interpolation

Now and then, Auto Bezier spatial interpolation on Position keyframes triggers an unwanted back-and-forth (boomerang) motion between two keyframes holding equal values. When that happens, switch the earlier keyframe over to Hold interpolation, or set both keyframes to Linear interpolation.

## Keyframe interpolation methods

Within layer bar mode, how a keyframe icon looks is governed by whichever interpolation method you've assigned to the span between keyframes. A half-dark-gray icon signals one of two things: either there's no neighboring keyframe on that side, or the Hold interpolation carried over from the keyframe just before it has overridden that side's interpolation.

A keyframe relies on a single interpolation method out of the box, yet two are allowed at once: as the playhead nears a keyframe, the incoming method governs the property value, while the outgoing method takes over once the playhead moves past it. Assigning distinct incoming and outgoing methods alters the keyframe icon in layer bar mode to match — the left half shows the incoming interpolation icon and the right half shows the outgoing one.

Note

Switching the display between keyframe icons and keyframe numbers is done by picking Use Keyframe Icons or Use Keyframe Indices from the Timeline panel menu.

Examples of keyframe icons in Timeline panel in layer bar mode

A. Linear B. Linear in, Hold out C. Auto Bezier D. Continuous Bezier or Bezier E. Linear in, Bezier out

Examples of keyframe icons in Timeline panel in layer bar mode

Every interpolation method in After Effects derives from Bezier interpolation, which supplies direction handles for governing how the transitions between keyframes behave. The methods lacking direction handles are simply restricted forms of Bezier interpolation, handy for particular jobs.

Want to see how the various methods act on temporal properties? Lay down three or more keyframes carrying different values on a temporal layer property — Opacity, for instance — then swap the interpolation methods while watching the value graph in the Timeline panel's Graph Editor mode.

For a sense of how the methods shape a motion path instead, place three keyframes with differing values on a spatial property such as Position along a motion path, swap the interpolation methods, and preview the resulting movement in the Composition panel.

Note

Reassigning a method starts by right-clicking a keyframe; from the menu that pops up pick Keyframe Interpolation, then choose an entry under the Temporal Interpolation menu.

For the sake of clarity, the method descriptions that follow each treat the outcome as though the method had been applied to every keyframe on a layer property. Real-world usage lets you assign whichever available method you like to whichever keyframe you like.

## No interpolation

A layer property sits in the no-interpolation state whenever it carries zero keyframes — the stopwatch is switched off and the I-beam icon shows up in the Timeline panel beneath the current-time indicator. While in that state, any value you assign to the property persists across the whole layer, barring an expression that overrides it. Out of the box, layer properties carry no interpolation. The moment a layer property gains keyframes, though, some interpolation method is at work.

## Linear interpolation

A constant rate of change from one keyframe to the next is what Linear interpolation produces, which can lend animations a mechanical feel. The values sitting between two adjacent keyframes are interpolated by After Effects as straight as it can manage, ignoring whatever the other keyframes hold.

Apply Linear interpolation across every keyframe of a temporal layer property and change kicks off the instant the first keyframe is reached, running at a steady pace until the next one. Once the second keyframe arrives, the pace jumps at once to whatever rate connects it with the third keyframe. Reaching the final keyframe value brings change to an abrupt halt. On the value graph, the link between two Linear-interpolated keyframes shows up as a straight line.

## Bezier interpolation

The tightest control comes from Bezier interpolation, since you shape the value graph or motion path segments flanking the keyframe by hand. Where Auto Bezier and Continuous Bezier differ, a Bezier keyframe's pair of direction handles work on their own in both the value graph and the motion path.

Apply Bezier interpolation to all keyframes of a layer property and After Effects produces a smooth handoff between them. Those direction handles start out positioned by the very method Auto Bezier interpolation uses. Adjusting a Bezier keyframe's value leaves the existing direction handle positions intact, courtesy of After Effects.

What sets Bezier interpolation apart from the rest is that it permits any mix of curves and straight runs across the motion path. With the two Bezier direction handles acting independently, a curving path can abruptly become a hard corner at a Bezier keyframe. For tracing a motion path along an intricate shape — a map route, say, or a logo's outline — Bezier spatial interpolation works best.

Move a motion-path keyframe and its existing direction handle positions hold. Motion speed along the path is set by whichever temporal interpolation each keyframe carries.

## Auto Bezier interpolation

A smooth rate of change passing through a keyframe is what Auto Bezier interpolation delivers. Auto Bezier spatial interpolation could trace, for instance, the route of a car rounding a bend.

Alter an Auto Bezier keyframe's value and its direction handles reposition on their own to preserve a smooth handoff between keyframes. Those automatic shifts reshape the value graph or motion path segments on each side of the keyframe. Should the neighboring keyframes before and after also run Auto Bezier interpolation, the segments on their far sides reshape as well. Drag an Auto Bezier direction handle by hand and it turns into a Continuous Bezier keyframe.

The default spatial interpolation is Auto Bezier.

## Continuous Bezier interpolation

Much like Auto Bezier interpolation, Continuous Bezier interpolation yields a smooth rate of change through a keyframe. The distinction is that you place the Continuous Bezier direction handles yourself. Whatever you adjust reshapes the value graph or the motion path segments flanking the keyframe.

Apply Continuous Bezier interpolation across all keyframes of a property and After Effects tunes the value at each one to keep the handoffs smooth. Shift a Continuous Bezier keyframe along either the motion path or the value graph and After Effects preserves those smooth transitions.

## Hold interpolation

Only as a temporal interpolation method is Hold interpolation offered. Reach for it when a layer property's value should shift over time without any gradual handoff. It serves well for strobe effects, or any case where layers should pop in or vanish all at once.

Apply Hold temporal interpolation across all keyframes of a layer property and the first keyframe's value stays put right up to the next keyframe, where the value flips at once. On the value graph, the segment that trails a Hold keyframe shows up as a flat horizontal line.

Although Hold interpolation exists solely as a temporal method, the motion-path keyframes still appear — they simply lack the connecting layer-position dots. Animate a layer's Position property with Hold interpolation, for example, and the layer stays at the prior keyframe's position value until the current-time indicator hits the next keyframe, whereupon it drops out of the old spot and pops up at the new one.

Freezing the current frame across the whole layer is easy with the Freeze Frame command. To do so, park the current time indicator on the frame you want frozen. Confirm the layer is selected, then choose Layer > Time > Freeze Frame. This switches on time-remapping and drops a Hold keyframe at the current time indicator's position, freezing that frame.

Note

Had you already turned on time-remapping for the layer, applying the Freeze Frame command wipes out any keyframes you'd made.

Hold interpolation is usable only for outgoing temporal interpolation — that is, for the frames that come after a keyframe. Create a keyframe right after a Hold keyframe and the new one picks up incoming Hold interpolation.

Note

Turning outgoing Hold interpolation on or off for a keyframe is done by selecting it in the Timeline panel and choosing Animation > Toggle Hold Keyframe.

## Apply and change keyframe interpolation methods

Any keyframe's interpolation method is open to being applied or altered. You can make the change through the Keyframe Interpolation dialog box, or apply it straight to a keyframe in layer bar mode, on a motion path, or within the Graph Editor. The default interpolation that After Effects uses for spatial properties is also yours to change.

Easing speed between keyframes automatically is what the Easy Ease controls handle.

## Change interpolation method with the Keyframe Interpolation dialog box

Settings for temporal and spatial interpolation live in the Keyframe Interpolation dialog box, along with roving settings reserved for spatial properties.

1. Working in layer bar mode or the Graph Editor, pick out the keyframes you mean to alter.
   Choose Animation > Keyframe Interpolation.

Current Settings

Leaves the interpolation values already in place on the selected keyframes untouched. Reach for this when several keyframes — or manually tweaked ones — are selected and you'd rather not disturb their current settings.

Linear, Bezier, Continuous Bezier, Auto Bezier, and Hold

Assign a temporal interpolation method at its default values.

Current Settings

Leaves the interpolation settings already in place on the selected keyframes untouched.

Linear, Bezier, Continuous Bezier, and Auto Bezier

Assign a spatial interpolation method at its default values.

Current Settings

Leaves the selected keyframes' current method of positioning in time untouched.

Rove Across Time

Evens out the rate of change across the selected keyframes by shifting their position in time on its own, drawing on where the keyframes just before and just after the selection sit.

Lock To Time

pins the selected keyframes to their present spot in time. They won't budge unless you move them by hand.

To dig deeper into evening out the rate of change across chosen keyframes, see Smooth motion with roving keyframes.

## Change interpolation method with the Selection tool in layer bar mode

On a keyframe set to Linear interpolation, a Ctrl-click (Windows) or Command-click (macOS) swaps it over to Auto Bezier.

On a keyframe set to Bezier, Continuous Bezier, or Auto Bezier interpolation, a ctrl-click (Windows) or command-click (macOS) swaps it over to Linear.

## Change interpolation method in the Graph Editor

- Toggling a keyframe between Linear and Auto Bezier interpolation is a matter of clicking it with the Convert Vertex tool.
- Pick one or several keyframes, then hit the Hold, Linear, or Auto Bezier button along the bottom of the screen to swap the interpolation method.

Interpolation buttons in the Graph Editor

A. Convert selected keyframes to Hold B. Convert seleced keyframes to Linear C. Convert selected keyframes to Auto Bezier

Interpolation buttons in the Graph Editor

## Modify Bezier direction handles in the Graph Editor

Inside the Graph Editor, any keyframe running Bezier interpolation comes with direction handles fixed to it. Retracting, extending, or rotating those handles lets you fine-tune the Bezier curve on a value graph. Retracting or extending them does the same fine-tuning on a speed graph.

Out of the box, retracting or extending one direction handle drags the keyframe's opposite handle along with it. Splitting the handles frees the two attached to a keyframe to move on their own.

- Retracting or extending a direction handle means dragging it, with the Selection tool, toward or away from its keyframe's center.
- Splitting direction handles calls for an Alt-drag (Windows) or Option-drag (macOS) on a keyframe using the Selection tool. An Alt-drag (Windows) or Option-drag (macOS) beyond a keyframe also draws fresh handles, regardless of whether any already exist.
- Working both neighboring keyframes' direction handles at the same time means dragging the value graph segment that lies between them.

Extending a Bezier direction handle in the speed graph

Extending a Bezier direction handle in the speed graph

### More like this

- Controlling speed between keyframes
- The Graph Editor
- Keyframes and the Graph Editor (keyboard shortcuts)
- Showing properties and groups in the Timeline panel (keyboardshortcuts)
- About animation, keyframes, andexpressions
- Select keyframes
