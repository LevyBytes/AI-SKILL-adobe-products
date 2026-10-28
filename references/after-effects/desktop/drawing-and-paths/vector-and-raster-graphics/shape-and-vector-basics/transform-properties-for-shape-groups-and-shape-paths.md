# Transform properties for shape groups and shape paths

A Transform property group belongs to each group individually. In the Timeline panel it appears as a property group labeled Transform: [group name], and in the Composition panel it shows up as a dashed box fitted with handles. Group a path by itself and you can transform that path alone by way of its newly added Transform property group.

Adding an extra Transform property group for one path pays off when you're after intricate motion—spinning around a single anchor point while simultaneously circling along an orbit, for example. Anything inside a group gets carried along by the group's transformations—exactly the way layer parenting behaves.

On top of that, every shape path holds intrinsic properties that steer where the path sits and what form it takes. With parametric shape paths, those properties—Position and Size among them—appear as parameters in the Timeline panel. With Bezier shape paths, the properties are set per vertex yet kept inside the Path property. Reshaping a Bezier path via the free-transform bounding box edits these intrinsic properties for the vertices that make up that path.
