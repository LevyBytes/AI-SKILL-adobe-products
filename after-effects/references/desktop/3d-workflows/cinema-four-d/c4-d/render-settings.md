# Render settings

How Cineware renders the scene inside After Effects is governed by its Render Settings. They can speed the rendering along while you are still working.

Renderer

Sets which renderer is in play. These options are on offer:

- Current: relies on the Standard renderer the way the C4D file specifies it; head into the Cinema 4D application to change those settings.
- Current (Draft): keeps the Standard renderer but switches off the slower settings — anti-aliasing among them — so interactivity improves.
- Viewport (Draft): Delivers the quickest rendering by letting you pick Display settings; shaders and multi-passes go unshown. Reach for this renderer to preview as you keep working on the composition.
- Viewport: Hardware-accelerated rendering that brings better quality and more speed than the Viewport (Draft) option. In Cineware this renderer matches Cinema 4D's level of enhanced OpenGL quality for the Transparency, Shadows, Post effects, and Noise properties.

Note

Should you save your .c4d file from a full retail Cinema 4D while Render Settings point to the Physical or Hardware renderer, those very settings drive the render any time the Cineware renderer is left at Current or Current (Draft).

Display

Only the Viewport (Draft) renderer enables this option. Its choices are Current Shading, Wireframe, and Box. A pared-down view of the scene comes from the wireframe and box modes.

No Textures/Shader

Tick this to quicken your render by leaving textures and shaders unrendered.

No pre-calculation

Tick this to quicken your render by switching off the pre-calculations that compute motion dynamics or particle simulations. Leave it unticked for final rendering.

Keep Textures in RAM

Tick this to hold textures in RAM so they need not reload from disk and stay quicker to reach. The flip side is that caching large textures can eat into the RAM you have available.

Render Server

Purge Memory: Wipes the render server's memory. As time passes the render server can grow sluggish because it keeps holding the scenes it has processed. Freeing up the memory the render server devotes to its internal caches can let After Effects stretch out previews of complex scenes.
