# Clip handles settings

Learn what clip handles are and how they support transition adjustments.

Clip handles are unused footage before a clip's in-point and after its out-point, and transitions can use that extra material.

When the source media lacks enough frames, handles may be unavailable because there is no extra footage for the transition. If you add the transition anyway, Premiere warns that there is 'Insufficient Media' and that repeated frames will be used. Premiere then builds handles by repeating end frames, creating a freeze frame from the clip. In the Timeline panel, diagonal warning bars appear across the transition.

Adding a transition places a colored overlay over the clips in the timeline. The clip is not shortened; playback continues from the In or Out point.

If a transition lacks sufficient clip handles, the simplest fix is to re-edit the clip. Select the clip in the timeline, then use the Ripple Edit tool to trim it back. After that, add the transition again.

Note

When placing a transition between clips, confirm that the first clip has a handle at its end and the next clip has a handle at its beginning.
