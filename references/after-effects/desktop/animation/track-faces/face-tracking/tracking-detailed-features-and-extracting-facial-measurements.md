# Tracking detailed features and extracting facial measurements

From within After Effects, choose File > Import > File. Point it at the folder holding your footage and pull that footage into the Project.

Take the footage out of the Project panel and drop it onto a Composition, which adds a layer.

Park the Current Time Indicator on a frame where the face you intend to track is shown facing forward and standing upright.

You'll see stronger face detection if the first frame to track shows the face looking straight ahead in an upright pose.

Trace a closed mask loosely over the face, keeping the eyes and mouth within it. That mask establishes the search region for finding facial features. Should you have multiple masks selected, the uppermost one is the one used.

While the Mask stays selected, choose Window > Tracker to bring up the Tracker panel. Switch the tracking Method over to Face Tracking (Detailed Features).

Inside the Tracker panel, advance or back up one frame at a time to make sure tracking works, then press the button so analysis runs across all frames.

After analysis finishes, the tracking data shows up under a brand-new effect called Face Track Points. You can get at that face tracking data either via the composition or via the Effects (Window > Effect Controls) panel.

Shift the current-time indicator onto a frame where the face wears a neutral expression (the rest pose). Every other frame's face measurements are taken relative to that rest pose frame. Within the Tracker panel, press Set Rest Pose.

Within the Tracker Panel, press Extract & Copy Face Measurements. A Face Measurements effect attaches to the layer, with keyframes assembled from figures computed off the Face Track Points keyframe data. That Face Measurements keyframe data lands on the system clipboard, ready for Character Animator.

Building the Face Measurements keyframes relies on the Face Track Points keyframe data, taken relative to the Rest Pose (refer to Step 8).
