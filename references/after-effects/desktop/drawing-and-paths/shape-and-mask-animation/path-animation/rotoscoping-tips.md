# Rotoscoping tips

- The moment you've started a mask, hit Alt+Shift+M (Windows) or Option+Shift+M (Mac OS); that switches keyframing on for the mask and lays down a keyframe right away. It spares you the scenario where you painstakingly edit frame by frame for many minutes, only to discover every earlier frame's work is gone because the stopwatch was never clicked to animate the mask path.
- Place your masks on a white solid layer whose Video switch is off, positioned above the (locked) footage layer. Doing so removes any chance of nudging the footage layer by accident while you work the mask, and it makes applying tracking data to the mask far simpler too. (The tracking data goes onto the invisible solid layer carrying the mask.) A bonus is that working the mask no longer wipes out your cached preview frames.
- Switch on the Preserve Constant Vertex Count preference.
- Wherever you can, transform the entire mask or a group of its vertices together — rotate, scale, or move them — rather than nudging vertices one at a time. That's partly for speed and partly to head off the chatter that uneven frame-to-frame motion produces.
- Tracking by hand eats up less time than rotoscoping by hand. Every bit of extra effort you put into solid tracking data across the parts of your scene and object trims the time spent drawing and tweaking masks.
- Lean on the variable-width mask feather feature when you need finer control over how objects are feathered.
