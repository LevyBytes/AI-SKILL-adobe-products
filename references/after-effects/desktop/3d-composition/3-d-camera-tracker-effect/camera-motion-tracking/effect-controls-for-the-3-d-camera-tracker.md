# Effect controls for the 3D Camera Tracker

The effect has the following controls and settings:

Analyze/Cancel

Kicks off or stops the background pass over the footage. As it works, a status banner rides on the footage and sits beside the Cancel button.

Shot Type

Declares whether the footage came from a fixed horizontal angle of view, a variable zoom, or a particular horizontal angle of view. Altering this calls for a resolve.

Horizontal Angle of View

Fixes which horizontal angle of view feeds the solver. This field wakes up only once Shot Type carries the value Specify Angle of View.

Show Track Points

Marks detected features either as 3D points with perspective hinting (3D Solved) or as 2D points grabbed by the feature track (2D Source).

Render Track Points

Decides whether the track points render as part of the effect.

Note

While the effect is selected, track points always appear, whether or not Render Track Points is on. Turning it on draws the points into the image so they remain visible during preview.

Track Point Size

Scales how large the track points appear on screen.

Create Camera

Builds the 3D camera. Spawning a text, solid, or null layer from the context menu brings one in on its own.

Advanced controls

These advanced controls belong to the 3D camera tracker effect:

- Auto Detect: works out the scene type on its own.
- Typical: Flags the scene as one that is neither purely rotational nor largely flat.
- Mostly Flat Scene: Flags the scene as largely flat, or planar.
- Tripod Pan: Flags the scene as purely rotational.

- Method Used: With Solve Method on Auto Detect, this shows which solve method was actually applied.
- Average Error: Reports the mean distance (in pixels) separating the original 2D source points from a reprojection of the solved 3D points back onto the source footage's 2D plane. A flawless track/solve would read 0 here, and toggling between 2D Source and 3D Solved track points would reveal no difference. Watch this figure to judge whether deleting points, switching the solve method, or other tweaks are pulling it down and thereby sharpening the track.
- Detailed Analysis: Checking this pushes the next analysis pass to work harder at finding things to track. The data it produces (kept in the project as part of the effect) grows much larger and slower with the option on.
- Auto-delete Points Across Time: Thanks to the new Auto-delete Track Points Across Time option, deleting track points in the Composition panel also removes the matching ones (i.e., track points on the same feature/object) at other times along the layer. There's no need to delete track points frame by frame to sharpen the track. You might, for instance, clear track points on someone running through the scene, since their movement shouldn't factor into how the camera's own motion is judged.
- Hide Warning Banner: reach for this when a banner is urging reanalysis but you'd rather leave the footage as is.
