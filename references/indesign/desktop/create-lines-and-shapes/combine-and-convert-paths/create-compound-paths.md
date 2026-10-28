# Create compound paths

In Adobe InDesign, multiple paths can be combined into one object that has shared attributes and transparent holes.

A compound path can be built from two or more paths, whether they are open or closed. During creation, each selected path becomes a subpath inside the new object. The stroke and fill on the resulting compound path come from the object farthest back in the stacking order.

Multiple paths can be joined into a single compound path. Use a compound path for tasks such as:

- Creating transparent holes inside a path.
- Keeping transparent areas inside text characters such as o and e after the Create Outlines command converts text to editable letterforms. Create Outlines always produces compound paths.
- Applying a gradient or placing content over several paths. The Gradient Swatch tool can lay a gradient across multiple objects. A compound path simplifies later edits because selecting any subpath lets you adjust the whole gradient. With the Gradient Swatch tool alone, all original paths must be selected again before editing.

Note

When selected objects include text or imported images, the compound path takes the attributes and contents from the object at the deepest position in the stacking order. Objects behind it that have no content do not influence the compound path.
