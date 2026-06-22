# Smart Objects, Create Layer Compositions

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Smart Objects - overview and benefits; Create embedded Smart Objects; Create linked Smart Objects; Update Linked Smart Objects; View Linked Smart Object properties; Embed Linked Smart Objects; Package and locate linked Smart Objects; Convert embedded Smart Objects to linked; Filter the Layers panel by Smart Objects; Duplicate an embedded Smart Object; Edit the contents of a Smart Object; Replace the contents of a Smart Object; Convert Smart Objects to layers; Rasterize Smart Objects; Export the contents of an embedded Smart Object; Reset Smart Object transforms; Align layers; Auto-align image layers.

## Smart Objects - overview and benefits

### Use Adobe Photoshop Smart Objects to edit layers without degrading image quality while keeping linked or embedded files easy to refresh.

Smart Objects hold image data from several image formats, including artwork made in Adobe Illustrator or Photoshop. The original content and quality stay preserved, letting you modify the layer without permanently changing that source.

A document can contain an embedded image, or it can use Linked Smart Objects that point to an external file. When that source file changes, Photoshop refreshes the linked content automatically. Linked Smart Objects are different from duplicate instances in a single document: they let multiple Photoshop documents share one source file, which is a familiar and useful pattern for many web designers.

### Advantages of Smart Objects

- Resize or reshape without losing quality: You can scale, rotate, skew, distort, apply perspective, or warp a layer while protecting image quality because the underlying content is left untouched.
- Keep vector artwork sharp: Vector data, including Illustrator artwork, can stay crisp instead of being converted to pixels in Photoshop.
- Edit filters without losing quality: Apply filters in a way that preserves the source image and keeps the filters editable later.
- Update all linked copies: Change one Smart Object and every linked instance updates from it.
- Use flexible layer masks: Attach either a linked mask or an unlinked mask to the Smart Object layer.
- Test with placeholders: Explore design options using low-resolution placeholder images, then swap in the final versions.
- Reduce file size with Linked Smart Objects: Because Linked Smart Objects point to an external file instead of embedding that data, documents can become smaller. With large images, this helps projects stay lighter and more responsive.

Note

When you change a Smart Object that uses a Smart Filter, Photoshop briefly disables the filter effect and then applies it again after the edit.

### Limitations of Smart Objects

- Avoid converting to pixels: Painting, dodging, burning, or cloning is unavailable on a Smart Object layer until it becomes pixels. Alternatives include editing the contents, adding a layer above it, duplicating the object, or creating a separate layer for pixel-based edits.
- Watch file sizes: Smart Objects that contain high-resolution images or many linked assets can make large projects heavier and slower.
- Expect variable file savings: Linked Smart Objects keep a flattened, scaled display version of the image, and that stored preview can sometimes be larger than the source file, leaving little or no size reduction.

## Create embedded Smart Objects

### In Adobe Photoshop, convert layers or placed files to Smart Objects so the original image remains editable.

JPEG files can be used as Smart Objects, although PSD, TIFF, or PSB sources are stronger choices. Those formats preserve editable layers and quality, while JPEG saves flatten layers and apply compression each time, which can reduce image quality.

Create an embedded Smart Object with any of these methods:

- Import files as Smart Objects into an open Photoshop document: choose File > Place Embedded.
- Start a new file whose first layer is the Smart Object: choose File > Open As Smart Object.
- Turn the selected layer into a Smart Object: choose Layer > Smart Objects > Convert to Smart Object.
- Bundle selected layers into one Smart Object: select one or more layers, then choose Layer > Smart Objects > Convert To Smart Object.
- Bring in editable vector artwork or objects: drag PDF or Adobe Illustrator layers or objects into a Photoshop document.
- Preserve Illustrator editability in Photoshop: paste the artwork into the document, choose Edit > Paste, and choose Smart Object in the Paste dialog.
- From Bridge, place a Smart Object into an open Photoshop document: choose File > Place > In Photoshop.

Tip

For the cleanest Illustrator transfer, open Preferences > File Handling & Clipboard in Illustrator and enable PDF and AICB (No Transparency Support) before copying.

Open a Smart Object for editing by double-clicking its thumbnail in the Layers panel.

After you save those edits, Photoshop refreshes every occurrence of that Smart Object in the document.

## Create linked Smart Objects

### In Adobe Photoshop, use Linked Smart Objects to reuse external assets and let source-file edits flow back into a document.

Open an existing Photoshop document or create a new one.

Choose File > Place Linked.

Pick the file to use as a linked Smart Object.

Right-click and choose Place.

The Layers panel shows the new linked Smart Object and its linkicon.

Open the linked Smart Object for editing by double-clicking the link icon.

From the document, use the link icon whenever source edits are needed. Tip

Hold Alt-key (Windows) or option-key (macOS) as you drag a file into the document to create an automatic linked Smart Object. Disable Preferences > General > Always Create Smart Objects While Placing when placed files should come in as regular layers.

## Update Linked Smart Objects

### Keep Adobe Photoshop documents current when source files for linked Smart Objects change.

While a Photoshop document is open, Linked Smart Objects refresh automatically after their source files change. If the document was closed, Photoshop marks the affected Smart Objects in the Layers panel the next time you open that Photoshop document.

Open your Photoshop document. In the Layers panel, Photoshop visually marks Linked Smart Objects whose source images changed.

- Right-click the highlighted linked Smart Object layer and choose Update Modified Content to refresh only that smart object.
- Choose Layer > Smart Objects > Update All Modified Content to refresh every changed linked Smart Object in the document at the same time.

Choose the Smart Object layer, then update one object or all modified linked objects.

Choose the Smart Object layer, then update a single Smart Object or the full modified set.

Photoshop checks only the file that is directly linked to the Smart Object. If a linked file is nested inside another Smart Object, that nested file will not refresh automatically.

Tip

The Layers panel marks Linked Smart Objects when their source files are missing. Repair the connection by right-clicking the highlighted layer icon, choosing Relink to File, browsing to the file's new location, and choosing Place.

Find the missing source file and relink it so the Smart Object works again.

Find the missing source file and reconnect it to restore the Smart Object.

## View Linked Smart Object properties

### In Adobe Photoshop, inspect Linked Smart Object details such as file path, dimensions, and position.

Photoshop keeps Linked Smart Objects connected to external source files so updates can appear across documents. Checking their properties helps with link management and routine document tasks.

Choose Window > Layers.

Select the Linked Smart Object layer in the Layers panel.

Display the Properties panel with Window > Properties.

Inspect the linked Smart Object details listed in that panel.

Adjust the Smart Object's settings so the layout stays consistent.

Manage the Smart Object's settings to keep the layout consistent.

In the Properties panel, you can see the external source file path, the Smart Object's size, and its document position (X, Y).

Tip

The Properties panel also lets you edit the source image; Photoshop opens the appropriate application, such as Adobe Illustrator for AI files. You can also embed the linked Smart Object into the document from there.

## Embed Linked Smart Objects

### Convert linked Smart Objects to embedded Smart Objects in Adobe Photoshop when a document needs to be self-contained and portable. Embedded objects keep the document intact if external source files move or are deleted, because the complete file data is stored inside the Photoshop document.

Choose Window > Layers.

In the Layers panel, select the Linked Smart Object layer, right-click it, and choose Embed Linked to embed a single linked smart object.

Apply the source-file updates directly inside the document.

Apply updates from the source file into the document itself.

Optionally, embed every linked item with Layer > Smart Objects > Embed All Linked. Once embedded, each Linked Smart Object is stored inside the Photoshop document, and its layer thumbnail no longer shows the linkicon in the Layers panel.

View the Smart Object after the missing file has been reconnected.

View the restored Smart Object after reconnecting the missing file.

## Package and locate linked Smart Objects

Keep an Adobe Photoshop document and its linked files together in one folder so external links stay organized and are less likely to be lost.

### Package linked Smart Objects

Save your Photoshop document.

The file must be saved at least once before you package it.

Choose File > Package.

Choose where the package should be saved. Photoshop creates one folder that contains your document plus all linked source, audio, and video files.

Open the new folder and inspect the packaged document with its source files.

Note

Photoshop searches for linked files first at their last-known relative location. If that lookup fails, it tries the last-known absolute location, a saved alias on macOS only, and then the document's own folder.

### Relink Smart Objects

Use relinking when you need to move, copy, or share project folders without breaking their file connections. If a Photoshop document opens with a missing source file, Photoshop displays the relink dialog box and shows the last-known absolute path.

In the dialog box, choose Relink.

Navigate to the file at its new location.

Choose Place to confirm the file.

Choose OK to restore the link.

Restore missing links with a short relink sequence.

Restore missing links by following the quick relink steps.

## Convert embedded Smart Objects to linked

### Make Smart Objects in Adobe Photoshop point to external files while preserving existing transformations, filters, and effects.

Smart Objects protect the original image from destructive edits. Converting an embedded Smart Object to a linked file keeps your existing edits, reduces document size, and makes the asset easier to share, reuse, and update across projects or with collaborators.

In the Photoshop Layers panel, select the embedded Smart Object layer that you want to convert.

Right-click the layer and choose Convert to Linked.

Identify the Smart Object layer that should become linked.

Identify which Smart Object layer you want to convert.

Choose where the external source file should be saved on your computer.

Type a file name and add a supported extension, such as JPG or PSD.

Choose Save.

Photoshop writes a separate source file and connects it to your document. In the Layers panel, the Smart Object layer displays a linkicon to confirm the conversion.

Store the Smart Object outside the document so it stays linked.

Store the Smart Object externally while keeping it connected to the document.

## Filter the Layers panel by Smart Objects

Use Adobe Photoshop layer filtering to spot Smart Objects quickly, including linked, embedded, missing, or out-of-sync objects, without checking every layer manually.

Filtering reduces Layers panel clutter and helps you focus. Smart Object filter icons identify which type of Smart Object each layer uses.

In the Layers panel, choose Smart Object from the filtering dropdown menu.

Use visual cues to recognize the different Smart Object types.

Use visual cues to distinguish the Smart Object types.

Choose one of these filter icons:

- Filter for smart objects linked in library: lists library-linked Smart Objects from Creative Cloud Libraries.

- Filter for smart objects linked locally : lists Smart Objects that reference local computer files.
- Filter for linked smart objects that are out of date : lists Smart Objects that are no longer synchronized with their source files.
- Filter for linked smart objects that are missing : lists Smart Objects with source files that cannot be located.
- Filter for embedded smart objects: lists Smart Objects contained in the Photoshop document.

Toggle filtering with Turn layer filtering on or off.

## Duplicate an embedded Smart Object

Copy a Smart Object in Adobe Photoshop and choose whether the duplicate stays tied to the original or becomes independent.

Choose Window > Layers.

In the Layers panel, select the Smart Object layer to copy.

To create a linked copy, choose Layer > New > Layer Via Copy. Editing the original updates the copy as well.

To create an independent copy, choose Layer > Smart Objects > New Smart Object Via Copy. Editing the original leaves the independent copy unchanged. Photoshop adds a separate Smart Object in the Layers panel and appends copy to its name.

Duplicate Smart Objects when you need to reuse or edit them in different ways.

Create duplicates to reuse Smart Objects or edit them differently.

## Edit the contents of a Smart Object

Modify a Smart Object's source file, save it, and let Adobe Photoshop update the Smart Object inside your document.

Editing a Smart Object lets you refine artwork, raw files, or linked logos while keeping changes reversible and quality intact. After the source file is saved, Photoshop refreshes all linked instances so the design remains consistent.

Choose Window > Layers.

Select the Smart Object layer in the Layers panel.

Choose Layer > Smart Objects > Edit Contents.

If a dialog box appears, choose OK.

In the application that opens, edit the source file. The Smart Object format determines the app; for example, PSD files open in Photoshop and AI files open in Illustrator.

Save the file so the Smart Object in your Photoshop document updates.

The Smart Object in the Photoshop document reflects the saved edits, and all linked instances remain synchronized.

## Replace the contents of a Smart Object

### Replace the source content inside a Smart Object in Adobe Photoshop while keeping edits you already applied.

Photoshop keeps the original image protected and applies existing adjustments after replacement. This is useful when a design needs new artwork or a placeholder must be swapped without rebuilding the work.

Open Window > Layers.

In the Layers panel, choose the Smart Object.

Right-click its layer and choose Replace Contents.

Switch to another file quickly while preserving adjustments.

Quickly switch files without losing the adjustments.

Browse to the file to use and choose Place. The new file replaces the original while all transformations are retained.

## Convert Smart Objects to layers

### Unpack a Smart Object in Adobe Photoshop into its original layers so each layer can be accessed and edited in the Layers panel.

An embedded or linked Smart Object can be converted back into its component layers in the document. For a Smart Object with multiple layers, Photoshop puts those layers into a new group in the Layers panel. This conversion restores the original layers but removes any transforms or Smart Filters that had been applied to the multi-layer Smart Object.

Open Window > Layers.

In the Layers panel, choose the Smart Object layer.

Right-click that layer and choose Convert To Layers.

Work with each layer directly and modify it as needed.

Directly modify each layer after conversion.

After conversion, Photoshop places the Smart Object's layers inside a Layers panel folder.

Make the Smart Object editable by separating it into layers.

Turn the Smart Object into separate layers so it becomes editable.

## Rasterize Smart Objects

### Understand what changes when a Smart Object becomes a regular layer in Adobe Photoshop and why that makes edits permanent.

Rasterizing turns a Smart Object into a normal layer. After rasterization, transforms, warps, and filters are baked in and cannot be adjusted later. Use it only when you are certain the Smart Object's flexibility is no longer needed.

Tip

Select the Smart Object and choose Layer > Smart Objects > Rasterize to make it a regular layer with all edits fixed in place.

### Effects of rasterization

- Makes the layer permanent and not reversible.
- The original layer can be rebuilt only from the source content.
- Removes transformations or filters; restoring them requires applying them again by hand.

## Export the contents of an embedded Smart Object

### Save a Smart Object out as its own file, using its native format, so it can be reused or edited beyond Adobe Photoshop.

Open Window > Layers.

In the Layers panel, choose the Smart Object.

Choose Layer > Smart Objects > Export Contents.

Pick a folder on your computer and type the file name.

Choose Save to write out the file.

Photoshop exports the Smart Object using its original format, such as JPEG, AI, TIFF, PDF, or another supported type. When the Smart Object came from layers, Photoshop writes it as a PSB file.

## Reset Smart Object transforms

Return a transformed Smart Object in Adobe Photoshop to its starting geometry while leaving the embedded contents unchanged.

Note

Only Smart Objects support this command. Convert the layer into a Smart Object before using it.

In the Layers panel, choose the Smart Object layer.

Choose Layer > Smart Objects > Reset Transform. Photoshop restores the bounding box to its initial proportions and orientation, removing scale, rotation, and skew changes.

## Align layers

Use Adobe Photoshop layer alignment to line up several layers quickly for crisp layouts, grids, or UI mock-ups.

In the Layers panel, choose two or more layers, layer groups, or both.

Choose Layer > Align, then pick one of these commands:

- Top Edges icon: places the top edge of each selected layer against the highest pixel in the group or selection boundary.
- Vertical Centers icon: moves each selected layer so its vertical center pixel meets the group or selection center.
- Bottom Edges icon: places the bottom edge of each selected layer against the lowest pixel in the group or selection boundary.
- Left Edges icon: moves the left pixel of each selected layer to the left pixel of the group or selection boundary.
- Horizontal Centers icon: positions each selected layer's horizontal center pixel on the group or selection horizontal center.
- Right Edges icon: moves the right pixel of each selected layer to the group selection boundary's right edge.

Choose multiple layers, then use any alignment command available from the Layer menu.

Choose multiple layers, then use any alignment command available from the Layer menu.

## Auto-align image layers

In Adobe Photoshop, automatic image-layer alignment helps build composites, panoramas, and layered designs without hand-positioning each layer.

Auto-Align Layers compares matching image details across different layers, including corners and edges, then aligns those layers automatically. Either assign the reference layer yourself or let Photoshop select it. Photoshop positions the remaining layers against that reference so shared details overlap properly.

After alignment, the images can be combined in these ways:

- Blend layers or apply masks to remove or replace image areas that share the same background, producing a continuous composition.
- Join images that contain overlapping areas to make a panoramic or wide-angle result.

Copy or place the images for alignment into one document. Keep every image on a separate layer.

In the Layers panel, choose a locked layer to use as the reference.

Choose the other layers to align, right-click, and choose Rasterize Layers.

Note

- Avoid selecting adjustment layers, vector layers, or Smart Objects that do not include the image information used for alignment.
- With static-background video, frames can be converted into layers so content can be added or removed across several frames.

Choose Edit > Auto-Align Layers, then choose an alignment option in the Auto-Align Layers dialog.

Under Projection, choose from these options:

- Auto: evaluates the images and chooses Perspective or Cylindrical, depending on which layout produces the strongest result.
- Perspective: treats the center image as the reference and transforms the others by repositioning, stretching, or skewing them until overlapping content lines up.
- Collage: lines up layers and matches shared content while preserving the shapes without distortion.
- Cylindrical: places images on a curved surface, reducing the "bow tie" distortion often produced by Perspective layout.
- Spherical: uses a central reference to align images that overlap horizontally and vertically by converting them into a spherical layout.
- Reposition: lines up layers and matches shared content without applying Stretch or Skew transformations to the source layers.

Under Lens Correction, use these options for lens defects:

- Vignette Removal: offsets dark corners introduced by lens limits.
- Geometric Distortion: corrects barrel, pincushion, or fisheye distortion.

Choose OK.

## Distribute layers

Use Adobe Photoshop distribution commands to space layers evenly for branding work, print designs, or grid-based compositions.

Irregular gaps can make a composition feel messy and less polished. In Photoshop, distributing layers lets several objects be arranged quickly, helps create visual balance, and supports clean, intentional design. This approach is most useful in structured projects such as brochures, catalogs, and digital ads.

In the Layers panel, choose two or more layers, groups of layers, or both.

Choose Layer > Distribute, then choose one of these commands:

- Top Edges icon: spaces the layers uniformly using their top edges.
- Vertical Centers icon: spaces the layers according to their vertical center points.
- Bottom Edges icon: spaces the layers uniformly using their bottom edges.
- Left Edges icon: spaces the layers uniformly from their left edges.
- Horizontal Centers icon: spaces the layers according to their horizontal center points.
- Right Edges icon: spaces the layers uniformly using their right edges.
- Horizontally icon: makes the horizontal gaps between layers even.
- Vertically icon: makes the vertical gaps between layers even.

Choose the layers to distribute, then apply any distribute command from the Layer menu.

Choose the layers to distribute, then apply any distribute command from the Layer menu.
