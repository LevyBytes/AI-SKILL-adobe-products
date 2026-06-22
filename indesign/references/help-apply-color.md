# Define And Manage Color Assets

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply color; Apply color to text, objects, and backgrounds; Mix and define custom colors; Organize and reuse color swatches; Add and manage colors from CC libraries; Sample colors from placed graphics; Apply colors to grayscale images; Find and replace colors; Swatch types; Create and define new swatches; Modify and delete swatches; Import and share swatch libraries; Create and edit tints; Create mixed ink swatches and groups; Edit and convert mixed ink swatches.

## Apply color

### Define and manage color assets

Apply color to text, objects, and backgrounds

Mix and define custom colors

Organize and reuse color swatches

Add and manage colors from CC libraries

Sample colors from placed graphics

Apply colors to grayscale images

Find and replace colors

Swatch types

Create and define new swatches

Modify and delete swatches

Import and share swatch libraries

Create and edit tints

Create mixed ink swatches and groups

Edit and convert mixed ink swatches

### Advanced color techniques

Apply opacity and transparency effects

Transparency effects options and settings

Change transparency display settings

Apply blending modes

Blending mode options

Control blending with isolation and knockouts

Create and name gradient swatches

Modify and adjust gradients

Transparency flattening overview

Apply flattener presets for output

Create custom transparency flattener presets

Transparency Flattener preset options

Fix transparency flattener preview

## Apply color to text, objects, and backgrounds

In Adobe InDesign, fills and strokes can be applied to objects from the Toolbox, Control panel, Swatches, Color panel, or Color Picker.

Color application can target either an object's stroke or its fill. Stroke means the border; fill means the interior/background area. With text frames, choose whether the change belongs to the frame itself or to the text.

Open the document.

Select the item that needs color:

- For paths or frames, work with either the Direct Selection tool or Selection tool.
- For an image that is grayscale or monochrome (1-bit), choose the Content Grabber or the Direct Selection tool.
- For text characters, choose the Type tool.

In the Toolbox, choose the Formatting affects Text icon or Formatting affects container icon. The same controls are also available in the Color or Swatches (Window > Color) panel.

In the Toolbox, choose the Fill icon or Stroke icon to set whether the object's fill or stroke is edited. The Stroke option does not change an image selection. These icons can also be chosen in the Color or Swatches panel.

Set the color by choosing a color, tint, or gradient in the Swatches panel. You can also use Window > Color to reach the Gradient panel, use the Fill or Stroke menu in the Control panel, or open the Color Picker dialog box by double-clicking the Fill icon or Stroke icon in the toolbox.

Select OK.

Note

- Change gap color in a dashed, dotted, or striped stroke from the Stroke panel.
- Grayscale images without alpha or spot channels can receive applied color.
- When an image uses a clipping path, select that path with the Direct Selection tool so color affects only the clipped region.

## Mix and define custom colors

Adobe InDesign lets you build custom colors in the Color panel or Color Picker by changing sliders or typing numeric values.

Create custom colors when the supplied swatches are not enough. For exact control, adjust CMYK, RGB, HSB, or Lab numbers in the Color panel. This works well for quick adjustments and color exploration, but colors that will be used repeatedly should be saved as swatches to keep the design consistent.

Choose Window > Color > Color.

Choose the Fill icon or the Stroke icon to decide which attribute receives color.

Open the panel menu icon, then choose a color model, such as CMYK, RGB, HSB, or Lab.

Create the color by dragging sliders, entering values in the text boxes, or selecting from the panel's color bar.

Press Shift and select the color bar to cycle to another color model.

For later use, open the panel menu and choose Add to Swatches. Once mixed, the color is assigned to the selected object right away. It also remains visible in the Fill icon or Stroke icon for reuse.

Note

When the selected object uses a named swatch, edits made in the Color panel change that object only. To revise document-wide color usage, open Window > Color > Swatches and double-click the swatch there.

## Organize and reuse color swatches

In Adobe InDesign, color groups and Adobe Swatch Exchange (ASE) files help arrange swatches and move them between projects and applications.

Use swatch organization to make production faster and preserve visual consistency. In the Swatches panel, color groups can sort swatches by project, role, or other purpose. ASE files let colors travel among InDesign, Adobe Illustrator, and Adobe Photoshop.

### Save swatches as ASE files

Choose Window > Color > Swatches.

Select the swatch or group you want to export.

Open the panel menu icon, then choose Save Swatches.

Pick a location, type a file name, and select Save.

### Load swatches from ASE files

Choose Window > Color > Swatches.

Open the panel menu icon, then choose Load Swatches.

Go to the ASE file, select it, and select Open.

## Add and manage colors from CC libraries

The Creative Cloud Libraries panel in Adobe InDesign can store, organize, and apply color swatches across documents.

Color themes can be pulled from regions, images, objects, or the whole layout in an InDesign document. Capture artwork colors, choose individual colors when needed, and send them to the Swatches panel for reuse with the Color Theme tool.

Before you begin

Confirm that you have an active Creative Cloud subscription and at least one library already created.

Right-click the Eyedropper tool in the toolbar, then choose the Color Theme tool.

Select any area of the layout object to create a five-color theme.

Open the flyoutmenu in the Color Theme panel to review these variations: Colorful, Bright, Dark, Deep, Muted.

To choose one base color, press Shift and select the color. Press Alt to sample again, or press Esc to remove the current theme.

Apply theme colors by selecting an object or text with the Eyedropper tool. A theme stays active until it is cleared.

For theme storage, use Add this theme to Swatches icon, or use Add this theme to my current CC Library icon.

Configure color conversion by double-clicking the Color Theme tool.

Choose an option from the When applying colors drop-down menu.

Hexadecimal RGB values can be entered in Color picker, New Swatch, and Edit swatch workflows. These values can also be applied through several paths. In the Swatches panel drop-down menu, choose New Color Swatch, set Color Mode to RGB, sample a color with the color picker, and then select Add. To change a swatch, double-click an existing swatch, set Color Mode to RGB, and type the HEX value. For direct entry of a color proxy value, open the Color Picker by double-clicking the fill or stroke proxy, then type a HEX value.

## Sample colors from placed graphics

In Adobe InDesign, the Eyedropper tool can sample colors from imported images and apply them to layout objects.

The Eyedropper tool copies and applies fill and stroke attributes, including color, from any object, imported graphics included. Its default behavior samples all fill and stroke properties and transfers them to selected objects. To change what gets copied, use the Eyedropper Options dialog box. Type attributes and transparency attributes can be copied as well.

Open the document containing both the placed graphics to sample and the objects you intend to edit.

Select one or more objects whose fill and stroke attributes should change.

Choose the Eyedropper tool.

Select an object that has the attributes you need. The Eyedropper tool becomes loaded, and the selected objects update immediately.

To transfer those attributes to more objects, select them with the Eyedropper tool. For an object that contains only a stroke, select the outline.

Press Alt (Windows) or Option (macOS). This clears the Eyedropper tool.

After choosing a Color Theme tool color, select an object so the active Fill or Stroke receives it.

To reuse the loaded attributes on more objects, select those objects with the loaded eyedropper tool. If an object has a stroke but no fill, select its outline.

Hold Alt (Windows) or Option (macOS) to choose a different source object. Release the key, then apply those attributes to a different object.

To open the Eyedropper Options dialog box, double-click the Eyedropper tool in the toolbox.

From the Fill Settings and Stroke Settings drop-down menu, choose the attributes sampled by the Eyedropper tool when an object is selected.

Select OK to keep the preferences.

Tip

Press Shift and select an object when you want to sample only the active fill or stroke color shown in the toolbar.

## Apply colors to grayscale images

Adobe InDesign can colorize grayscale images through the Color panel or Swatches panel.

This process applies color to a grayscale image by selecting the image content and then choosing the color.

Before you begin

Confirm that the file is a grayscale or bitmap image in PSD, TIFF, BMP, or JPG format.

Open the document containing the image.

With the Direct Selectiontool, select the image.

Use Window > Color > Color for the Color panel, or Window > Color > Swatches for the Swatches panel.

Apply a color from the panel.

A PSD image may contain multiple layers, but its bottom layer must be opaque. Color cannot be applied to a PSD image that has a transparent background, nor to alpha or spot channels in grayscale images.

## Find and replace colors

Adobe InDesign can replace color swatches throughout a document.

Use this workflow when one color must be replaced across the document while preserving consistency. It locates every use of the selected swatch and substitutes another swatch for fills, strokes, and text.

Before you begin

Verify that the replacement swatch is already present in the Swatches panel.

Open the document.

Choose Edit > Deselect All so no objects remain selected.

Open the Swatches (Window > Color > Swatches) panel, then select the color that will be replaced.

Open the panel menu icon, then select Find this color.

In Find Color drop-down menu, check which color is displayed.

In the Change Color area, pick the replacement swatch, or use New Color Swatch to create one before selecting Add.

Select Find Next to move to the first occurrence.

Select Change to replace the current occurrence, Change All to replace every occurrence, or Change/Find to replace and continue to the next one.

## Swatch types

Adobe InDesign provides multiple Swatch types.

The Swatches panel stores colors, gradients, and tints so they can be reused consistently in the document. Swatches make color updates faster across a design and support reliable print output. For colors used repeatedly, create swatches so they remain easy to reuse throughout the document.

Tip

When the Paper swatch does not display or print correctly on a non-PostScript printer, change the printer driver to Raster Graphics mode. Colors from any color library can also be added to the Swatches panel and saved with the document.

## Create and define new swatches

Use the Swatches panel in Adobe InDesign to make custom color swatches for consistent color management across a project.

Colors, gradients, and tints can be created and stored in the Swatches panel for repeated use. Apply them quickly, then revise matching document colors with one edit. Make new swatches whenever needed, using default colors or defining process, spot, RGB, LAB, and mixed ink swatches.

### Create a new color swatch

Open the Swatches panel (Window > Color > Swatches).

Open the panel menu icon, then choose New Color Swatch.

For a custom swatch name, clear the Name with Color Value field and type the name.

From the Color Type drop-down menu, choose Process or Spot.

Select a color mode.

Set the color with the sliders or by entering a percentage, then select OK.

### Create a swatch from an existing object

Open the document that contains the object.

With the Selection tool, select the object whose fill or stroke color should become a swatch.

Open the Swatches panel (Window > Color > Swatches).

Choose the Fill icon or the Stroke icon to identify which attribute will be captured.

Select the New Swatch icon.

Double-click the new swatch if you need to rename it or change settings, then select OK.

### Manage unnamed colors

Colors used from the Color panel without first saving them as swatches become unnamed colors. They still function, but each one has to be changed separately.

Open the Swatches panel (Window > Color > Swatches).

From the panel menu icon, choose Add Unnamed Colors.

To rename a swatch or revise its color values, double-click it. The unnamed colors are added to the Swatches panel.

## Modify and delete swatches

Adobe InDesign swatches can be edited or deleted to maintain consistent colors and keep the Swatches panel orderly.

Changing a swatch updates document colors that use it. Removing swatches that are no longer needed reduces clutter. Before replacing deleted swatches, make sure no objects are selected.

### Edit an existing swatch

Open the Swatches panel (Window > Color > Swatches).

Double-click the swatch to modify.

Change the color mode, values, or name.

For automatic naming from CMYK values, select Name with Color Value. Clear it when entering a custom name.

Select OK.

Note

This behavior applies only when Color Type is set to Process. When Color Type is Spot, type the name manually in the Swatch Name field.

### Delete individual swatches

Use the Swatches panel (Window > Color > Swatches).

Highlight one swatch, or highlight several swatches.

Choose the Delete icon. The default None, Paper, Black, and Registration swatches cannot be removed. If spot colors came from placed graphics, remove those graphics before deleting those spot colors.

### Delete unused swatches

Use the Swatches panel (Window > Color > Swatches).

From the panel menu icon, choose Select All Unused.

Choose the Delete icon.

### Duplicate swatches for color variations

Use the Swatches panel (Window > Color > Swatches).

Highlight one swatch, or highlight several swatches.

From the panel menu icon, choose Duplicate Swatch.

## Import and share swatch libraries

To move color swatches among Adobe InDesign, Adobe Illustrator, and Adobe Photoshop, import Adobe Swatch Exchange (ASE) files.

Bring colors and gradients in from another document when you need either chosen swatches or the complete swatch set added to the Swatches panel. Supported input can be InDesign (INDD, INDT), Illustrator (AI, EPS), or ASE files created by InDesign, Illustrator, or Photoshop. Built-in libraries such as ANPA are available, and Pantone Connect can add more libraries. Spot colors contained in imported EPS, PDF, TIFF, and PSD files are added to the Swatches panel automatically.

### Import selected swatches from a file

Use the Swatches panel (Window > Color > Swatches).

From the panel menu icon, choose New Color Swatch.

In the Color Mode drop-down menu, choose Other Library.

When the Open a File dialog box appears, navigate to the file, choose the swatches you want to bring in, and select Open.

### Import all swatches from a file

Start the target application (InDesign, Illustrator, or Photoshop).

Use the Swatches panel (Window > Color > Swatches).

Pick the relevant command for loading or importing swatches.

Choose the file that stores the swatches, and then select Open.

## Create and edit tints

Tint swatches in Adobe InDesign are used to make lighter color variants while keeping spot and process color work efficient.

A tint is a screened, lighter form of an existing color. With it, you can build spot color variants without introducing another ink, which helps keep spot-printing jobs economical. The act of tinting itself does not lower print costs, but it is a fast method for creating lighter CMYK versions. Save and name tints in the Swatches panel so they can be managed and updated in a consistent way.

For a spot color, its tint prints on the same plate as the base color. For process color, the tint scales each CMYK component; for example, 80% of C10 M20 Y40 K10 becomes C8 M16 Y32 K8. When a base swatch changes, all of its tints update automatically, and Swatch Options lets you edit them. Tint values can run from 0% (lightest) to 100% (full color).

On print work, InDesign color management and preflight tools can evaluate tints. Use those tools to check ink limits and preview the way tints separate for output.

Use tints when you need lighter versions of colors already in the document and want to broaden the palette without using additional inks. Because tints follow edits to the base swatch automatically, document colors remain aligned. Spot color tints output on the same plate as their base, whereas process color tints lower the CMYK values in proportion.

### Create a tint swatch from the Swatch panel

Use the Swatches panel (Window > Color > Swatches).

Choose an existing color swatch to serve as the base color.

Next to the Tint field, select the arrowicon.

Move the Tint slider until it shows the percentage you want.

At the lower-right side of the panel, select the New Swatch icon.

### Create a tint swatch from the Color panel

Use the Color panel (Window > Color > Color).

Set the tint with the slider, or type a percentage.

From the panel menu icon, select Add to Swatches.

### Create an unnamed tint for one-time use

Go to Window > Color > Swatches to show the Swatches panel.

Choose either the Fill icon or the Stroke icon.

Choose the base color swatch.

Next to the Tint field, select the arrowicon.

Move the Tint slider to the percentage you want.

### Edit a tint or base color swatch

Use the Swatches panel (Window > Color > Swatches).

Double-click the tint swatch.

To update every object that uses the tint, change the Tint value. To change the base color and every related tint, adjust Color Mode or the color values.

Select OK.

## Create mixed ink swatches and groups

### Combine spot and process inks in Adobe InDesign while managing print separations.

Mixed ink swatches produce color variations by blending spot colors with other inks, while avoiding additional plates. They can keep brand colors consistent inside print limits. Before working with them, add at least one spot color and establish the print requirements. You can make one mixed ink with defined values, or let mixed ink groups create many variants automatically.

### Create a single mixed ink swatch

Use the Swatches panel (Window > Color > Swatches).

From the panel menu icon, select New Mixed Ink Group. The option appears only after a spot color has been added to the Swatches panel.

Type a name in the Name field.

Select every ink that should be part of the swatch. Selected inks show an ink icon.

Set values with the sliders, or type percentages for each ink.

Select OK.

### Create a mixed ink group

Use the Swatches panel (Window > Color > Swatches).

From the panel menu icon, select New Mixed Ink Group. The option appears only after a spot color has been added to the Swatches panel.

Type a name in the Name field.

Select every ink that should be included. An ink icon marks each selected ink.

For each ink, enter the initial percentage that defines where the series begins.

In the Repeat field, specify how many additional swatches to make.

In the Increment field, enter the percentage increase used for each repetition.

Select Preview Swatches to inspect the generated swatches.

Select OK.

Tip

For a 20-swatch set, use cyan values of 20%, 40%, 60%, and 80% together with spot color values of 10%, 20%, 30%, 40%, and 50%. For cyan, use Initial 20%, Repeat 3, and Increment 20%. For the spot color, use Initial 10%, Repeat 4, and Increment 10%.

A special icon identifies the parent swatch in a mixed ink group. Editing the parent changes every related swatch, while editing a child swatch changes only that swatch.

### Modify mixed ink swatches

Go to Window > Color > Swatches to show the Swatches panel.

Double-click the mixed ink swatch you want to change.

Change the ink percentages, the included inks, or the swatch name.

Select OK.

The parent swatch for the mixed ink group can be edited as a whole. You can change which inks are used or selected, but the Initial, Repeat, and Increment values cannot be changed. Make a new group if those settings need to differ.

When you delete a spot color that is used in mixed inks, InDesign asks you to choose a replacement. Mixed inks require at least one spot color; otherwise, they become process colors.

### Manage mixed ink groups

Mixed ink groups can be expanded with added swatches, changed to process colors when print costs need to drop, or deleted after the group is no longer required.

### Add a swatch to an existing group

Go to Window > Color > Swatches to show the Swatches panel.

Choose the mixed ink group's parent icon.

From the panel menu icon, choose New Color Swatch.

Provide a name, then assign the percentage for each ink.

Confirm with OK.

### Change mixed inks into process colors

Go to Window > Color > Swatches to show the Swatches panel.

Double-click the mixed ink swatch that should be converted.

In the Color Type drop-down menu, select Process.

Confirm with OK.

For the whole mixed ink group, open the parent swatch and choose Convert Mixed Ink Swatches to Process.

### Delete a mixed ink group

Go to Window > Color > Swatches to show the Swatches panel.

Choose the mixed ink group's parent icon.

At the lower-right of the panel, select the Delete Swatch icon. Removing the parent also removes every child swatch in that group, so confirm that none of them are still needed before deleting.

## Edit and convert mixed ink swatches

In Adobe InDesign, you can revise inks in mixed-ink groups, tune individual swatches, and convert mixed inks to process colors for more economical printing.

Mixed ink swatches blend spot and process inks so you can create more colors without adding separations. These swatches can be edited, their ink values can be adjusted, or they can be converted to process colors to lower printing costs. Manage mixed ink swatches and groups from the Swatches panel. Parent-swatch edits update the full group, while edits to one swatch apply only to that swatch.

### Edit a mixed ink group's component inks

Go to Window > Color > Swatches to show the Swatches panel.

Double-click the parent icon of the mixed ink group.

To replace a component ink, choose another ink from the list.

To include or exclude an ink, toggle the option beside its name.

Select OK.

After a mixed ink group has been created, the Initial, Repeat, and Increment values cannot be edited. To use different settings, delete the group and create another one. Edits to the parent swatch flow to all child swatches in the group, keeping the color relationships intact.

### Add a new swatch to an existing mixed ink group

Go to Window > Color > Swatches to show the Swatches panel.

Select the parent of the mixed ink group.

From the panel menu icon, select New Color Swatch.

Type a name in the Swatch Name field.

Assign each listed ink's percentage by typing a value for the mixed-ink swatch, or adjust it with the slider.

Select OK. In the Swatches panel, the added swatch appears beneath the parent swatch and uses the group's naming convention.

### Convert a single mixed ink swatch to process color

Go to Window > Color > Swatches to show the Swatches panel.

Open the mixed ink swatch by double-clicking it.

Set Color Type to Process.

Select OK.

When a mixed ink swatch is converted to a process color, it leaves the group and the number of color separations may change. Once converted, it works like a standard process color and no longer follows updates to the parent group.

### Convert all swatches in a mixed ink group to process

Open Window > Color > Swatches to show the Swatches panel.

Double-click the parent swatch for the mixed ink group.

Choose Convert Mixed Ink Swatches to Process.

Choose OK.

After the mixed ink group's parent is converted to process color, that parent swatch no longer appears in the Swatches panel. Its child swatches remain available as separate process color swatches.

### Delete a mixed ink group

Tip

To make the group recoverable after removal, export the swatch group as an ASE file first.

Open Window > Color > Swatches to display the Swatches panel.

Choose the mixed ink group's parent swatch.

Click the Delete selected swatch/groups icon.

Removing the parent swatch also removes every swatch inside that mixed ink group. When objects already reference those swatches, InDesign asks you to pick replacement swatches.
