# Fog 3D effect

The Fog 3D effect fakes fog by acting as if a scattering medium hangs in the air, so objects grow hazier the farther they recede along the z-axis.

Support spans 8-bpc, 16-bpc, and 32-bpc color.

Note

Like every effect under the 3D Channel effects category, Fog 3D leans on depth data drawn from image sequence files of the sort a 3D application renders out.

For more on 3D Channel effects—ProEXR effects and creating fog in After Effects among them—read on.

Original (upper-left), Gradient Layer (lower-left), and with Fog 3D applied (lower-right)

Fog Start Depth

Where along the z-axis the diffuse scattering begins.

Note

To read an object's depth, pick the Selection tool and click the object in the Composition or Layer panel while the effect stays selected.

Fog End Depth

The z-axis point at which diffusion hits its peak.

Scattering Density

Sets the rate at which scattering builds up. Raise the value and the fog thickens as it spreads outward from where it began.

Foggy Background

Produces a foggy background (the default). Turn it off to leave transparency behind the 3D scene so you can composite it over another layer.

Gradient Layer

(Optional) A grayscale layer that serves as a control layer, whose luminance values drive fog density. As an example, the Turbulent Noise effect can build a swirling control layer for atmospheric fog. Confirm the gradient layer is sized at least as large as the 3D scene layer.

Layer Contribution

The degree to which the gradient layer sways fog density.
