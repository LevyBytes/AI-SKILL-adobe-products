# Speed

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Nov 4, 2024

## Control speed between keyframes

Once a property is animated in the Graph Editor, its rate of change — its speed — becomes something you can both inspect and tune over in the speed graph. Spatial properties get the same speed treatment along the motion path inside the Composition or Layer panel.

Within the Composition or Layer panel, how far apart the dots on a motion path sit tells you the speed. One dot stands for a single frame, keyed to the composition's frame rate. Dots spaced evenly mean a steady speed, while dots spread wider apart mean faster motion. No dots show up for keyframes that use Hold interpolation, since nothing transitions between the keyframe values– the layer just pops into place at the position the next keyframe calls for.

Motion path in the Composition panel.

A. Dots are close together, indicating lower speed. B. Dots are far apart, indicating greater speed. C. Inconsistent spacing of dots indicates changing speed.

Motion path in the Composition panel. Speed graph in Graph Editor.

A. Speed is constant. B. Speed is constant. C. Speed decreases and then increases.

Speed graph in Graph Editor.

For information about keyframe interpolation, refer to Keyframe interpolation.

How fast a property value shifts comes down to the factors below:

How much time separates the keyframes over in the Timeline panel. A tighter gap between keyframes forces the layer to change faster to hit the next keyframe value. Stretch that gap out and the layer changes more gradually, since it has a longer stretch over which to make the change. Slide keyframes earlier or later along the timeline to retune that rate of change.

How far apart the values of neighboring keyframes are. When keyframe values sit far apart — say between 75% and 20% opacity — the rate of change runs faster than when they sit close, like between 30% and 20% opacity. Bumping a layer property's value up or down at a keyframe lets you retune that rate of change.

Which interpolation type a keyframe carries. Take a keyframe set to Linear interpolation: pushing a value smoothly through it is tough, but you're free to flip over to Bezier interpolation whenever you like, which carries a smooth change through the keyframe. Going with Bezier interpolation, direction handles let you dial in the rate of change even more finely.

Linear interpolation (before) causes sharp changes, and Bezier interpolation (after) creates smoother changes.

Linear interpolation causes sharp changes and Bezier interpolation creates smoother changes.

## Control speed between keyframes without using the speed graph

- Over in the Composition or Layer panel, change how far two keyframes sit apart spatially on the motion path. Pull one keyframe's position farther from the other to raise speed, or nudge it nearer to drop speed.

You can change the animation speed inside the Layer panel by reworking the gap between two keyframes– drag one keyframe farther off to quicken it, or pull them closer to slow it down.

- Within layer bar mode or the Graph Editor, change the time gap between two keyframes. Pull one keyframe farther from the other to drop speed, or slide one keyframe nearer to raise speed.

When less time separates the keyframes, layer speed climbs.

- Bring in the Easy Ease keyframe assistant, which on its own tunes the rate of change as motion moves toward and pulls away from a keyframe.

## About the speed graph

The speed graph over in the Graph Editor lets you fine-tune how things change across time. For every spatial and temporal value at any frame in a composition, the speed graph reports the value and rate of change and hands you control over both.

Within the speed graph, wherever the graph's height shifts, speed is shifting. Flat stretches mean a steady speed– the higher the level, the faster the speed.

Bringing up the speed graph is a matter of picking Edit Speed Graph from the Choose graph type and options menu.

Fine-tune the timing and pacing of animations using the Speed Graph controls.

A. Value at the current-time indicator B. Speed Graph C. Direction handle (controls speed)

Fine-tune the timing and pacing of animations using the Speed Graph controls.

Working the rise and fall of the speed graph is how you govern how fast or slow a value travels from one keyframe to the next. You can steer the values entering and leaving a keyframe as a pair, or handle each value on its own. Drag the incoming handle upward and it raises the speed or velocity; drag it downward and the speed or velocity drops. The outgoing handle does the same thing to the keyframe that follows. Dragging the handles sideways — left or right — is another way to govern the influence on speed.

Drag direction handles in the Speed Graph up or down to increase or decrease the speed entering or leaving the keyframe.

A. Incoming direction handle B. Speed control C. Outgoing direction handle

Drag direction handles in the Speed Graph up or down to increase or decrease the speed entering or leaving the keyframe. Note

Should you want one handle to reach across more than a single keyframe, turn to roving keyframes.

## Control speed with the speed graph

Over in the Timeline panel, open the outline for whichever keyframe you mean to adjust.

Hit the Graph Editor button, then pick Edit Speed Graph out of the Choose graph type and options menu.

2. Edit Speed Graph is what governs how animations speed up and slow down, yielding motion that's smoother and livelier.
   With the Selection tool, pick the keyframe you mean to adjust.

Splitting the incoming and outgoing direction handles is done by Alt-dragging (Windows) or Option-dragging (macOS) a direction handle.

Rejoining the direction handles is done by Alt-dragging (Windows) or Option-dragging (macOS) a split direction handle up or down until it touches the other handle.

Pull a keyframe whose direction handles are joined upward to speed up, or downward to slow down, both entering and leaving the keyframe.

Pull a split direction handle upward to speed up, or downward to slow down, the speed entering or leaving a keyframe.

Pull the direction handle away from the keyframe's center to give the keyframe more influence. Pull the direction handle toward the keyframe's center to give it less.

Drag a direction handle past the top or bottom of the Graph Editor while the Auto-zoom graph height icon is on, and After Effects works out a fresh minimum or maximum from how far past the graph you dragged, then redraws everything so that, by default, every value you set for that layer property fits in view.

## Create a bounce or peak

Direction handles let you mimic the kind of acceleration a bouncing ball shows. Build a result like that and the speed graph looks as though it shoots up and crests.

Over in the Timeline panel, open the outline for whichever keyframe you mean to adjust.

Hit the Graph Editor button and bring up the speed graph for the property.

Confirm that the keyframe you want to peak carries an interpolation method of Continuous Bezier or Bezier. Right-click the keyframe and reach for the Keyframe Interpolation option to set that interpolation method.

Pull the chosen keyframe (its direction handles joined) upward until it nearly touches the top of the graph.

4. Raising the handles makes the property change faster at whichever keyframe is selected.
5. To get a sharper jump from one keyframe to the next, pull the direction handles flanking a keyframe in toward its center.

## Start or stop change gradually

With direction handles you can build gradual starts and stops — picture a boat easing to a halt and then setting off again. Lean on this technique and the speed graph takes on a smooth U shape.

Over in the Timeline panel, open the outline for whichever keyframe you mean to adjust.

Hit the Graph Editor button and bring up the speed graph for the property.

Confirm that the keyframe you mean to adjust carries an interpolation method of Continuous Bezier or Bezier.

4. On the keyframe you've chosen, pull the direction handle downward till it sits close to the graph's lower edge.
5. Pulling the direction handle this way eases in a gradual change.

## Adjust influence of a direction handle on an adjacent keyframe

Beyond governing how much acceleration and deceleration occur, you can also stretch a keyframe's influence outward or pull it inward relative to a neighboring keyframe. That influence sets how fast the speed graph arrives at the value you fixed at the keyframe, handing you one more lever over the graph's shape. Drag the direction handle toward the neighboring keyframe and a keyframe value's influence over that neighbor grows; drag it back toward its own keyframe's center and that influence on the neighbor shrinks.

Over in the Timeline panel, open the outline for whichever keyframe you mean to adjust.

Hit the Graph Editor button and bring up the speed graph for the property.

With the Selection tool, pick a keyframe and drag the direction handle left or right.

## Change speed numerically

There may be times you need speed set more exactly than dragging keyframes across the speed graph allows. For those, key the speed in by the numbers over in the Keyframe Velocity dialog box.

Which options and units the dialog box shows depend on which layer property you're editing, and they can shift for plug-ins too.

1. Display the speed graph for the keyframe you want to adjust.
   Pick the keyframe you want to edit, then choose Animation > Keyframe Velocity.

Key in values for Speed across the Incoming Velocity and Outgoing Velocity sections.

Key in a value for Influence to set how much influence runs toward the previous keyframe (for incoming interpolation) or toward the next keyframe (for outgoing interpolation).

For a smooth transition that holds the incoming and outgoing velocities equal, turn on the Continuous (Lock Outgoing and Incoming) option.

Note

Out of the box, the proportions of the current Scale or Mask Feather values stay locked as you edit the values. To stop preserving proportions, click the link icon beside the property values over in the Timeline panel so the icon goes away.

## Automatically ease speed

Dragging direction handles by hand will adjust a keyframe's speed, sure, but Easy Ease takes that work off your plate.

Apply Easy Ease and every keyframe ends up at a speed of 0 carrying 33.33% influence on each side. Ease an object's speed, for instance, and the object decelerates on its way into a keyframe, then gradually picks up speed on its way out. Easing can run on the way into a keyframe, on the way out, or both.

Within the Graph Editor or in layer bar mode, pick a span of keyframes.

Choose Animation > Keyframe Assistant > Easy Ease (which softens speed on both the entry and exit of the chosen keyframes), Easy Ease In (which softens it only on entry), or Easy Ease Out (which softens it only on exit).

Hit the Easy Ease , Easy Ease In , or Easy Ease Out button down at the bottom of the Graph Editor.

2. The Easy Ease options are how you steer an animation's pacing and smoothness.

## Create smooth motion with roving keyframes

Roving keyframes give you an easy path to smooth movement spanning several keyframes in one go. What makes a roving keyframe rove is that it isn't pinned to a particular time; its speed and timing fall out of the keyframes on either side. Shift the position of a keyframe that neighbors a roving keyframe along a motion path, and the roving keyframe's timing can shift too.

Only spatial layer properties — Position, Anchor Point, and effect control points among them — get roving keyframes. On top of that, a keyframe can only rove when it isn't the first or last one in a layer, because a roving keyframe has to draw its speed from the keyframes before and after it.

Different velocities show up between keyframes on the original motion path (before). Set those keyframes to rove (after) and the motion path now carries a steady speed over that span of keyframes.

Within layer bar mode or the Graph Editor, lay out the keyframes for the motion you'd like to smooth.

2. Settle on which keyframes will bookend the stretch you intend to smooth.
   For each keyframe across the range (leaving out the beginning and ending ones), pick Rove Across Time from the Edit selected keyframes menu .

Pick the keyframes you'd like to rove and choose Animation > Keyframe Interpolation. After that, pick Rove Across Time out of the Roving dropdown menu.

3. Rove Across Time hands a keyframe the freedom to interpolate cleanly off its neighbors, giving the motion a more natural feel.

Those intermediate keyframes reposition themselves along the timeline so the speed curve between the beginning and ending keyframes comes out smooth.

## Revert to a non-roving keyframe

- Pick the roving keyframe option from the keyframe menu, or just drag the roving keyframe left or right.
- Pick the keyframes you'd like to change, choose Animation > Keyframe Interpolation, then pick Lock To Time out of the Roving menu.

## Use Exponential Scale to change the speed of scaling

Working with 2D layers, you can fake the lifelike acceleration of a zoom lens through Exponential Scale, which turns a layer's linear scaling into exponential scaling. Spinning up a cosmic zoom is one place Exponential Scale comes in handy, for instance. A lens zoom isn't optically linear—scaling changes faster and faster the more you zoom in.

Within layer bar mode or the Graph Editor, keep the Shift key held and pick the starting and ending keyframes for the scale property.

Choose Animation > Keyframe Assistant > Exponential Scale.

Note

Any keyframes that already sit between the chosen starting and ending keyframes get overwritten by Exponential Scale.

### More like this

- Keyframe interpolation
- Animation basics
- Time-stretching and time-remapping
- Timecode and time display units

## See also

- [Keyframe Interpolation](help-keyframe-interpolation.md)
