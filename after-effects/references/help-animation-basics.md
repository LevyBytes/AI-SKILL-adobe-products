# Animation Basics

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 21, 2026

### Get the hang of animating layers and effects by way of keyframes, the Graph Editor, and expressions.

## About animation, keyframes, and expressions

At its heart, animation means something changing as time passes. To animate a layer, or an effect sitting on a layer, you drive one or more of its properties so their values shift across a span of time. As an illustration, taking the Opacity property from 0% at time zero up to 100% one second later produces a fade-in. The clue that a property can be animated is the stopwatch button beside its name in the Timeline or Effect Controls panel.

Whether the stopwatch icon in the Timeline panel is lit or dimmed tells you if a property is currently animated.

A. Active stopwatch B. Inactive stopwatch

Whether the stopwatch icon in the Timeline panel is lit or dimmed tells you if a property is currently animated.

Keyframes, expressions, or a mix of the two are what you use to drive layer properties.

Plenty of animation presets bundle keyframes together with expressions, so dropping a preset onto a layer hands you a finished, intricate animated result with no extra effort.

Two working modes are available for keyframes and expressions in After Effects: layer bar mode and Graph Editor mode. The default is layer bar mode, where each layer reads as a duration bar and the keyframes and expressions line up vertically beneath their properties in the Timeline panel. Switch to Graph Editor mode and the layer bars disappear; instead, keyframes and expression output are plotted on value graphs or speed graphs.

## Keyframes

You rely on keyframes to lock in settings for motion, effects, audio, and a host of other properties, and those settings usually shift as time goes on. Each keyframe pins down the moment in time at which you assign a value to some layer property — spatial position, opacity, or audio volume, for instance. Whatever falls between two keyframes gets interpolated. Building a change over time normally calls for a minimum of two keyframes: one capturing the starting state and another capturing the new state once the change finishes.

While a given property's stopwatch is active, every time you adjust that property's value After Effects records or revises a keyframe for it at the present moment. A property whose stopwatch sits inactive carries no keyframes at all. Adjust a layer property's value while its stopwatch is inactive and that single value simply holds steady for the full length of the layer.

Note

With Auto-keyframe mode turned on, editing a property flips its stopwatch on by itself.

Turn the stopwatch off and you wipe out every keyframe belonging to that layer property, and whatever value the property held at the present moment becomes its constant value. Avoid switching the stopwatch off unless you genuinely intend to erase all of that property's keyframes for good.

Tip

Swap the keyframe icons in layer bar mode for numbers by selecting Use Keyframe Indices from the Timeline panel menu.

How a layer travels and reshapes across time is governed by the run of animation keyframes laid out in the Timeline panel.

How a layer travels and reshapes across time is governed by the run of animation keyframes laid out in the Timeline panel. Within the Timeline panel, these animation keyframes rely on keyframe indices to pinpoint the precise moments at which property values change.

Within the Timeline panel, animation keyframes rely on keyframe indices to pinpoint the precise moments at which property values change. Note

Collapse a layer property that holds keyframes and you'll see gray dots — summary keyframe indicators — appear on the property group to flag that keyframes live inside it.

Certain tools — Motion Sketch and the Puppet tools among them — lay down keyframes for you automatically so they trace the motion you sketch.

## Expressions

To define a property's values and to tie one property to another, expressions draw on a scripting language built on JavaScript. The pick whip lets you link properties together to build straightforward expressions.

## The Graph Editor

Property values get plotted by the Graph Editor on a two-dimensional graph, where composition time runs horizontally from left to right. Layer bar mode works differently: its time graph only captures the horizontal time dimension and never renders a vertical, graphical view of how values shift.

Note

Toggling between layer bar mode and Graph Editor mode is done by selecting the Graph Editor button in the Timeline panel.

Once properties appear animated inside the Graph Editor, you can tune them to refine the motion and timing of your animations.

Once properties appear animated inside the Graph Editor, you can tune them to refine the motion and timing of your animations.

The Graph Editor gives you a choice of two graph types:

- Value graph: plots the values a property holds
- Speed graph: plots how fast a property's values are changing

With temporal properties such as Opacity, the Graph Editor falls back on the value graph by default, whereas spatial properties such as Position default to the speed graph. To learn about viewing and editing keyframe values, see View or edit a keyframe value.

Inside the Graph Editor every property gets drawn as its own curve. You're free to focus on a single property at a time or to display several at once. Whenever more than one property shows up in the Graph Editor, each property's curve is tinted to match that property's value back in the layer outline.

Drag a keyframe in the Graph Editor with the Snap button turned on and it locks onto keyframe values, keyframe times, the current time, In and Out points, markers, the start and end of the work area, and the start and end of the composition. As the keyframe locks onto one of these, an orange line shows up in the Graph Editor pointing out the object you're snapping to. Once you've started dragging, holding Ctrl (Windows) or Command (macOS) flips the snapping behavior off temporarily.

In Graph Editor mode a keyframe may carry direction handles on one or both sides. Those direction handles govern Bezier interpolation.

The Separate Dimensions button along the bottom of the Graph Editor splits a Position property's parts into standalone properties — X Position, Y Position, and, on 3D layers, Z Position — letting you tweak or animate each one on its own. Read more about separating the dimensions of Position to animate the components individually.

In the Graph Editor, direction handles on keyframes give you finer command over animation curves so transitions come out smoother.

In the Graph Editor, direction handles on keyframes give you finer command over animation curves so transitions come out smoother.

## Specify which properties are shown in the Graph Editor

Click the Show Properties button along the bottom of the Graph Editor and pick from these choices:

Show Selected Properties

Puts the properties you've selected on display in the Graph Editor.

Show Animated Properties

Puts the animated properties of any selected layers on display in the Graph Editor.

Show Graph Editor Set

Puts on display the properties whose Graph Editor switch is turned on. That switch sits beside the stopwatch, just left of the property name, and is available while the stopwatch is active — in other words, once the property carries keyframes or expressions.

## Graph options in the Graph Editor

Click the Graph Type and Options button along the bottom of the Graph Editor to pick from these choices:

Auto-Select Graph Type

Picks the fitting graph type for a property on its own — speed graphs go to spatial properties such as Position, and value graphs go to everything else.

Edit Value Graph

Brings up the value graph across all properties.

Edit Speed Graph

Brings up the speed graph across all properties.

Show Reference Graph

Renders the graph type you didn't select behind the scenes, for viewing only. (Those gray numbers off to the right of the Graph Editor report the reference graph's values.)

Show Audio Waveforms

Renders the audio waveform for any layer that has put a property or more into the Graph Editor.

Show Layer In/Out Points

Renders the In and Out points of every layer holding a property in the Graph Editor. These In and Out points show up as curly braces.

Show Layer Markers

Renders any layer markers in the Graph Editor, where they exist, for any layer with a property or more on display there. Layer markers show up as small triangles.

Show Graph Tool Tips

Flips the graph tool tips on or off.

Show Expression Editor

Reveals or conceals the expression editor field.

Allow Keyframes Between Frames

Permits keyframes to sit between frames so you can fine-tune animation.

## Pan and zoom in the Graph Editor

- For panning either vertically or horizontally, drag using the Hand tool.

Tip

You can call up the Hand tool briefly while another tool is in use by holding down the spacebar or the middle mouse button.

- For panning vertically, spin the mouse scroll wheel.
- For panning horizontally, hold Shift while you spin the mouse scroll wheel.
- For zooming in, grab the Zoom tool.
- For zooming out, Alt-click (Windows) or Option-click (macOS) using the Zoom tool.
- For zooming with the mouse scroll wheel, hold Alt (Windows) or Option (macOS) while scrolling to zoom horizontally, and hold Ctrl (Windows) or Command (macOS) to zoom vertically.
- For zooming horizontally, Alt-drag (Windows) or Option-drag (macOS) leftward with the Zoom tool to zoom out, or rightward to zoom in.
- For zooming vertically, Alt-drag (Windows) or Option-drag (macOS) upward with the Zoom tool to zoom in, or downward to zoom out.

Note

Vertical panning and zooming aren't possible while Auto Zoom Height is turned on.

## Auto Zoom Height and Fit

Auto Zoom Height

Flips Auto Zoom Height mode on or off; this mode scales the graph's height automatically so it matches the height of the Graph Editor. You still have to set the horizontal zoom by hand.

Fit Selection

Rescales the graph's value (vertical) and time (horizontal) axes so the keyframes you've selected fit inside the Graph Editor.

Fit All

Rescales the graph's value (vertical) and time (horizontal) axes so every graph fits inside the Graph Editor.

### More like this

- Keyframe interpolation
- Expression basics
- Animation presets overview and resources
- Keyframes and the Graph Editor (keyboard shortcuts)
