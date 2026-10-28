# Wave World effect

Reach for this effect to build a grayscale displacement map feeding other effects like Caustics or Colorama. Drawing on a simulation of how liquids behave physically, it generates waves. They spread out from an effect point, interact, and reflect off their surroundings true to life. Put Wave World to work creating a top-down view of a logo, the waves bouncing off both the logo and the layer's edges.

This effect works with 8-bpc color.

Wireframe view (upper-left), Height Map view (lower-left), and resulting image (lower-right). Result is used as Water Surface source for Caustics effect example.

Wireframe view (upper-left), Height Map view (lower-left), and resulting image (lower-right). Result is used as Water Surface source for Caustics effect example. Wireframe view (left), Height Map view (center), and resulting image (right). Result is used as Input Phase for Colorama effect example.

Wireframe view (left), Height Map view (center), and resulting image (right). Result is used as Input Phase for Colorama effect example.

Some background on wave physics helps clarify how this effect operates: a peak and a trough together make up a wave. Its amplitude is the height — the gap — separating peak from trough. Its wavelength spans one peak to the following one. Frequency counts how many waves sweep past a fixed point each second.
