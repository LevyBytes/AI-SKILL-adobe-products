# Attaching content into a scene containing a solved camera

With the effect selected, pick the track point — or several that together define a best-fit plane — to act as the attach point.

Pass the cursor between three neighboring unselected track points capable of defining a plane and a semitransparent triangle shows up between them, along with a red target that signals how the plane sits within 3D space.

To grab several track points at once, drag a marquee-selection box around them.

With the cursor over the selection or target, right-click and pick which kind of content to spawn. These are the options:

- Text
- Solid
- Null layer for the center of the target
- Text, solid, or null layer for each selected point
- Shadow catcher layer (a solid that accepts shadows only) for the created content by using the Create Shadow Catcher command in the context menu.

Note

- Whenever a shadow catcher layer is made and no light exists yet, one is created alongside it.
- When several layers are produced at once, each gets its own numbered name; with multiple text layers, In and Out points are trimmed to line up with the point durations.
