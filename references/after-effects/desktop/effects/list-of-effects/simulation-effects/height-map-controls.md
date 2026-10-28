# Height Map controls

The height map's look is set through the Height Map controls.

Note

As you tune Brightness and Contrast, hold the wave surface layer inside the cyan and violet rectangles. A peak that pushes past the cyan rectangle clips to pure white; a trough that drops below the violet rectangle's base clips to pure black. If a displacement map is your goal, dodge clipping, since it surfaces as flat peaks and valleys that look unnatural.

Brightness

Tunes the water surface's overall height. Adjusting it lightens or darkens the grayscale output as a whole. Used for displacement in Wave World, this control raises or lowers the water's surface.

Contrast

Shifts the spread between the grays of peaks and troughs, widening or narrowing it. Lower values flatten the grays together; higher ones stretch the range from black to white (right up until clipping sets in).

Gamma Adjustment

Governs how steep the waves run relative to Brightness. The effect shows only in the Height Map view. Higher values round the peaks and pinch the valleys, while lower ones smooth the valleys and sharpen the peaks.

Render Dry Areas As

Sets how the water surface renders wherever a dry area turns up. Dry areas form when part of the ground layer climbs above the water's surface. The Steepness control lets you shape that dry area.

This control earns its keep when compositing a Wave World effect into a scene. You might, for instance, feed a precomposed Wave World scene with transparency into the Caustics effect as a displacement map and also use it as a track matte for the effect layer.

Transparency

Sets how clear the water looks by tuning the alpha channel's opacity across shallower regions. Fresh water in a pool lets you see clear to the bottom, say, whereas a coffee-filled pool gives you only an inch or two of visibility. This control proves most valuable when compositing a Wave World effect into another scene. You could, for example, drive Caustics from a Wave World composition while also using it as a track matte for the effect layer.
