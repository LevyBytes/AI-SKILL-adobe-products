# Save Files

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Save and export; Save your work; Save large documents; Revert to legacy Save As options; File saving properties and preferences; macOS image preview options; Common questions on Photoshop cloud documents; Save as Photoshop PDF; Save for Web.

## Save and export

### Save files

Save your work

Save large documents

Revert to legacy Save As options

File saving properties and preferences

macOS image preview options

Common questions on Photoshop cloud documents

Save as Photoshop PDF

Save for Web

### Export files to different formats

Video and animation export formats

Enhance animation frames

Flatten frames into layers

Export video files or image sequences

Photoshop file formats overview

File compression in Photoshop

Supported file formats in Photoshop

Image file formats supported in Photoshop

Export your work using the Quick Export as option

Fine-tune export settings with Export As

Export settings and export location preferences

Export files in different sizes

Export layers as files

Export artboards as PDF

Export artboards as files

Save and export to cloud

### Metadata, CSS, and content credentials

Use Content Credentials

Preview Content Credentials

Export your work with Content Credentials

## Save your work

### Save work in Adobe Photoshop by choosing a file format and storing the document locally or in the cloud.

Select File > Save.

In the Save As dialog box, select Save. Photoshop keeps the document in its existing format and location, with layers and settings preserved.

### Save a document with a new name, location, or format

Select File > Save As.

In the Save As dialog box, enter the file name, choose the format, and pick a location, either local storage or Creative Cloud.

Select additional options as needed: Notes: saves text notes inside the Photoshop file.

Alpha Channels: keeps extra channels used for masks or selections.

Spot Colors: preserves custom spot colors for print output.

Layers: retains all layers instead of flattening the document.

Color: includes a color profile so appearance stays consistent across devices.

Select Save. Depending on the selected format, another dialog box may open with more choices.

Tip

The default save location can be changed to your computer or Creative Cloud. Open Edit > Preferences > File Handling (Windows) or Photoshop > Preferences > File Handling (macOS), choose the preferred setting under Default File Location, and select OK.

Use file saving preferences to control Photoshop save behavior and file recovery.

Configure file saving preferences to manage how Photoshop saves and recovers files.

### Save a copy while preserving your original document

Select File > Save a Copy.

In the Save As dialog box, enter the file name, choose the format, and pick a location, either local storage or Creative Cloud.

Select additional options as needed: Notes: saves text notes inside the Photoshop file.

Alpha Channels: keeps extra channels used for masks or selections.

Spot Colors: preserves custom spot colors for print output.

Layers: retains all layers instead of flattening the document.

Color: includes a color profile so appearance stays consistent across devices.

Select Save.

Photoshop saves the duplicate while leaving the original document open and untouched. Another options dialog box may appear, depending on the format you selected.

To stop Photoshop from adding copy to filenames, open Edit > Preferences > File Handling (Windows) or Photoshop > Preferences > File Handling (macOS). Then enable Do not append "copy" to filename when saving a copy for macOS and Windows. Photoshop warns you when the original file might be overwritten.

Save a Copy is useful for making a new version, such as a flattened JPEG or PNG, while keeping the source document unchanged.

### Create temporary versions without saving to disk

To hold a version of the image temporarily in memory:

- Select Window > History to create a snapshot and hold that image state temporarily.
- Select Image > Duplicate to make an in-memory copy without writing it to your hard disk.

Snapshots work well for quick temporary backups; duplicates are better when a separate edit version is needed.

## Save large documents

### Manage oversized documents in Adobe Photoshop with specialized file formats.

Note

Confirm that sufficient disk space is available. Use special formats when images exceed 30,000 pixels in width or height, or when documents are larger than 2GB.

Select File > Save As.

In the Save As dialog box, enter the document name and choose its location, either local storage or Creative Cloud.

From the dropdown labeled Save as type (Windows) or Format (macOS), choose one of these formats:

- Large Document Format (\*.PSB): stores documents of any size while preserving full Photoshop feature support. Some plug-ins, however, may fail when width or height goes beyond 30,000 pixels.
- Photoshop Raw (\*.RAW): stores documents of any size. The format flattens documents and does not support layers.
- TIFF (_.TIF,_.TIFF): stores documents up to 4GB. Documents above that limit cannot be saved as TIFF.

Choose any other saving options you need.

Select Save.

## Revert to legacy Save As options

### Switch Adobe Photoshop back to the traditional save workflow and control filename handling for duplicate saves.

### Enable legacy Save As workflow

Show Preferences.

- macOS path: Photoshop > Preferences > File Handling
- Windows path: Edit > Preferences > File Handling

Select Enable legacy "Save As".

Note

On macOS, Photoshop displays a warning about possible file overwrites. Select OK to confirm that warning.

Select OK to apply the changes. Save As and Save a Copy now use the legacy save dialog box from Photoshop v22.3 and earlier.

### Control filename appending when saving different versions

Open Preferences.

- macOS path: Photoshop > Preferences > File Handling
- Windows path: Edit > Preferences > File Handling

Find the option named Do not append "copy" to filename when saving a copy.

- On macOS: selecting Enable legacy "Save As" turns this option on automatically, and it stays locked on until that legacy setting is cleared.
- On Windows: this option can be switched on or off separately from Enable legacy "Save As".

Choose OK to keep the preference changes. When Do not append "copy" to filename when saving a copy is enabled, Photoshop warns that files could be overwritten.

## File saving properties and preferences

### Review saving, naming, previews, recovery, format-specific choices, and auto-recovery behavior in Adobe Photoshop.

Photoshop includes settings for save location, retained file data, and the way file management is handled during saving.

### File saving properties

Save As and Save a Copy expose file-saving controls, with the available choices changing according to the format you pick.

Option

Usage

As a Copy

Creates a duplicate in another format or destination while leaving the original untouched.

Notes

Includes notes with the saved image.

Alpha Channels

Keeps alpha channel data in the file. Turn the option off when alpha channels should be removed.

Spot Colors

Keeps spot channel data in the file. Turn the option off when spot colors should be removed.

Layers

Keeps every image layer. If the selected format does not allow that, flatten or merge the visible layers instead.

Use Proof Setup, ICC Profile (Windows), or Embed Color Profile (macOS)

Generates a document with color management.

Save to cloud documents

Stores the file in Creative Cloud so it is available across devices and can be shared.

| --- | --- |

### Additional file-save options

These controls are shown only if File Handling is set to Ask When Saving for Image Previews (Windows) or Append File Extension (macOS).

Option

Usage

Thumbnail (Windows)

Adds notes and a compact preview image so the file is easier to identify in folders or dialog boxes.

Image Previews options (macOS)

Adds notes and a compact preview image so the file is easier to identify in folders or dialog boxes.

| --- | --- |

### File saving preferences

In the File Handling panel of Preferences (Edit > Preferences (Windows) or Photoshop > Preferences (macOS)), adjust extension handling, previews, save behavior, and recovery options to support the workflow and reduce data-loss risk.

Option

Usage

Image Previews

Controls how image previews are saved:

- Never Save: writes files with no previews.
- Always Save: writes files with the selected previews.
- Ask When Saving: lets each file use its own preview choice.

On macOS, choose one or more preview types.

File Extension (Windows)

Adds three-character extensions that identify the file format:

- Use Upper Case: uses uppercase letters for file extensions.
- Use Lower Case: uses lowercase letters for file extensions.

Append File Extension (macOS)

Sets how extensions are added to filenames:

- Never: writes files with no file extensions.
- Always: adds file extensions to filenames.
- Ask When Saving: decides file extensions separately for each file.
- Use Lower Case: adds file extensions with lowercase letters.

Default File Location

Uses either Creative Cloud or the computer as the default save target.

Save As to Original Folder

When selected, starts in the image's source folder; when cleared, starts in the most recently used save folder.

Save in Background

Lets work continue in Photoshop while the file save runs.

Automatically Save Recovery Information Every:

Writes crash-recovery data at the chosen interval.

Enable legacy "Save As"

Returns Photoshop to the older Save As behavior from earlier releases.

Do not append "copy" to filename when saving a copy

Stops Photoshop from inserting the word copy in the filename for duplicate saves.

| --- | --- |

## macOS image preview options

Adobe Photoshop includes preview choices that can keep saved files smaller while making images easier to identify in file browsers.

On macOS, set these controls while saving through Photoshop > Preferences > File Handling > Image Previews. The selected previews help images appear as expected on different systems.

Preview option

Purpose

Icon

Uses the preview as the desktop file icon.

Full Size

Writes a 72ppi version for applications limited to low-resolution Photoshop images. Non-EPS files use PICT for this preview.

Macintosh Thumbnail

Shows a preview inside the File > Open dialog box.

Windows Thumbnail

Writes a preview that Windows systems can display.

| --- | --- |

Note

To reduce save time and file size, enable only the preview types that the workflow requires.

## Common questions on Photoshop cloud documents

Find answers for using Adobe Photoshop cloud documents, including access, saving, cross-device work, and offline behavior.

Cloud documents are Adobe's cloud-native file format, usable online or offline from inside Photoshop. Edits save automatically through the cloud, which supports moving work between devices.

Photoshop cloud documents combine automatic saving for reliability, cross-device access for mobility, full-fidelity layer storage for quality, and direct access to work from Photoshop on any device.

Open cloud documents from the Photoshop home screen in Your files on desktop or iPad, or visit https://www.adobe.com/files/cloud-documents/.

Cloud documents are designed for mobile work and app-to-app workflows among Photoshop, XD, Fresco, and Aero. Creative Cloud Files can hold any file type, but they do not provide the same native cloud-document features.

No, Creative Cloud Libraries cannot open cloud documents. They are available inside Photoshop and at assets.adobe.com, but Libraries do not provide access.

Yes, desktop Photoshop lets you save as either a cloud document or a local file. On iPad, a cloud document can be exported to other formats, including PSD, for local storage.

To make a PSD available across devices, save it as a cloud document by choosing File > Save As > Save to cloud documents.

Version conflicts can happen when the same document is edited on multiple devices at the same time. Before moving to another device, save changes to the cloud to reduce conflict risk.

Yes, offline editing works for any cloud document already stored in the device cache. Open the documents before disconnecting so local copies are available; changes sync after internet access returns.

Cloud documents fully support Embedded Smart Objects. Linked Smart Objects, however, work only on the device where the cloud document was first created.

Lightroom photos and cloud documents both live in the Creative Cloud account, but they are separate stored assets and are not related to each other.

To make Photoshop edits appear in a Lightroom catalog, export the cloud document to a Lightroom-supported format such as PSD or TIFF, then import the photo into Lightroom.

## Save as Photoshop PDF

Save a file as a PDF in Adobe Photoshop when you need editable layers, embedded color profiles, print settings, security choices, or compatibility controls.

Choose File > Save As, then pick Photoshop PDF from the file format menu.

Enable Color to include a color profile and Layers to preserve editability, then choose Save.

In the Save Adobe PDF dialog box, choose an Adobe PDF Preset that matches the output purpose.

Choose Save PDF to write the Photoshop PDF, or continue through optional settings before saving.

Use Standard and Compatibility to set PDF/X compliance and the Acrobat version target.

Adjust the left-panel sections as needed:

- General: defines core PDF settings such as compatibility and initial viewing behavior.
- Compression: changes image resolution and quality to reduce file size.
- Output: controls color handling and PDF/X settings for professional print workflows.
- Security: adds password protection and permission limits. Encryption Level depends on the PDF's Compatibility setting; choose another Compatibility value to change it.
- Summary: checks the selected options before the file is saved.

Choose Save Preset to name the current settings for reuse later, then choose Save PDF.

PDF choices determine behavior in editing, preview, and viewing contexts.

The same PDF settings also influence how the file behaves while it is edited, previewed, or viewed.

## Save for Web

Use Adobe Photoshop export controls to create web-ready images while leaving the original PSD intact.

Save for Web remains available in Photoshop for users who want its familiar interface and detailed export controls. It is useful for web image tuning, including format choice, quality adjustment, and file-size preview before the export is written.

Choose File > Export > Save for Web.

Pick the file format you want: JPEG, PNG, GIF, or WBMP.

Set quality and any other format-specific options.

Review the preview and file size.

Choose Save.

Choose a destination, enter a filename, and choose Save again. The exported file is written to that destination, and the original PSD remains unchanged.
