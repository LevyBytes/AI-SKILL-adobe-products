# Material Options properties

Every 3D layer carries Material Options properties, and these govern the way the layer responds to light and shadow.

Casts Shadows

Sets whether a layer throws shadows onto other layers. Where those shadows fall and at what angle follows the direction and angle of the light sources. Switch Casts Shadows to Only when you want the layer itself hidden yet still throwing a shadow.

Note

Pair the Only setting with a Light Transmission value above zero to cast the colors of an invisible layer onto another layer.

Light Transmission

What share of light makes it through the layer, throwing that layer's colors onto others as a shadow. At 0%, nothing passes through and the shadow comes out black. At 100%, the full color values of the shadow-casting layer land on the layer that accepts the shadow.

Note

Lean on partial light transmission to fake the look of light streaming through a stained glass window.

Accepts Shadows

Sets whether the layer displays shadows that other layers cast onto it. The Accepts Shadows control includes an Only choice for moments when you want a layer to render nothing but a shadow.

Accepts Lights

Sets whether the light landing on a layer changes that layer's color. Shadows stay unaffected by this setting.

Ambient

How much ambient (nondirectional) reflectivity the layer holds. 100% gives the greatest reflectivity; 0% gives none at all.

Diffuse

How much diffuse (omnidirectional) reflectivity the layer holds. Adding diffuse reflectivity is like laying a flat, plastic sheet across the layer — incoming light bounces off evenly in every direction. 100% gives the greatest reflectivity; 0% gives none at all.

Specular Intensity

How much specular (directional) reflectivity the layer holds. Specular light bounces off the layer the way it would off a mirror. 100% gives the greatest reflectivity; 0% gives none at all.

Specular Shininess

Fixes how large the specular highlight is. This value comes into play only when the Specular setting sits above zero. 100% yields a reflection bearing a small specular highlight; 0% yields one bearing a large specular highlight.

Metal

How far the layer's own color feeds into the color of the specular highlight. 100% means the highlight takes on the layer's color — picture a gold ring set to a Metal value of 100%, which throws back golden light. 0% means the specular highlight instead takes the color of the light source — for instance, a layer at a Metal value of 0% beneath a white light shows a white highlight.
