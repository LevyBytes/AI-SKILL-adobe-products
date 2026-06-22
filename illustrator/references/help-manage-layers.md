# Create And Organize Layers, Lock And Hide Layers, Apply And Modify Layer Effects

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Manage layers; Layers overview; Layers panel overview; Change the display of the Layers panel; Add layers and sublayers; Set layer and sublayer options; Move objects to different layers; Merge and flatten layers; Release objects to separate layers; Locate objects in the Layers panel; Find and filter layers; Lock or unlock layers; Hide or show layers; Delete layers; Apply and modify effects to the layers; Delete effects in layers.

## Manage layers

### Create and organize layers

Layers overview

Layers panel overview

Change the display of the Layers panel

Add layers and sublayers

Set layer and sublayer options

Move objects to different layers

Merge and flatten layers

Release objects to separate layers

Locate objects in the Layers panel

Find and filter layers

### Lock and hide layers

Lock or unlock layers

Hide or show layers

Delete layers

### Apply and modify layer effects

Apply and modify effects to the layers

Delete effects in layers

## Layers overview

Use layers to manage and organize complex artwork in Adobe Illustrator.

Layers give you a way to control all objects that compose an artwork. In Illustrator, they let you arrange different parts of the artwork while leaving other elements unaffected. Items can also be moved between layers, and sublayers can be created.

Layers may stay simple or become more detailed. By default, every item starts in one parent layer. Create additional layers and move items among them whenever the document structure requires it.

The Layers panel can select, hide, lock, and change appearance attributes for artwork. It also supports template layers for tracing artwork and layer exchange with Adobe Photoshop.

For a basic walkthrough in a document, use the organize content with layers tutorial.

### Layers column overview

The Layers panel contains four columns for controlling layer properties:

- The Visibility column: shows whether layers are hidden. It also shows the template icon for Template layers and the outline icon for Outline layers.
- The Edit column: shows whether layers can currently be edited.
- The Target column: marks items targeted for effects and for Appearance panel attribute edits. A double ring icon in the target column means the item is targeted.
- The Selection column: shows whether objects are selected. A color box appears beside selected items. For groups or layers, the parent layer shows a smaller color box. When all items in a layer are selected, the color box is full-sized.

Select a column to control layer characteristics.

Select a column to control layer characteristics.

A. Visibility column B. Edit column C. Target column D. Selection column

## Layers panel overview

Use the Layers panel to organize, manage, and control the objects in Illustrator artwork.

Open the Layers panel with Window > Layers. The color shown for each layer helps identify the object's matching layer in the Layers panel, and the layer color can be changed as needed.

Use the Layers panel to create, locate, search, and filter layers and sublayers

A. Search All field B. Filter C. Layers panel menu D. Save Selection E. Collect For Export F. Locate Object G. Make/Release Clipping Mask H. Create New Layer I. Create New Sublayer J. Delete Selection

Use the Layers panel to create, locate, search, and filter layers and sublayers

## Change the display of the Layers panel

### Customize the Layers panel appearance so complex artwork is easier to navigate and can perform better.

Open the Layers panel with Window > Layers.

From the Layers panel menu, choose Panel Options.

Inside the Layers Panel Options dialog box, turn on Show Layers Only; paths, groups, and collective elements are then hidden in the Layers panel.

Layers Panel Options dialog box contains controls for changing the Layers panel display.

Layers Panel Options dialog box contains controls for changing the Layers panel display.

In the Row Size section, choose an option for row height. For a custom size, enter a value from 12 through 100.

In the Thumbnails section, do the following:

- For thumbnail previews, choose any mix of Layers, Groups, and Objects.
- Enable Top level Only to limit thumbnails to parent layers, excluding sublayers, groups, or individual objects.

Caution

Layer thumbnails may reduce performance in complex files. To improve performance, turn off the Layers thumbnail from the Layers Panel Options dialog box.

## Add layers and sublayers

Organize Adobe Illustrator artwork by adding layers and creating sublayers.

Open the Layers panel with Window > Layers.

Select the Create New Layer icon in the Layers panel.

Note

Illustrator starts each new document with a default layer.

To place a new layer above an existing layer, choose that existing layer and use the Create New Layer icon.

To make a sublayer, choose the layer that will contain it and use the Create New Sublayer icon.

Use Create New Layer or Create New Sublayer, respectively, when adding layers or sublayers.

Use Create New Layer or Create New Sublayer, respectively, when adding layers or sublayers.

## Set layer and sublayer options

### Use Illustrator layer and sublayer options to organize artwork, manage visibility, and set print behavior.

Open the Layers panel with Window > Layers.

Choose the layer or sublayer in the Layers panel, then use the Layers panel menu to choose Options for "<Layer name>".

Tip

You can also open the Layer Options dialog box by double-clicking the layer's thumbnail.

In the Layer Options dialog box, specify the following:

- Name: changes the layer or sublayer name shown in the Layers panel.
- Color: changes the layer's color setting with the dropdown menu or the color swatch.
- Template: turns the layer into a template layer.
- Lock: blocks changes to the object.
- Show: makes all artwork in the layer visible on the artboard.
- Print: allows the artwork in the layer to print.
- Preview: displays the layer artwork in color rather than outlines.
- Dim Images to: reduces how strongly linked images and bitmap images appear in the layer, using the specified percentage.

Layer Options dialog box is where name, color, visibility, and related settings are customized.

Layer Options dialog box is where name, color, visibility, and related settings are customized.

For a new layer or sublayer, use the Layers panel menu and select New Layer or New Sublayer to create it and edit its options.

## Move objects to different layers

### Move objects to different layers in Illustrator so artwork stays organized and manageable.

Select the object, or press Shift while selecting multiple objects with the Selection tool.

Tip

When selection happens through the Layers panel, Shift adds adjacent objects, while Ctrl (Windows) or Command (macOS) adds non-adjacent objects.

Open the Layers panel with Window > Layers.

To move objects into a layer that already exists:

- In the Layers panel, choose the layer name that should receive the objects.
- Use Object > Arrange > Send to Current Layer.

To move objects into a new layer, open the Layers panel menu icon, then choose Collect in New Layer.

## Merge and flatten layers

Merge or flatten layers when objects, groups, and sublayers need to be consolidated into a single layer or group.

Merging combines selected objects, while flattening gathers all visible items into one layer. Illustrator keeps the stacking order, but attributes such as clipping masks are not preserved.

### Merge layers

Open the Layers panel with Window > Layers.

Inside the Layers panel, hold Ctrl (Windows) or Command (macOS) while choosing the layer or group names for merging. Use Shift to include everything between two layer or group names.

Use the Layers panel menu icon, then choose Merge Selected. The objects combine into the layer or group chosen last.

Note

- Layers can merge with other layers only at the same level.
- Sublayers merge only with sublayers in the same parent layer.
- Individual objects do not merge with other objects.

Flatten layers with these steps:

- Choose the layer name that will receive the consolidated artwork.
- Use Flatten Artwork from the Layers panel menu.

### Flatten layers

In the Layers panel, select the layer name that should receive the consolidated artwork.

Select Flatten Artwork from the Layers panel menu.

## Release objects to separate layers

### Put every object from a layer into individual layers when preparing files for web animation.

Select Window > Layers.

In the Layers panel, choose a layer or group name.

For a separate layer per item, choose Layers panel menu > Release to Layers (Sequence).

For duplicated layers that form a cumulative sequence, choose Layers panel menu > Release to Layers (Build).

For example: suppose Layer 1 stacks a circle at the bottom, a square above it, and a triangle at the top. Release to Layers (Build) results in three layers: a circle-square-triangle layer, a circle-square layer, and a circle-only layer. That structure supports cumulative animation sequences.

For a cumulative sequence, use Release to Layers (Build).

For a cumulative sequence, use Release to Layers (Build).

## Locate objects in the Layers panel

Find objects quickly when they are inside collapsed layers.

Choose an object with the Selection tool.

Open the Layers panel with Window > Layers.

From the Layers panel menu icon, choose Locate Object.

Note

When Show Layers Only is selected in Panel Options, the option changes to Locate Layer.

If multiple objects are selected, Illustrator locates the topmost object in the stacking order.

## Find and filter layers

Search for layers or objects so you can identify the specific elements that need locating or editing in Illustrator artwork.

### Find layers

Open the Layers panel with Window > Layers.

In the Layers panel, choose the Search All field, then enter the layer name you need to locate.

Use Search All in the Layers panel when you need to locate particular layers or objects.

Use Search All in the Layers panel when you need to locate particular layers or objects.

### Filter layers

From the Layers panel, choose the Filter icon.

Under By Object and By Layer, enable the choices that narrow artwork items by type and visibility.

Use the Layers panel filters to show layers according to object type and visibility.

Use the Layers panel filters to show layers according to object type and visibility.

## Lock or unlock layers

Lock layers in Adobe Illustrator when you need to protect artwork from unintended edits, and unlock them whenever editing should resume.

### Lock or unlock layers from the Layers panel

Open the Layers panel.

To lock a layer, use the blank cell in the Toggles Lock column, positioned between Toggles Visibility and the layer name.

To unlock a layer, click the lock icon in its Toggles Lock area.

For several layers at the same time, drag down the Toggles Lock column.

Use the Layers panel lock control to decide which artwork can be edited.

Use the Layers panel lock control to decide which artwork can be edited.

### Unlock objects directly from the canvas

On the canvas, right-click the locked object.

Choose Unlock > <object name> in the menu.

## Hide or show layers

Hide layers and show them again when you want to concentrate on selected artwork areas.

In the Layers panel visibility column, click the eye icon to hide a layer.

Click the eye icon when the layer should be hidden.

Click the eye icon when the layer should be hidden.

To reveal the layer again, click the empty space in the visibility column.

Click the empty space to display the layer.

Click the empty space to display the layer.

## Delete layers

Remove layers you no longer need to keep the artwork file smaller.

Open the Layers panel with Window > Layers.

Choose a layer, then use the lower-left delete icon in the Layers panel; Backspace (Windows) or Delete (macOS) also removes the selected layer.

Remove layers from the Layers panel with the Delete icon.

Remove layers from the Layers panel with the Delete icon. Note

When the document contains only one layer, the delete icon is unavailable.

## Apply and modify effects to the layers

Apply effects to layers, then update those effects when the artwork needs changes.

Use the Target column in the Layers panel to select the layer.

Choose Effect, then choose the desired option to apply an effect.

For an effect on one layer attribute, open Window > Appearance.

In the Appearance panel, select the layer, then choose the attribute.

Choose Add New Effect in the Appearance panel, then choose an effect.

To revise the effect, click the effect name in the Appearance panel and make the needed changes.

## Delete effects in layers

Remove effects from layers when they are no longer needed.

In the Layers panel, select the layer with the effect.

In the Appearance panel, select the effect, then choose Delete Selected Item icon.

Use Delete Selected Item in the Appearance panel to remove an unwanted object effect directly.

Use Delete Selected Item in the Appearance panel to remove an unwanted object effect directly.
