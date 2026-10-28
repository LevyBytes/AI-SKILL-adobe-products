# Add Environment light shadows

Out of the box, the environment light throws no shadows. To get shadows, you need to add an environment light layer and switch on its Casts Shadows option. With that on, every 3D layer in the scene casts voxel shadows, apart from these cases:

- Any layer with Casts Shadows switched off.
- Any layer positioned beyond the shadow volume.
- A layer whose Receive Shadows is off won't show shadows at all, even when Casts Shadows is on and it sits within the shadow volume.

Pick the Light layer, then run Layer > Light Settings.

When the Light Settings dialog appears, tick the Cast Shadows check box and dial in the Shadow Darkness amount.

You can equally enable shadows from the Cast Shadows property in the Timeline panel. Learn more about configuring 3D layers' cast and receive shadows properties.

2. Use the Cast Shadows property in the Timeline panel to enable shadows.

Voxel shadows are heavy on memory, so you control their settings in the Renderer Options dialog. Get there through Composition Settings > 3D Renderer, or from the 3D Renderer drop-down list sitting at the foot of the Composition panel.

Adjust and manage the shadow settings within the Renderer Options dialog.

The Renderer Options dialog is where you set and govern shadow behavior.

Render Quality

Sets the all-round fidelity of what gets rendered, smoothness, lighting, and shadows alike. Pushing it higher can eat a lot of memory.

Render Quality

Determines how chunky the shadows appear. Pushing it higher can eat a lot of memory.

Smoothness

Dials the shadow noise up or down. The default is 3. Smoothness and Render Quality move inversely: a lower Render Quality calls for a higher Smoothness, and the reverse holds too.

Tip

Lean on render quality and hold Smoothness low until the non-shadow parts of the scene look right; only then nudge the smoothness up bit by bit if you must.

Casting Box Size and Casting Box Center

These properties mark out the region in which shadows may fall on a layer. To save memory, voxel shadows are emitted only from layers contained in a bounded box. Enlarging the box stretches the voxel resolution over more area, which softens the shadows. A magenta outline marks this cube in the composition whenever the Advanced 3D Render Options dialog is open.

Note

A shadow travels only from a layer that has Cast Shadows turned on onto a layer that has Accepts Shadows turned on.
