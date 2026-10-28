# Color & Contrast

The Color & Contrast module exposes the color tools from the first group of Adjust controls, but only as global controls. Color & Contrast modules used inside a Style operation do not include Zones, because earlier grading steps can change image tonality enough to make zone behavior overly sensitive.

Each Color & Contrast control works as follows.

- Contrast: This control changes how far apart the brightest and darkest pixels appear. Higher contrast makes the picture bolder and starker; lower contrast makes it flatter, softer, and more restrained. As a 2D control, vertical movement raises or lowers overall image contrast, while horizontal movement relocates the image-tonality pivot around which contrast expansion occurs. The default pivot point is at 50% image tonality.

During a drag, you can move the pivot point upward or downward while also changing contrast. This makes it possible, for example, to lift highlights more than shadows are reduced, avoiding crushed shadows when you want stronger highlights.

Contrast applies a linear operation. The shadow end rolls smoothly into black so global contrast can blend with other zone adjustments. With the Wide Gamut color management setup, highlights rolled off by Output tone mapping introduce an S-curve behavior that further softens the highlight side of the contrast change. Contrast cannot be applied inside a zone. You can still pair global contrast with zone-specific Exposure changes, such as lowering Exposure in a highlight zone to recover clipped detail or reducing Exposure in a shadow zone to deepen weak shadows.

The Contrast HUD includes a waveform monitor view of image luminance. Multiple overlapping waveform traces represent the luminance range for pixels along each image line: darker pixels dip toward the bottom, while lighter pixels peak higher in the display. A line marks the pivot point, arrows indicate highlight and shadow expansion away from that pivot, and the Contrast value is shown in the upper-left corner.

- Exposure: Exposure changes image brightness by expanding or contracting the video signal toward or away from highlights while the black point remains anchored. This is a 2D control: vertical movement raises or lowers Exposure, and horizontal movement changes the Black point. The Black point sets the lowest signal level allowed for the current Color & Contrast adjustment. Raising Black point creates flaring by lifting shadow detail in the darkest parts of the image. Lowering Black point can compress or crush those dark areas.

Exposure changes luminance with a smooth shadow roll-off and a linear push into highlights. In the Wide Gamut color setup of color management, Output tone mapping causes a highlight roll-off that produces an S-curve effect. When Exposure is applied in a zone, the adjustment rolls into the next zone with an automatic width, which keeps transitions smooth and avoids signal inversion that could solarize the image.

The Exposure HUD displays a waveform monitor view of the image's luminance range. It includes Black point indicators, where MIN becomes BLACK after Black is adjusted, and arrows show Exposure expanding upward from Black point or contracting downward from MAX. The Exposure amount appears in the upper-left corner in stops, and the Black value appears beside the BLACK indicator. When the control is used in a zone, that zone's threshold appears as an indicator, with an arrow showing Exposure expansion or contraction from or toward that threshold.

- Temperature: Temperature combines two color adjustments in one 2D control: vertical movement changes Temperature, moving the image between warm/orange and cool/blue, while horizontal movement changes Tint, moving the image between green and magenta.

The adjustment uses chromatic-adaptation math to change reflected colors in the image, similar to what would have happened if the lighting color had changed during capture. Temp can be used inside a zone, and its warm-to-cool behavior follows the black-body locus of the CIE 1931 graph.

The Temperature HUD provides a vectorscope view of chrominance, where angle around the circle maps hue and distance from the center maps saturation. Two arrow indicators show the relative Temperature and Tint shifts along their axes, with separate Temp and Tint values displayed for those adjustment axes.

- Balance: Balance is a traditional color-balance control for rebalancing the red, green, and blue channels together, allowing overall color temperature to be changed freely. It is a polar control: moving outward from the neutral center toward a hue on the color wheel tints the image with that hue. Moving away from an unwanted tint toward its complementary color counteracts that color cast.

Used globally, Balance affects the full image, but it tapers toward shadows so it blends with other zones and helps avoid polluting the deepest blacks. Like Temperature, Balance relies on chromatic-adaptation math that changes reflected image colors, comparable to changing the color of the lighting instruments during original photography. Balance can also be used within individual zones, with a smooth boundary transition maintained between adjacent zones to prevent artifacts. A sufficiently large Balance change in a shadow zone can deliberately contaminate blacks if that is the intended look.

The Balance HUD shows a chrominance vectorscope, with hue represented by circular angle and saturation by distance from center. One arrow indicates the direction in which color balance has been pushed. This control does not show a numeric value.

- Saturation: Saturation is a one-dimensional control. Vertical dragging increases or reduces image colorfulness; dragging to 0 produces a black-and-white grayscale image. Adobe Photoshop uses the same saturation algorithm as this control. Saturation can operate inside a zone, and applying it across multiple zones can approximate the behavior of a Lum vs. Sat curve in other tools.

The Saturation HUD uses a vectorscope view of image chrominance, mapping hue to angle and saturation to distance from the center. A circle indicates the saturation direction: outward toward the ring increases saturation, and inward toward the center reduces it. The displayed value runs from 0 to 2.0.
