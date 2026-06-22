# Available Style Modules

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Style modules give you flexible controls for building and tailoring looks with advanced color, contrast, and texture adjustments.

Within Style operations, Style modules act as the individual components you combine to shape footage. Each module targets a particular kind of image change, including color, contrast, detail, or stylization, and multiple modules can be stacked into distinctive visual treatments. Rather than behaving like fixed corrections, the modules support experimentation: refine creative decisions, build layered looks, and move past basic correction work.

## Color & Contrast

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

## Color Shift

The Color Shift module uses the color controls from the second group of Adjust controls. Color Shift controls are designed for quick, precise changes to particular colors wherever they appear in an image. They can reduce saturation in a distracting background, alter the hue of an inaccurate product color, darken a hue range that lacks richness, or neutralize an interview subject who appears too red. When an image problem is connected to a specific hue, these controls are the relevant toolset.

Choose one of the available hue swatches, or sample the image when a new swatch is needed.

The Saturation, Hue, Lum Shift controls change every area in the frame that contains the selected color. These controls are two-dimensional:

Set saturation, hue, or luminance while also deciding how broad the affected hue range should be.

Refine saturation, hue, or luminance and control the breadth of neighboring hues included in the change.

Vertical dragging changes the color component controlled by the selected adjustment, modifying the chosen hue's saturation, hue, or luminance.

Horizontal dragging changes the span of nearby hues, making the correction broader or more specific.

If needed, select another color, apply additional changes, and keep repeating the process until the adjustment is complete.

### Choose a color to adjust using Hue Swatches

To speed up work, this effect analyzes the first frame of the current clip at the playhead position and creates color swatches for the most important hues it finds.

Hover over a color swatch or a Shift control to preview, as a monitor overlay, which image regions overlap the selected hue. Selecting a swatch assigns it to the Saturation, Hue, or Lum Shift controls.

When no color patch matches the hue you need, use the eyedropper to sample that color in the monitor. As the eyedropper moves across the image, an overlay shows the colors being targeted for sampling. Clicking samples the color beneath the pointer. If that sampled color is distinct enough, a new swatch appears. If it is not distinct enough from an existing unused hue swatch, that swatch is updated to the new hue and selected. Otherwise, a swatch that overlaps the sampled color is selected in case the matching swatch was not obvious.

If the initially sampled first frame does not represent the rest of the clip well, move the playhead to another frame in the same clip. Then click the Plus (+) button and choose Extract Hues (Default); Premiere analyzes that frame again and generates new swatches.

Another option is to create a standard Full Spectrum swatch set containing primary colors (red, green, blue), secondary colors (yellow, cyan, magenta), and orange hues, or to create Memory Color swatches for common expected hues. Both choices are in the Plus (+) menu.

When you sample or load an entirely new hue set, any hue that has not yet been adjusted is replaced. Hues that already have changes, shown by a dot under the swatch, are kept so existing adjustments are not lost.

### Making adjustments using the Color Shift controls

After selecting the hue to change, the three Shift controls adjust Saturation, Hue, and Luminance for everything in the frame that contains that hue.

- Sat Shift: Drag upward to increase saturation or downward to reduce it. Drag right to include a wider range of neighboring hues in the adjustment, or drag left to narrow the effect closer to the selected hue. Sat Shift can replace Global Saturation when you need hue-specific control, letting you boost colors that need strength and reduce colors that distract so saturation can be shaped in more sophisticated creative ways.

The Sat Shift HUD uses a vectorscope analysis of chrominance, where hue is shown by angle around the circle and saturation by distance from the center. A single pie-slice indicator marks the hue section being modified in the Vectorscope; it moves outward when saturation is raised and inward when saturation is lowered. The slice grows or shrinks as the affected hue range is widened or narrowed. This control shows a simple value from 100 to -100.

- Color Shift: Drag vertically to rotate the targeted color around the color wheel shown in the HUD, changing its hue. Drag right to broaden the neighboring hue range that this control changes, or drag left to tighten the range around only the selected hue. Color Shift is useful for colors that feel wrong, such as an actor looking too green, a red product logo drifting orange, or a cyan sky that should lean more blue.

The Color Shift HUD presents chrominance in a vectorscope, with circular angle representing hue and distance from center representing saturation. A blue pie-slice indicator shows the adjusted hue section as it rotates around the vectorscope, while a dotted pie slice marks its original position before rotation. The pie slices expand and contract as you widen or narrow the affected hue range. This control shows a simple value from 100 to -100.

- Lum Shift: Drag upward to brighten the targeted hue, or downward to darken it. Drag right to include more neighboring hues in the adjustment, or drag left to limit the change to the selected hue. Lum Shift requires care because large changes can expose image compression artifacts more easily than the other Shift tools. Used with restraint, it can brighten image areas that are hard to isolate otherwise, or add richness by darkening colors just enough.

The Lum Shift HUD shows a waveform monitor view of image luminance. Multiple overlapping waveforms indicate the luminance range occupied by pixels in each image line: darker pixels dip lower, and lighter pixels rise higher. While an adjustment is being made, waveform areas tied to the targeted color are highlighted, showing how much the selected hue's pixels are being brightened or darkened.

## Contrast Kit

Compared with the Contrast and Pivot controls in the Color & Contrast module, Contrast Kit provides finer image-contrast control. Color & Contrast supplies a linear contrast adjustment that simply stretches the image's overall contrast wider or narrower.

Contrast Kit instead builds many kinds of "S" curves, adding stronger contrast by compressing the image's shadows and highlights. That lets you push contrast harder while reducing clipping and preserving detail in the toe and shoulder. The result follows a more photographic contrast style, with soft roll-off at the darkest and brightest extremes.

When the Output color space is an HDR format, this module places most of the contrast work in the black-to-reference-white range, which is defined by Graphics White in the advanced color management settings. This keeps HDR highlights from blowing out every time contrast is increased. The Highlights control determines how much of the HDR highlight range is changed by the contrast adjustment.

The Contrast Kit controls are described below:

- Compression: Drag vertically to raise or lower contrast with an "S" curve visible in the HUD, while black and white points remain pinned. Drag horizontally to move the compression pivot point, the image-tonality level that centers the "S". Moving right puts more compression into Highlights and less into shadows, producing a brighter result. Moving left shifts more compression into Shadows and less into Highlights, producing a darker result. In either direction, pivot fine-tunes the ratio between highlight compression and shadow compression. Combining vertical compression with horizontal pivot changes creates a broad range of "S" shapes for precise contrast sculpting. Inverted "S" curves can also be created to reduce contrast softly instead of increasing it.
- Range: Drag down or up to decrease or increase contrast in a linear way. Drag horizontally to move the pivot point used when contrast is reduced. This control cannot increase contrast past its default settings, and the HUD displays the upper and lower threshold range that limits the signal. It is useful for lowering contrast by raising black point and lowering white point, creating a more "milky" picture. Any "S" curve adjustment is applied inside the defined range, so Range and Compression can be combined to reduce overall contrast while increasing midtone contrast, enabling many low-contrast looks.
- Highlights: Drag up to expand, or down to reduce, the highlight range affected by this module, including into the HDR highlight range when output is HDR. Drag horizontally to control how smoothly the top of the contrast curve blends into HDR-strength highlights.

## Detail

The Detail module uses the color controls from the third group of Adjust controls. Texture and Sharpness provide separate ways to sharpen or soften image texture at different frequencies or levels of granularity. By default, they appear in a simple form for fast texture adjustments:

- Texture: This is a vertical-only control for softening or sharpening medium-sized image detail; Texture has no horizontal adjustment. Drag upward from the default to sharpen, or downward from the default to soften. Texture has no horizontal adjustment. A small button at the upper left of the Texture control toggles Detail mode, switching between two texture-adjustment methods for high-resolution media that produce different results.
- Sharpness: This 2D control increases contrast selectively along edges and within fine detail, creating a stronger impression of sharpness. Drag upward to increase sharpening. Drag right to raise the threshold for what image detail gets sharpened, allowing smaller details to be excluded so the effect concentrates on stronger edges. Too much Sharpness can create ringing artifacts around sharpened detail.

Dragging Sharpness below its minimum can also blur the image.

These two controls combine well for many effects. For example, lower Texture to soften unwanted blemishes on a subject, then raise Sharpness and drag right to lift the threshold, ignoring smaller details while restoring a little edge sharpness so the picture does not become overly soft.

### Advanced use of Texture and Sharpness

Selecting the Sliders button below either Texture or Sharpness expands the control, enabling multi-band and multi-parameter adjustments for greater precision.

- Texture (slider mode): Five vertical sliders adjust separate image-texture bands, ordered from fine on the left to coarse on the right. With these sliders, one band of texture can be softened while another is sharpened, creating highly specific changes. Drag a slider upward from its default to sharpen that band, or downward from default to soften it.
  - Amount: Sets how much contrast is applied to increase perceived sharpness. Raising Amount beyond a threshold automatically lowers Radius, if Radius has been raised, to help produce more natural-looking adjustments.
  - Radius: Sets the number of pixels around adjusted pixels that are also affected. Raising Radius beyond a threshold automatically lowers Amount, making naturalistic adjustments easier to create.
  - Threshold: Excludes pixels from sharpening according to how different they are from their surroundings. In practice, this lets you progressively leave fine-to-medium detail out of the sharpening operation, avoiding amplified noise or unwanted detail while keeping the effect focused on edges and more prominent high-contrast detail.

For Texture in particular, the main value of the extra sliders is not that every slider must be used. The advantage is access to the band of control that matches the goal, which depends on subject size and the kind of detail present.

Note

Using more bands of the Texture control increases the processor load for this effect.

## Film Color

Film Color adds the nonlinear color behavior associated with film, a widely used grading effect. This module pairs one of 15 negative stocks with one of 6 print stocks to simulate the color and contrast behavior of a digital intermediate workflow.

The effect is not meant to be applied unchanged and left alone. Its intensity can be raised or lowered globally, in highlights, or in shadows, while separately tuning how much color versus contrast the emulation contributes in each tonal zone. You can also reduce Film Color selectively in midtones, bottom blacks, and top whites to protect areas that should receive less of the effect, and you can customize highlight and shadow color balance.

Film Color includes these controls:

- Negative: Choose the negative stock used in the film-out digital intermediate pair.
- Print: Choose the print stock used in the film-out digital intermediate pair.
- Strength: This primary control increases or reduces the Film Color effect. Drag upward to intensify it, or downward to weaken it. Drag left to reduce how much image luminance is affected, or right to reduce how much image color is affected.
- Midtone Protection: Reduces film color in the midtones, where skin tone and product color usually sit. Vertical dragging lowers midtone color and contrast down to zero; dragging farther widens the middle tonality range being suppressed. Horizontal dragging shifts the Midtones' pivot point, moving suppression farther into shadows or highlights. Changing the midtone pivot also changes the Highlights-to-Shadows ratio used by the controls below.
- Highlights: Raises or lowers the Film Color effect only in highlights. Drag upward to intensify it, or downward to reduce it. Drag left to lessen luminance impact, or right to lessen color impact.
- Highlight Protection: Protects the top whites of the image from the effect. This is useful when pure white should be preserved.
- Highlight Balance: Adjusts the color balance of the film effect in highlights.
- Shadows: Raises or lowers the Film Color effect only in shadows. Drag upward to intensify it, or downward to reduce it. Drag left to lessen luminance impact, or right to lessen color impact.
- Shadow Protection: Protects the bottom blacks of the image from the effect. This is useful when pure black should be preserved.
- Shadow Balance: Adjusts the color balance of the film effect in shadows.

## Flare

Compared with the Black control in the Color & Contrast module, Flare provides more precise Black point control. Color & Contrast offers a simple black-level adjustment that raises or lowers the image's black point by a limited amount, using a fixed threshold to correct shadow inconsistencies.

Flare instead raises or lowers the image black point relative to a custom threshold where the operation blends back into the rest of the image. A slope control changes whether the black-level transition happens gradually or sharply. This supports stylized treatment of the darkest image levels, whether the goal is to emulate photographic looks or simply open shadows for better legibility.

The Flare controls are:

- Flare: The main control for adding Flare. Dragging up lifts the black point, and dragging down lowers it. As Black point changes, the remaining shadows stretch to keep the transition into the threshold smooth. Drag horizontally to lower or raise the threshold, shown in the HUD by a blue line that indicates how much of the image is affected by the changing black point.
- Slope: Controls the steepness of the shadow-altering curve. Dragging up steepens the curve for a lighter result. Dragging down makes the curve shallower for a darker result.

Tip

The Slope control can softly lighten ("open up") or darken image shadows even when Flare itself is not adjusted.
