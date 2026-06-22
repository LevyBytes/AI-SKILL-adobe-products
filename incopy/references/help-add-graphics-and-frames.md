# Controlling Graphics Display, Transforming Graphics

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Controlling graphics display — Control graphics’ display performance; Transforming graphics — Position tool overview.

## Controlling graphics display — Control graphics’ display performance

Display resolution for graphics placed in a document can be controlled. Settings can be changed for the whole document or for individual graphics. Another setting determines whether individual-document display settings are honored or overridden.

### Controlling graphics display — Change a document’s display performance

A document opens with the default Display Performance preferences. While the document is open, its display performance can be changed, but that choice is not saved in the document.

When images use separate display-performance settings, a document-level override can make every object follow one setting.

Open View > Layout View. In View > Display Performance, select an option from the submenu. To make individually configured objects follow the document setting, turn off View > Display Performance > Allow Object-Level Display Settings. A check mark indicates that it is selected.

### Controlling graphics display — Change an object’s display performance

Choose View > Layout View. If individual objects should keep their own display-performance choices after closing and reopening the document, confirm that Preserve Object-Level Display Settings is enabled in Display Performance preferences. Then choose View > Display Performance, and confirm that Allow Object-Level Display Settings is enabled. With the Selection tool or Direct Selection tool, choose an imported graphic. You can also choose an imported graphic with the Position tool. Next, use one of these methods:

Open Object > Display Performance, and pick the display setting you want.

Right-click (Windows) or Control-click (Mac OS) the image, then pick a setting from the Display Performance submenu.

Note

To clear the selected object's local display choice, choose Use View Setting in the Display Performance submenu. To clear local display choices from every graphic in the document, choose Clear Object-Level Display Settings in the View > Display Performance submenu.

### Controlling graphics display — Display performance options

The settings below change only the on-screen presentation of graphics; they do not change print quality or exported output.

Display Performance preferences set the default used when documents open, and they also define what each option means. Raster images, vector graphics, and transparencies are configured independently for each display option.

Fast

Shows a raster image or vector graphic as a gray box (default). Choose this when you need to move quickly through spreads containing many images or transparency effects.

Typical

Shows a low-resolution proxy image (default) that is suitable for recognizing and placing an image or vector graphic. Typical is the default choice, and it is the quickest setting that still displays an identifiable image.

High Quality

Shows a raster image or vector graphic at High Resolution (default). It gives the best visual fidelity and the slowest performance, so use it when you need to adjust an image precisely.

Note

Image display choices do not set the resolution used when images are exported or printed from a document. When you print to a PostScript device, export to XHTML, or export to EPS or PDF, the final image resolution comes from the output options selected during print or export.

### Controlling graphics display — Set default display performance

Display Performance preferences define the default display option that InCopy applies to every document. You can adjust a document through the View menu, or apply a separate setting to specific objects through the Object menu. For instance, when a project contains many high-resolution photos, such as a catalog, you may want documents to open faster. Set the default display option to Fast; when you need a closer look at the images, switch the current document view to Typical or High Quality while the preference remains Fast.

InCopy can also show or override display settings assigned to individual objects. When Preserve Object-Level Display Settings is selected, object-specific choices are stored with the document.

On Windows, choose Edit > Preferences > Display Performance. On Mac OS, choose InCopy  > Preferences > Display Performance. For Default View, choose Typical, Fast, or High Quality. The selected display option is used for every document you open or create. Use one of these choices:

Select Preserve Object-Level Display Settings to retain display choices assigned to individual objects.

Deselect Preserve Object-Level Display Settings when all graphics should use the default display option.

For Adjust View Settings, choose the display option to modify, then move the Raster Images or Vector Graphics slider to the desired setting. Click OK.

Raster (bitmap) images, vector graphics, and transparency effects each have their own settings within every display option.

### Controlling graphics display — Customize the display performance options

You can redefine what Fast, Typical, and High Quality mean for display performance. Within each display option, raster (bitmap) images, vector graphics, and transparency effects have separate controls.

Managed (linked) InCopy stories carry low-resolution proxy image data, allowing checkout without downloading the full-resolution image from the server each time.

Choose Edit > Preferences > Display Performance (Windows) or InCopy > Preferences > Display Performance (Mac OS). Under Adjust View Settings, choose the display option you want to edit. For each display option, set Raster Images or Vector Graphics by moving its slider:

Gray Out

Shows the image as a gray box.

Proxy

Shows images at proxy resolution (72 dpi).

High Resolution

Shows images at the highest resolution supported by the monitor and the current view settings.

For each display option, set Transparency by moving its slider:

Off

Shows no transparency effects.

Low Quality

Shows basic transparency, including opacity and blend modes, while effects such as drop shadow and feather appear as low-resolution approximations.

Note

In this mode, page contents are not isolated from the background. As a result, objects whose blend modes are not Normal can look different in other applications and in final output.

Medium Quality

Shows drop shadows and feathers at low resolution. This mode fits most work unless the document has many transparency effects or is especially transparency-heavy.

High Quality

Uses (144 dpi) rendering for drop shadows and feathers, and also shows CMYK mattes plus spread isolation.

Note

If the document blending space is CMYK and overprint preview mode or soft proofing is enabled, opacity matting uses CMYK instead of RGB. Partially transparent CMYK colors therefore appear as tinted CMYK colors.

To see anti-aliasing on text, strokes, fills, and other page items, choose Enable Anti-aliasing. When text has been converted to outlines, the resulting outlines can be anti-aliased (Mac OS only). To choose the point size below which text is shown as a dimmed bar, enter a value for Greek Type Below. Click OK.

Note

Click Use Defaults to restore every control to its original default setting.

## Transforming graphics — Position tool overview

Click the Position tool in the toolbox when you need to adjust selected graphics directly, use it with a Transform command (Object > Transform) or a context-menu command, or nudge the graphic inside its frame with keyboard shortcuts.

The Position tool changes dynamically to show its current state:

After File > Place, placing it over an empty graphics frame or a frame with unassigned content changes it to the loaded graphics icon, signaling that the graphic can be imported into that frame.

When the pointer is directly over a graphic, it changes to the Hand tool, indicating that the graphic can be selected and adjusted within the frame.

Over an inline graphic's bounding-box handle, it becomes the resize arrow, indicating that dragging will resize the graphic.

When it is above a graphics frame or above the top-level container in nested frames, it becomes the object select icon, indicating that the graphic or nested frame below the pointer can be selected. The frame itself cannot be selected.

Over a text frame, it becomes the I-beam, indicating a text insertion point.

### Transforming graphics — Set Position tool options

While moving a graphic with the Position tool, hold the mouse button down briefly to show a dynamic preview of the image area outside the frame; the preview appears as a ghosted-back image. The preview's visibility and delay can be adjusted.

Double-click the Position tool in the toolbox. In the Show Masked Portion of Image menu, choose how quickly the complete image appears during dragging, or choose the setting that disables the preview.

### Transforming graphics — Transform graphics

Commands are available for moving, scaling, rotating, and shearing graphics.

### Transforming graphics — Move a graphic

Confirm that the frame containing the target object is checked out to you, then select the object with the Position tool. Choose Object > Transform > Move. In the Move dialog box, use one of these approaches:

Enter the horizontal and vertical distances for the graphic's movement. Positive values shift the object down and right from the x axis; negative values shift it up and left.

For movement by an exact distance and angle, enter both values. The angle is measured in degrees from the x axis. Positive angles move counterclockwise, while negative angles move clockwise. Values from 180° through 360° can also be entered; InCopy converts them to the equivalent negative value, such as converting 270° to -90°.

Use one of these choices:

Select Preview to see the effect before applying it.

Click OK to move the object.

### Transforming graphics — Scale a graphic

Confirm that the frame containing the target object is checked out to you, then select the object with the Position tool. Choose Object > Transform > Scale. In the Scale dialog box, keep the Constrain Proportions icon selected when the object's relative height and width should stay linked. Deselect the icon to scale X and Y independently; doing so can skew the image. Enter horizontal and vertical scale values as percentages, such as 90%, or as distance values, such as 6p.

Scale values may be negative numbers.

Use one of these choices:

Select Preview to see the effect before applying it.

Click OK to scale the object.

Note

To scale the graphic along a particular direction, drag a selected graphic's handle with the Position tool. Holding Shift keeps scaling proportional.

### Transforming graphics — Rotate a graphic

Confirm that the frame containing the target object is checked out to you, then select the object with the Position tool. Choose Object > Transform > Rotate. In the Angle text box, enter the rotation angle in degrees. Use a negative angle for clockwise rotation, or a positive angle for counterclockwise rotation. Then choose one of these options:

Select Preview to see the effect before applying it.

Click OK to rotate the object.

### Transforming graphics — Shear a graphic

After confirming that the frame containing the target object is checked out to you, use the Position tool to select the object. Then choose Object > Transform > Shear. Enter the new shear angle in the Shear dialog box.

The shear angle defines the object's slant amount relative to a line perpendicular to the shear axis. It is measured clockwise from the current axis.

Choose the axis used for shearing the object. The available axis choices are horizontal, vertical, or angled.

When using an angled axis, enter the desired axis angle in degrees relative to the perpendicular axis.

Use one of these choices:

Select Preview to see the effect before applying it.

Click OK to shear the object.

### Transforming graphics — Clear transformations to a graphic

Confirm that the frame containing the target object is checked out to you, then select the object with the Position tool. Choose Object > Transform > Clear Transformations.
