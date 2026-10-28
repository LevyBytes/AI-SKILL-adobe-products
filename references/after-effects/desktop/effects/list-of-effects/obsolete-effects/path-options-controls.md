# Path Options controls

Shape Type

Sets what shape the path takes. For the path to show in the Composition panel, you have to select the Path Text effect name within the Effect Controls panel.

Bezier

Runs text along a Bezier curve built from these four control points: Vertex 1/Circle Center, Tangent 1/Circle Point, Tangent 2, and Vertex 2. Any characters that overrun the path trail off its end in a straight line.

Circle

Bends text around a circle's edge, fixed by this pair of control points: Tangent 1/Circle Point, and Vertex 1/Circle Center. Text longer than that circumference laps over itself. If you pick an arbitrary path that happens to be closed, this property runs the text along the path rather than looping it.

Loop

Bends text around the circle's edge, fixed by this pair of control points: Vertex 1/Circle Center, and Tangent 1/Circle Point. Text exceeding the circumference spills off the Tangent 1 point in a straight line. Margin controls can also send text into or out of a circle along a straight line.

Line

Runs text along a straight line fixed by this pair of control points: Vertex 1/Circle Center, and Vertex 2. Just like the Bezier case, how far apart those two control points sit has no effect on text spacing unless alignment is set to Force.

Control Points

Set where the points sit on the path.

Tangent 1/Circle Point

Marks these points: the starting tangent of a Bezier curve, a circle's diameter together with the start or end of the text (per the chosen alignment), and a loop's diameter along with the spot where text enters.

Vertex 1/Circle Center

Marks the starting vertex of a Bezier curve, the center of a circle or loop, and the start or end of text on a line (per the chosen alignment).

Tangent 2

Marks the ending tangent of the Bezier curve. The line drawn between Tangent 2 and Vertex 2 fixes the curve's slope at its end point. On circles or loops, Tangent 2 goes unused.

Vertex 2

Marks the ending vertex of a Bezier curve and a line's angle. On circles or loops, Vertex 2 goes unused.

Custom Path

Marks an arbitrary path. The mask you use can come from the Layer panel or from Adobe Illustrator.

Reverse Path

Flips the path's direction.

Fill and Stroke

Set the path text's fill and stroke options here.
