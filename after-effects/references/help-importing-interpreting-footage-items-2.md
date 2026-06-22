# Importing Interpreting Footage Items (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Importing and interpreting footage items — Support for high-frame-rate footage

Any frame rate field accepts values as high as 999 fps, so rendering at elevated frame rates is on the table.

A frame rate of its own can also belong to each motion-footage item inside a composition. How smoothly a layer plays comes down to the interplay between that footage-item rate and the composition rate. Take a footage item at 30 fps inside a 30-fps composition: every time the composition steps forward one frame, the footage serves up its next frame. Drop the footage item to 15 fps against a 30-fps composition and each footage frame stretches across two consecutive composition frames. (All of this presumes the straightforward situation where neither time stretching nor frame blending has touched the layer.)

The cleanest path is to start from source footage already matching your final output frame rate. With that match, After Effects renders frame for frame and the result skips nothing, duplicates nothing, and interpolates nothing. But when the source sits just slightly off your target—say 30-fps footage headed for 29.97-fps output—conforming lets you bend the footage rate to line up with the composition rate.

The underlying file stays untouched when you conform a footage item's frame rate; only the reference After Effects keeps changes. What conforming alters is the internal length of each frame, leaving the frame content alone. The upshot is footage that runs at a new speed. Conform 15 fps up to 30 fps, for instance, and playback doubles in pace. As a rule, save conforming for cases where the footage rate and output rate differ only marginally.

Note

Synchronization between picture and an audio track can drift after conforming, since shifting the frame rate stretches the video's duration while the audio stays put. To stretch picture and sound together, reach for the Time Stretch command instead. Keyframes tied to the source footage hold their original positions (so they stay in sync within the composition, even as the layer's visual content shifts). Expect to nudge keyframe positions after a footage item is conformed.

Frame rate is adjustable for any movie or run of still images. You might, for example, bring in ten still images as a sequence and assign that footage item a rate of 5 frames per second (fps); dropped into a composition, the sequence then spans two seconds.

Note

A still-image sequence on import adopts whatever the Sequence Footage preference under the Import category specifies. Out of the box that is 30 frames per second (fps). Reinterpreting the footage item afterward lets you change the rate.

Because lower frame rates read as somewhat unreal, plenty of artists gravitate toward a rate like 24 frames per second for creative work rather than the 29.97 frames per second that NTSC video calls for.

Note

Strip 3:2 pulldown out of interlaced video footage and After Effects drops the resulting footage item to four-fifths of its starting frame rate automatically. Remove that pulldown from NTSC video and you land at 24 fps.

Line up the composition's frame rate with the frame rate of your final output format. Picking a composition settings preset usually handles this in one step. Each footage item, by contrast, should carry the frame rate of the original source footage it came from.

## Importing and interpreting footage items — Change frame rate for a footage item

Pick the footage item over in the Project panel.

Select File > Interpret Footage > Main.

Turn on Conform To Frame Rate, type the new frames-per-second value, and click OK.

Note

Rather than reaching for Interpret Footage to retime a footage item, you can time-stretch a layer built on that item. A 100.1% time-stretch, for example, bridges 30fps and 29.97fps. Bear in mind that time-stretching reshapes audio speed alongside video. (See Time-stretch a layer.)

## Importing and interpreting footage items — Change frame rate for a composition

Select Composition > Composition Settings.

From the Preset menu, grab one of the composition settings presets.

Dial in the Frame Rate value.

## Importing and interpreting footage items — Pixel aspect ratio and frame aspect ratio

Width-to-height proportion of a single pixel in an image is what pixel aspect ratio (PAR) captures. The width-to-height proportion of the whole image frame is the frame aspect ratio—you may also hear it called image aspect ratio or IAR.

A 4:3 frame aspect ratio (left), and a wider 16:9 frame aspect ratio (right)

A 4:3 frame aspect ratio (left), and a wider 16:9 frame aspect ratio (right)

Square pixels are the norm on most computer monitors, yet a number of video formats—ITU-R 601 (D1) and DV among them—rely on rectangular, non-square pixels.

It's possible for two video formats to land on the same frame aspect ratio while running different pixel aspect ratios. Certain NTSC digitizers, for instance, yield a 4:3 frame aspect ratio built on square pixels (1.0 pixel aspect ratio) over a frame measuring 640x480 in pixels. D1 NTSC arrives at that identical 4:3 frame aspect ratio but leans on nonsquare pixels (0.91 pixel aspect ratio) across a 720x486 pixel frame. D1 pixels never come out square; they stand vertically in NTSC-producing systems and lie horizontally in PAL-producing ones.

Feed nonsquare pixels to a square-pixel monitor untouched and the imagery and motion look warped—circles, say, sag into ellipses. Shown on a video monitor, though, those same images read correctly. Bring D1 NTSC or DV source footage into After Effects and the picture comes across a touch wider than it would on a D1 or DV system. (D1 PAL footage reads a touch narrower.) Importing anamorphic footage as D1/DV NTSC Widescreen or D1/DV PAL Widescreen flips that effect the other way. A 16:9 frame aspect ratio is what widescreen video formats carry.

Note

For previews, how good the pixel aspect ratio correction comes out rests on the Zoom Quality preference sitting under the Previews category. More on Viewer Quality preferences is available.

Square and nonsquare pixels

A. Square pixels and 4:3 frame aspect ratio B. Nonsquare pixels and 4:3 frame aspect ratio C. Nonsquare pixels displayed on a square-pixel monitor

Square and nonsquare pixels

Whenever a footage item rides on nonsquare pixels, After Effects prints the pixel aspect ratio beside that item's thumbnail in the Project panel. Per-item, you can reset how the pixel aspect ratio is interpreted from within the Interpret Footage dialog box. Get every footage item interpreted right and you're free to mix items of differing pixel aspect ratios inside one composition.

Pixel aspect ratios get read from and written to QuickTime movies by After Effects directly. Import a movie captured as widescreen (16:9 DV), for example, and After Effects tags it correctly on its own. AVI and PSD files likewise embed data that spells out the pixel aspect ratio of the images.

When a footage item carries no embedded data spelling out the image's pixel aspect ratio, After Effects leans on the frame's pixel dimensions to take a guess. Bring in an item at the D1 pixel dimensions of 720x486 or the DV pixel dimensions of 720x480 and After Effects tags it as D1/DV NTSC on its own. Bring one in at the D1 or DV pixel dimensions of 720x576 and it gets tagged D1/DV PAL automatically. Still, a glance at the Project panel or the Interpret Footage dialog box lets you confirm every file is read correctly.

Note

Be sure to switch the pixel aspect ratio back to Square Pixels whenever you import a square-pixel file that just happens to share D1 or DV pixel dimensions—for instance, a non-DV image that lands at 720x480.

Line up the composition's pixel aspect ratio with the pixel aspect ratio of your final output format. Picking a composition settings preset normally takes care of this in one move. Each footage item, on the other hand, should carry the pixel aspect ratio of the original source footage.

## Importing and interpreting footage items — Upgrade pixel aspect ratios to correct values

For standard-definition video formats, the pixel aspect ratios baked into After Effects CS3 and earlier left the notion of clean aperture out of the picture. Overlooking the gap between clean aperture and production aperture in standard-definition video left those CS3-and-earlier ratios a little bit off. Because the ratios were wrong, certain images came out faintly distorted.

Note

That stretch of the image staying clear of the edge artifacts and distortions is the clean aperture. The production aperture covers the image in full.

Pixel aspect ratio values across After Effects versions are laid out in the table below:

Format

Value in After Effects CS4 and later

Previous value

D1/DV NTSC

0.91

0.9

D1/DV NTSC Widescreen

1.21

1.2

D1/DV PAL

1.09

1.07

D1/DV PAL Widescreen

1.46

1.42

| --- | --- | --- |

Only those older standard-definition formats—the ones where clean aperture parts ways with production aperture—run into this gap. Newer formats are free of it.

By default, fresh projects and compositions built in After Effects already use the right pixel aspect ratio values.

Anything authored in After Effects CS3 or earlier gets bumped up to the correct pixel aspect ratios the moment those projects are opened in After Effects CS4 and later.

Note

Keep a custom interpretation rules file? Then refresh it with the corrected pixel aspect ratio values.

Lean on square-pixel footage items meant to fill the frame within a non-square-pixel composition and the shift in pixel aspect ratios may throw off how they behave. If, for instance, you once built 768x576 square-pixel footage items for a PAL D1/DV composition, the build target now becomes square-pixel dimensions of 788x576.

Square-pixel equivalents of standard definition formats have had their composition settings presets revised this way:

Format

Pixel dimensions in After Effects CS4 and later

Previous pixel dimensions

NTSC D1 square-pixel equivalent

720x534

720x540

NTSC D1 Widescreen square-pixel equivalent

872x486

864x486

PAL D1/DV square-pixel equivalent

788x576

768x576

PAL D1/DV Widescreen square-pixel equivalent

1050x576

1024x576

| --- | --- | --- |

## Importing and interpreting footage items — Change pixel aspect ratio interpretation for a footage item

Pick a footage item over in the Project panel.

Select File > Interpret Footage > Main.

Pick a ratio from the Pixel Aspect Ratio dropdown menu and click OK.

## Importing and interpreting footage items — Change pixel aspect ratio for a composition

Select Composition > Composition Settings.

Pick a composition settings preset from the Preset menu.

Pick a value from the Pixel Aspect Ratio dropdown menu.

## Importing and interpreting footage items — Common pixel aspect ratios

Pixel aspect ratio

When to use

Square pixels

1.0

The footage runs a 640x480 or 648x486 frame size, is 1920x1080 HD (neither HDV nor DVCPRO HD), is 1280x720 HD or HDV, or came out of an application with no nonsquare-pixel support. Footage carried over from film or one-off custom projects can also fit this choice.

D1/DV NTSC

0.91

The footage runs a 720x486 or 720x480 frame size and you're after a 4:3 frame aspect ratio. Footage exported from a nonsquare-pixel application—a 3D animation package, say—can also suit this setting.

D1/DV NTSC Widescreen

1.21

The footage runs a 720x486 or 720x480 frame size and the goal is a 16:9 frame aspect ratio.

D1/DV PAL

1.09

The footage runs a 720x576 frame size and the goal is a 4:3 frame aspect ratio.

D1/DV PAL Widescreen

1.46

The footage runs a 720x576 frame size and the goal is a 16:9 frame aspect ratio.

Anamorphic 2:1

2.0

The footage was captured through an anamorphic film lens, or it came off a 2:1 film frame by way of an anamorphic transfer.

HDV 1080/DVCPRO HD 720, HD Anamorphic 1080

1.33

The footage runs a 1440x1080 or 960x720 frame size and the goal is a 16:9 frame aspect ratio.

DVCPRO HD 1080

1.5

The footage runs a 1280x1080 frame size and the goal is a 16:9 frame aspect ratio.

| --- | --- | --- |

## Importing and interpreting footage items — More like this

- Create layers from footage items or change layer source
- Remove Color Matting effect
- Basics of rendering and exporting
- Converting movies
