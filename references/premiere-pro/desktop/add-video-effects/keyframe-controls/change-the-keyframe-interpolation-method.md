# Change the keyframe interpolation method

Control animation changes by choosing an interpolation type or manually editing keyframes and their handles.

Adjusting keyframe interpolation gives you precise control over how quickly animation values change. You can select an interpolation type from a context menu, or you can convert one keyframe type to another by editing the keyframe or its handles directly.

Before you begin:

Ease In and Ease Out commands are also available for quick keyframe interpolation adjustments.

Use either context-menu entry point:

- Right-click a keyframe marker in the Effect Controls panel.
- Right-click a keyframe in a Timeline panel.

Choose an interpolation method from the context menu:

- Linear: creates a consistent change rate between keyframes.
- Bezier: lets you manually change the graph shape and the rate of change on either side of a keyframe. This method can produce very smooth changes.
- Auto Bezier: creates a smooth rate of change through a keyframe. If a keyframe value is changed, Auto Bezier updates the direction handles so the transition across keyframes stays smooth.
- Continuous Bezier: creates a smooth rate of change through a keyframe. Continuous Bezier differs from Auto Bezier by allowing manual direction-handle adjustment. When you reshape the graph on one side of a keyframe, the other side updates too so smoothness is preserved.
- Hold: changes a property value with no gradual transition, producing sudden effect changes. After a keyframe that uses Hold interpolation, the graph appears as a horizontal straight line.
- Ease In: slows value changes as they enter a keyframe.
- Ease Out: gradually speeds up value changes as they leave a keyframe.

Note

Interpolation methods can alter the rate of property change between keyframes, but they do not alter the actual duration between keyframes. Duration comes from the time, or the distance in the time ruler, separating the keyframes.
