# Lightning effect

Should the Lightning effect already sit on one or more layers in a project built with an earlier After Effects release, you may keep using it; otherwise turn to the Advanced Lightning effect. (See Advanced Lightning effect.)

This effect works with 8-bpc color.

Start Point, End Point

Where the lightning begins and ends.

Segments

How many segments make up the primary bolt. Raise the count for finer detail at the cost of less fluid motion.

Amplitude

How large the bolt's undulations run, given as a percentage of the layer width.

Detail Level, Detail Amplitude

The quantity of detail layered onto the main bolt and its branches. Detail Level usually sits around 2–3, and Detail Amplitude around 0.3. Larger settings on either suit stills best but tend to muddy animation.

Branching

How much forking shows up where bolt segments end. At 0 there's no branching at all; at 1.0 every single segment branches.

Rebranching

How much the branches branch in turn. Crank it up for treelike bolts.

Branch Angle

How far a branch diverges in angle from the bolt it grows off.

Branch Seg. Length

Each branch segment's length stated as a fraction of the bolt's average segment length.

Branch Segments

The ceiling on segment count per branch. For long branches, raise both Branch Seg. Length and Branch Segments.

Branch Width

Each branch's average width given as a fraction of the bolt's width.

Speed

How fast the lightning bolt undulates.

Stability

How tightly the bolt tracks the line running between the start and end points. Low settings hold the bolt near that line; high ones make it bounce hard. Pair Stability with Pull Force to fake a Jacob's Ladder effect, snapping the bolt back toward the start line once it has been dragged in the Pull Force direction. Too low a Stability won't let the bolt stretch into an arc before snapping back; too high a value sets it bouncing about.

Fixed Endpoint

Sets whether the bolt's end point stays pinned. Leave this control off and the bolt's end wanders around the end point.

Width, Width Variation

The main bolt's width plus how much that width may shift from one segment to the next. Those width shifts are randomized. At 0 there are no width shifts; at 1 the width shifts are maxed out.

Core Width

The inner glow's width, set by the Inside Color value. Core Width is gauged against the bolt's full width.

Outside Color, Inside Color

Which colors fill the bolt's outer and inner glows. Because the Lightning effect lays these colors over whatever colors already sit in the composition, primary colors tend to read best. Bright ones often wash out a lot, sometimes all the way to white, depending on how bright the colors underneath are.

Pull Force, Pull Direction

How hard, and which way, a tugging force drags the bolt. Combine Pull Force with Stability to fake a Jacob's Ladder look.

Random Seed

The figure fed into the random noise generator that drives the Lightning effect. When the lightning's random motion clashes with another image or layer, keep entering fresh Random Seed values until one suits you.

Blending Mode

Which blending mode composites the lightning over the original layer. These work just like their counterparts in the Timeline panel.

Rerun At Each Frame

Rebuilds the lightning on every frame. Leave this option off to have the lightning act the same at a given frame each run. Turning it on lengthens render time.
