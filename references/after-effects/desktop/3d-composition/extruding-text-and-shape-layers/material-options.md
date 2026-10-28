# Material options

The surfaces of 3D objects rely on materials, and material options are the surface properties that govern how those objects respond to light. After Effects provides a number of material options properties along with methods for assigning materials to extruded text and shape layers.

For a layer, the Material Options section in the Timeline panel holds the following properties:

- With On and Off you decide whether the reflection shows, while the layer itself stays visible.
- The Only choice behaves like On in that it reflects, yet here the layer itself does not show.

- Depending on the viewing angle, reflections grow a touch brighter and the surface takes on more of a mirror quality, driven by the Reflection Rolloff property value. Looking across a surface at a glancing angle yields brighter reflections than facing it straight on. There's also an energy-conserving aspect: diffusion drops automatically per pixel as the glancing angle narrows (in other words, as the view tips toward grazing the surface rather than meeting it head-on).
- On top of that, the Specular Shininess property lets you tune reflection glossiness anywhere from blurry to almost mirror-sharp.

- Sharper reflections come from higher values; lower ones soften them.
- Should the effect of this setting be invisible to you, push the Ray-tracing Quality up to 3 or beyond.

- Reflection Rolloff: On a reflective surface, this governs how strong the Fresnel effect is — that is, how intense reflections become at glancing angles.

  - A surface can be completely transparent and yet still show reflections and specular highlights.
  - Dropping the layer opacity would dial back the whole appearance. The layer's alpha is also respected, so a ray passes straight through wherever alpha is 0.

- Transparency Rolloff: On a transparent surface, this governs transparency relative to the viewing angle. Facing a surface directly gives the set transparency value, while a glancing view turns it more opaque (for instance, along the rim of a curved object viewed head-on).
- Index of Refraction: Governs the way light bends as it passes through 3D layers, and therefore how things sitting behind a semitransparent layer look.
- Every surface of a 3D text or 3D shape layer receives these properties, though text animators or shape operators let you override them.

What used to be the materials Intensity and shininess have been revised and renamed Specular Intensity and Specular Shininess.

An energy-conserving shader powers the Ray-traced 3D renderer; it scales the direct lighting components (diffuse and ambient) and transparency according to reflection intensity and transparency, and scales specular intensity according to reflection rolloff. To be precise:

- Reflection Intensity is calculated with rolloff (Reflection Rolloff)
- Transparency is calculated with rolloff (Transparency Rolloff)
- Specular Intensity is calculated with rolloff (Reflection Rolloff)
- Diffuse and Ambient are reduced by (100% - Reflection Intensity) \* (100% - Transparency)
- Transparency is then reduced by (100% - Reflection Intensity)

For example:

- If Reflection Intensity is 50% and Transparency 100%, Diffuse and Ambient become 0% (value% _ (100-50)_(100-100)/100). Specular Intensity is reduced by the Reflection Rolloff amount. Transparency drops to 50% (100% \* (100-50)/100).
- If Reflection Intensity is 50% and Transparency 50%, Diffuse and Ambient become 25% of their existing values, and Specular Intensity is reduced by the Reflection Rolloff amount. Transparency will drop to 25%.
- If Reflection Intensity is 100%, Diffuse, Ambient, and Transparency become 0%. Specular Intensity is reduced by the Reflection Rolloff amount.

Color stays out of the material definition. Text or shape layers pull their color from the Character panel (text) or from shape operators (shapes). That said, the existing text animator and shape operator support lets you override material properties. On 3D text layers, the Animate pop-up menu swaps its Fill Color, Stroke Color, and Stroke Width options for Front, Back, Bevel, and Side submenus of material options.

On 3D shape layers, the Gradient Fill and Gradient Stroke shape operators give way to Front, Back, Bevel, and Side submenus of material options. Still, since a shape layer's geometry is defined by its fill or stroke, the Fill and Stroke shape operators remain on hand should you wish to bring them in. For now, fill and stroke gradients on shape layers are disregarded.
