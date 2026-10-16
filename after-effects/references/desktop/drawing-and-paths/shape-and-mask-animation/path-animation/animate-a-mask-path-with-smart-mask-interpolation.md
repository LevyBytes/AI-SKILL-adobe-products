# Animate a mask path with Smart Mask Interpolation

For building mask path keyframes and getting smooth, lifelike motion, Smart Mask Interpolation hands you a fine degree of control. Once you've picked the mask path keyframes you want interpolated, it generates the in-between keyframes according to whatever settings you supply. Progress of the interpolation, along with how many keyframes were made, shows in the Info panel.

Select Window > Mask Interpolation.

2. Highlight two or more mask path keyframes that sit next to each other.
   Configure the choices in the Mask Interpolation panel, then select Apply.

Pressing Esc halts the interpolation midway. The Info panel then notes that the run was stopped and lists how many keyframes were produced.

Keyframe Rate

Sets how many keyframes per second Smart Mask Interpolation places between the keyframes you selected. As an illustration, entering 10 lays down one new keyframe every 1/10 of a second. Choosing Auto pins the keyframe rate to the composition frame rate, shown in parentheses. More keyframes give smoother motion; fewer keyframes trim render time.

Whatever keyframe rate you settle on, Smart Mask Interpolation always inserts keyframes both at the frame right after the first mask path keyframe and at the frame right before the second. So if you interpolate between keyframes at 0 seconds and 1 second within a 30-fps composition at a keyframe rate of 10 keyframes per second, mask path keyframes land at frame numbers 1, 3, 6, 9, 12, 15, 18, 21, 24, 27, and 29.

Keyframe Fields

Takes the keyframe rate and doubles it. With this turned on and Keyframe Rate matching the composition frame rate, one keyframe goes in at each video field. Turn it on when you're animating masks for interlaced video. Leave it off and the mask can drift away from the object you're trying to key out.

Use Linear Vertex Paths

Makes the vertices in the first keyframe travel in a straight line toward their counterparts in the second keyframe. Keep this off when you'd rather have certain vertices follow curved paths — say, when the interpolation you want involves rotating parts. Left unselected, Smart Mask Interpolation builds a natural path for the mask.

Bending Resistance

Sets how prone the interpolated mask path is to bend rather than stretch. At 0, the mask path bends more than it stretches as it animates; at 100, it stretches more than it bends.

Quality

Sets how rigidly Smart Mask Interpolation pairs up vertices between one keyframe and the next. At 0, any given vertex in the first keyframe pairs only with the same-numbered vertex in the second. For instance, the tenth vertex in the first keyframe has to pair with the tenth vertex in the second. At 100, a vertex in the first keyframe can pair with any vertex in the second. Higher numbers tend to give better interpolations, though the higher you go, the longer it takes to process.

Add Mask Path Vertices

Tells Smart Mask Interpolation to insert vertices that help it produce quality interpolations. As a rule, Smart Mask Interpolation does its best work when the mask paths carry dense sets of vertices. On top of that, a vertex on the first mask path can't pair with the middle of a curve or a straight-line segment on the second, so at times you have to add vertices before matching to get the result you're after. The original keyframes stay untouched by Smart Mask Interpolation. Only the new mask path keyframes it computes carry the extra vertices.

The number you enter controls how finely the input mask paths get subdivided. Pixels Between Vertices sets the spacing, in pixels, between vertices on the larger perimeter mask path once subdivided. Total Vertices sets how many vertices end up on the interpolated mask paths. Percentage Of Outline drops in a vertex at each named percent of the mask path outline's length. As an example, 5 means a vertex is added at every successive stretch of the outline equal to 5% of the whole perimeter. If you want to stick to only the vertices already on the path at the first frame, leave this off.

Even with Add Mask Path Vertices switched off, Smart Mask Interpolation can still drop vertices onto spots where vertices already sit. When two vertices on one mask path pair with a lone vertex on the other, that single vertex is duplicated in place, so the segment running between the pair collapses down to that point.

Matching Method

Picks which algorithm Smart Mask Interpolation relies on to pair vertices across the two mask paths. Auto runs the curve algorithm whenever either selected keyframe holds a curved segment; if neither does, it falls back on the polylines algorithm. Curve runs the algorithm built for mask paths carrying curved segments. Polyline runs the algorithm for mask paths made up of nothing but straight segments.

Whenever Polyline is the chosen Matching Method, the mask path keyframes Smart Mask Interpolation adds come out as polylines, no matter whether the input mask paths held curved segments.

Use 1:1 Vertex Matches

Has Smart Mask Interpolation build a vertex on one mask path that pairs with the same-numbered vertex on the other. Across both input mask paths, it lines up first vertices with first, second with second, third with third, and onward. Should the two paths hold different vertex counts, this can give you results you don't want.

First Vertices Match

Has Smart Mask Interpolation pair the first vertices across the two mask path keyframes. Leave it off and Smart Mask Interpolation hunts for the best first-vertex pairing between the two input mask paths.

For dependable results, confirm that the first vertices of the input mask paths line up, then turn on First Vertices Match.
