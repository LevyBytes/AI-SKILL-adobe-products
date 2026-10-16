# Control speed between keyframes

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
