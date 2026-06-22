# Grading Clips Using Adjust

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Adjust operations in Color mode are used for focused color and tonal correction so clips can be cleaned up and refined.

The Adjust workflow organizes image improvements around major properties such as color, contrast, and exposure. It is built for quick corrections that still look natural: begin with broad changes, then use narrower controls to refine selected parts of the picture.

## What are Adjust Operations for?

Adjust color controls are meant to correct or enhance particular image traits, especially natural-looking picture qualities or problems that need targeted treatment. They can also be pushed for stylistic results, but the Style adjustment offers a more flexible toolset for that kind of work.

Because Adjust is optimized for fast naturalistic correction, each clip in a sequence starts with one Clip Adjust by default, giving you a place to make changes for that specific clip instance.

## Color & Contrast controls

The Color & Contrast controls are the core image-correction tools in Color mode. They change the main visual properties of an image; although many other tools are available, it is usually best to begin here, and in many cases these adjustments are enough.

Use Color & Contrast controls when the primary tone and color of a clip need adjustment.

Use Color & Contrast controls when the primary tone and color of a clip need adjustment.

### Start with the Global adjustments

Although these controls sit below the color controls, understanding them is important because they define the image areas being affected.

Global is enabled by default on a clip that has not yet been adjusted, and it applies Color & Contrast changes to the full image. Contrast and Black are only available while Global is selected because both need the complete tonal range of the image to behave properly. Begin general corrections with Color & Contrast. If the global controls have not first improved the overall image as far as possible, later work on individual zones may not produce acceptable results.

### Refine the image using Zone adjustments

Once Global controls have been used to improve the overall image, move into zones for narrower tonal corrections.

Zones split an image into tonal brightness regions by turning the source image's histogram into lightness and shadow percentage ranges. Each zone uses a threshold: highlight zones affect values above that point, and shadow zones affect values below it. The adjustment from each zone is blended smoothly into the rest of the grade to help avoid artifacts.

Select zones when Color & Contrast controls need to address particular tonal areas.

Select zones when Color & Contrast controls need to address particular tonal areas.

The initial setup provides two overlapping zones, one for shadows and one for highlights, with their overlap blended through the image midtones.

Premiere Pro creates those starting zones by analyzing the first frame of the current clip at the playhead. When you hover over a zone button, the monitor shows an overlay preview of the parts of the picture that belong to that zone, helping you decide what to adjust.

Selecting a zone directs Exposure, Temperature, Balance, and Saturation to the image regions inside that zone. This can lower highlights that clipped after contrast was raised, cool the shadows without shifting the highlights, reduce saturation in overly colorful top highlights, or add saturation to shadows that feel flat and gray.

For most tonal targeting, the default Shadows and Highlights zones are likely enough. For progressively smaller ranges of brighter highlights or darker shadows, more zones can be added, up to three highlight zones and three shadow zones, dividing the image into six practical adjustment regions. You can add automatically analyzed zones, or use highlight-specific and shadow-specific eyedroppers to sample the tonal threshold you want to modify.

The zone-overlap math works much like tone mapping, so zones are well suited to clean exposure pushes and pulls in highlights, either to separate highlight detail or to compress highlights in a way that emphasizes the details you want clearer.

Using several zones for Exposure changes lets you raise and lower exposure quickly, covering the kind of work you might otherwise do with an exposure curve in another application. That behavior is intentional in the zone design. Together, zones and Color & Contrast controls let many targeted corrections merge cleanly into one mathematical function through a simple control set, instead of requiring several separate tools and steps for the same result.

After working in zones, remember to select Global again before changing the global controls.

### Color & Contrast parameters and HUDs

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

## Color Shift controls and HUDs

Color Shift controls are useful for fast, accurate changes to particular colors wherever those colors occur in the frame. They can lower saturation in a distracting background, shift a product color that is inaccurate, darken a hue range that lacks richness, or neutralize an interview subject who appears too red. When the image problem is tied to a specific hue, these controls are appropriate.

To use these controls:

Choose one of the available hue swatches, or sample the image to capture a new hue.

Use Saturation, Hue, or Lum Shift to change every area in the frame containing that color. These are two-dimensional controls:

- Dragging up or down changes the color component controlled by the selected control, affecting the chosen hue's saturation, hue, or luminance.
- Dragging from side to side changes how many neighboring hues are included, making the correction broader or more specific.)

When needed, choose another color, adjust it, and repeat until the grade is complete.

### Choose a color to adjust using Hue swatches

For speed, this effect analyzes the initial frame of the current clip at the playhead and creates color swatches for the most important hues in that image.

Hovering over a color swatch or Shift control previews the parts of the image that overlap the chosen hue by drawing an overlay in the monitor. Selecting a swatch assigns it to the Saturation, Hue, and Lum Shift controls.

When no existing color patch matches the hue you want, use the eyedropper in the monitor to sample it. As the eyedropper moves across the image, an overlay shows the colors currently targeted for sampling. Selecting samples the color under the pointer. If the sampled color is distinct enough, a new swatch appears. If it is too close to an unused existing hue swatch, that swatch updates to the new hue and becomes selected. Otherwise, a swatch that already overlaps the sampled color is selected in case it was not obvious.

If the first sampled frame does not represent the rest of the clip well enough, move that clip's playhead to a better frame. Then select the Plus (+) button and choose Extract Hues (Default). Premiere Pro re-analyzes the new frame and creates new swatches.

Another option is to create Full Spectrum swatches made from primary (red, green, blue), secondary (yellow, cyan, magenta), and orange hues, or Memory Color swatches for familiar hues viewers expect. Both choices are in the Plus (+) menu.

When you sample or load a complete replacement hue set, hues without adjustments are replaced by the new hues. Hues that already have adjustments, shown with a dot under the swatch, are kept so existing work is not lost.

### Making adjustments using the Color Shift controls

After the hue is selected, the three Shift controls can change Saturation, Hue, and Luminance for everything in the frame that contains that hue.

- Sat Shift: dragging up increases saturation, and dragging down decreases it. Dragging right widens the neighboring hue range affected by the control; dragging left narrows it toward only the selected hue. Sat Shift can stand in for Global Saturation when you want to target individual hues, boosting colors that need more strength and reducing distracting ones for more deliberate saturation shaping.

The Sat Shift HUD displays vectorscope chrominance analysis: hue maps to circular angle, and saturation maps to distance from the center. A pie-slice indicator marks the hue section being adjusted in the Vectorscope. It moves outward toward the edge when saturation is raised and inward toward the center when saturation is lowered. The slice widens or narrows as the affected hue range widens or narrows. The displayed control value spans 100 to -100.

- Color Shift: dragging up or down rotates the targeted hue on the HUD color wheel. Dragging right broadens the neighboring hues included in the adjustment, while dragging left limits the range closer to the chosen hue. Color Shift is helpful when a color is slightly wrong, such as an actor who looks too green, a red product logo that appears too orange, or a cyan sky that should be bluer.

The Color Shift HUD presents vectorscope chrominance analysis, mapping hue to circular angle and saturation to center distance. A blue pie-slice indicator shows the adjusted hue section as it rotates around the vectorscope, while a dotted-line pie slice marks the section's original position before rotation. The pie slices widen or narrow as you broaden or tighten the affected hue range. The displayed control value spans 100 to -100.

- Lum Shift: dragging up brightens the targeted hue, and dragging down darkens it. Dragging right expands the neighboring hue range changed by this control; dragging left narrows the range toward only the selected hue. Lum Shift requires care because stronger moves expose compression artifacts more readily than the other Shift tools. Used with restraint, it can brighten image areas that are hard to isolate otherwise, or add richness by darkening colors slightly.

The Lum Shift HUD shows waveform-monitor luminance analysis. Multiple overlapping waveforms show the luminance range occupied by pixels in each line of the image: darker pixels dip downward closer to the bottom, and lighter pixels rise as peaks toward the top. During an adjustment, waveform areas matching the selected color are highlighted so you can judge how much the targeted hue's pixels are being brightened or darkened.

## Texture controls and HUDs

Image texture can be understood as the small-scale image structure perceived from the spatial arrangement of colors or intensities. Fine detail appearance, noise, focus sharpness or softness, contrast amount, and many other image traits all shape whether viewers experience texture as rough, smooth, fine, or coarse. As image-processing controls have improved, texture adjustment has become a normal part of color work.

### Texture HUDs

Every texture control uses the same HUD: a high-contrast, desaturated image view that emphasizes fine-to-coarse texture ranges across the picture. The HUD exaggerates texture-adjustment results, making affected areas easier to see even when the actual image effect is subtle.

### Basic use of Texture and Sharpness

Texture and Sharpness offer separate ways to sharpen or soften image texture at different frequencies or granularities. By default, they appear in a simplified form intended for quick texture changes:

- Texture: a simple vertical control for softening or sharpening medium-sized image details; Texture has no horizontal adjustment. Drag upward from the default to sharpen, or downward from the default to soften. There is no horizontal adjustment for texture. The small button at the upper left of the Texture control turns Detail mode on or off, switching between two texture-adjustment methods for high-resolution media that produce different results.
- Sharpness: a two-dimensional control that increases contrast selectively at edges and fine details, creating a stronger sense of sharpness. Drag upward to increase sharpening. Drag right to raise the threshold for what detail is sharpened, excluding smaller detail so the effect concentrates on more prominent edges. Too much Sharpness can create ringing artifacts around sharpened details.

Dragging below the minimum Sharpness amount can also blur the image.

These controls combine well for many looks. For example, lower Texture to soften unwanted facial blemishes, then raise Sharpness and drag right to lift the threshold so smaller details are ignored while subject edges regain some sharpness, preventing an overly soft result.

### Advanced use of Texture and Sharpness

Selecting the Sliders button below either Texture or Sharpness expands the controls for multi-band and multi-parameter adjustment, providing more precision.

- Texture (slider mode): five vertical sliders control independent bands of image texture from fine on the left to coarse on the right. With these sliders, you can soften some texture bands while sharpening others for very specific results. Dragging a slider upward from its default sharpens that band, and dragging it downward softens that band.
  - Amount: controls how much contrast is applied to increase the perception of sharpness. Raising Amount beyond a threshold automatically lowers Radius if Radius has been raised, helping keep adjustments naturalistic.
  - Radius: sets how many pixels around adjusted pixels are affected too. Raising Radius past a threshold automatically reduces Amount, again making naturalistic adjustment easier.
  - Threshold: excludes pixels from sharpening based on how different they are from nearby areas. In practice, this lets you increasingly leave fine-to-medium detail unsharpened, avoiding exaggerated noise or unwanted detail while focusing on edges and stronger high-contrast detail.

For Texture especially, the value of the extra sliders is not that every slider must be used. Their purpose is access to the correct band of functionality for the result you want, which depends on subject size and the type of detail present.

Note

Using more bands in the Texture control increases the processing load of this effect.
