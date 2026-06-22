# Color Basics

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 22, 2025

## Color depth and high dynamic range color

The count of bits per channel (bpc) devoted to a pixel's color is what defines color depth, also called bit depth. As you assign more bits to each RGB channel (red, green, and blue), every pixel gains the ability to express a wider palette of colors.

After Effects lets you operate at 8-bpc, 16-bpc, or 32-bpc color.

Beyond the bit depth itself, the figures that hold pixel values carry another trait: whether they are integers or floating-point numbers. Given the same bit count, floating-point numbers stretch across a far broader span of values. Pixel values at 32-bpc in After Effects are floating-point values.

For each color channel, 8-bpc pixels span from 0 (black) up to 255 (pure, saturated color), while 16-bpc pixels span from 0 (black) up to 32,768 (pure, saturated color). White results when all three color channels reach their maximum pure-color value. Because 32-bpc pixels accept values below 0.0 and above 1.0 (pure, saturated color), 32-bpc color in After Effects doubles as high dynamic range (HDR) color. Brightness in HDR values can climb well past white.

## Enhanced HDR support

Use new beta features

Testing and feedback are now open for Enhanced HDR support. Give it a go right now in After Effects (beta).

Get started

Running the newest After Effects (Beta) version 25.2x72 lets you view HDR projects faithfully on HDR-capable hardware. Through this update you can bring in HDR media, drop it into a composition, and preview the result in HDR either on your monitor or via external hardware. The payoff is a trustworthy look at how the exported final output will turn out. Learn more about enhanced HDR support in After Effects.

## Setting the color depth and modifying color display settings

Throughout a project, the bit depth applied to color values is dictated by the project's color depth setting.

Setting a project's color depth can be done any of these ways:

- Choose File > Project Settings > Color > under the Color Settings section, choose a color depth from the Bit Depth dropdown list.
- Select the Project Settings button in the Project panel > Project Settings > Color > under the Color Settings section, choose a color depth from the Bit Depth dropdown list.

A color depth may be assigned per render item, taking precedence over the project color depth while rendering final output. Likewise, the output module settings let you set the color depth used for each output item. (See Render settings and Output modules and output module settings.)

While most effects handle every color depth, a handful run only at lower color depths. The Effects & Presets panel can be configured to surface only those effects compatible with your project's current color depth. (See Effects & Presets panel.)

## Comparative advantages of each color depth

Out in the physical world, the dynamic range — the ratio separating dark from bright regions — reaches far beyond what human vision perceives or what paper prints and monitors can show. Spanning merely a narrow slice of the real world's dynamic range, low dynamic range 8-bpc and 16-bpc color values cover RGB levels running only from black to white.

Brightness levels well above white — objects as luminous as a flame or the Sun — fall within reach of high dynamic range (HDR), 32-bpc floating-point color values.

Glow effect and Gaussian Blur effect applied to image in 32-bpc project (left) and 16-bpc project (right)

Glow effect and Gaussian Blur effect applied to image in 32-bpc project (left) and 16-bpc project (right)

Switch the project color depth to 32 bpc when handling HDR footage or when you need over-range values — those above 1.0 (white) that 8- or 16-bpc mode can't carry. Keeping highlight intensity intact, over-range values serve synthetic effects such as lights, blurs, and glows just as well as they serve HDR footage. That extra headroom from working in 32 bpc heads off many forms of data loss during steps like color correction and color profile conversion.

Even when your footage is 8-bpc and your movies are built in 8-bpc formats, setting the project color depth to 16 bpc or 32 bpc yields better outcomes. Calculations gain precision at a higher bit depth, and quantization artifacts — banding across gradients, for example — drop sharply.

Note

Bumping up a project's color depth on its own won't erase gradients whenever the output format carries a low bit depth. After Effects fights banding by dithering colors as they convert to 8-bpc colors, which covers rendering and exporting to an 8-bpc format. Previews receive no such dithering. You can force dithering for previews by adding an 8-bpc effect that has no visible result — such as the Arithmetic effect left at its default values — onto an adjustment layer.

Since a 16-bpc frame consumes half the memory that a 32-bpc frame does, preview rendering goes quicker in a 16-bpc project and those previews can run longer than in a 32-bpc one. 8-bpc frames draw on even less memory, though at a project color depth of 8 bpc the quality-versus-performance trade-off can become plainly visible in certain images.

## Special considerations for working with high dynamic range color

When a layer's source is an HDR footage item, the HDR Compander effect lets you squeeze its dynamic range down. That makes room for tools with no HDR color support, like 8-bpc and 16-bit effects. Once finished, reapply the HDR Compander to reverse the dynamic range compression. To pull highlight values in an HDR image down into the value range of a low dynamic range image, turn to the HDR Highlight Compression effect.

A monitor shows only part of the luminance range present in a real-world scene captured as an HDR image, so working with an HDR image occasionally requires adjusting the exposure — how much light the image captured. Tweaking an HDR image's exposure mirrors adjusting exposure while photographing an actual scene, letting you draw detail out of either dark or bright areas. The Exposure effect can shift a layer's color values for final output, or you can change exposure within one particular viewer just for previewing.

To land predictable colors with HDR, color management is strongly advised and may even be mandatory. It enables After Effects to preview colors faithfully on your monitor by mapping the color working space into the display color space that the operating system defines. The best results come from using the monitor manufacturer's supplied color profile or from calibrating your monitor's colors.

Note

Certain operations — among them glows, blurs, and several blending modes — react differently under 32-bpc mode than under 8-bpc or 16-bpc mode, so flipping between high dynamic range and low dynamic range project settings can make your composition appear markedly different.

## Color correction, color grading, and color adjustment

Building a composition frequently calls for tweaking or fixing the colors across one or more layers. A range of motives can prompt such adjustments. Here are a few:

Multiple footage items have to look as though they were filmed under matching conditions before you can composite or edit them together.

A shot's colors have to be reworked so it reads as though filmed at night rather than during the day.

An image's exposure has to be tuned to rescue detail buried in over-exposed highlights.

One color in a shot has to be intensified because you plan to composite a graphic element of that color over it.

Colors have to be confined to a specific range, the broadcast-safe range being one example.

Although people often treat color correction and color grading as the same thing, color grading sometimes specifically denotes color changes made for creative ends instead of fixing color problems. Within After Effects, color correction is meant in its wide, general sense.

A wealth of built-in color-correction effects ship with After Effects, the Curves effect and the Levels effect among them, alongside further effects in the Color Correction effects category. The Apply Color LUT effect is another route, applying a color lookup table's color mappings for color-correction work. (See Color Correction effects and Apply Color LUT effect.)

Still images in JPEG, TIFF, and assorted camera raw formats can be corrected and adjusted through the Camera Raw plug-in.

## Using histograms to adjust color

How many pixels sit at each luminance value in an image is what a histogram depicts. When a histogram carries nonzero values at every luminance value, the image is making use of the entire tonal range. A histogram that falls short of the full tonal range points to a flat image short on contrast.

Spreading pixel values more evenly across the histogram from left to right — rather than letting them cluster at one extreme — is a routine color-correction job. For plenty of images, an easy and effective approach is to apply the Levels effect and tune its Input White and Input Black properties within the histogram.

Histogram for image that does not use full tonal range

Histogram for image that does not use full tonal range Input sliders moved so that output uses full tonal range

Input sliders moved so that output uses full tonal range Histogram showing highlight clipping

Histogram showing highlight clipping Histogram showing shadow clipping

Histogram showing shadow clipping

## Lumetri Scopes panel

The color properties of your video are shown by the Lumetri Scopes panel, which supplies built-in video scopes. Among the video scopes are:

- Vectroscopes
- Histograms
- Parade
- Waveform

Video scopes in Lumetri Scopes panel

Video scopes in Lumetri Scopes panel Note

Should the Lumetri Scopes panel be missing, choose Window > Workspace > Color.

Pixels make up every video frame, and each pixel holds color properties that sort into chrominance, luminance, and saturation. Assessing those color properties lets you color correct your video and keep shots consistent with one another.

## Lumetri Scopes support for broadcast workflow

Built for broadcast color workflow, the Lumteri Scopes panel gauges colors across the Rec. 601, Rec. 709, and Rec. 2020 color spaces. Reach those colorspaces by right-clicking the Lumetri Scopes panel and choosing Color Space.

- Rec. 601: this color space serves to encode analog video signals into digital video form.
- Rec. 709: this color space handles standard HDTV workflows.
- Rec 2020: this color space covers HDR along with UHDTV (UHD 4k and UHD 8k).

Where your After Effects project runs on a different color space, the scopes show your composition as your color space renders it, yet remapped into whichever color space (601, 709, or 2020) is set in the Lumetri Scopes panel.

For more information on broadcast color workflow, see Broadcast-safe colors.

## Workspace for working with color tools

After Effects now offers a fresh workspace called Color, set up for use with the Lumetri Scopes panel and the Lumetri Color effect. Open the workspace by choosing Window > Workspace.

## Current viewer panel syncing

Whatever changes happen in the current viewer panel get analyzed and shown by the Lumetri Scopes panel. Color is measured from whichever Composition, Layer, or Footage panel is current. Switching the current viewer lets you inspect different results. Pin the Lumetri Scopes display to one specific viewer panel by turning on that panel's Primary Viewer option. As an illustration, adjusting the composition's RGB color curves causes the waveform to capture the color and reflect the shifting color information.

For more information on panels, see Panels and workspaces.

After making changes to the composition as per Lumetri scopes color information

After making changes to the composition as per Lumetri scopes color information Before using Lumetri scopes to read color information

Before using Lumetri scopes to read color information

## Color models and color spaces

Describing color through numbers, so computers have something to work with, is what a color model does. After Effects builds on the RGB color model, where every color is expressed as quantities of red, green, and blue light combined to produce it. CMYK, HSB, YUV, and XYZ count among the other color models.

A given color model gives rise to variants called color spaces. What sets a color space apart is its gamut (range of colors), its set of primary colors (primaries), its white point, and its tone response. The RGB color model, for instance, contains several color spaces, which — ranked from largest gamut down — include ProPhoto RGB, Adobe RGB, sRGB IEC61966-2.1, and Apple RGB. These color spaces all map color along the identical three axes (R, G, and B), yet their gamuts and tone response curves diverge.

Plenty of devices lean on red, green, and blue components to record or render color, but those components vary in character — one camera's blue, say, isn't precisely another camera's blue. Every device that records or renders color carries its own color space. As an image passes between devices, its colors can shift in appearance because each device reads the RGB values through its own color space.

Through color profiles, color management converts colors out of one color space and into another, keeping colors consistent across devices.

## Gamma and tone response

For any color space, the tone response describes how light intensity relates to the signal that produces, records, or perceives that light.

Light does not register linearly in the human visual system. That is, doubling the photons reaching our eyes over a span of time does not double how bright we judge a light to be. In the same vein, a CRT monitor's display elements don't put out twice the brightness when fed twice the voltage. A power function captures the link between light intensity and signal intensity for a display device, and gamma is the name given to that power function's exponent. As a rule, an input device's light-to-signal relationship inverts an output device's, though the gamma values can vary between input and output devices to reconcile the gap between scene lighting and the lighting where the content is viewed.

Note

Shifting the midtone slider — the Gamma control on the Levels effect, for example — inside a color-correction histogram produces the same effect as altering gamma: it reshapes the tone response curve while leaving the white point in place. Adjusting the curve in the Curves effect reshapes tone response as well, though not always along a gamma curve.

## Linear tone response: when gamma equals 1

Take any number to the power of 1 and you get that number back unchanged. Gamma of 1.0 captures how light behaves in the natural world, set apart from our nonlinear perceptual systems. When a system has gamma of 1.0, it is sometimes described as operating in linear light, whereas a system that encodes a gamma other than 1.0 to suit the human visual system is described as perceptual.

Once color management is enabled (by naming a working color space), linearizing that working color space lets you carry out every color operation in linear light. Sharing the primaries and white point of its nonlinear counterpart, a linearized color space simply has its tone response curve straightened into a line.

Note

Numerous compositing operations — blending colors with blending modes among them — gain from running in a linear color space. Work in a linear color space for the most natural, realistic color blending. Even without color management enabled, blending operations can still run at a gamma of 1.0. (See Linearize working space and enable linear blending.)

## System gamma, device gamma, and the difference between scene and viewing environment

Across a whole system — from capture, through production, to display in the viewing environment — the gamma value equals the product of the gamma values applied at each phase. That product isn't invariably 1.0, which is what you'd get if the encoding operations precisely matched (inverted) the decoding ones. A system gamma other than 1.0 arises partly because the lighting in which a scene is captured frequently differs from the lighting in which it is watched. (Bear in mind that a movie is usually viewed in a dim setting, whereas its scenes generally aren't shot in one.)

To illustrate, an HD camera's device gamma sits near 1/1.9 while an HD display's device gamma sits near 2.2. The product of those figures is a system gamma of roughly 1.15, well suited to the somewhat dim television viewing conditions of a typical living room. Motion picture production runs a far higher system gamma (roughly 1.5–2.5) to suit the darker viewing environment of a movie theater. Film negative gamma lands around 1/1.7, and projection film gamma around 3–4.

A color profile is called scene-referred when its tone-response curve rests on the conditions of the typical scene. A color profile is called output-referred when its tone-response curve rests on the conditions of the typical viewing environment.

When color management is in use, After Effects by default adjusts image contrast automatically as it converts between scene-referred color profiles and output-referred color profiles. The gamma values laid out in the HDTV video standard drive this automatic conversion (image state adjustment).

Switch off this automatic color transformation by deselecting Compensate for scene-referred Profiles in the Project Settings dialog box.

## More like this

- Adjust exposure for previews
- Exposure effect
- Broadcast-safe colors
- Color management
