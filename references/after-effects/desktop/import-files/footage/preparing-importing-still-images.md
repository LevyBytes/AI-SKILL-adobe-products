# Preparing Importing Still Images

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

Follow best practices to prep and bring still images into Adobe After Effects, so previews stay accurate and compositing runs efficiently.

Single supported still images can come into After Effects on their own, or a run of still images can arrive together as a sequence.

Internally, After Effects operates in an RGB color space, though it is able to bring in CMYK images and convert them. Even so, whenever you can, stay in an RGB color space inside tools like Illustrator and Photoshop while building imagery for video, film, and other non-print destinations. RGB hands you a wider gamut and tracks your final output more faithfully.

To trim rendering time, get a still image as ready as you can before it ever reaches After Effects. Prepping a still in the program that made it is generally quicker and simpler than reworking it later in After Effects. Before bringing an image in, think about applying the following to it:

- Confirm that the operating system you intend to use actually supports the file format.
- Trim away whatever portions of the image you don't want showing up in After Effects.

Note

Illustrator files may carry fractional dimensions (216.5x275.5 pixels, say). On import, After Effects deals with those fractions by rounding each up to the next full pixel (so 217x278 pixels, for instance). That rounding leaves a black line along the right (width) or bottom (height) edge of the brought-in image. So when you crop in Illustrator, see that the cropped region's dimensions land on whole pixel counts.

To mark regions as transparent, build an alpha channel or reach for the transparency tools in programs such as Photoshop or Illustrator.

When broadcast video is the end product, steer clear of thin horizontal lines (1-pixel lines, for instance) in imagery or text, since interlacing can make them flicker. If thin lines are unavoidable, add a slight blur; that way the image or text registers across both video fields instead of flickering. Learn more about interlaced video and separating fields and best practices for creating text and vector graphics for video.

When the end product is broadcast video, keep the image's key elements inside the action-safe and title-safe zones. Starting a document in Illustrator or Photoshop from a film-and-video preset draws those safe zones in as guidelines. Learn more about safe zones, grids, guides, and rulers.

When broadcast video is the destination, hold your colors inside the broadcast-safe ranges. Learn more about broadcast-safe colors.

Store the file under the proper naming convention. As an example, a three-character filename extension is the way to go if you'll import the file into After Effects on Windows.

Match the pixel dimensions to whatever resolution and frame aspect ratio you intend to use in After Effects. Planning to scale the image across time? Then choose image dimensions that hold enough detail at the biggest size the image ever reaches in the project. For importing and rendering files, After Effects tops out at an image size of 30,000x30,000 pixels. How large an image you can import or export hinges on how much physical RAM After Effects has on hand. Composition dimensions likewise cap at 30,000x30,000 pixels.

Note

What counts when prepping image data for After Effects import is the image size or pixel dimensions setting in Photoshop (or another image-editing program)—not the dpi (dots per inch) or ppi (pixels per inch) values. Image size sets how many pixels span an image in width and height, no matter whether those are the minuscule pixels of a phone or the huge ones on a motion billboard. The dpi or ppi figures matter for printing an image and for sizing copied-and-pasted paths.
