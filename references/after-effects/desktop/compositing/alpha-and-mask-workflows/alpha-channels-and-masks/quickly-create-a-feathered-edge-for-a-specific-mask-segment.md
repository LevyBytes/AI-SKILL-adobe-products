# Quickly create a feathered edge for a specific mask segment

Keep the Shift key down while you click the mask segment (the stretch between vertices, not the vertices themselves). A change in the pointer signals you've entered this mode. To set the extent, drag out from the segment. Watch for this behavior:

- When exactly two mask vertices are selected, the feathered edge spans the contiguous segments running between them.
- When both ends of the clicked segment are selected (meaning the whole segment is selected), the feathered edge grows to take in adjoining selected segments.
- When every vertex on the mask is selected, or none is, or neither of the first two situations holds, only the clicked segment gets the feathered edge.
