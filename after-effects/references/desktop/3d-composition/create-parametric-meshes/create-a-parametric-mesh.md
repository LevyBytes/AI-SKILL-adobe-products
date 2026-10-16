# Create a Parametric Mesh

Begin with the mesh drawing tool on the toolbar, using whichever approach you prefer:

- Double-click the button to drop a mesh at its default size into the Composition panel.
- Choose a shape from the dropdown, then drag the cursor in the Composition panel to draw it at whatever size you want.

Or, from Layer > New, pick a shape to drop a default version of that parametric mesh into the composition.

While dragging out a custom-sized parametric mesh, these key combinations apply:

| Keys | Function |
| --- | --- |
| Shift | Constrain proportions when drawing. |
| Command/Ctrl | Draw from center. |
| Shift + Command/Shift + Ctrl | Draw from center with constrained proportions. |
| Option/Alt with a parametric mesh tool active | Move the camera (if you have camera navigation enabled for Option/Alt). |
| Spacebar | Move a mesh to a new position without leaving the tool. |
| Option/Alt + Drag a shape | Make copies of the mesh and parametric layer in the Composition panel, and also duplicate the parametric layers. |

- As you reposition the camera, the parametric mesh follows your cursor, placed against the scene's XYZ planes.
- Any camera view works for drawing a parametric mesh, orthographic projections included.

Reshape the meshes through Mesh Options and Bevel Options over in the Properties panel.

3. For finer adjustments, bring up the Properties panel and work the mesh and bevel controls on the chosen parametric mesh.
   Tune the parametric mesh's starting material settings from the Properties panel or via the Material Assignment section of the Timeline panel.

| Property | Definition |
| --- | --- |
| Base Color | The material's primary color, expressed through RGBA values. |
| Roughness | - Reflects whether the surface reads as rough or smooth, set on a percentage scale from 0 to 100%.<br>- 0% is perfectly smooth and 100% is completely rough. |
| Metallic | - Reflects how strongly the material reads as glossy metal, set on a percentage scale from 0 to 100%.<br>- 0% is non-metallic and 100% is fully metallic. |
| Emission Color | The hue of light the material seems to give off, expressed through RGBA values. |
| Emission Intensity | - Reflects how brightly the material seems to radiate light, set on a percentage scale from 0 to 100%.<br>- 0% means no visible light emission, and 100% means maximum light emission, appearing as a strong light source.<br><br>Note The value you dial in governs only how the material visually reads in terms of emitted light; the material is not truly emitting anything. Since the Advanced 3D engine offers no light emission from materials, these emission settings will never throw light onto other objects in the scene. |
| Ambient Response | - Reflects how the shape's material reacts to the scene's overall ambient light, set on a percentage scale from 0 to 100%.<br>- 0% means no ambient light influence, so that the material appears dark unless directly lit, and 100% means fully responsive to ambient light.<br><br>Note This setting changes anything only when the scene actually contains an Ambient light. |

Substance 3D Materials (SBSAR) are another route for styling these parametric meshes, complete with exposed controls you can adjust.

Keyframes let you animate the parametric mesh itself or any single property of it.
