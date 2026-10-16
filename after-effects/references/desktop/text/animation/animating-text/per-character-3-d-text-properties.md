# Per-character 3D text properties

Through 3D animator properties you can shift, scale, and spin each character on its own across three dimensions. Switch on per-character 3D properties for the layer and these become accessible. A third dimension is added to Position, Anchor Point, and Scale; on top of that, two more Rotation properties (X Rotation and Y Rotation) open up. What used to be the lone Rotation property on 2D layers gets renamed Z Rotation.

There is an auto-orientation choice on 3D text layers called Orient Each Character Independently, and it turns every character toward the active camera by pivoting it around that character's own anchor point. Picking Orient Each Character Independently switches on per-character 3D properties for the text layer if those weren't already on.

Switch on per-character 3D properties and every character inside the text layer starts acting like its own individual 3D layer within that text layer, which itself works the way a precomposition with collapsed transformations does. The way per-character 3D layers cross other 3D layers follows the usual rules that govern 3D precompositions with collapsed transformations.

The moment you switch on 3D properties for a text layer's characters, the text layer turns into a 3D layer on its own. So adding any per-character 3D property to the layer makes it a 3D layer—be that through copying and pasting the Y Rotation property off another layer or applying a 3D Text animation preset.

A special icon in the Switches column marks out a per-character 3D layer.

Per-character 3D layers cannot use inter-character blending or the Fill & Stroke options found in the More Options property group.

Rendering performance can drop with per-character 3D layers. Convert a layer back from per-character 3D to 2D and you lose the dimensions and animator properties that belong to per-character 3D layers. Turning per-character 3D on again won't bring those property values back.

- Switch on per-character 3D animator properties for a text layer by selecting it and picking Enable Per-character 3D either from the Animation > Animate Text menu or from the layer's Animate menu in the Timeline panel.
- Turn off per-character 3D animator properties for a text layer and drop it down to a 2D layer by selecting that layer's Per-character 3D switch in the Switches column of the Timeline panel.
- Turn off per-character 3D animator properties for a text layer yet hold onto it as a 3D layer by choosing Enable Per-character 3D so it becomes deselected.
