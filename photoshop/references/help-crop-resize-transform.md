# Resize Adjust Resolution, Crop Straighten, Transform Manipulate Reshape

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Crop, resize, and transform; Printed image resolution; Set image size and resolution; Resample option in the Image Size dialog; Monitor resolution and image display size; File size; Printer resolution; Resolution specs for printing images; Preserve visual content when scaling images; Specify content to protect when scaling; Resize images; Resampling options in Photoshop; Change the pixel dimensions of images; Change print dimensions and resolution; Manage image file size; Resizing parameters in Photoshop; Resize the canvas using the crop tool; Crop photos.

## Crop, resize, and transform

### Resize and adjust resolution

Printed image resolution

Set image size and resolution

Resample option in the Image Size dialog

Monitor resolution and image display size

File size

Printer resolution

Resolution specs for printing images

Preserve visual content when scaling images

Specify content to protect when scaling

Resize images

Resampling options in Photoshop

Change the pixel dimensions of images

Change print dimensions and resolution

Manage image file size

Resizing parameters in Photoshop

### Crop and straighten

Resize the canvas using the crop tool

Crop photos

Crop tool options

Apply Content-Aware Fill while cropping images

Straighten tilted photos

Transform perspective while cropping

### Transform, manipulate, and reshape

Transformation options in Photoshop

Rotate or flip images

Adjust scale, rotation, and perspective

Duplicate objects as you transform

Apply transformations

Move reference point for transformations

Rotate objects

## Printed image resolution

Understand how printed output quality is affected by image dimensions and resolution.

For print, image resolution means how many pixels are assigned to each inch of the image, expressed as pixels per inch (ppi). Higher ppi values usually create sharper prints with more visible detail.

Image dimensions are the total pixel measurements across an image's width and height. Dimensions set the overall pixel count, while resolution controls how tightly those pixels are distributed for printing.

Changing dimensions or resolution does not alter the total image data unless resampling is enabled. Raising resolution reduces width and height proportionally so the same data amount is retained, while reducing resolution makes the printed physical size larger. To change the actual number of pixels in the image, resampling is necessary.

## Set image size and resolution

Open and work with the Image Size dialog box in Adobe Photoshop.

Choose Image > Image Size.

Use these controls in the Image Size dialog:

- Image Size: shows the image's current file size.
- Dimensions: reports the total pixel count for the image, using width x height.
- Fit To: offers presets for quickly resizing the image to common dimensions.
- Width: controls the image's horizontal measurement.
- Height: controls the image's vertical measurement.
- Resolution: sets the pixels per inch (ppi) value used for print quality.
- Resample: changes image dimensions by adding or removing pixels without changing resolution.

Select the settings icon when applied layer styles should resize proportionally.

Watch the preview window for live updates to the image.

Use the button to zoom in and out.

Use the button to zoom in and out.

## Resample option in the Image Size dialog

Resize images in Photoshop with the Resample option.

In Photoshop, Resample controls the method used to add or remove pixels during image resizing.

Choose Image > Image Size.

In the Image Size dialog, enable the Resample option checkbox when you need to add or remove pixels and change image dimensions.

## Monitor resolution and image display size

Understand how monitor resolution and image dimensions control the on-screen size of images.

### Monitor resolution

Monitor resolution is counted in pixels. When a monitor's resolution and an image's pixel dimensions match, viewing the image at 100% fills the screen.

### Factors that determine image size on screen

An image's on-screen display size is determined by:

- Pixel dimensions of the image
- Size and resolution settings of the monitor

Photoshop allows onscreen magnification changes so images of any pixel dimensions can be edited comfortably, independent of monitor size.

### Practical consideration

For onscreen image preparation, consider the lowest monitor resolution where the photo is expected to appear. Planning for that minimum helps keep content visible without extra scrolling or resizing.

## File size

Learn how image file size is affected by Adobe Photoshop pixel dimensions, format, and resolution.

Image file size is the amount of digital storage the image uses, measured in kilobytes (KB), megabytes (MB), or gigabytes (GB). Pixel dimensions directly influence file size. At a fixed print size, larger pixel dimensions can hold more detail, but they also take more disk space and may make editing or printing slower. For that reason, resolution and file size need to be balanced to reach both quality and efficiency.

### Factors affecting file size

- Pixel dimensions: more pixels create larger files.
- File format: GIF, JPEG, PNG, and TIFF use different compression methods, so the same image dimensions can produce different file sizes.
- Color depth and layers: larger file sizes result from higher bit-depth, multiple layers, and extra channels.

### Photoshop limitations

Photoshop can handle images as large as 300,000 by 300,000 pixels. That ceiling sets the application's maximum possible print size and resolution.

## Printer resolution

Understand how print quality is shaped by printer resolution, image resolution, and screen frequency working together.

Printer resolution uses dpi as its unit; increasing the dpi setting produces more finely detailed printed output. Inkjet devices commonly work between 720 and 2880 dpi. Although printer resolution helps determine how crisp printed detail appears, it is separate from image resolution. For inkjet photo output, an image resolution of at least 220 pixels per inch (ppi) is generally enough for high-quality results.

### Screen frequency

Screen frequency is the count of printer dots or halftone cells placed in each inch when grayscale images or color separations are printed. This value is also known as screen ruling or line screen and is expressed in lines per inch (lpi). As output device resolution increases, finer screen ruling becomes possible, which can improve printed image detail and tonal rendering.

### Relationship between image resolution and screen frequency

Print quality depends heavily on matching image resolution to screen frequency. For the strongest halftone output, set image resolution to about 1.5 to 2 times the screen frequency. In some situations, lower settings can still produce usable output, depending on both the image content and the printer.

### Additional considerations

Use the printer documentation, or ask the print service provider, to find the device's screen frequency. Devices such as image setters and 600-dpi laser printers may rely on screening approaches other than halftoning. For those printers, use the documentation or provider guidance to choose image resolutions that match the desired output.

## Resolution specs for printing images

Understand how image quality is influenced by print resolution, the printer's default settings, and the distance from which the print will be viewed.

### Standard print resolution

For high-quality prints, 300 pixels per inch (ppi) is the common industry target. At that setting, images look crisp and detailed, particularly for close viewing. Smaller prints benefit most from 300 ppi, while large-format output intended for distant viewing can often use lower resolutions successfully. Billboards, for example, may be printed at reduced resolutions without losing their visual effect because distant viewers cannot see fine detail.

### Default printer resolution

Many printers use 300 ppi as their default resolution. When a lower-resolution image is sent to print, the printer adjusts settings automatically so its default resolution is maintained. Because of that behavior, printing below the printer's configured resolution is not possible. If the image has not been resized before output, the printer can enlarge it and reduce clarity.

### Viewing print size on screen

In Photoshop, choose View > Print Size to preview the image at its printed dimensions. The on-screen view approximates the final print size, but monitor size and resolution can affect the preview.

## Preserve visual content when scaling images

Use Content-Aware Scale in Photoshop when an image needs resizing while important details and proportions should be protected.

Choose Select > All.

Note

Use this step only when the layer being scaled is a Background layer.

Choose Edit > Content-Aware Scale.

In the Options bar, configure any of these settings:

- Reference Point Location: choose the square that anchors the scaling point; the center is used by default.
- Use Relative Positioning for Reference Point: move the point in relation to where it is currently placed.
- Reference Point Position: type exact X and Y pixel coordinates for the reference point.
- Scaling Percentage: set width (W) and height (H) percentages. Choose Maintain Aspect Ratio when proportions must stay intact.
- Amount: adjust the mix between content-aware scaling and standard scaling.
- Protect: choose an alpha channel whose area should be preserved.
- Protect Skin Tones: keep regions containing skin tones from being distorted.

To scale the image, drag a handle on the bounding box. Hold Shift while dragging a corner handle to keep the scaling proportional.

Choose Commit Transform to apply the change, or choose Cancel Transform to abandon it.

## Specify content to protect when scaling

Use an alpha channel with Content-Aware Scale in Photoshop to preserve chosen image areas during scaling.

Create a selection around the content that needs protection, then choose Save Selection As Channel in the Channels panel.

Choose Select > All when scaling a background layer.

Choose Edit > Content-Aware Scale.

In the Options bar, open the Protect drop-down list and choose the channel you created.

Scale the image by dragging a handle on the bounding border.

.

## Resize images

Resize images in Adobe Photoshop by changing their dimensions for screen, web, or print output.

Resizing adapts image dimensions to the intended destination. Screen and web images usually use 72-96 PPI, while print output needs 300 PPI for the best quality.

From the menu bar, choose Image > Image Size.

When the Image Size dialog box opens, provide new Width and Height values, then select the unit you want from the dropdown beside each field.

Use the Image Size dialog box to change dimensions, resolution, and resampling.

Use the Image Size dialog box to adjust dimensions and resolution, and to resample the image. Note

To preserve the aspect ratio, choose the Constrain aspect ratio icon in the Image Size dialog box.

Set Resolution to a value that fits the output target.

Choose Resample to interpolate pixel information.

Choose OK to resize the image.

## Resampling options in Photoshop

Review the resampling choices that help preserve image quality during resizing.

When an image is resized or transformed, resampling changes its pixel dimensions. The Resample menu in the Image Size dialog box controls how pixels are inserted or removed during that process.

## Change the pixel dimensions of images

Resize an image for web, mobile, or screen use by changing its pixel dimensions. This changes both the total pixel count and the file size.

From the menu bar, choose Image > Image Size.

After the Image Size dialog box opens, make sure Resample is selected.

Choose the desired measurement unit from the dropdown menu beside the Width and Height fields.

Under Pixel Dimensions, type new values in the Width and Height fields.

Choose OK to apply the updated values.

Note

Adobe Photoshop chooses a resampling method automatically, but the Resample dropdown lets you select a different method for controlling how pixels are inserted or removed.

## Change print dimensions and resolution

Change Image Size and Resolution for high-quality print output while keeping the image's pixel data unchanged.

Choose Image > Image Size to display the Image Size dialog box.

Turn off Resample so the current pixel dimensions stay the same.

Type updated values for Width, Height, or Resolution as required.

Choose OK to apply the new settings.

Note

Use 300 PPI for Resolution when you want the best print quality, unless the printer requires another setting.

## Manage image file size

Understand how layers and pixel dimensions influence file size, and how to make images better suited for storage and editing.

An image's file size is based on its pixel dimensions and how many layers it includes. More pixels in a larger image can hold additional detail, but they also consume more disk space and can make editing and printing slower.

### Reduce file size

- Flatten the image, or lower its layer count.
- Reduce the image to smaller pixel dimensions.

### View file size

Look at the lower-left area of the Photoshop application window to check file size information.

Long-press the button when you need additional image details.

Long-press the button when you need additional image details.

## Resizing parameters in Photoshop

Review Adobe Photoshop resizing parameters such as dimensions, resolution, and resampling so image size can be adjusted while preserving quality.

Controls in the Image Size dialog define image size and resolution. Use these parameters to set dimensions, units, proportions, and resampling behavior.

### Constrain proportions

- On (default): keeps the width-to-height aspect ratio locked.
- Off: lets width and height be changed separately, which can distort the image.

### Resolution

Resolution sets the number of pixels shown per inch or centimeter, which affects quality for print and display.

Resolution range

Use

72–96 PPI

Web and screen display

150–300 PPI

Standard printing

300+ PPI

High-quality printing and detailed images

| --- | --- |

## Resize the canvas using the crop tool

Resize the canvas in Adobe Photoshop with the Crop tool while keeping every part of the image intact.

Note

For a non-destructive crop, turn off Delete Cropped Pixels in the Options bar.

In the Tools bar, choose Crop tool.

Access cropping and canvas adjustment options using the Crop tool.

Access cropping and canvas adjustment options using the Crop tool.

Pull the crop handles outward so the canvas grows past the image edges.

Use Enter (Windows) or Return (macOS) to apply the canvas resize.

## Crop photos

Trim a photo in Adobe Photoshop to remove areas you do not want and strengthen the composition.

Choose the Crop tool from the toolbar to show adjustable crop borders around the image.

Move the corner or edge handles to change the crop area.

Drag over the image to create a new crop box around the portion you want.

Draw across the image to make another crop box and set the intended framing.

Use Enter (Windows), Return (macOS), or Done.

Tip

To revise the crop, hover outside a corner until the curved arrow appears, then drag to rotate the crop box. To reposition the crop box, drag from inside it.

## Crop tool options

Crop tools in Adobe Photoshop can be customized for framing, aspect ratio, resolution, and composition control. Use these options to refine crops and improve the visual result.

## Apply Content-Aware Fill while cropping images

Use Content-Aware Fill in Adobe Photoshop to fill empty areas automatically while cropping, rotating, straightening, or expanding images.

Note

For Content-Aware Fill on Crop, keep Use Classic Mode turned off.

Choose the Crop tool from the Tools panel.

Open the Fill dropdown in the Options bar and choose Content-Aware Fill.

Set the crop boundaries by moving the corner or edge handles. You can rotate the image or extend the canvas past the original image size.

Use Enter (Windows) or Return (macOS).

## Straighten tilted photos

Correct a photo's alignment in Adobe Photoshop with the Crop Tool.

Choose the Crop tool from the Tools panel.

From the Options bar, choose the Straighten tool, then drag a line along an edge in the tilted image.

Move the corner or edge handles to adjust the crop boundary.

Choose Done from the Contextual Task Bar, or use Enter (Windows) or Return (macOS).

## Transform perspective while cropping

Use the Perspective Crop tool in Adobe Photoshop to straighten an image and fix distorted angles during cropping.

Hold down the Crop tool in the Tools panel, then choose the Perspective Crop tool.

Draw a marquee around the object you want to straighten and crop.

Move the marquee corners so they align with the object's edges.

Use Enter (Windows) or Return (macOS).

## Transformation options in Photoshop

Transform commands in Adobe Photoshop resize, reshape, and adjust perspective for layers, selections, masks, and shapes.

Find these commands under Edit > Transform when you need to adjust layout, refine composition, or reshape content creatively.

## Rotate or flip images

Rotate or flip images, layers, or selections in Adobe Photoshop with Transform commands for exact orientation changes.

Specific image parts, including a layer or selection, can be rotated or flipped without changing the whole document.

Choose Edit > Transform.

Choose from these options:

- Rotate 180°: turns the image upside down.
- Rotate 90° Clockwise: turns the image 90 degrees to the right.
- Rotate 90° Counter Clockwise: turns it 90 degrees left.
- Flip Horizontal: creates a left-to-right mirror of the image.
- Flip Vertical: inverts the image along the vertical axis.

Access rotation and flip commands from the Transform submenu in the Edit menu.

Access rotation and flip commands from the Transform submenu in the Edit menu.

## Adjust scale, rotation, and perspective

In Adobe Photoshop, Transform can scale, rotate, skew, distort, add perspective to, or warp layers or selections.

Choose the layer or area you want to transform.

Choose Edit > Transform, then pick a transformation type:

- Scale: resize the content
- Rotate: turn the content
- Skew: slant the content
- Distort: stretch the content
- Perspective: shift depth
- Warp: bend and curve freely

Use Enter (Windows), Return (macOS), or Done to confirm the transformation.

## Duplicate objects as you transform

Replicate layers or selections in Adobe Photoshop while transforming them, so work moves faster and originals remain intact.

Complex Photoshop designs often need duplicate objects at different sizes, angles, or positions. Use a shortcut to duplicate and transform at the same time instead of doing the two actions separately.

Choose the layer or selection you want to duplicate and transform.

Use Ctrl + Alt + T (Windows) or Command + Option + T (macOS) to make a duplicate and enter Free Transform mode.

Move the duplicate by dragging inside the bounding box, scale it with the corner or side handles, and rotate by hovering near a corner until the rotate cursor appears.

Use Enter (Windows) or Return (macOS).

## Apply transformations

In Adobe Photoshop, Transform handles scaling, rotating, skewing, distortion, perspective changes, and warping for layers or selections.

With transformations, selected objects can be resized, rotated, or given a different perspective. Photoshop provides flexible controls for applying these changes directly to layers, text, shapes, or selections.

### Transform an object or layer

Note

Only the active layer or selection can be transformed. For a background layer, select the lock icon next to it in the Layers panel to turn it into a regular layer before transforming.

Pick the target layer or area for the transformation.

Open Edit > Transform, then choose a transformation type:

- Scale: resize the content
- Rotate: turn the content
- Skew: slant the content
- Distort: stretch the content
- Perspective: shift depth
- Warp: bend and curve freely

Use Enter (Windows), Return (macOS), or Done to confirm the transformation.

### Repeat a transformation

Again becomes available only after you have applied at least one transformation with Transform or Free Transform.

Choose the layer or object you want to transform again.

Choose Edit > Transform > Again from the menu bar.

Use Enter (Windows), Return (macOS), or Done.

## Move reference point for transformations

Set the reference point in Adobe Photoshop for tighter control while scaling, rotating, or applying other transformations.

By default, transformations originate at the object's center, and moving the reference point changes the direction or origin of the operation. Because the reference point starts hidden, make it visible before repositioning it.

Choose the layer, selection, or object you want to transform.

Choose Edit > Transform and select a transformation type, or choose Edit > Free Transform to apply multiple transformations.

From the Options bar, choose the Reference point location icon so the reference point appears on the document.

Move the reference point to another spot inside or outside the bounding box to set a different transformation origin.

Use Enter (Windows) or Return (macOS) to apply the transformation.

## Rotate objects

In Adobe Photoshop on desktop, Rotate object can turn a pixel layer into a rotatable 3D object.

Rotate the selected layer on the canvas to see it from different angles and adjust its orientation.

### Apply rotation

Use File > Open, then choose the image to open.

Choose a pixel layer or Smart Object layer that contains the object you want to rotate.

Tip

Before using Rotate Object, rasterize Shape and Type layers.

From the Contextual Task Bar, choose Transform image > Rotate object, or use Edit > Rotate Object.

Rotate the object by dragging on the canvas, adjust with the on-canvas controls, or choose Rotate or Tilt from the Contextual Task Bar. The Properties panel also accepts finer rotation adjustments.

Choose Done to apply the rotation.

Note

While the object is being rotated, a low-resolution preview is shown. After you choose Done, Photoshop renders the result at the full image resolution. Reopen Rotate Object when you need more adjustments.

### Edit rotation

Choose the rotated layer, then use Transform image > Rotate object from the Contextual Task Bar, or choose Edit > Rotate Object.

Adjust the object by dragging the on-canvas rotation controls, or choose Rotate or Tilt from the Contextual Task Bar. For exact changes, type rotation values in the Properties panel.

Choose Done to apply the updated rotation.
