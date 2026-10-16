# Merge Paths options

Every path lying above it in the same group feeds the Merge Paths path operation as input. What comes out is one path that fuses those input paths. The input paths still show in the Timeline panel, yet they're effectively pulled from how the shape layer renders, so the Composition panel never displays them. Unless a fill and stroke are already present, one of each gets added after the Merge Paths property group in the Timeline panel—otherwise the output path would stay invisible.

Merge Paths options

A. Add for all shapes B. Subtract for squares C. Intersect for squares D. Exclude Intersections for squares

Merge Paths options

Each option of the Merge Paths path operation runs a different calculation to arrive at the output path:

Merge

Fuses every input path into one compound path. This is the default for shapes built from text characters that span multiple paths—the letter e, say—via the Create Shapes From Text command.

Add

Builds a path covering the union of the input paths' areas.

Subtract

Builds a path covering only the topmost path's area, with the area of the underlying paths taken away.

Intersect

Builds a path covering only the areas where all input paths overlap.

Exclude Intersections

Builds a path that unions all input paths' areas and then removes the areas where those paths intersect.
