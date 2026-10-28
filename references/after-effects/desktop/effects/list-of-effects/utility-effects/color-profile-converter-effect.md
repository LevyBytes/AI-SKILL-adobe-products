# Color Profile Converter effect

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
