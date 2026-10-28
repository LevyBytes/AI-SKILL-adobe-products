# Options for time-display units

- Timecode: Shows time as timecode within the time rulers of the Timeline, Layer, and Footage panels, drawing on either Use Media Source (source timecode) or beginning at 00:00:00:00 for the Footage Start Time. Pick the Timecode option to work in timecode rather than Frames. No options exist for picking a frame rate or drop-frame/non-drop-frame, since source timecode gets detected and applied in their place.

Note

Within any one composition in a project, drop-frame and non-drop-frame timecode are both allowed to coexist.

- Frames: Puts a frame number on screen in place of time. Lean on this setting when it's handy to dovetail your work with a frame-based application or format, Flash or SWF for example. To work in frames, pick Frames and clear Use Feet + Frames.
- Feet + Frames: Shows how many feet of film there are, plus frames for the leftover partial feet, for 16mm or 35mm film. To work in feet and frames, pick Frames and then turn on Use Feet + Frames.
- Frame Count: Sets the number the Frames time display style starts counting from.
- Timecode Conversion: Takes the item's timecode value as the starting number (assuming the item carries source timecode). Where no timecode value exists, the count starts at zero. Timecode Conversion makes After Effects act as it did in earlier versions, with the frame count and timecode count of every asset coming out mathematically equal.
- Start at 0: Frame counting kicks off at zero.
- Start at 1: Frame counting kicks off at one.

Note

With the Start at 0 and Start at 1 options you can set up separate frame-counting schemes for Frames versus Timecode. You might, for instance, decide to respect footage items' source timecode while still counting frames from zero or one.
