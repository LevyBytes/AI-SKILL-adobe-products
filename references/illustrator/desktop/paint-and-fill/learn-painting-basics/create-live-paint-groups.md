# Create Live Paint groups

Create Live Paint groups when you want to paint object edges and faces.

After objects are converted into a Live Paint group, their edges and faces can be painted independently.

Some objects, including text and raster images, cannot become a Live Paint group directly. Objects with complex appearance attributes, including brushes, effects, transparency, and stroke alignment options, may lose some detail when converted straight into Live Paint. To keep most complex attributes while using text or raster images, convert those objects into regular paths first, then make the Live Paint group.

After objects are made into a Live Paint group, they cannot be directly ungrouped back to the exact original state. You can expand the Live Paint group into separate components; releasing it instead returns the original objects, which have no fill and a 0.5 pt black stroke.
