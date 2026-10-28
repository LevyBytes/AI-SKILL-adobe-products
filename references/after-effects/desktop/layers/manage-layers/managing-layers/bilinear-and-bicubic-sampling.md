# Bilinear and bicubic sampling

On layers set to Best quality, bicubic and bilinear sampling are both available to you. This per-layer choice governs how pixels get sampled during transformations such as scaling.

On selected layers, the sampling method has these default shortcuts: for Best/Bilinear, Alt+B (Windows) and Option+B (macOS); for Best/Bicubic, Alt+Shift+B (Windows) and Option+Shift+B (macOS).

Bicubic sampling leans on the processor a bit harder than bilinear does, and it isn't the top-quality pick in every situation. Under certain conditions its artifacts show up pretty readily — ringing and overshoots at an abrupt jump from one color to the next, for example. Where color transitions are gentler, which describes nearly every real-world photographic image, bicubic sampling usually wins out, though that doesn't hold for sharp-edged graphics. Bicubic sampling pays off more when you scale up than when you scale down.

Note

The ray-traced 3D renderer's textures skip bicubic sampling entirely and always rely on bilinear. Transformations inside effects likewise stick with bilinear sampling, except where an effect deliberately brings in another method (as a dedicated scaling plug-in effect or distortion effect would).
