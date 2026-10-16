# propertyGroup(countUp = 1)

Return type: Group.

Hands back a group of properties positioned relative to the property the expression lives on. Say you attach the propertyGroup(1) expression to a brush stroke's Rotation property — it points at the Transform property group, the one that holds Rotation. Switch to propertyGroup(2) and it points instead at the Brush property group. The technique lets you build relationships within the property hierarchy that don't depend on names, which pays off particularly when you duplicate properties carrying expressions.

For propertyGroup, the numProperties method gives back how many properties sit in the property group.

The sample below gives back the property count for the group holding the property the expression is attached to:

thisProperty.propertyGroup(1).numProperties
