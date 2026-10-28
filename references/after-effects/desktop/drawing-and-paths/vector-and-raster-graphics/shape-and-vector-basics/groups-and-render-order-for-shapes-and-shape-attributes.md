# Groups and render order for shapes and shape attributes

Although a shape defaults to one path, one stroke, and one fill—stacked top to bottom in the Timeline panel—a lot of what makes shape layers so capable and adaptable comes down to letting you tack on and rearrange shape attributes and assemble more intricate compound shapes.

Shapes or shape attributes sharing the same grouping level inside a single shape layer can be grouped together.

Think of a group as a gathering of shape attributes: paths, fills, strokes, path operations, and further groups. Every group carries its own blending mode plus its own collection of transform properties. Pulling shapes into groups lets you operate on several shapes at once—scaling all of a group's shapes by an identical amount, say, or stroking each shape the same way. You can even drop a lone shape or a single shape attribute into its own group to wall off transformations. Grouping a path all by itself, for example, lets you scale that path while leaving its stroke untouched.

Use the Add menu in the Tools or Timeline panels to add a shape attribute, and it lands inside whichever group is currently selected. Reordering in the Timeline panel is just a matter of dragging groups and attributes around. How shapes and shape attributes render relative to one another follows from the way you reorder and group them.
