# Render order for shapes within a shape layer

Rendering a shape layer obeys rules much like those for rendering a composition that holds nested compositions:

Within any group, rendering begins with the shape lowest in the Timeline panel stacking order.

Every path operation in a group runs ahead of the paint operations—so, for instance, a stroke picks up the warping the Wiggle Paths path operation introduces into the path. Inside a group, path operations execute top to bottom.

Inside a group, paint operations run from the bottom upward in the Timeline panel stacking order. The upshot: a stroke draws on top of (in front of) any stroke positioned below it in the Timeline panel. Want to break that default for one particular fill or stroke? Choose Above Previous In Same Group for that fill or stroke's Composite property in the Timeline panel.

Both path operations and paint operations act on every path sitting above them within the same group.
