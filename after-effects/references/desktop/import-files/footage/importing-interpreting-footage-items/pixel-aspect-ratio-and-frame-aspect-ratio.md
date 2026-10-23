# Importing and interpreting footage items - Pixel aspect ratio and frame aspect ratio

Width-to-height proportion of a single pixel in an image is what pixel aspect ratio (PAR) captures. The width-to-height proportion of the whole image frame is the frame aspect ratio—you may also hear it called image aspect ratio or IAR.

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
