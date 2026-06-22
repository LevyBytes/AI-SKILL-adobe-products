# Animating Shape Paths Masks (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Feb 23, 2026

### Keyframe-based approaches in Adobe After Effects for animating both shape paths and mask paths.

Animating a mask path or a shape path follows the same routine you'd use for any other property: drop keyframes onto the Mask Path or Path property, define the path at each one, and the in-between values get interpolated for you by After Effects.

## Rotoscoping introduction and resources

Drawing or painting directly onto a film's frames, with the footage itself serving as your visual guide, is what rotoscoping (roto for short) refers to. One frequent variant traces a path around some object in the footage so that path becomes a mask isolating that object from everything behind it. Separating the two that way lets you treat object and background on their own — distinct effects on each, or a swapped-out background entirely.

Note

- The Roto Brush and Refine Edge tools shipped with After Effects handle a lot of what traditional rotoscoping does, only far quicker.
- Should a foreground or background element hold one steady, well-defined color, color keying becomes an option for stripping it out in place of rotoscoping. Footage planned around color keying makes that route considerably simpler than rotoscoping would be.

At its core, rotoscoping inside After Effects comes down to painting masks, keyframing the mask path, and then leaning on those masks to build a matte. Plenty of supporting techniques smooth the workflow — for instance, motion-tracking the object first and then feeding that tracking data into a mask or matte so it trails the object on its own.

## Rotoscoping tips

- The moment you've started a mask, hit Alt+Shift+M (Windows) or Option+Shift+M (Mac OS); that switches keyframing on for the mask and lays down a keyframe right away. It spares you the scenario where you painstakingly edit frame by frame for many minutes, only to discover every earlier frame's work is gone because the stopwatch was never clicked to animate the mask path.
- Place your masks on a white solid layer whose Video switch is off, positioned above the (locked) footage layer. Doing so removes any chance of nudging the footage layer by accident while you work the mask, and it makes applying tracking data to the mask far simpler too. (The tracking data goes onto the invisible solid layer carrying the mask.) A bonus is that working the mask no longer wipes out your cached preview frames.
- Switch on the Preserve Constant Vertex Count preference.
- Wherever you can, transform the entire mask or a group of its vertices together — rotate, scale, or move them — rather than nudging vertices one at a time. That's partly for speed and partly to head off the chatter that uneven frame-to-frame motion produces.
- Tracking by hand eats up less time than rotoscoping by hand. Every bit of extra effort you put into solid tracking data across the parts of your scene and object trims the time spent drawing and tweaking masks.
- Lean on the variable-width mask feather feature when you need finer control over how objects are feathered.

## View mask paths and shapes

- Pressing M reveals the mask paths of whichever layers are selected in the Timeline panel.
- Pressing SS (tap the S key twice) reveals the selected masks or shapes in the Timeline panel.
- Clicking the Toggle Mask and Shape Path Visibility button along the bottom of the Composition panel reveals mask and shape paths there.
- Choosing Masks from the Layer panel View menu reveals mask paths inside the Layer panel.
- To keep one mask path hidden while the rest stay visible, lock that mask via its Lock icon in the Timeline panel, then go to Layer > Mask > Hide Locked Masks.
- To single out certain masks and hide the others, pick Layer > Mask > Lock Other Masks, then choose Layer > Mask Hide Locked Masks.

## Select shape paths, shapes, and shape groups

Shape layers and the pieces inside them can be selected at four distinct levels, which go by the name selection modes:

Layer selection mode

Here the whole shape layer is chosen. Any transformation acts on the layer's transform properties over in the Transform property group, a group that sits at the same level as the Contents property group.

Group selection mode

Here a complete shape group is chosen. Transformations act on the group's transform properties, located in the Transform property group nested inside that shape group within the Timeline panel.

Free-transform mode

Here several vertices spread across one or more Bezier paths are chosen. The Composition panel wraps those vertices in a free-transform bounding box, and manipulating that box lets a single transformation shift many vertices at once. The transformations land on the vertices themselves, which live inside the Path property in the Timeline panel.

Path-editing mode

Here only vertices are chosen. This is the mode for path-editing work — adding vertices to a path, shifting individual vertices, and the like.

Note

- Path-editing mode kicks in automatically whenever a pen tool is active. To stay in path-editing mode, keep the Pen tool selected and tap V, or hold Ctrl (Windows) or Command (macOS), to call up the Selection tool only momentarily as needed.
- With a shape vertex selected, Ctrl+A (Windows) or Command+A (macOS) grabs every vertex on that path. A second press grabs all shapes; a third grabs all layers.

## Selection modes for shapes on shape layers

Laver selection

Group selection

Free-transform

Path editing

## Select a shape layer

- Click the layer's name or its duration bar over in the Timeline panel.
- With the Selection tool, click somewhere inside the layer bounds in the Composition panel.
- Should you want every shape on a layer deselected while the shape layer itself stays selected, click inside the layer's bounds but clear of all shape paths.

## Select a shape group in group selection mode

- With the Selection tool, double-click any member of the group in the Composition panel. Every double-click drops you one more level down the group hierarchy.
- Holding Ctrl (Windows) or Command (macOS) while the Selection tool is active brings up the Direct Selection tool. Clicking a shape in the Composition panel with the Direct Selection tool selects that shape's group straight away, no matter how deep the shape sits in the group hierarchy.
- A group housed within the same group as the one already selected can be selected by clicking it.
- Shift-clicking a group adds it to the selection. Pairing Shift with double-clicks and with the Direct Selection tool lets you pull more deeply nested groups into the selection too.

## Select paths and vertices in path-editing mode

Note

Sizing the Bezier direction handles and vertices for masks and shapes is done under Edit > Preferences > Appearance (Windows) or After Effects > Preferences > Appearance (macOS), where you edit the Path Point and Handle Size value.

- A single vertex is selected by clicking it with the Selection tool. Shift-click further vertices to add them to the selection.
- A single path segment is selected by clicking it with the Selection tool. Shift-click further segments to add them to the selection.
- An entire path is selected by Alt-clicking (Windows) or Option-clicking (macOS) one of its segments or vertices with the Selection tool, or by selecting any part of the path and pressing Ctrl+A (Windows) or Command+A (macOS).
- To select vertices by dragging, first click a path or part of a path to drop into path-editing mode, then drag the marquee-selection tool to pull a marquee-selection box around the vertices you want. Holding Shift as you draw more marquee-selection boxes adds further vertices to the selection.

## Select all points on a path and enter free-transform mode

- Double-click a path segment, either while in path-editing mode or while in group selection mode for one shape.
- Within the Timeline panel, highlight the Path property, then hit Ctrl+T (Windows) or Command+T (macOS).

## Select masks, segments, and vertices

Masks differ from layers in supporting more than one level of selection. Treating a mask as a single whole path suits situations where you mean to reposition or resize it. When the goal is reshaping the mask path instead, select one or more of its points. Points that are selected show up solid, while the unselected ones stay hollow.

Note

Sizing the Bezier direction handles and vertices for masks and shapes is done under Edit > Preferences > Appearance (Windows) or After Effects > Preferences > Appearance (macOS), where you edit the Path Point and Handle Size value.

## Select or deselect masks in the Layer or Composition panel

- A vertex on a mask is selected by clicking it with the Selection tool. Shift-click further vertices to add them to the selection.
- A mask segment is selected by clicking it with the Selection tool. Shift-click further segments to add them to the selection.
- A whole mask is selected by Alt-clicking (Windows) or Option-clicking (macOS) one of its segments, vertices, or handles with the Selection tool, or by selecting any part of the mask and choosing Edit > Select All or pressing Ctrl+A (Windows) or Command+A (macOS). Add more masks to the selection by Alt+Shift-clicking (Windows) or Option+Shift-clicking (macOS) them.
- To select masks by dragging, first click a mask or part of a mask to drop into mask editing mode, then drag the Selection tool to pull a marquee-selection box fully around whichever vertices or masks you want. Holding Shift as you draw more marquee-selection boxes adds further masks or vertices to the selection.
- Every mask on a layer can be selected at once by choosing any mask on the layer and then picking Edit > Select All or pressing Ctrl+A (Windows) or Command+A (macOS).
- Clearing all mask selections is done with Ctrl+Shift+A (Windows) or Command+Shift+A (macOS).
- Stepping to an adjacent mask on a layer works through shortcuts: the next mask comes via Alt+accent grave (`) (Windows) or Option+accent grave (`) (macOS), while the previous one comes via Shift+Alt+accent grave (`) (Windows) or Shift+Option+accent grave (`) (macOS).
- Clicking anywhere off the mask deselects it.
- Shift-clicking a vertex or segment drops it back out of the selection.

Note

For Selection tool access while the Pen tool is the active one, hold down Ctrl (Windows) or Command (macOS).

## Select masks in the Timeline panel

Click the icon beside a layer name to expand that layer.

Untwirl the Masks entry to open it up and reveal every mask on the layer.

- One mask is selected by clicking its name.

- A continuous run of masks is selected by Shift-clicking the first and last names in that run.

- Masks that aren't adjacent can be selected together by Ctrl-clicking (Windows) or Command-clicking (macOS) each name you want in.

Note

Only whole masks may be selected within the Timeline panel. Picking individual vertices on a mask calls for the Composition or Layer panel instead.

## Lock or unlock masks

A locked mask can't be selected across the Timeline, Composition, and Layer panels, nor set as a target in the Layer panel. Reach for this when you want to guard the mask against accidental edits.

Over in the Timeline panel, open up the Masks property group.

Within the A/V Features column, click the box sitting beneath the Lock icon next to whichever mask you mean to lock or unlock. Once a mask's Lock switch is on — meaning the Lock icon shows in the box — the mask is locked and off-limits to selection.

Note

- Unlocking several masks together is done by selecting one or more layers and then picking Layer > Mask > Unlock All Masks.
- To single out certain masks and hide the rest, choose Layer > Mask > Lock Other Masks, then pick Layer > Mask Hide Locked Masks.

## Move vertices in free-transform mode

The Free Transform Points command lets you scale and rotate a whole mask or shape path — or just selected vertices spread across one or more paths. Trigger it and a free-transform bounding box closes around the chosen vertices, with an anchor point appearing at the box's center to mark where the current transformation pivots. Dragging the box or its handles scales and rotates those vertices. You can also relocate the reference point the vertices rotate or scale around by shifting the bounding box anchor point. This bounding box's handles and anchor point operate apart from the layer's own handles and anchor point.

Note

Rotation animated through Free Transform Points interpolates the mask's vertices along a straight line from one keyframe to the next. Because of that, the outcome can diverge from what you anticipated.

Bring the layer holding the paths you want to transform into view in the Composition or Layer panel.

- For any selection of vertices, choose the ones to transform and then pick Layer > Mask and Shape Path > Free Transform Points.

- For a whole mask or shape path, select it in the Timeline panel and pick Layer > Mask and Shape Path > Free Transform Points.

To reposition the bounding box anchor point, hover the Selection tool over it until the Selection tool turns into a move anchor point icon. Then drag to set the anchor point.

- Moving the path or the selected vertices is done by placing the pointer inside the bounding box and dragging.

- Scaling the path or the selected vertices is done by setting the pointer on a bounding box handle and, once it becomes a straight, double-sided arrow, dragging to resize. Hold Shift while dragging to keep the scale constrained. Hold Ctrl (Windows) or Command (macOS) while dragging to scale about the bounding box anchor point.

- Rotating the path or the selected vertices is done by setting the pointer just beyond the free-transform bounding box and, once it becomes a curved double-sided arrow, dragging to spin it.

Leaving free-transform mode is done with Esc, Enter (Windows), or Return (macOS).

## Convert a path between manual Bezier and RotoBezier

Any manual Bezier mask path or manual Bezier shape path can be turned into a RotoBezier path. Where the manual Bezier path carries direction handles that were adjusted, the conversion reshapes the path, since After Effects works out the curvature of RotoBezier segments on its own.

Going the other way — a RotoBezier path back to a manual Bezier path — leaves the path's shape untouched.

Pick a mask in the Layer, Composition, or Timeline panel, or pick a shape path in the Composition or Timeline panel.

Choose Layer > Mask and Shape Path > RotoBezier.

## Modify a Bezier mask path or shape path

A Bezier mask path can be reshaped with the Selection tool and the pen tools inside the Layer or Composition panel. A Bezier shape path can be reshaped with the Selection tool and the pen tools inside the Composition panel.

Grouped alongside the Pen tool in the Tools panel are the pen tools — Add Vertex, Delete Vertex, and Convert Vertex. Selecting and holding the Pen tool in the Tools panel brings them into view.

Note

Most of the time the right pen tool turns active on its own once you bring the Pen tool pointer into a given context. The Delete Vertex tool, for example, activates as the Pen tool pointer passes over an existing vertex, while the Add Vertex tool activates over a path segment. Press G to switch among these tools and cycle through them yourself.

As you reshape a path, take care to click only existing vertices or segments — click elsewhere and you risk starting a brand-new path instead.

## Move, add, or delete a vertex

- A vertex is moved by dragging it with the Selection tool.

For a momentary switch from the Pen tool over to the Selection tool, press V, or hold Ctrl (Windows) or Command (macOS).

- Adding a vertex to a mask is done with the Add Vertex tool, clicking the segment that runs between two existing vertices.

- Removing a vertex from a mask is done with the Delete Vertex tool, clicking the vertex.

## Adjust a path segment

With the Selection tool, perform any one of these actions:

- Drag a vertex.

- Drag the direction handles that extend out from a neighboring smooth vertex.

- Drag a curved segment.

On a RotoBezier mask, dragging one of its curved segments shifts the vertices along with it.

## Toggle a vertex between a smooth point and a corner point

Using the Convert Vertex tool, click the vertex you want to switch.

Should the Pen tool already be active, you can temporarily switch to the Convert Vertex tool by holding Alt (Windows) or Option (macOS).

## Adjust the tension of a RotoBezier mask

1. To change the tension on several vertices at once, first select all of them.
   Then drag a vertex while holding the Convert Vertex tool.

- When the Pen tool is the active tool, press and hold Alt (Windows) or Option (macOS) to reach the Convert Vertex tool.
- The tension figure for a vertex shows up in the Info panel while you adjust it.

As you drag a vertex on the RotoBezier mask, the pointer changes to the Adjust Tension pointer.

Clicking a vertex rather than dragging it turns that vertex into a corner point at 100% tension; a second click switches it to a smooth point at 33% tension. Drag upward or rightward and the tension drops, which curves the neighboring path segments more; drag downward or leftward and the tension rises, which flattens those adjacent segments.

## Change a mask path numerically

1. Select the mask.
   Inside the Timeline panel, open up the Mask properties.

Beside the Mask Path property is an underlined word — click it, then enter your edits in the Mask Shape dialog box.

## Designate the first vertex for a Bezier path

When a path is animated, the vertex sitting at the top of the shape at the first keyframe becomes the first vertex, and After Effects numbers every vertex after it in order, counting up from that one. Those same numbers are then carried over to the matching vertices on every later keyframe. From one keyframe to the next, After Effects interpolates each vertex as it travels from its starting spot to where the like-numbered vertex sits at the following keyframe. You are free to promote a different vertex to first vertex at any point during the animation, and doing so prompts After Effects to renumber the whole path. That renumbering shifts how the path animates, since After Effects now pairs the fresh vertex numbers against the original numbers that remain stored at each successive keyframe.

If you copy a closed path onto a motion path, whichever vertex serves as the first vertex of the closed path becomes the start of the motion path. Every motion path is an open path.

A handful of shape path operations — Trim Paths among them — also rely on the first vertex as the cue for how they reshape the path.

Note

Normally, adding a vertex puts it on the path for the entire span of the path while only altering the shape at the moment you added it. Removing a vertex at one point in time, by contrast, strips it from the path across the whole duration. To stop After Effects from inserting and removing vertices over the full length of the path, go to Edit > Preferences > Composition (Windows) or After Effects > Preferences > Composition (macOS) and turn off Preserve Constant Vertex Count and Feather Point Count when Editing Masks.

1. Create an animated path.
   Within the Timeline panel, drag the current-time indicator to the moment where a new first vertex should be set.

2. Click the vertex you intend to promote to first vertex.
   Select Layer > Mask and Shape Path > Set First Vertex.

In the Composition panel, the vertex you set as first appears a bit larger than the rest.

## Animate a mask path with Smart Mask Interpolation

For building mask path keyframes and getting smooth, lifelike motion, Smart Mask Interpolation hands you a fine degree of control. Once you've picked the mask path keyframes you want interpolated, it generates the in-between keyframes according to whatever settings you supply. Progress of the interpolation, along with how many keyframes were made, shows in the Info panel.

Select Window > Mask Interpolation.

2. Highlight two or more mask path keyframes that sit next to each other.
   Configure the choices in the Mask Interpolation panel, then select Apply.

Pressing Esc halts the interpolation midway. The Info panel then notes that the run was stopped and lists how many keyframes were produced.

Keyframe Rate

Sets how many keyframes per second Smart Mask Interpolation places between the keyframes you selected. As an illustration, entering 10 lays down one new keyframe every 1/10 of a second. Choosing Auto pins the keyframe rate to the composition frame rate, shown in parentheses. More keyframes give smoother motion; fewer keyframes trim render time.

Whatever keyframe rate you settle on, Smart Mask Interpolation always inserts keyframes both at the frame right after the first mask path keyframe and at the frame right before the second. So if you interpolate between keyframes at 0 seconds and 1 second within a 30-fps composition at a keyframe rate of 10 keyframes per second, mask path keyframes land at frame numbers 1, 3, 6, 9, 12, 15, 18, 21, 24, 27, and 29.

Keyframe Fields

Takes the keyframe rate and doubles it. With this turned on and Keyframe Rate matching the composition frame rate, one keyframe goes in at each video field. Turn it on when you're animating masks for interlaced video. Leave it off and the mask can drift away from the object you're trying to key out.

Use Linear Vertex Paths

Makes the vertices in the first keyframe travel in a straight line toward their counterparts in the second keyframe. Keep this off when you'd rather have certain vertices follow curved paths — say, when the interpolation you want involves rotating parts. Left unselected, Smart Mask Interpolation builds a natural path for the mask.

Bending Resistance

Sets how prone the interpolated mask path is to bend rather than stretch. At 0, the mask path bends more than it stretches as it animates; at 100, it stretches more than it bends.

Quality

Sets how rigidly Smart Mask Interpolation pairs up vertices between one keyframe and the next. At 0, any given vertex in the first keyframe pairs only with the same-numbered vertex in the second. For instance, the tenth vertex in the first keyframe has to pair with the tenth vertex in the second. At 100, a vertex in the first keyframe can pair with any vertex in the second. Higher numbers tend to give better interpolations, though the higher you go, the longer it takes to process.

Add Mask Path Vertices

Tells Smart Mask Interpolation to insert vertices that help it produce quality interpolations. As a rule, Smart Mask Interpolation does its best work when the mask paths carry dense sets of vertices. On top of that, a vertex on the first mask path can't pair with the middle of a curve or a straight-line segment on the second, so at times you have to add vertices before matching to get the result you're after. The original keyframes stay untouched by Smart Mask Interpolation. Only the new mask path keyframes it computes carry the extra vertices.

The number you enter controls how finely the input mask paths get subdivided. Pixels Between Vertices sets the spacing, in pixels, between vertices on the larger perimeter mask path once subdivided. Total Vertices sets how many vertices end up on the interpolated mask paths. Percentage Of Outline drops in a vertex at each named percent of the mask path outline's length. As an example, 5 means a vertex is added at every successive stretch of the outline equal to 5% of the whole perimeter. If you want to stick to only the vertices already on the path at the first frame, leave this off.

Even with Add Mask Path Vertices switched off, Smart Mask Interpolation can still drop vertices onto spots where vertices already sit. When two vertices on one mask path pair with a lone vertex on the other, that single vertex is duplicated in place, so the segment running between the pair collapses down to that point.

Matching Method

Picks which algorithm Smart Mask Interpolation relies on to pair vertices across the two mask paths. Auto runs the curve algorithm whenever either selected keyframe holds a curved segment; if neither does, it falls back on the polylines algorithm. Curve runs the algorithm built for mask paths carrying curved segments. Polyline runs the algorithm for mask paths made up of nothing but straight segments.

Whenever Polyline is the chosen Matching Method, the mask path keyframes Smart Mask Interpolation adds come out as polylines, no matter whether the input mask paths held curved segments.

Use 1:1 Vertex Matches

Has Smart Mask Interpolation build a vertex on one mask path that pairs with the same-numbered vertex on the other. Across both input mask paths, it lines up first vertices with first, second with second, third with third, and onward. Should the two paths hold different vertex counts, this can give you results you don't want.

First Vertices Match

Has Smart Mask Interpolation pair the first vertices across the two mask path keyframes. Leave it off and Smart Mask Interpolation hunts for the best first-vertex pairing between the two input mask paths.

For dependable results, confirm that the first vertices of the input mask paths line up, then turn on First Vertices Match.
