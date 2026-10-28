# The Graph Editor

Property values get plotted by the Graph Editor on a two-dimensional graph, where composition time runs horizontally from left to right. Layer bar mode works differently: its time graph only captures the horizontal time dimension and never renders a vertical, graphical view of how values shift.

Note

Toggling between layer bar mode and Graph Editor mode is done by selecting the Graph Editor button in the Timeline panel.

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
