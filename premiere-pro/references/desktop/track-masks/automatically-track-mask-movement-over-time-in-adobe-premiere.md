# Automatically track mask movement over time in Adobe Premiere.

Once a mask has been created and assigned to an effect on a clip, Premiere's tracking controls can follow a subject that moves. By tracking, the mask travels through the clip with the motion, which reduces hand-built keyframes and keeps effects matched to moving objects.

Mask tracking is useful for blurring faces, attaching text or graphics to moving objects, isolating chosen elements, or limiting color corrections to a tracked area. For the strongest track, include a clearly defined subject with strong contrast inside the mask.

Create a mask, open the Effect Controls panel, and choose the mask so its settings expand.

Find the tracking buttons below the mask controls.

Select Track selected mask forward and backward to start tracking. You can also use these tracking choices:

- Track selected mask backward 1 frame: shifts the mask back by one frame.
- Track selected mask backward: tracks from the current frame back to the start of the clip.
- Track selected mask forward and backward: runs tracking both backward and forward from the current frame.
- Track selected mask forward: tracks ahead from the current frame through the end of the clip.
- Track selected mask forward 1 frame: shifts the mask ahead by one frame.

The controls below the mask in Effect Controls make the mask follow the subject as its position changes through the clip.

Those Effect Controls tracking buttons keep the mask aligned with the subject's motion in the clip.

Premiere analyzes the footage and follows the mask from frame to frame.

Check the result in the Program Monitor, then refine the mask or its keyframes if necessary.

Tip

Premiere relies on its internal tracking technology for mask tracking. For more demanding tracking work, send the sequence to After Effects through Dynamic Link.
