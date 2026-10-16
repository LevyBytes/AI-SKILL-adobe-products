# Notes On Light Behavior

For the formulas covering parallel lights and point lights, consult Foley and Van Dam's "Introduction to Computer Graphics" (ISBN 0-201-60921-5).

Instead, the half-angle variant proposed by Jim Blinn is what we use.

Suppose a layer has a point that should be shaded with the light.

Let V denote the normalized direction from the layer point toward the eye point. Let L denote the normalized direction toward the light; in the parallel-light case, L is constant. Let H be (V+L)/2 (normalized). Let N denote the layer's unit normal vector.

The specular reflected-light amount is S \* power(H Dot N, shine), with S as the specular coefficient.
