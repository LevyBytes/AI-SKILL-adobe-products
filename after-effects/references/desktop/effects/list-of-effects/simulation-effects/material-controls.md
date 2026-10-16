# Material controls

Reflection values come from the Material controls.

Diffuse Reflection

Supplies the shading that gives an object its form. How that shading falls depends on the angle the light hits the surface, and it pays no attention to where the viewer stands.

Specular Reflection

Factors in the viewer's vantage point, mapping how the light source bounces back toward them. The result can read as shininess. To pull off convincing effects, animate this control with progressively larger values, hiding the shift between the filtered and unfiltered states of the layer.

Highlight Sharpness

Governs how shiny the surface looks. Glossy surfaces throw small, tight reflections; flatter ones smear the highlight across a wider area. Since specular highlights take on the color of the incoming light — usually white or near-white — wide highlights can wash color out of an image by piling white onto the surface tone.

Note

A reliable order for dialing in lighting goes like this: start with Light Position and Diffuse Reflection to fix the scene's overall brightness and shading. Move on to Specular Reflection and Highlight Sharpness to set how intense and broad the highlights are. Close out with Ambient Light to lift the shadows.
