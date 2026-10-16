# Distort specific image areas with Puppet Warp

Use Adobe Photoshop and precision pins to reshape selected parts of an image while leaving surrounding areas unchanged.

Puppet Warp adds an adjustable mesh for anything from small edits, such as shaping hair, to larger changes, such as moving arms or legs. It supports image layers, layer masks, and vector masks. For non-destructive distortion, apply Puppet Warp to Smart Objects.

Open Window > Layers, then in the Layers panel choose the layer or mask to transform.

Choose Edit > Puppet Warp.

Configure mesh controls in the Options bar:

- Mode: sets mesh elasticity. Choose Distort for flexible warping of wide-angle images or texture maps.
- Density: controls spacing between mesh points. Additional points improve precision but can reduce performance.
- Expansion: expands or contracts the edge of the mesh.
- Show Mesh: disable it to see only pins for a cleaner preview. Press H to hide adjustment pins temporarily for a clearer view.

Place pins in the image window to transform the needed areas and hold other areas in position.

Drag pins to distort the mesh. To show mesh regions that overlap, use the Pin Depth icons in the Options bar.

Remove a pin by selecting it and pressing the Delete key, or choose Remove All Pins from the context menu to clear every pin.

For rotation around a pin:

- To rotate by fixed degrees, press Alt (Windows) or option (macOS), put the cursor near the pin, and drag once the circle appears.

- For automatic rotation according to the selected Mode, choose Auto from the Rotate dropdown in the Options bar.

Press Enter to finish the operation.
