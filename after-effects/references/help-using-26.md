# Utility Effects, Matte Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Utility effects; Matte effects.

## Utility effects

Search Last updated on Jun 26, 2025

Third-party effects:

CC Overbrights effect

### Apply Color LUT effect

Drop the Apply Color LUT effect onto a layer to remap its colors through a color lookup table (LUT). Manual color correction and color management chores sometimes call on LUTs.

Note

As a rule, color management inside After Effects runs through a standard workflow built on ICC profiles rather than color LUTs. (See Color management.)

You can use it in 8-bpc, 16-bpc, and 32-bpc color.

Applying the effect prompts you to pick a .3dl or .cube LUT file. To swap the LUT held in an Apply Color LUT instance, click Choose LUT among the effect's controls.

Apply Color LUT accepts .3dl files carrying floating-point values or 3DMESH/Mesh keywords, plus any saved out of an ASSIMILATE SCRATCH system—meaning the file's top comments include SCRATCH. Overrange IRIDAS .cube files, IRIDAS .look files, and cineSpace .csp files are handled too.

Think of a LUT as a three-dimensional coordinate system—a 3D cube—where each axis stands for the color transformations across every value of one color channel. The points sitting along each axis spell out that channel's color transformations. For a 3D LUT to be readable in After Effects, all three axes must share one length (an equal point count), and no axis may run past 64 points. A 17x17x17 3D LUT, for instance, qualifies.

Note

Commands sitting under File > Export—such as Autodesk > Smoke (3dl)—let you build LUTs from within the full interface of the Color Finesse plug-in.

### Cineon Converter effect

While the Cineon Converter effect hands you fine-grained control over color conversions of Cineon frames, color management features are the better route for converting colors in a Cineon file most of the time. (See Cineon and DPX footage items.)

It operates in 8-bpc, 16-bpc, and 32-bpc color.

Working with the Cineon Converter effect begins by importing a Cineon file and leaving it as is; depending on your working mode, After Effects either packs the colors down to 8 bpc or stretches them up to 16 bpc or 32 bpc. From there you can apply the Cineon Converter effect and fine-tune the colors while watching the results live in the Composition panel. Keyframes or expressions let you track tonal shifts over time—lean on keyframe interpolation and ease handles to nail even the most erratic lighting changes. As an alternative, the other Color Correction effects can handle these corrections. (See Color Correction effects.)

Because each Cineon channel carries 10 bits of data per pixel, it becomes simpler to lift an important band of tones while holding the overall tonal balance steady. Pin down the range with care and you can produce a rendition of the image that stays true to the original.

Note

Color perception varies with each monitor's own display traits. When judging tonal balance, get the most reliable read by checking pixels' true color values in the After Effects Info panel as you drag the pointer across them.

Conversion Type

Governs the way the Cineon file gets converted. Log To Linear takes an 8-bpc logarithmic non-Cineon layer you intend to render out as a Cineon sequence. Linear To Log takes a layer that holds a Cineon file's 8-bpc linear proxy and rebuilds it as an 8-bpc logarithmic file, so its display traits stay matched to the original Cineon file. Log To Log picks up on an 8-bpc or 10-bpc logarithmic Cineon file you plan to render as an 8-bpc logarithmic proxy.

Note

For backward compatibility, outdated versions of each option show up whenever you open a project built on an earlier Cineon Converter effect.

10 Bit Black Point

For a 10-bpc logarithmic Cineon layer's conversion, this is the black point, i.e. the minimum density.

Internal Black Point

The black point that After Effects applies to the layer.

10 Bit White Point

For a 10-bpc logarithmic Cineon layer's conversion, this is the white point, i.e. the maximum density.

Internal White Point

The white point that After Effects applies to the layer.

Gamma

Raise Gamma to lighten the midtones or lower it to darken them.

Highlight Rolloff

The rolloff value applied to tame bright highlights. When brightening the lightest areas leaves the rest of the image looking too dark, lean on Highlight Rolloff to rein those highlights in. Should highlights show up as white blotches, push Highlight Rolloff higher until the detail returns. High-contrast images can demand a steep rolloff value.

### Color Profile Converter effect

By naming an input profile and an output profile, the Color Profile Converter effect moves a layer out of one color space and into another.

Usually the smarter move is to lean on automatic color management to shift between color spaces, instead of running the conversions by hand through the Color Profile Converter. (See Color management.)

Note

Generally speaking, pick one approach—color management features or the Color Profile Converter—rather than running both together.

Since the profiles you pick get baked into the project, they travel with it even onto a machine that lacks those same profiles. As you convert across color spaces, a rendering intent lets you tell After Effects how to handle the color conversion. You also get the choice of linearizing either the input or the output profile.

The effect runs in 8-bpc, 16-bpc, and 32-bpc color.

Converting the layer's color profile starts by picking a color profile from the Input Profile menu. Choose Project Working Space to fall back on the profile named in the project settings (File > Project Settings). Tick the Linearize Input Profile option to linearize that input profile. Next pick an output profile over in the Output Profile menu. To linearize it, select the Linearize Output Profile. Finally, choose a rendering intent from the Intent menu.

The rendering intent options govern how source colors get adjusted. Colors already inside the destination gamut might stay put, for example, or they might be nudged so the original web of visual relationships survives the move into a tighter destination gamut.

What a rendering intent actually produces hinges on the image's graphical content and on the profiles defining the color spaces involved. Certain profiles hand back the same result no matter which rendering intent you pick.

As you set a rendering intent, black point compression is an option you can switch on. By mimicking the output device's full dynamic range, black point compression keeps the image's shadow detail intact.

These are the rendering intents the Color Profile Converter effect offers:

Perceptual

Works to hold onto the visual relationship among colors so the result still reads as natural to the eye, even when the underlying color values shift. It suits images loaded with out-of-gamut colors.

Saturation

Pushes for vivid color in an image, trading away color accuracy to get it. This rendering intent fits images like graphic logos, where bright saturated color matters more than the precise relationship between colors.

Relative Colorimetric

Lines up the source color space's extreme highlight against the destination's extreme highlight and slides every color to match. Out-of-gamut colors snap to the nearest reproducible color in the destination space. Compared with Perceptual, this rendering intent holds onto more of an image's original colors. After Effects falls back on this rendering intent by default everywhere.

Absolute Colorimetric

Colors already within the destination gamut are left as they are, while out-of-gamut ones get clipped and nothing is scaled toward the destination white point. The goal is accurate color, even where that sacrifices the relationships among colors.

Reach for the Scene-ref. Profile Compensation control to decide whether each Color Profile Converter instance compensates for scene-referred profiles:

On

Applies compensation for scene-referred profiles.

Off

Skips any compensation for scene-referred profiles.

Use Project Setting

Defers to whatever the project's Compensate For Scene-referred Profiles option specifies.

Scene-referred profiles are explained under System gamma, device gamma, and the difference between scene and viewing environment.

Note

Open an After Effects 7 project whose Color Profile Converter effect uses DPX Scene and DPX Theater color profiles, and After Effects CS5 won't auto-upgrade them to the new equivalents (Kodak 5218/7218 Printing Density and Kodak 2383 Theater Preview). They appear instead as Embedded. Convert the project by hand-assigning the new profiles in After Effects CS5. That said, where those same profiles were assigned to footage or picked under Proof Colors in After Effects 7, the upgrade to the CS5 equivalents happens on its own. (Output Simulation is what Proof Colors became.)

Over on his fnord website, Brendan Bolles walks through pairing the Color Profile Converter effect with film color profiles to tweak colors and do tone mapping, making an HDR image look as though it had been captured on motion picture film.

### Grow Bounds effect

For the effect placed immediately after it, the Grow Bounds effect enlarges the layer size. It earns its keep with layers that have Collapse Transformations / Continuously Rasterize turned on, since those render into a buffer matching the composition's size. Take a text layer poking partly outside the composition frame: apply Drop Shadow and the shadow gets clipped, because only the text inside the frame throws a shadow. Slot Grow Bounds ahead of the Drop Shadow effect and the shadow stops being cut off. Whatever pixel count you enter grows the layer buffer's height and width.

Note

There's no need for this effect alongside effects that work in 32-bpc color, because those have already been reworked to adjust for layer size on their own.

Color modes of 8-bpc, 16-bpc, and 32-bpc are all handled.

Original (upper-left); the Wave Warp effect is constrained by dimensions of layer (lower-left); Grow Bounds effect fixes problem (lower-right).

Original (upper-left); the Wave Warp effect is constrained by dimensions of layer (lower-left); Grow Bounds effect fixes problem (lower-right).

### HDR Compander effect

The HDR Compander (compressor/expander) effect opens a path to using tools that can't handle high-dynamic-range color—8-bpc and 16-bpc effects among them—while keeping the footage's high dynamic range intact.

What the HDR Compander effect does is squeeze the HDR image's highlight values down into the range an 8-bpc or 16-bpc (low-dynamic-range) image allows, then stretch those values back out to the 32-bpc range afterward.

Place the HDR Compander effect on a layer twice over: once above the low-dynamic-range effects in the stack, and once below them.

Sampling drives the first HDR Compander instance as it compresses the value range, so a little precision slips away. That's why you should turn to the HDR Compander effect only when you're willing to trade some value precision for the sake of high dynamic range.

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported.

### Apply the HDR Compander effect

1. Within a 32-bpc project, drop the HDR Compander effect onto a layer.
2. For Mode, pick Compress Range.
3. Point Gain at the top value the compressed range needs to hold—in other words, the image's brightest white. Hold back on Gain, though: the larger the slice of the 16-bpc value you hand to highlights, the tighter the midtones get squeezed (and they're most of the pixels), and the more data this step throws away.
4. Set Gamma. Gamma reshapes how values spread across the range, granting extra precision in chosen parts of it.
5. Layer on whichever low-dynamic-range effects you want.
6. Add a second HDR Compander instance to the layer, making sure it sits after—below—any 8-bpc or 16-bpc effects already in place.
7. On that second instance, set Mode to Expand Range.
8. Give Gain and Gamma the same values you used on the first instance.

Note

There's a handier route to the HDR Compander effect: apply the Compress-Expand Dynamic Range animation preset. That preset bundles an expression together with two HDR Compander instances—the first with Compress Range chosen, the second with Expand Range chosen. The expression copies the Gain and Gamma you dialed into the first instance straight onto the second one. Drop whatever low-dynamic-range effects you like in the gap between these two HDR Compander instances.

### HDR Highlight Compression effect

The HDR Highlight Compression effect squeezes a high-dynamic-range image's color values down so they land inside the value range a low-dynamic-range image allows.

Dial the degree of compression through the effect's Amount property. Push Amount to 100% and the color values get compressed until no pixel holds any channel value beyond the 0.0–1.0 low dynamic range. Below 100%, some detail in the shadows and highlights can still be drawn back into the visible range.

### More like this

- Color correction, color grading, and color adjustment
- Color depth and high dynamic range color

## Matte effects

Search Last updated on Jun 27, 2025 Note

- Details on the Refine Matte effect and the Roto Brush effect live in the Roto Brush effect and Refine Matte effect reference.
- Read up on the third-party plug-ins that ship with After Effects.

### Matte Choker effect

The Matte Choker effect runs through a cycle of choking and then spreading the matte to plug unwanted holes—transparent gaps—sitting inside opaque areas. That repetition is needed because the whole matte gets choked and spread: the spread closes the hole, yet the matte's edges then have to be choked back so its shape holds.

Choking and spreading play out across two stages, and each carries its own identical set of controls. As a rule, stage two undoes what stage one did. Once enough back-and-forth passes finish (Matte Choker manages the count for you), the hole is sealed.

Both 8-bpc and 16-bpc color are supported.

Original (upper-left) shows areas of unwanted transparency after using Color Key (lower-left) that are removed with Matte Choker (lower-right).

Original (upper-left) shows areas of unwanted transparency after using Color Key (lower-left) that are removed with Matte Choker (lower-right). Note

The Matte Choker effect can be put to work blurring nothing but the alpha channel. To turn it into an alpha-channel blur, push Gray Level Softness up to 100%.

### Close a hole in a matte

1. With the layer selected, go to Effect > Matte > Matte Choker.
   Geometric Softness

Sets the maximum spread or choke, measured in pixels.

Choke

Dictates how much choke is applied. Go negative to spread the matte; go positive to choke it.

Gray Level Softness

Controls how soft the matte's edges become. Set to 0%, those edges hold only fully opaque and fully transparent values. Set to 100%, they carry a complete spread of gray values but can look blurred.

3. Dial in the stage-two controls—the next three properties—so the matte gets choked by exactly the amount you spread it during stage one.
4. (Optional) Reach for the Iterations property to dictate how many passes of the spread-and-choke sequence After Effects runs. A bit of trial and error may be needed so the sequence cycles often enough to seal off any stray holes.

### Refine Soft Matte

Use the Refine Soft Matte effect when a matte needs careful tuning, which matters most with keyed footage such as green screen where the quality of the edges makes or breaks the shot. Artists typically reach for it right after a keyer like Keylight, sharpening matte edges and clearing away stray edge problems such as color spill or noise.

Calculate Edge Details

Turns on automatic recognition of soft edges, which keeps things like motion blur and fine hair intact within the matte.

Additional Edge Radius

Sets how much area past the original boundary the effect inspects. Raising this widens the refined zone, so subtle edge movement and hair strands are picked up more readily.

View Edge Region

Switch this on to reveal the zone currently under analysis and refinement.

Smooth

Eases jagged edges on the matte so they read as smoother.

Feather

Adds blur along the matte boundary, letting it merge more naturally into whatever sits behind it.

Contrast

Pushes up the contrast at the boundary, yielding a crisper, more sharply defined matte edge.

Shift Edge

Slides the boundary in or out. Going positive grows the matte; going negative pulls it in.

Chatter Reduction

Calms frame-to-frame noise along the matte boundary, which comes in handy whenever the matte flickers between frames.

More Motion Blur

Turn this on to boost motion blur surrounding soft edges; it pays off with subjects that move quickly.

Decontaminate Edge Colors

Strips background color fringing off the matte boundary, a real help in green or blue screen jobs where spill bleeds into hair or see-through regions.

Decontamination

Tune the settings below to dial in the edge color decontamination:

- Amount: governs how aggressively edge colors get swapped for the foreground colors close by.
- Extend Where Smoothed: pushes the decontamination outward into the smoothed regions.
- Increase Radius: widens the decontamination zone past the immediate boundary so more spill is caught when that's needed.
- View Map: renders the decontamination map on screen so you can watch exactly what's being changed.

### Simple Choker effect

By trimming or growing a matte's edges in tiny steps, the Simple Choker effect produces a tidier matte. Switching to the Final Output view shows the picture with the effect in place, whereas the Matte view renders it in black and white — black marking transparency, white marking opacity. The Choke Matte control governs the degree of choke: drive it negative to spread the matte and positive to choke it.

Color depths of 8-bpc, 16-bpc, and 32-bpc are all supported by this effect.

Original (upper-left) contains unwanted edges after keying (lower-left) that are removed with Simple Choker (lower-right).

Original (upper-left) contains unwanted edges after keying (lower-left) that are removed with Simple Choker (lower-right).

### More like this

- Keying introduction and resources
