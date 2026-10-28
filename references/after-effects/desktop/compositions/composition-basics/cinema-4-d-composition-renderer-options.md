# CINEMA 4D Composition Renderer options

Quality

Wherever you park the Quality slider shapes the parameters steering how the Cinema 4D composition renderer lays down the 3D layers. The parameter values it lands on turn up in the Options, Anti-Aliasing, and Reflectance boxes. That one Quality control spares you from learning and hand-tuning the assorted rendering quality parameters, letting you strike a workable trade between rendering speed and 3D rendering quality you can live with.

Sliding the Quality control adjusts these parameters:

- Ray Threshold: A value that helps trim render time.
- Ray Depth: Governs how many transparent objects — or regions hidden through the alpha channel — the renderer is allowed to punch through.
- Reflection Depth: Fire a ray into the scene and reflective surfaces can bounce it. Push Reflection Depth higher and rays get chased deeper into the scene before the results are rendered.
- Shadow Depth: Works much like Reflection Depth. Shadow Depth sets the shadow depth at which visible shadow rays get worked out.

Anti-Aliasing

The default anti-aliasing setting is Geometry, which evens out every object edge (handled automatically at 16x16 sub-pixels).

Quality

The default Reflectance setting is Layer sampling, which sets how good matte reflections come out.

Reflectance

Choose Cinema 4D from the Renderer drop-down box and the Enabled column lists the 3D options that are switched on while the Disabled column lists the 3D options sitting unavailable.

Which renderer you choose dictates the features open to 3D layers in a composition and the way they play against 2D layers.

Setting a quality level for your 3D rendering goes like this: with Cinema 4D chosen as the renderer, click the Options button and set the level on the Quality slider. The Ray Threshold, Ray Depth, Reflection Depth, Shadow Depth, Anti-Aliasing, and Reflectance values all shift to match.

After Effects drops a default renderer onto your machine. If you own a full retail Cinema 4D and have it installed, you can switch the renderer over to it.

Whatever the newest installed build of Cinema 4D or Cinema 4D Lite happens to be serves as the default editor.

To point at a different Cinema 4D installation, pick Choose Installation and supply the path to the installer in the Rendering and Editing boxes.
