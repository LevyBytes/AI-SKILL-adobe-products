# Manage Links, Manage Object Styles, Movies And Sound

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Links panel overview; Update, restore, and replace links; Embed or unembed an image within the document; Edit original artwork; About object styles; Create, import, and apply object styles; Remove overrides or break object style links; Edit and manage object styles; Add movie and sound files; Change movie settings; Change media settings for interactive PDF files; Relink legacy media files; Resize movie objects, posters, and frames.

## Links panel overview

Review how the Links panel in Adobe InDesign helps track placed graphics and manage their connection status.

Every placed file in a document, including images, graphics, and other external assets, appears in the Links panel. From that single panel, you can check file status, update linked content, and confirm that output has access to the required assets.

### Understanding link relationships

InDesign handles placed files through two relationship types: linked and embedded. A linked file stays separate from the document and is referenced through a file path to the original source. This keeps document size under control and lets the same graphic appear in multiple places without copying its file data. During export or printing, InDesign uses the original file to produce full-resolution output.

Embedded files work differently: their full-resolution data is copied into the document. The file becomes self-contained, but the document size increases. Bitmap images of 48K or smaller are embedded automatically by InDesign, although they still show in the Links panel so versions can be tracked.

### Panel structure and organization

Files appear in the Links panel as a list, and its columns can be customized to show details such as page number, file name, and status. Sorting from the category columns at the top helps you find particular links quickly, including in complex documents that contain dozens or hundreds of placed assets.

If one graphic is used repeatedly in a document, the Links panel places those instances below a disclosure triangle instead of showing each occurrence as a separate top-level entry. This grouped view cuts visual clutter while still giving access to each instance's details. The same nesting behavior appears when a placed EPS file or InDesign document has links of its own; those dependencies expand under a disclosure triangle so the full linked-content chain is visible.

At the bottom of the panel, the Link Info section shows metadata for selected files, such as file format, modification dates, color space, and effective resolution. Use this information to confirm that placed graphics satisfy output needs without opening another application.

### Link status indicators

In the Status column, the Links panel communicates each file's current condition through visual indicators. Knowing what those indicators mean helps prevent output failures and supports document integrity as production work continues.

When a link is up to date, the Status column shows no icon, meaning the document version matches the source file. The Modified icon appears after the original file has been edited and saved since placement. This often happens in collaborative work, such as when one designer refines images in Adobe Photoshop while another maintains the InDesign layout. With that indicator, you can decide whether the link should be updated to include the latest changes.

The Missing icon indicates that InDesign no longer finds the file at its original path. Common causes include moved files, renamed files, or network drives that are not connected. Until the connection is restored, you cannot confirm whether the missing file is current. Missing links can cause documents to print or export at lower resolution, or they can make output fail completely.

The Embedded icon shows that file contents live inside the document instead of remaining externally linked. Normal update workflows are paused for embedded links. To refresh an embedded file from an outside source, unembed it first.

### Special considerations for InCopy workflows

For InCopy, the Links panel also covers linked stories rather than only graphics. Selecting a linked story makes the Link Info section show editorial metadata, including note counts, managed status, and tracked change information. This lets editorial groups coordinate text updates while they also manage visual assets.

### Workflow integration

Production workflows rely directly on the Links panel. Before packaging files for output, check there that every link is current and located. If preflight finds problems, the Links panel gives the surrounding details needed to correct them. You can also reveal linked files in the operating system's file browser from the panel, which makes source files easier to find for editing.

When an object has a custom name in the Layers panel, that name also appears in the Links panel, making similar-looking content easier to identify in crowded documents. Objects without custom names receive default names from InDesign based on their type and content.

### Platform-specific paths

File paths in the Links panel follow the conventions of the operating system: backslashes on Windows, forward slashes on macOS. In cross-platform collaboration, recognizing those path-format differences helps diagnose link problems that come from platform-specific folder structures.

## Update, restore, and replace links

Use the Links panel in Adobe InDesign to refresh graphics that changed, reconnect files that are missing, and substitute different source assets.

The Links panel can update modified graphics, relink missing files, and replace source assets. These actions keep the layout tied to current file versions and preserve correct link connections.

### Update modified links

Open Window > Links.

Choose one or more links that show the modified-link icon.

Click the Update Link icon.

### Restore missing links

Open Window > Links.

Choose any link marked with the Missing icon.

Click the Relink icon.

Enable Search for Missing Links in This Folder when all missing files in that folder should be relinked.

Find the file, then double-click it to restore the link.

### Replace a link with a different source file

Open Window > Links.

Choose the link, then click the Relink icon.

Enable Search for Missing Links in This Folder when you want InDesign to look for other missing files with the same names.

Enable Show Import Options if the new source file needs controlled import settings.

Find the new source file and double-click it.

After choosing Show Import Options, select the needed import options and then click OK.

## Embed or unembed an image within the document

Learn how Adobe InDesign can move placed graphics between linked and embedded states.

InDesign lets you use the Links panel to embed or unembed images, which controls whether graphics stay connected to outside files or are stored inside the document. Linked graphics usually keep the document smaller; embedded graphics make the document self-contained. Moving between those states supports different approaches to file management.

### Embed a linked image

Open Window > Links.

Choose the linked file.

From the Links panel menu icon, select Embed Link.

For every occurrence of the graphic, select Embed All Instances Of [Filename].

### Unembed an image to restore linking

Open Window > Links.

Choose one or more embedded files.

From the Links panel menu icon, select Unembed Link or Unembed All Instances Of [Filename].

From the Links panel menu icon, select Relink.

Choose the original file when the existing link should be restored. To generate a new file from the embedded data, choose a folder instead.

## Edit original artwork

Learn how linked graphics can be opened from Adobe InDesign in their source applications for direct editing.

Use Edit Original in InDesign to open linked graphics in their native applications for artwork edits. Updates saved in the source application automatically appear in the linked graphic inside the document. This workflow makes artwork updates faster because you do not need to locate source files manually.

### Edit artwork in the default application

Open Window > Links.

On the page or inside the panel, choose the linked graphic or graphics you need.

Use the Edit Original icon, or go to Edit > Edit Original.

Change the graphic in its source application.

In that original application, save the file.

### Edit artwork in a different application

Open Window > Links.

On the page or in the panel, choose the linked graphic or graphics you need.

Open Edit > Edit With, then pick the application you want to use.

If required, choose Other and then select the application.

Edit the graphic in the application you selected.

Choose Save.

## About object styles

Reusable attribute settings let Adobe InDesign object styles automate formatting for frames, graphics, and text.

InDesign object styles help keep graphics and frames formatted consistently. An object style can carry stroke, color, transparency, drop shadows, paragraph styles, text wrap, and additional attributes. Transparency effects can be assigned separately for the object, fill, stroke, and text. Build a style from settings already applied to an object, start a new style from nothing, or derive it from another style.

### Control how styles affect objects

Object styles can be applied to objects, groups, and frames, including text frames. Depending on how it is defined, a style can wipe and replace every object setting or update only chosen settings while preserving the rest. The style definition controls that behavior through the categories you include, exclude, or leave alone.

### Use object styles with frame grids and related styles

Frame grids can use object styles too. Each newly created frame grid starts with the Basic Grid object style unless you change it. You may revise Basic Grid or assign another object style to the grid. In grid styles, Story Options sets the writing direction, frame type, and named grid.

When styles need to share attributes, make one object style depend on another instead of entering identical settings repeatedly. After the base (parent) style changes, InDesign updates those shared attributes in every dependent (child) style automatically.

### Object style categories

If a style should affect only some attributes while leaving others as they are, place each relevant category in the needed state. Categories can be turned on, turned off, or ignored.

For instance, enabling Drop Shadow adds drop shadow formatting to the object style. Disabling Drop Shadow removes drop shadow within the style, which makes any drop shadow already on an object show up as an override. Ignoring Drop Shadow, shown as a small box or hyphen depending on the OS, excludes drop shadow from the style so an object's drop shadow is not treated as an override.

Categories with settings that are individually on or off, including Fill, Stroke, and Transparency, use only two states: turned on or ignored.

Paragraph Styles starts ignored by default, even for a new text frame, and affects only unthreaded text frames.

### Use default object styles

Whenever you create an object, InDesign assigns a default object style. New documents include a default collection in the Object Styles panel, and InDesign chooses a style from that set according to the object type.

Use the Object Styles panel menu to set defaults and control which styles InDesign applies automatically.

## Create, import, and apply object styles

Create, apply, and import object styles in Adobe InDesign so frames and graphics keep consistent formatting throughout a document.

The Object Styles panel is where you create, edit, and apply object styles. In a new document, the panel begins with the default object style set. Object styles are stored with the document and appear in the panel whenever that document is opened. Text Frame identifies the default style used for text frames. Graphics Frame identifies the default style used for graphics frames and drawn shapes.

### Create a new object style

Choose the object or text frame whose settings should become part of the object style.

Open Window > Styles > Object Styles.

From the panel menu icon, choose New Object Style.

Enter a style name in the Style Name field.

In the Based On drop-down menu, choose a style if this style should be based on another. Based On connects styles so edits to one are reflected in the others. When child-style formatting has changed and you want to return it to the starting point, choose Reset To Base to restore the base style.

Click the Shortcut field, then press the keys you want to assign together. If that key combination already belongs to another InDesign function, a message appears below the Shortcut field.

Under Basic Attributes, review the categories and enable the ones the style should include.

Select each category and set its options, such as stroke weight, fill color, or transparency.

If you intend to export to EPUB, HTML, or accessible PDF formats, review Export Options and set Alt text or tagging choices as needed. Use object styles to keep object formatting consistent.

Use object styles to keep object formatting consistent.

Choose OK to create the style.

### Import Object Styles

Styles can be brought in from other documents. InDesign also brings in swatches, custom strokes, character styles, and paragraph styles that those styles rely on. When an imported swatch, stroke, or paragraph style matches an existing name but has different values, InDesign changes the imported name. Named grids included with imported object styles are imported too.

Open Window > Styles > Object Styles.

From the panel menu icon, choose Load Object Styles.

Open the file that contains the object styles you want to import.

Choose the styles to import, then choose Open.

When a style name conflict appears, use the Load Styles dialog box and choose a Conflict with Existing Style option:

- Use Incoming Definition: replaces the current style with the loaded one and applies the loaded attributes to every object that used the previous style. For comparison, the Load Styles dialog box displays both the incoming and existing style definitions.
- Auto-Rename: gives the loaded style a new name.

Choose OK. The imported object styles appear in the Object Styles panel.

### Apply an object style

Applying an object style to grouped objects applies that style to every object in the group. To style a collection as one object, put the objects inside a frame.

Choose an object, frame, or group.

Open Window > Styles > Object Styles.

Choose the style to apply. You can also apply a style without first selecting the target by dragging an object style onto an object.

## Remove overrides or break object style links

Clear overrides, remove ignored attributes, or disconnect object style links in Adobe InDesign to return formatting to the intended state.

If formatting no longer matches the applied style definition, InDesign marks that difference as an override. A plus icon beside the style name signals the override.

### Clear formatting defined by the style

Choose the object or group that needs updating.

Open Window > Styles > Object Styles to show the Object Styles panel.

Find the applied style name with the plus icon that signals overrides.

Click the Clear overrides icon at the lower-right of the Object Styles panel.

### Clear attributes the style ignores

You can strip attributes even when the style is not controlling them. For example, if fill is ignored by the style and you add a red fill, clearing ignored attributes removes that fill.

Choose the object or group that needs updating.

Open Window > Styles > Object Styles to show the Object Styles panel.

In the Object Styles panel, use the Clear attributes not defined by style icon at the lower-right.

When a category is turned off rather than ignored, use Clear Overrides.

### Break the link to an object style

Choose the object that has the object style applied.

Open Window > Styles > Object Styles.

From the panel menu icon, choose Break Link to Style. To discard the object style formatting instead, choose [None] in the Object Styles panel.

## Edit and manage object styles

In Adobe InDesign, manage object styles by setting defaults, renaming styles, editing them, deleting them, or redefining them.

### Set default object styles

Open the Object Styles panel and choose the panel menu icon.

Choose one of these options to set the default style:

- Choose Default Text Frame Style, then choose the object style that should be the default for new text frames.
- Choose Default Graphics Frame Style, then choose the object style that should be the default for new graphics frames.
- Choose Default Grid Style, then choose the object style that should be the default for new grid frames.

Optionally, reassign that object type's default by moving the default object type icon from its current object style to another one.

Graphic placeholder frames, the ones marked with an X, always use the None style and cannot have another default. Selecting an object style while no frame is selected makes it the default for text or graphics according to the active tool.

### Rename an object style

Open Window > Styles > Object Styles to show the Object Styles panel.

Double-click the object style whose name you want to change.

In the Object Style Options dialog box, enter a new name in the Style Name field.

Choose OK.

An object style can also be renamed directly in the panel. Choose the object style, pause briefly, and choose it again to edit its name.

### Edit object style properties

Open Window > Styles > Object Styles.

On the style name, use Right-click (Windows) or Control-click (macOS), then choose Edit [style name]; this opens the style for editing without applying it to selected objects or making it the default. Another option is to select an object and double-click a style name, which applies the style while opening it for editing.

In the Object Style Options dialog box, update the settings you want.

Choose OK.

### Delete an object style

Open Window > Styles > Object Styles.

Choose the object style you want to remove, then click the Delete icon.

If a style is applied to objects or acts as the basis for other styles, choose one of these replacement options in the Delete Object Style dialog box:

- Choose a replacement style and choose OK to apply that replacement to objects that used the deleted style.
- Choose [None], verify that Preserve Formatting is selected, and choose OK so the objects keep their current appearance.
- Choose [None], deselect Preserve Formatting, and choose OK to clear every attribute setting.

From the Object Styles panel menu, choose Select All Unused, then click the Delete icon to remove every style that is not applied to objects.

### Redefine an object style

Using the Selection Tool icon, pick a frame, shape, or text frame already formatted with the style you want to change.

Open Window > Styles > Object Styles.

Change the object's appearance attributes as needed.

From the panel menu icon, choose Redefine Style. The object style definition is updated to match the override settings you applied. Every instance of that object style in the document switches to the new settings.

When Redefine Style is unavailable, the attributes you changed are not included in the object style definition. To revise the definition directly, use the Object Style Options dialog box or build a new style from that object.

## Add movie and sound files

Add movie and sound files in Adobe InDesign when creating interactive documents.

Movie and sound files can be added to InDesign documents so Interactive PDFs include video and audio. These media elements improve digital viewing. Media files are placed as linked objects inside frames, and playback options are configured in the Media panel.

### Place a movie or sound file from a disk

Choose File > Place, find the MP4, MOV, or MP3 file for import, and open it by double-clicking.

Put the media onto the page at original size, or drag out a frame with the dimensions you need.

Open Window > Interactive > Media.

Adjust the Options in the Media panel.

Choose File > Export.

In the Save as type (Windows) or Format (macOS) menu, choose Adobe PDF (Interactive).

### Place a video from a URL

Draw a graphic frame with the Rectangle Frame tool, or choose an existing video object that the new video should replace.

Open Window > Interactive > Media.

Use the Place a video or audio file icon at the panel's lower-right corner, then choose Place Video from URL.

Type the full URL, including http:// or https://, for an H.264-encoded MP4 or MOV file, and confirm with OK.

Choose File > Export.

In the Save as type (Windows) or Format (macOS) menu, choose Adobe PDF (Interactive).

## Change movie settings

Control video playback in interactive PDFs by changing movie settings in Adobe InDesign.

InDesign movie settings determine video behavior in Interactive PDFs. They let you set playback behavior, pick the poster image shown before playback begins, and manage the controls available for video. These controls are for H.264 video files, specifically MP4 and MOV files, embedded in the document.

### Set up movie playback and display

With the Selection tool, choose the movie object in the document.

Open Window > Interactive > Media.

Enable Play on Page Load when the movie should start automatically as the page opens.

Enable Loop when continuous replay is required.

Choose a poster frame in the Poster drop-down menu.

### Create navigation points

Open Window > Interactive > Media.

After selecting the movie object, drag the preview slider to the frame that needs a navigation point.

Use the plus (+) icon below the preview area to place a navigation point on the current frame.

Add more navigation points the same way whenever they are needed.

Create an action, set that action to Video > Play from Navigation Point, and choose the needed navigation point.

Open Window > Interactive > EPUB Interactivity Preview.

Preview the movie and confirm that playback behaves as intended.

Choose File > Export.

In the Save as type (Windows) or Format (macOS) menu, choose Adobe PDF (Interactive).

## Change media settings for interactive PDF files

Set media options in Adobe InDesign for interactive PDFs so playback and accessibility behavior are controlled.

InDesign media settings define how movies and sound files work in Interactive PDFs. You can set playback choices and provide descriptions that improve accessibility. During export to Adobe PDF (Interactive), these settings add control over how supported PDF viewers display the media.

Use the Selection tool to choose the media object.

Open Window > Interactive > Media.

Click the panel menu icon.

Choose PDF Options.

In Description, type text to show in Acrobat when the media file cannot play. The same description is also used as alternative text for visually impaired users.

For separate-window playback, enable Play Video in Floating Window. Audio files do not offer this option.

Set Size in relation to the source video's dimensions.

Choose the Position for the floating window, and then confirm with OK.

## Relink legacy media files

### Relink legacy media files in Adobe InDesign for current interactive export workflows.

Relinking legacy media lets you swap older formats for MP4 (video) and MP3 (audio), improving compatibility in interactive exports.

### Convert legacy media files

Launch Adobe Media Encoder and add the video files that need conversion.

Choose an H.264 preset in the Format drop-down menu.

Click the play icon to start encoding, then allow the conversion to finish.

For non-MP3 audio, convert the files to MP3 format with a third-party application such as Apple iTunes or Audacity.

### Relink media files in your document

Open Window > Links.

Find the legacy media file and select it.

Open the panel menu icon, then choose Relink.

Browse to the folder where the converted MP4 or MP3 file was saved.

Choose the converted media file, then click Open.

When the same legacy media file appears in several places, select its parent link in the Links panel. Next, open the panel menu icon and choose Relink All Instances Of [Filename] so every occurrence updates.

## Resize movie objects, posters, and frames

Adjust media-element dimensions in Adobe InDesign so video displays at the intended size.

InDesign lets you size media elements to control video appearance in Interactive PDFs. Movie objects, poster images, and frames may each be resized on their own, while the movie object sets the final playback dimensions. Keep poster and movie sizes matched for predictable results. In exported PDFs, movies sit on the topmost layer, so any overlapping objects appear below them.

Select the movie frame on the page.

To scale the movie object, poster, and frame together with proportions maintained, choose the Scale tool and Shift-drag any corner handle on the frame.

To change just the frame boundary while leaving the movie and poster unchanged, choose the Selection tool and drag a corner handle.

To adjust only the poster or movie object, choose the Direct Selection tool, then return to the Selection tool and drag a corner handle.

When needed, use Object > Fitting commands to resize a poster within its frame.

## See also

- [Paragraph Styles](uxp-paragraph-styles.md)
