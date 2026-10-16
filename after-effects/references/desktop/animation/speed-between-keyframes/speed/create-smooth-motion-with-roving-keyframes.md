# Create smooth motion with roving keyframes

Roving keyframes give you an easy path to smooth movement spanning several keyframes in one go. What makes a roving keyframe rove is that it isn't pinned to a particular time; its speed and timing fall out of the keyframes on either side. Shift the position of a keyframe that neighbors a roving keyframe along a motion path, and the roving keyframe's timing can shift too.

Only spatial layer properties — Position, Anchor Point, and effect control points among them — get roving keyframes. On top of that, a keyframe can only rove when it isn't the first or last one in a layer, because a roving keyframe has to draw its speed from the keyframes before and after it.

Different velocities show up between keyframes on the original motion path (before). Set those keyframes to rove (after) and the motion path now carries a steady speed over that span of keyframes.

Within layer bar mode or the Graph Editor, lay out the keyframes for the motion you'd like to smooth.

2. Settle on which keyframes will bookend the stretch you intend to smooth.
   For each keyframe across the range (leaving out the beginning and ending ones), pick Rove Across Time from the Edit selected keyframes menu .

Pick the keyframes you'd like to rove and choose Animation > Keyframe Interpolation. After that, pick Rove Across Time out of the Roving dropdown menu.

3. Rove Across Time hands a keyframe the freedom to interpolate cleanly off its neighbors, giving the motion a more natural feel.

Those intermediate keyframes reposition themselves along the timeline so the speed curve between the beginning and ending keyframes comes out smooth.
