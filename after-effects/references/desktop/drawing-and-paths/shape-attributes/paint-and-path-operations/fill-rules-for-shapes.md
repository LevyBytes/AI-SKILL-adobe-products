# Fill rules for shapes

A fill works by laying color across the region marked as inside a path. With something straightforward like a circle, deciding what counts as inside is trivial. Things get trickier once a path crosses itself, or once a compound path holds paths nested inside other paths.

For deciding what counts as inside a path when building fills, After Effects relies on one of two rules. Each rule tallies how many times a straight line drawn outward from a point crosses the path while leaving the region the path surrounds. Path direction matters to the nonzero winding fill rule; the even-odd fill rule ignores it.

By default, both After Effects and Illustrator apply the nonzero winding fill rule.

Self-intersecting path with Fill Rule set to Non‑Zero Winding Fill Rule (left) compared with Even‑Odd Fill Rule (right)

Even-odd fill rule

Should a line drawn from a point in any direction cross the path an odd number of times, that point lies inside; otherwise it lies outside.

Nonzero winding fill rule

A line's crossing count equals the total left-to-right crossings of the path minus the total right-to-left crossings. When a line drawn in any direction from the point yields a crossing count of zero, the point lies outside; any other count puts it inside.

Note

An easier mental model for the nonzero winding rule treats the path as a loop of string. A point counts as outside the path if, with your finger placed there, you can pull the string clear without it snagging or wrapping around your finger.

Since the nonzero winding fill rule respects path direction, pairing it with a reversal of one or more paths in a compound path comes in handy for punching holes into compound paths.

Note

Reverse a path's direction by clicking that path's Reverse Path Direction On button in the Timeline panel.
