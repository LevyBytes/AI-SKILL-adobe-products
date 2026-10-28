# Tracking outline of a face

Inside After Effects, run File > Import > File. Navigate to wherever the footage lives, then bring it into the Project.

From the Project panel, drag that footage into a Composition so a layer is created.

Set the current time indicator (CTI) on a frame where the face you mean to track appears front-on and upright.

Face detection improves whenever the opening frame presents a face that faces forward and stands upright.

Sketch a closed mask loosely over the face so the eyes and mouth fall inside it. This mask stakes out the search region used to find facial features. Where several masks are selected, only the topmost one applies.

Keeping the Mask selected, run Window > Tracker so the Tracker panel opens. Dial the tracking Method to Face Tracking (Outline Only).

Within the Tracker panel, step forward or backward a single frame to verify tracking holds up, after which you click the button so every frame gets analyzed.

The instant analysis concludes, the composition gives you access to the face tracking data.
