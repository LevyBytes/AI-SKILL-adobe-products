# Color & Contrast parameters and HUDs

The following sections describe what each Color & Contrast control does.

- Contrast: sets the separation between the brightest and darkest pixels. More contrast makes an image stronger and starker; less contrast makes it softer, flatter, and more subdued. Contrast is a 2D control: vertical movement raises or lowers overall contrast, while horizontal movement shifts the tonal pivot around which contrast expands. The default pivot point is 50% image tonality.

While dragging, you can move the contrast pivot upward or downward as contrast changes. For instance, raising the pivot can lift highlights more than it lowers shadows, avoiding crushed shadows while still getting highlights as high as needed.

The Contrast operation is linear. Shadows roll smoothly into black, allowing global contrast to blend with other zone adjustments. In a Wide Gamut color setup, Output tone mapping rolls off highlights and creates an S-curve effect that further smooths highlight behavior in the contrast adjustment. Contrast cannot be applied inside a zone. You can still support contrast changes with zone-specific Exposure: lower Exposure in a highlight zone to recover clipped highlight detail, or lower Exposure in a shadow zone to make weak shadows deeper.

The Contrast HUD presents waveform-monitor luminance analysis. Multiple overlapping waveforms show the luminance ranges of pixels in each image line: darker pixels dip downward closer to the bottom, and lighter pixels peak upward toward the top. A line marks the pivot point, arrows show highlights and shadows expanding away from that pivot, and the Contrast value appears in the upper left corner.

- Exposure: changes image brightness by stretching the video signal toward or away from highlights while the black point stays fixed. Exposure is a two-dimensional control: vertical movement increases or decreases Exposure, and horizontal movement raises or lowers the Black point, which defines the minimum signal level allowed for the current adjustment's Color & Contrast controls. Raising Black creates flaring, opening shadow detail by lifting the darkest picture areas. Lowering Black can crush or compress those darkest areas.

Exposure expands or compresses luminance with a smooth roll-off in shadows and a linear move into highlights. With Wide Gamut color management, Output tone mapping creates highlight roll-off that forms an S-curve effect. When Exposure is applied in a zone, each change rolls into the adjacent zone using an automatic width, keeping transitions smooth and preventing signal inversion that could accidentally solarize the image.

The Exposure HUD displays waveform-monitor analysis for the image luminance range. It includes indicators for the Black point; after Black is adjusted, the MIN luminance indicator becomes the BLACK indicator. It also shows Exposure expanding up from Black or contracting down from MAX. The Exposure value appears in stops at the upper left, and the Black value sits beside the BLACK indicator. In zone use, the zone threshold appears as an indicator, with an arrow showing Exposure expanding from or contracting toward that threshold.

- Temperature: combines color-temperature and tint correction in one 2D control. Vertical movement shifts Temperature between warm/orange and cool/blue, while horizontal movement shifts Tint between green and magenta.

Chromatic adaptation math drives these changes, altering reflected image colors much like changing the lighting instruments during photography. Temperature warming and cooling track the CIE 1931 graph's black-body locus. Temperature can be applied within a zone.

The Temperature HUD uses vectorscope chrominance analysis, where hue is the angle around the circle and saturation is distance from the center. Two arrows show how much Temperature and Tint are being shifted along their adjustment axes, and separate Temperature and Tint values appear on those axes.

- White Balance Eyedropper: select this eyedropper, then sample image pixels that should be neutral white or gray, and Premiere Pro automatically corrects the color-temperature imbalance that is causing a tint.
- Balance: a traditional color-balance control for rebalancing red, green, and blue channels together so overall color temperature can move in a freeform way. This polar control tints the image when you push from the neutral center toward a hue at the color wheel edge. Pulling away from an unwanted tint's hue, toward the complementary color, cancels that color cast.

Used globally, Balance affects the full image, but it rolls off toward shadows so it blends into other zones and avoids contaminating the deepest blacks. Like Temperature, Balance uses chromatic adaptation math to change reflected colors as though the light sources had been colored differently during capture. Balance also works inside specific zones, with a smooth boundary transition between zones to prevent artifacts. If desired, a large Balance adjustment in a shadow zone can intentionally contaminate image blacks.

The Balance HUD shows vectorscope chrominance analysis, with hue represented by angle around the circle and saturation by distance from the center. A single arrow indicates the direction color balance has been pushed. This control shows no numeric value.

- Saturation: a one-dimensional control; vertical dragging increases or reduces image saturation, or colorfulness. Dragging down to 0 turns the picture into black-and-white grayscale. Adobe Photoshop uses the same saturation algorithm. Saturation works inside zones, and using it across multiple zones can produce behavior similar to the Lum vs. Sat curve in other tools.

The Saturation HUD shows vectorscope chrominance analysis, again mapping hue to circle angle and saturation to distance from center. A circle indicates the saturation push direction: outward toward the ring increases saturation, inward toward the center reduces it. The displayed value for this control ranges from 0 to 2.0.
