# Face Tracking Overview

With Face Tracking you can pinpoint and follow human faces with precision. Plain mask tracking is the fast route to confining effects to a face alone — selective color correction, say, or blurring someone's face, and so on.

Face Tracking, though, lets you follow particular regions of the face such as the pupils, mouth, and nose, so you can single out and refine those facial features in far greater detail. You might, for instance, recolor the eyes or play up mouth movements without going frame by frame.

After Effects can also gauge facial features for you. By tracking facial measurements, it reports specifics like how wide the mouth or an eye is. Having each data point on its own opens the door to refining content substantially. Beyond that, you can export thorough tracking data to Adobe Character Animator for performance-based character animation.

For the most part the face tracker runs on its own, though you'll get better results by launching the analysis on a frame that shows a front, upright view of the face. Good lighting on the face can sharpen the accuracy of face detection.

The Tracker panel offers two face-tracking options:

- Face Tracking (Outline Only): Go with this option when the face's outline is the only thing you need to track.
  Should you go with the Detailed Features option, the layer picks up a Face Track Points effect. That effect holds several 2D effect control points with keyframes, each one pinned to a detected facial feature (for instance, the corners of the eyes and mouth, where the pupils are, the tip of the nose).
