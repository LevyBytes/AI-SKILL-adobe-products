# Importing Graphics (part 2)

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Importing graphics — Find missing links

InCopy normally checks for absent links and attempts to repair them as a document opens. Two preferences control whether InCopy automatically checks for missing links and locates them during document opening.

Check Links Before Opening Document

With this option disabled, InCopy opens the document right away, and each link status stays pending until InCopy determines whether the link is up-to-date, missing, or modified. With the option enabled, InCopy looks for modified or missing links.

Find Missing Links Before Opening Document

When this option is disabled, InCopy makes no attempt to resolve missing links. Disable it when link checking slows access to a server or when unexpected relinking happens. If Check Links Before Opening Document is disabled, this option appears dimmed.

Search For Missing Links

The Search For Missing Links command searches the document and resolves missing links. Use it after disabling the opening-time preference for missing-link checks if the document now contains missing links. It is also useful when, after opening a document, you mount the server that stores the images.

- To adjust link settings, open File Handling in the Preferences dialog box and check whether Check Links Before Opening Document and Find Missing Links Before Opening Document are selected.
  The command is dimmed when the document has no missing links.

## Importing graphics — Specify a default Relink folder

In the Preferences dialog box, select File Handling. From Default Relink Folder, choose one of these options, and then click OK:

Most Recent Relink Folder

Shows the folder most recently chosen during relinking, which matches InCopy CS3 behavior.

Original Link Folder

Shows the linked file's original location, which matches InCopy CS2 and earlier behavior.

## Importing graphics — Copy links to a different folder

Copy Link(s) To copies graphics files into another folder and repoints the links to those copies. It is particularly helpful when moving linked files to another drive, such as transferring files from a DVD to a hard drive.

Select the links for the files to copy, then choose Utilities > Copy Link(s) To from the Links panel menu. Set the destination folder for the linked-file copies and choose Select (Windows) or Choose (Mac OS).

## Importing graphics — Relink to a different folder

Relink To Folder lets you redirect links to a folder holding files with the same names as the out-of-date links. For example, links that currently target low-resolution images can be redirected to another folder containing high-resolution versions. A different file extension can also be supplied, so links can move from .jpg to .tiff, for example.

Managed InCopy stories make Relink To Folder unavailable until the story has been checked out.

In the Links panel, select one or more links. Choose Relink To Folder from the Links panel menu. Enter the new folder location. To switch extensions, enable Match Same Filename But This Extension and enter the new extension, such as AI, TIFF, or PSD. Use Select (Windows) or Choose (Mac OS).

## Importing graphics — Relink files with different file extensions

Relink File Extension replaces images according to file extension. For instance, several JPEG images in a document can be replaced by PSD files. The replacement files with the other extensions must be stored in the same folder as the linked files that are being replaced.

Confirm that files using the replacement extensions sit in the original files' folder. In the Links panel, select one or more links. Choose Relink File Extensions from the Links panel menu. Enter the extension to use for the selected-file replacements, and click Relink.

## Importing graphics — Replace an imported file using the Place command

Do one of the following:

For a graphics frame that contains an imported graphic, select the frame with the Selection tool.

For the image inside a graphics frame, select the image with the Position tool.

For text-frame contents, place an insertion point with the Type tool, then choose Edit > Select All.

Choose File > Place. Find and select the new file. Verify that Replace Selected Item is selected, and then click Open. Click Open.

## Importing graphics — Copy the link pathname

InCopy can copy either a linked image's full path or its platform style path. The full image path is helpful when telling team members where artwork is stored; for example, you can paste the full path into an email message. The platform path helps with scripts and data-merge image fields.

In the Links panel, select a link. Use the Links panel menu command Copy Info > Copy Full Path or Copy Platform Style Path. Then paste the path.

## Importing graphics — Edit original artwork

Edit Original opens most graphics in the application used to create them, allowing you to make needed changes there. After the original file is saved, the document containing the link updates to the new version.

Note

In InDesign, when a managed graphics frame that has been exported to InCopy is checked out and selected instead of the graphic itself, the graphic opens in InCopy.

## Importing graphics — Edit original artwork using the default application

By default, the operating system tells InCopy which application should open the original file.

On the page or in the Links panel, select one or more images. Then use any of these commands:

Use the Edit Original button in the Links panel.

Choose Edit > Edit Original.

When edits in the original application are complete, save the file.

## Importing graphics — Edit original artwork using a different application

Select the image. Choose Edit > Edit With, and then specify the application that should open the file. If the application is not listed, choose Other and browse to find it.

## Importing graphics — Control layer visibility in imported images

Top-level layer visibility can be controlled when importing Photoshop PSD files, layered PDFs, and INDD files. InCopy layer-visibility adjustments let one illustration serve different contexts. For example, a multilanguage publication can use one illustration that contains a separate text layer for each language.

Layer visibility can be set either during file placement or through the Object Layer Options dialog box. When a Photoshop file includes layer comps, the desired comp can also be displayed.

## Importing graphics — Set layer visibility

Do one of the following:

To import a graphic before creating a frame, make sure nothing in the document is selected.

Existing frame: select the frame that should receive the graphic.

Existing image replacement: choose the graphics frame.

Use File > Place and pick the graphics file. If the selected object should be replaced, enable Replace Selected Item. Enable Show Import Options; click Open. When the Image Import Options or Place dialog box appears, open the Layers tab. For an image preview, click Show Preview. (PDFs only) When placing a page from a multipage PDF, use the arrows or enter a page number below the preview image to inspect a particular page. (Photoshop PSD files only) If the image includes layer comps, pick the comp to show from the Layer Comp pop-up menu. Then use one of these controls:

Expand or collapse a layer set with the triangle to the left of the folder icon.

Hide a layer or layer set by clicking the eye icon beside it.

Show it by clicking its empty eye column.

To isolate a specific layer or layer set's contents, Alt-click (Windows) or Option-click (Mac OS) its eye icon. Repeat Alt-click or Option-click on the eye icon to restore the other layers' previous visibility settings.

Drag through the eye column to change visibility for several items.

Choose the desired When Updating Link setting:

Use Photoshop’s/PDF’s Layer Visibility

Updates the link by matching layer visibility to the settings in the linked file.

Keep Layer Visibility Overrides

Keeps the layer visibility settings that were in effect when the file was first placed.

Click OK. Click OK again, and use one of these placement methods:

For a new frame, click the loaded graphics icon in the layout where the graphic's upper-left corner should appear.

For an existing unselected frame, click the loaded graphics icon anywhere inside that frame.

For an existing selected frame, no further action is required. The image appears in that frame automatically.

Note

If you replace an existing graphic by mistake with the image being placed, press Ctrl+Z (Windows) or Command+Z (Mac OS) to restore the original image to the frame and show the loaded graphics icon.

## Importing graphics — Set layer visibility for placed AI, PSD, PDF, and INDD files

Layer visibility remains adjustable after placement for Illustrator AI, InDesign INDD, Photoshop PSD, and layered PDF files by using the Object Layer Options dialog box. If a Photoshop PSD file has layer comps, you can pick the comp to display. You can also decide whether link updates preserve the visibility overrides or synchronize with the original file's settings.

In the InCopy document, select the file. Choose Object > Object Layer Options. Enable Preview to inspect the image. (Photoshop PSD files only) If the image includes layer comps, pick the comp to show from the Layer Comp pop-up menu. Then use one of these controls:

Expand or collapse a layer set with the triangle to the left of the folder icon.

Hide a layer or layer set by clicking the eye icon beside it.

Show it by clicking its empty eye column.

To isolate a specific layer or layer set's contents, Alt-click (Windows) or Option-click (Mac OS) its eye icon. Repeat Alt-click or Option-click on the eye icon to restore the other layers' previous visibility settings.

Drag through the eye column to change visibility for several items.

Choose the desired Updating Link Options setting:

Use Layer Visibility

Updates the link by matching layer visibility to the settings in the linked file.

Keep Layer Visibility Overrides

Keeps the layer visibility settings that were in effect when the file was first placed.

Click OK.

## Importing graphics — Importing InDesign (.indd) pages

The Place command can bring pages from one InDesign document into another. You may import one page, a range of pages, or the full document. Imported pages behave as objects, similar to imported PDFs.

Create enough pages in the document to receive the pages being imported. After choosing File > Place and selecting an INDD file, you can enable Show Import Options, then choose the pages to bring in, the layers to show, and the crop method for the imported pages. Scroll in the Preview window to inspect thumbnail pages more closely. The selected page or pages are loaded in the graphics icon. When multiple pages are placed, InCopy loads the graphics icon with the next page, letting you import the pages sequentially.

### More like this

- Keys for moving and transforming graphics
- Links panel video

Note

In the Links panel, each imported page name appears. If an imported page contains a graphic or another item imported into that page, the Links panel lists that item too. These secondary imported item names appear under a disclosure triangle in the Links panel so they can be distinguished from imported pages.
