# Generate Images With Text Prompts, Extend An Image Beyond Its Border, Apply Effects To Text And Shapes, Add Images ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generate images with text prompts; Extend images beyond borders; Apply effects to text and shapes; Add images to documents; Add and manage graphics from CC libraries; Edit images; Import Firefly assets; Import options for Adobe files; Import options for image formats; Import Illustrator graphics; Use Adobe Stock images; Create contact sheets; Generate alt text for images.

## Generate images with text prompts

Use Text to Image in Adobe InDesign to make Photo or Art images from short text prompts.

InDesign includes Text to Image, powered by Adobe Firefly, so you can describe the Photo or Art result you need and review several generated variations. After comparing the variants, pick the one that best supports the layout.

Open Window > Text to Image. The Text to Image panel is also available from the Contextual Task Bar.

Enter the image description in the Prompt field.

Tip

For ideas, open the Sample Prompts section and select one of the available prompts to inspect its text and image variations.

Select Advanced to tune the prompt further.

The advanced options help narrow the prompt so the generated variation better matches the intended result.

The advanced options help narrow the prompt so the generated variation better matches the intended result.

For Aspect ratio, use Frame dimensions, or Landscape (4:3), or Portrait (3:4), or Square (1:1), or Widescreen (16:9), or Vertical (9:16).

Choose the Content type as Photo or Art for the result you want. If the choice is unclear, turn on Auto so InDesign selects the Content type automatically.

For customization, add a Reference Image and then choose Style Effects.

Select the Generate icon.

From the three choices in the Variations section, choose an image and place it anywhere in the document.

To edit the placed variation, right-click it, select Edit With, and then select any application.

In the Text to Image panel, hover over a variation, select the ellipsis icon, and choose Place variation, or Good Result icon, or Bad Result icon, or Report variation icon, or Delete variation icon.

## Extend images beyond borders

Generative Expand adds content into the blank area of an image frame, matching the original image naturally.

Note

- Keep an internet connection active because cloud processing is required for Generative Expand.
- Mainland China does not offer Generative Expand.

In the InDesign document, place an image, then drag its frame outward to expand the image size.

You may also choose an image whose frame already contains empty space.

Choose Generative Expand from the Contextual Task Bar. Generative Expand can also be opened through File > Generate or Window > Generate.

Select Generate so existing image content is extended into the empty frame area with matching elements.

You can also enter a description of the desired output in the prompt field, then select Generate.

Caution

Rotated images do not work correctly with Generative Expand.

Use the left or right arrows to review prompt variations and choose one. The chosen variation replaces the original image. To inspect earlier variations, choose Window > Generate. After generation, the Contextual Task Bar and panel switch to Text to Image because the text frame no longer includes empty space.

Generated variations are saved locally at C:\Users<username>\Documents\InDesign GenAI Assets (Windows) or /Users/username/Documents/InDesign GenAI Assets (macOS).

Use the ellipsis icon for Show Generate Panel, Generative AI User Guidelines, Hide Context Bar, Pin Context Bar.

After you choose Hide Context Bar, the Contextual Task Bar stops opening by default. To show it again in the workspace, choose Window > Contextual Task Bar.

### Key capabilities

- Generative Expand uses AI to extend existing images so they fit the referenced layout frame.
- A text prompt can be used to build a particular background for the reference image.
- With Generative Expand, an image can be extended into another aspect ratio and the open space is filled within seconds.
- Generative Expand supplies three choices, giving you several creative directions to evaluate.
- To edit a generated variation, right-click the selected variation, select Edit With, then select any application.
- For generated images sent to InDesign, the current Firefly model returns 2K resolution output (up to 4K for expands).

### Tips and tricks

- Start by deciding the frame size you want. Place the image inside that frame with the expansion direction in mind. For instance, an image positioned at the far left of the frame extends toward the right boundary. Generative Expand fills the available white space.
- Use the text prompt when the expansion should include particular elements.
- Keep prompt wording plain and concise, roughly 3-8 words, with a description, color, or scene. Commands such as add or remove are unnecessary. Use short phrases such as 'vivid tropical flowers,' 'sunrise behind a mountain range,' 'person wearing headphones,' or 'an ice cream shop interior.' Learn more about writing effective prompts.
- The generated image replaces the original image in the document. When you need to keep the original, save a copy before applying Generative Expand.

## Apply effects to text and shapes

Use Generative Fill in Adobe InDesign to apply effects to text and shapes from a simple text prompt.

Note

Generative Fill (beta) supports only English (North America) and English (International).

Generative Fill (beta) can turn SVGs, shapes, or text into images that use custom textures and effects for richer layouts.

Select text or a shape, then select the Generative Fill (beta) icon from the Contextual Task Bar. The Text to Image panel drop-down can also switch to Generative Fill (beta).

For text use, Generative Fill (beta) requires single-line text under 25 characters with a font size of 48 pts or larger.

Describe the effect to fill the selected text or shape. For ideas, select the Sample Effects icon.

Select Generate.

Use the left or right arrow to review and switch among the generated prompt variations.

Open the ellipsis icon to access Show Text to Image Panel icon, or View GenAI Guidelines icon, or Hide Context Bar icon, or Pin Context Bar icon.

Note

After Hide Context Bar icon is selected, the Contextual Task Bar no longer opens by default. Choose Window > Contextual Task Bar to display it in the workspace.

### Example prompts

- Mention a texture such as soft sheep wool, a color such as red neon lights, etc.
- Use Shape tool shapes, including rectangles, circles, etc.
- Use simple shapes drawn with the Pen or Pencil tool.
- Use text fonts that are bold, and thick.

### Known issues

- Generative Fill (beta) may behave incorrectly when it is applied to text containing multiple colors.
- If you cancel Generative Fill (beta) while variations are still being generated, the selected text loses its text properties.

## Add images to documents

Insert one graphic or many graphics in Adobe InDesign while controlling the relevant import settings.

InDesign can work with formats including PSD, AI, PDF, JPEG, PNG, TIFF, EPS, and BMP. Using the Place command brings graphics in as linked assets, which are then managed efficiently from the Links panel. Moving graphics inside InDesign keeps their attributes, while copying from another application can discard them.

### Place a single graphic

Choose File > Place.

Browse to an image file and select it.

Choose the option that matches what you need:

- Show Import Options: opens format-specific configuration choices.
- Replace Selected Item: swaps in the chosen file for an existing image.
- Create Static Captions: creates a caption using the image metadata.

Select Open.

If Image Import Options were requested, set or adjust them, then select OK.

Place the image in the way needed:

- Drag to draw a frame that contains the image.
- Select an existing frame as the image destination.
- Alt-click (Windows) or Option-click (macOS) to stack every page of a multipage file in overlapping placement.

Tip

Note: Use the right or left arrows to cycle through loaded graphics. Press Esc to remove the frontmost graphic from the loaded graphics icon without placing it in InDesign.

### Place multiple graphics

Choose File > Place.

Hold Ctrl (Windows) or Cmd (macOS), then select several image files.

Select Show Import Options.

Select Open.

For each image, set or adjust Image Import Options and select OK.

Place the images in the way needed:

- Click to place the images into new frames.
- Drag to draw frames at custom sizes.
- Use Shift + Ctrl-drag (Windows) or Shift + Cmd-drag (macOS) to arrange all loaded graphics as a grid.

Note

Note: To place several graphics as a grid, drag first, adjust the row count with the up or down arrows and the column count with the left or right arrows, then release the mouse. Additional graphics can be added with File > Place while the loaded graphics cursor remains active.

## Add and manage graphics from CC libraries

Use Adobe InDesign layouts with shared graphics stored in Creative Cloud Libraries, including placement and management workflows.

InDesign can reuse shared assets in layouts through graphics stored in Creative Cloud (CC) Libraries. Depending on the workflow, those graphics can be placed as linked or embedded assets. Library updates flow into linked assets, while embedded assets stay separate from the source.

### Place a graphic from CC Libraries

Open Window > CC Libraries.

Select Your Library.

Find the graphic to place within the Graphics category.

Drag that graphic from the CC Libraries panel onto the document page.

### Place graphics using the menu command

Choose File > Place from CC Libraries. The panel narrows the view to graphics only.

Select a graphic, then select Place. The graphic is loaded into the cursor.

Click to place it at actual size, or drag to draw a frame.

### Manage library-linked graphics

Open Window > Links.

Select the placed graphic.

For an update, select the Update Link icon.

To reveal where the graphic comes from, right-click the link and select Reveal in CC Libraries.

### Edit library graphics

Open Window > CC Libraries.

Right-click the graphic to change, then choose Edit.

Make the edits in the document window.

Choose File > Save. The asset is updated in the CC Library, and linked instances display an update notification in the Links panel.

## Edit images

Edit images in Adobe InDesign with the Adobe Express image editing tools.

Place the image that needs editing in the InDesign document.

Right-click the image and select Edit with Adobe Express.

Express can also be reached from the contextual taskbar by selecting Edit with Adobe Express, from Quick Actions in the Properties panel, from the context menu with Edit With > Adobe Express, from the Links panel using Edit With > Adobe Express, or from the Edit menu with Edit With > Adobe Express.

The Express image editor tools can make these changes:

- Use filters and visual effects
- Crop away unwanted areas
- Remove backgrounds or selected objects
- Add shapes, icons, or text
- Change opacity, brightness, contrast, and color
- Flip horizontally or vertically

Select Apply in the top-right corner to preview the updated image in InDesign.

Choose one save option: Discard, Replace, Save as New & Relink, or Save as New & Replace.

- Save as New & Relink can be used for every supported linked image. It updates all linked instances of an image.
- Save as New & Replace can be used to update the selected embedded instance.

Select Save as New & Relink to update all instances of the supported linked images.

Select Save as New & Relink to update all instances of the supported linked images. Select Save as New & Replace to update the selected embedded instances.

Select Save as New & Replace to update the selected embedded instances.

Note

- Edit with Adobe Express supports PNG, JPEG, PSD, and AI files in RGB color mode, but CMYK color models are not supported.
- After editing in Adobe Express, PSD, AI, and PSDC assets are exported and saved as PNG files, with transparent backgrounds retained after background removal.
- Unsupported locales are Russian, Hungarian, Czech, and Ukrainian; English (Israel) and English (United Arab Emirates); Spanish (Mexico); French (Canada); and French (Morocco).

## Import Firefly assets

Bring Firefly-generated assets directly into Adobe InDesign layouts.

InDesign can place Adobe Firefly-generated content from your generation history without leaving the layout workflow.

Open any InDesign document.

Choose File > Place, and then choose Place from Adobe cloud storage.

Choose the Generation history icon, pick an asset, and then choose Place.

Click a location to place the image at its original dimensions, or drag to draw a frame at the size you want.

## Import options for Adobe files

Review the placement settings used for Photoshop, PDF, Illustrator, and Adobe InDesign files, including layer and crop controls.

When Adobe files include layers, pages, or special placement settings, these options control how the content enters the document. Open them through File > Place by enabling Show Import Options, selecting the file, and choosing Open. From there, you can pick pages, adjust layers, define crop boundaries, and set transparency before the item is placed. InDesign keeps these attributes, although moving the content into other applications can discard them.

Note

Placed InDesign (INDD) files share the PDF placement controls. Matching page sizes are not required, and imported pages keep their source dimensions.

## Import options for image formats

See the format-specific placement controls for EPS, PSD, TIFF, GIF, JPEG, BMP, and PNG graphics in Adobe InDesign.

Graphic-format import settings are separate from the Adobe-file import controls. Check them when diagnosing placement problems. They appear from the Place dialog box at File > Place when Show Import Options is selected. Which settings appear depends on the file type; they handle clipping paths, alpha channels, color management, transparency, and preview behavior.

### PSD, TIFF, GIF, JPEG, and BMP import options

Tab

Option

Description

Show Preview

Shows the image preview before the graphic is placed.

Image

Apply Photoshop Clipping Path

Uses the clipping path embedded in the file. This option appears only when a PSD or TIFF includes a clipping path.

Alpha Channel

Brings in transparency from the chosen alpha channel. It is available only for files that contain alpha channels.

Layers

Show Layers

Sets which layers are visible. Use the eye icon to turn layers on or off; Alt-click (Windows) or Option-click (macOS) hides all other layers.

Layer Comp

(Photoshop only) Shows the chosen layer comp from the PSD file when layer comps exist.

Update Link Options

Controls layer visibility:

- Use Photoshop's Layer Visibility: When the link is updated, layer visibility follows the source PSD file.
- Keep Layer Visibility Overrides: The layer visibility choices made during import are retained, even after the link updates.

Color

Profile

Sets the source profile for color. Choose Use Document Default or select a profile that matches the source graphic.

Rendering Intent

Determines how colors are converted for the output device:

- Perceptual (Images): Keeps continuous-tone image colors visually accurate. Intended for photographic images.
- Saturation (Graphics): Keeps color intensity. Intended for solid graphics.
- Relative Colorimetric: Maps in-gamut colors exactly. Intended for solid color areas.
- Absolute Colorimetric: Keeps exact color values. Intended for solid color areas.

Bitmap, grayscale, and indexed-color images do not offer this setting.

| --- | --- | --- |

### PNG import options

PNG import includes the same color management controls used by PSD, TIFF, GIF, JPEG, or BMP files, plus a PNG Settings area.

Option

Description

Use Transparency Information

Uses PNG transparency when the file provides it.

White Background

Applies a white background together with transparency. This option is available only while Use Transparency Information is enabled.

File-defined Background Color

Shows the stored background color when the file has one and Use Transparency Information is enabled.

Apply Gamma Correction

Changes midtones so they better align with display or print output. It is enabled by default when a gamma value is present.

Gamma Value

Sets the gamma value (0.01-3.0). The field appears only while Apply Gamma Correction is selected. For PNG placement without gamma correction, turn off Apply Gamma Correction before placing the file.

| --- | --- |

### Format considerations

Keep these details in view while planning an import workflow:

- Clipping paths: For a bitmap image that has no clipping path, create one in InDesign after placing it.
- Alpha channels: For complex transparency work, PSD and TIFF are the strongest choices when several alpha channels are needed.
- Multiple instances: If the same file is imported more than once in a document, every instance uses the proxy setting from the first placed instance.
- Removable media: Links break when graphics are placed or dragged from removable media and that media is later removed from the system.
- Display quality: When placed images look low-resolution, inspect the display setting at View > Display Performance.

Note

Large thumbnail-heavy placement operations can slow performance. To improve responsiveness, open Edit > Preferences > Interface and deselect Show Thumbnails on Place.

## Import Illustrator graphics

Place Illustrator files in Adobe InDesign while keeping layer information and later editing options available.

Use the Place command in InDesign to import Adobe Illustrator graphics as linked .ai assets. Layer information is preserved, and the document stays connected to the original file. If you need to edit individual objects directly in InDesign, copy and paste the artwork from Illustrator instead.

### Import a linked Illustrator graphic

Choose File > Place.

Choose the Illustrator file.

Enable Show Import Options when you need to choose the artboard or layers to import.

Choose Open to load the graphic into the loaded cursor.

Click in the document to place the graphic, or drag to draw a frame.

### Work with multiple artboards

Choose File > Place.

Choose the Illustrator file, then enable Show Import Options.

In the preview area, choose the artboard you want to import.

Choose OK, then click or drag to position the graphic.

### Control layer visibility

Use File > Place to bring in the Illustrator graphic.

With the Selection tool, choose the placed graphic.

Choose Object > Object Layer Options.

For each layer, turn the view icon on or off to set visibility.

Choose OK.

### Scale and fit a placed graphic

With the Selection tool, choose the placed graphic.

Resize the frame by dragging a corner handle; hold Shift while dragging to keep proportions.

Choose Object > Fitting, and then pick the fitting option you need.

### Update or relink a placed Illustrator graphic

Choose Window > Links.

Choose the placed Illustrator file.

Choose Update Link icon when the source file changed and you want to refresh the graphic, or choose Relink icon to select another file.

## Use Adobe Stock images

Search, preview, and license Adobe Stock assets from Adobe InDesign through Creative Cloud Libraries.

InDesign uses Creative Cloud (CC) Libraries to work with Adobe Stock images, letting you search, preview, and license assets inside the application. Before purchase, stock assets can be placed as watermarked previews. The workflow supports managing royalty-free images, vectors, and illustrations directly in document layouts.

### Search and add Stock images to your library

Choose File > Search Adobe Stock.

In the Adobe Stock portal that opens in your default browser, type the search terms.

Hover over an image to show the licensing and preview choices.

Choose the Download Preview icon to add the watermarked version to a CC Library, or choose Buy to purchase and download it immediately.

Drag the asset from the CC Libraries panel onto the InDesign page or into a frame that already exists.

Note

Watermarked previews go into the Graphics category of the selected CC Libraries. Until the image is licensed, the watermark stays visible in the InDesign document and in exported output.

### Find visually similar images

Choose a placed graphic, then choose Edit > Find Similar Images.

Check the matching results in the CC Libraries panel at Window > CC Libraries.

### License a watermarked image

Choose Window > CC Libraries.

Right-click the watermarked image, then choose License image.

When the prompt appears, confirm the licensing action according to the available stock credits or subscription.

Choose OK.

## Create contact sheets

Build a grid of multiple images in Adobe InDesign for pre-press review and analysis.

Contact sheets present images as grid thumbnails so they can be compared and reviewed quickly. InDesign can make a basic contact sheet by placing several images into a grid. For advanced PDF contact sheet controls, use the Adobe Output Module in Adobe Bridge.

Choose File > Place.

Use Ctrl-click (Windows) or Command-click (macOS) to choose multiple images, and then choose Open.

Tip

Enable Show Import Options in the Place dialog box, and then check or change the image import settings in the dialog boxes that follow.

Position the pointer and begin dragging.

During the drag, press the Up or Down arrow keys to change the row count, and press the Left or Right arrow keys to change the column count.

To change spacing between frames, hold Ctrl (Windows) or Command (macOS) while pressing the arrow keys.

Release the pointer to place the image grid.

## Generate alt text for images

Generate alt text for images that have been placed in Adobe InDesign documents.

### Generate Alt Text automatically

Open any InDesign document and place an image.

An alt text badge icon appears at the lower-left edge of the image frame, showing that alternate text was generated automatically for the image. A red mark on the badge indicates that alt text was not created. Hover over the badge to read the error message.

After you crop an image or reposition it inside the frame, the Outdated Alt Text icon appears. Generate Alt Text manually when the alternate text should reflect the changed image.

Note

- Use View > Extras > Hide Alt Text Badge or Show Alt Text Badge to show or hide the alt text badge icon. Hiding the badge leaves alt text in place and does not change accessible exports.
- Users with unlimited credits have this feature enabled automatically.
- For a limited time only, each Alt Text generation uses one credit.

Choose Window > Paragraph Styles, and then double-click the default [Basic Paragraph] style. In the Advanced Character Formats tab, choose an option from the Language drop-down menu.

Changing the Language setting for the [Basic Paragraph] style also changes the Alt Text language.

Changing the Language setting for the [Basic Paragraph] style also changes the Alt Text language.

Hold Alt (Windows) or Option (macOS) and choose the icon to open and edit the alternate text in the Object Export Options panel.

Choose the Regenerate icon to create new alternate text for the same image.

Choose Done.

### Turn off automatic Alt Text generation

Open the Generative AI preferences at Edit > Preferences > Generative AI (Windows) or InDesign > Preferences > Generative AI (macOS).

- Auto-generate Alt Text when placing images: select this to have InDesign create Alt Text automatically whenever an image is placed; unlimited-credit users have it enabled by default.
- Add "Description generated by AI" tag for auto-generated Alt Text: select this so generated text is not tagged as AI-generated; it is enabled by default.

Disable automatic Alt Text generation and its AI-generated content tagging from the Preferences panel.

Disable automatic Alt Text generation and its AI-generated content tagging from the Preferences panel.

### Generate Alt Text manually

Start with an InDesign document, then add an image to the layout.

Choose Object > Object Export Options.

For Alt Text Source, choose Custom.

In the Object Export Options panel, set Alt Text Source to Custom, then use the Alt Text button to create Alt Text manually.

Again, with Alt Text Source set to Custom, use the Alt Text button in the Object Export Options panel to manually create Alt Text.

Choose Alt Text; for a limited time, each generation uses one credit.

Use the Regenerate icon when you need different alternate text for that image.

Choose Done.

### Known issues

- If an image brought forward from an earlier version already has alt text, the alt text icon is not shown.

### Admin control for Enterprise users

- In the Admin Console, admins enable or disable Enterprise users' access to the Alt Text feature.

## See also

- [Paragraph Styles](uxp-paragraph-styles.md)
