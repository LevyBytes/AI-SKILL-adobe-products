# Fast Previews

Fast Previews choices span from slower but higher-quality (Off) all the way to faster but lower-quality (Wireframe).

Off (Final Quality)

Turns Fast Previews off. Reach for this mode when you want to preview your composition at full final quality.

Adaptive Resolution

Tries to downsample footage as you drag a layer or scrub a property value. Within ray-traced 3D compositions, Adaptive Resolution scales the ray-tracing quality down according to the current adaptive resolution:

- At 1/2, the ray-tracing quality value is cut in half.
- At 1/4, it is reduced to at most 4.
- At 1/8 or 1/16, it is reduced to at most 2.

The adaptive resolution limit can be adjusted under Edit > Preferences > Previews (Windows) or After Effects > Preferences > Previews (macOS).

Draft

Offered for ray-traced 3D compositions only. Picking it drops the ray-tracing quality — the count of rays the ray tracer fires — down to 1.

Fast Draft

While blocking out an elaborate scene, or whenever you're inside a ray-traced 3D composition, Fast Draft mode is a useful way to preview. Within ray-traced 3D compositions, Fast Draft mode renders beveled, extruded, and curved 3D layers. During preview the scene gets downsampled so textures load to the GPU faster. Even in Fast Draft mode, each frame of video is still pulled into the renderer when needed. The downsample factor is fixed at 1/4 resolution, with effects and track mattes left on.

Wireframe

Handy for assembling and previewing elaborate compositions.

- Across Draft, Fast Draft, and Wireframe modes, the lightning bolt on the Current Renderer menu button turns orange. Under Adaptive Resolution it goes orange whenever the composition is downsampled. In all of these modes, the mode's name shows in the upper-right corner of the Composition view.
- Should adjusting a property or scrubbing the Timeline run slow under Final Quality mode, Adaptive Resolution, or Draft modes, the scene temporarily drops to wireframes. Once you quit moving the mouse, the frame finishes rendering.
- Switching a ray-traced 3D composition that's in Draft mode over to a Classic 3D composition makes the fast preview mode flip automatically to Adaptive Resolution.
- Want several active views to refresh together as you scrub with Ctrl (Windows) or Command (macOS) held? Turn on Share View Options, found in the Select View Layout pop-up menu.
- Clicking the Current Renderer menu button at the upper-right of the Composition panel jumps you straight to the current renderer settings inside the Composition Settings dialog box. This works for any 3D layer, camera, or light in the composition.

Note

Matching the Fast Previews mode to how you work matters, particularly while you're handling ray-traced 3D compositions.
