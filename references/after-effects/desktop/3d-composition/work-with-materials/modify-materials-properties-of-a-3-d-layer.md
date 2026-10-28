# Modify materials properties of a 3D layer

Search Last updated on Nov 13, 2025

Learn about working with material options in Adobe After Effects and how to modify them to create a wide variety of materials for 3D layers in your compositions.

Under Advanced 3D, anything built inside After Effects itself can render with Adobe Standard Material. Through Material Options you can tune the materials properties of synthetic 3D layers — text, shapes, solids — to build an assortment of materials that respond convincingly to light and reflection.

Drop a solid, text, or shape layer into the composition.

Switch on the layer's 3D Layer switch.

2. Identify the layer, activate the 3D Layer switch to convert the layer into a 3D layer, and use Material Options to work with the textures.
   With the 3D layer selected, twirl it down to Material Options, or press A + A on the keyboard.

3. Select the layer with the activated 3D switches to use Material Options and work with the textures.
   Change the values for these properties:

Ambient

How much of After Effects' ambient light reaches the layer, assuming any exists at all (sometimes there's none). It works much like the Adobe Standard Material emissive property, yet it throws no light onto neighboring objects.

Diffuse

Tied to the Adobe Standard Material (ASM) Base Color channel, this carries through the layer's own native color — the color shown when you view it in 2D. Push this to 100 and you'll land closest to a layer's 2D appearance.

Specular Intensity

Tied to the Adobe Standard Material (ASM) specular level.

Specular Shininess

Usually pictured as the inverse of Adobe Standard Material (ASM) roughness (0 is very rough, 100 is very shiny). Bear in mind the response isn't linear, so the clearest changes tend to show up around the middle of the range.

Metal

Governs the degree to which a surface shifts the color of specularly reflected light.

Tip

- For lights as physically accurate as your new physically accurate materials, switch the light's falloff to Inverse Square Clamped (Double-click the light layer in the Timeline panel > Falloff > Inverse Square Clamped > OK). The payoff is a natural, realistic gradient as objects drift away from the light.
- To get a 3D layer matching its 2D version as tightly as you can, raise Ambient and Diffuse to 100 while dropping Specular Intensity, Specular Shininess, and Metal to 0.
- Matching 3D renditions of 2D art can prove trickier with Environment Lights, since the lights and artwork interact a great deal more.
- For now, After Effects derives reflections only from Environment Lights. With 3D layers in a composition but no lights present, After Effects relies on a hidden default Environment Light, and that environment shows up reflected in your 3D object. Adding a light layer switches off that default Environment Light. To bring reflections back, hand-add an Environment Light that points at an .HDR file.
- Parametric meshes are yours to create, and you can apply Substance 3D Materials to them. (Currently in beta)

### More like this

- 3D Draft Preview in After Effects
- 3D Transform Gizmos
- Work in 3D Design Animation Space
- Tracking 3D camera movement
