# Arrange And Order Pages, Manage Layers

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add new pages to a document; Target or select pages or spreads; Change page and spread display; Create color labels for page thumbnails; Redistribute spreads and pages; Move pages; Duplicate pages and spreads; Hide and unhide spreads; Split a page from the spread; Rotate the spread view; Delete a page or spread; About layers; Create and set up layers; Add, move, or duplicate objects across layers; Manage layer visibility and stacking order; Lock or unlock layers.

## Add new pages to a document

Adobe InDesign can add new pages at chosen positions through the Pages panel or menu commands.

Pages can be inserted into an InDesign document singly or in batches. New pages use formatting from parent pages, and threaded text frames continue flowing through inserted pages automatically. In facing-page documents, InDesign keeps left and right page order unless island spreads are created. When Allow Document Pages to Shuffle is enabled, InDesign repaginates two-page spreads automatically. To start a new document with a defined page total, use File > New > Document instead.

### Add a single page after the active page

In the Pages panel, select a page thumbnail or page numbers so the page or spread becomes active.

Choose Layout > Pages > Add Page.

### Add multiple pages at a specific location

Choose Layout > Pages > Insert Pages.

In the Insert Pages dialog box, type the number of pages to insert in the Pages field.

From the Insert menu, choose the placement for the new pages. Available choices include After Page and Before Page, plus At Start of Document and At End of Document.

If After Page or Before Page is chosen, type the reference page number in the neighboring field.

From the Parent menu, choose the parent page that should format the inserted pages, or choose [None] to create blank pages.

Choose OK.

Tip

For a fast way to append pages, choose File > Document Setup and raise the value in the Number of Pages field.

## Target or select pages or spreads

Use the Pages panel in Adobe InDesign when you need to concentrate on specific pages or spreads and manage them inside a document.

In Adobe InDesign, targeting is separate from selecting. A targeted page or spread becomes the active location for actions like pasting objects or placing guides; selected pages or spreads are the ones available for duplication, deletion, or movement. Within the Pages panel, a vertical ruler marks the target page or spread, and selected page or spread thumbnails are outlined with a highlighted border.

Open any InDesign document.

To make the page or spread both targeted and selected, double-click either the page thumbnail or the page numbers beneath it in the Pages panel (Window > Pages).

To select a page while leaving the target unchanged, choose the page thumbnail in the Pages panel.

To select the full spread, choose the page numbers shown under the spread thumbnail in the Pages panel.

Note

- Certain spread-level commands in the Pages panel menu, including Allow Selected Spread to Shuffle and Duplicate Spread, are enabled only after the whole spread is selected.
- The vertical ruler is dimmed for every page other than the targeted page or spread, making the active content clear.

## Change page and spread display

Use panel options in Adobe InDesign to adjust page thumbnails, icons, and layout views.

Display settings for the Pages panel control the appearance of pages and parent pages, including thumbnail size, orientation, and visual indicators. Changing these preferences can make large or complex documents easier to navigate.

Open any InDesign document.

In the Pages panel (Window > Pages), open the Pages panel menu icon, then select Panel Options.

Under Icons, choose the icons that should appear beside page thumbnails. The icons identify items such as transparency, page transitions, and rotated spread views.

Under Pages and Parents, choose a value from the Size drop-down menu.

Enable Show Vertically to stack spreads in one vertical column. Disable it when spreads should be allowed to sit side-by-side.

Enable Show Thumbnails to show previews of page content. Disable it to display page icons without content previews.

Under Panel Layout, choose Pages on Top to place document pages above parent pages, or choose Parents on Top to use the opposite order.

In the Resize drop-down menu, choose the behavior used when the panel height changes:

- Proportional: changes both sections by the same amount.
- Pages Fixed: leaves the Pages section unchanged while Parents resizes.
- Parents Fixed: leaves the Parents section unchanged while Pages resizes.

Select OK. The Pages panel refreshes right away and keeps those settings for later sessions.

## Create color labels for page thumbnails

Use colored labels in Adobe InDesign to categorize pages visually and follow their workflow status.

Color labels give page thumbnails in the Pages panel an organizational marker. They can represent status values such as completed, in progress, or not yet started. InDesign shows these labels as colored bars below page thumbnails, and they are used only for organization inside InDesign.

When a color label is applied to a parent page, all of its child pages receive that label automatically. A label placed directly on a document page takes priority over the parent page color, so labels work well for progress tracking in long documents or collaborative files.

Select any InDesign document.

Select Window > Pages.

In the Pages panel, choose one or more page thumbnails that should receive the color label.

Open the panel menu icon, then choose Page Attributes > Color Label, and select a color from the submenu. A horizontal bar in that color appears under each selected page thumbnail.

Note

- To clear a color label, select the page, then choose Page Attributes > Color Label > None from the Pages panel menu.
- To put the parent page color label back on document pages with custom color labels, select those document pages and choose Page Attributes > Color Label > Use Parent Color from the Pages panel menu.

## Redistribute spreads and pages

Control how Adobe InDesign reorganizes pages and spreads after you add or remove content.

Page redistribution determines whether added or removed pages are reshuffled so the layout follows the Facing Pages setting in Document Setup.

Select the spread in the Pages panel (Window > Pages).

To let selected spreads redistribute, open the panel menu icon, then choose Allow Selected Spread to Shuffle.

To let all document pages redistribute, open the panel menu icon, then choose Allow Document Pages to Shuffle.

## Move pages

### Move pages within one document or copy them into another Adobe InDesign file.

Page moves let you reorder a document or send pages between open documents while preserving text threading. For pages moved across documents, InDesign uses matching styles, layers, and parent pages from the destination document, so check the formatting when page sizes or style definitions are not identical.

### Move pages within a single document

Open any InDesign document.

Open the panel menu icon, then choose Move Pages.

In the Move Pages field, type the page numbers to move.

For Destination, choose the target position from the drop-down menu.

Use the adjacent field to enter the reference page number that defines where the moved pages should be placed.

Select Delete Pages After Moving when the pages should be removed from their original location once the move is complete.

Select OK.

### Move pages between two documents

Open the source document, then open the destination document.

In the destination document, open the Pages panel menu icon and deselect Allow Document Pages to Shuffle so spreads remain intact while pages are moved.

Return to the source document, open the Pages panel menu icon, then choose Move Pages.

In the Move Pages field, type the page numbers to move.

For Destination, choose the target location inside the destination document.

From the Move to drop-down menu, choose the destination document name.

Select Delete Pages After Moving to remove the pages from the source document after the operation finishes.

Select OK.

## Duplicate pages and spreads

Use Pages panel options in Adobe InDesign to place duplicate copies at chosen locations in a document.

Duplicate pages or spreads when you want to reuse layouts while keeping objects, text threads, and parent pages. The copies can be inserted beside the original or appended to the document, and multi-page spreads keep their grouping and shuffle behavior.

### Duplicate immediately after the source

In the Pages panel (Window > Pages), select the page or spread to duplicate.

Open the Pages panel menu icon and choose one of these options:

- Duplicate Page: creates a copy of one page.
- Duplicate Spread: creates a copy of the full spread.

### Duplicate at the end of the document

In the Pages panel (Window > Pages), select the page or spread to duplicate.

Open the Pages panel menu icon and choose one of these options:

- Duplicate Page at End of Document: creates a copy of one page.
- Duplicate Spread at End of Document: creates a copy of the full spread.

## Hide and unhide spreads

Use the Pages panel in Adobe InDesign to decide which spreads are included in export and presentation mode.

Hidden spreads exclude layouts from output while leaving the content in the document. They can still be edited and do not change text threads, layers, or links, but every document must keep at least one spread visible.

### Hide a spread

Select the spread to hide by choosing its page numbers in the Pages panel.

Open the Pages panel menu icon and choose Hide Spread.

Tip

To display hidden spreads temporarily, choose View > Show Hidden Spreads, or switch Show/Hide Hidden Spreads in the Pages panel.

### Unhide a spread

Select the hidden spread in the Pages panel.

Open the Pages panel menu icon and choose Unhide Spread.

### Navigation alerts for hidden spreads

When a workflow tries to navigate to a hidden spread, InDesign shows alert messages with two options so unexpected behavior is avoided.

## Split a page from the spread

Use the Pages panel in Adobe InDesign to separate a page from its spread and turn it into an independent page.

Before you begin

Save the document first in case the original layout needs to be restored.

In the Pages panel (Window > pages), select the spread that contains the page to split.

Open the Pages panel menu icon, then turn off Allow Selected Spread to Shuffle.

In the Pages panel, pull the page out of the spread until a vertical black bar is shown between spreads.

Release the mouse button to place the page in its new position as a standalone page. To rejoin that split page with a spread later, select the page in the Pages panel and choose Allow Selected Spread to Shuffle from the panel menu.

## Rotate the spread view

Use options in the View menu to rotate the canvas while working with rotated layouts in Adobe InDesign.

Rotating the spread view helps with documents that contain rotated content, including calendars, tables, and landscape-oriented layouts. The rotation affects only the selected spread, stays active until cleared or until the document closes, and has no effect on document output.

### Rotate a spread

In the Pages panel (Window > Pages), select the page or spread to rotate.

Choose View > Rotate Spread > 90Â° CW, 90Â° CCW, or 180Â°. A rotation icon is shown beside the spread thumbnail in the Pages panel.

### Clear spread rotation

Select the rotated spread in the Pages panel.

Choose View > Rotate Spread > Clear Rotation.

## Delete a page or spread

Use the Pages panel in Adobe InDesign to delete pages and spreads that are no longer needed.

Deleting pages or spreads removes them permanently, and after saving the deletion cannot be undone, so confirm that text threads and layouts will not be disrupted. For facing-pages documents, InDesign rearranges the pages that remain according to Allow Document Pages to Shuffle.

Select Window > Pages.

In the Pages panel, choose the thumbnail for the page or spread you are deleting.

Select Delete selected pages icon in the Pages panel.

## About layers

### Understand how layers organize objects, manage visibility, and determine stacking order in Adobe InDesign.

Layers are the structure used to handle complex InDesign documents. By assigning objects to separate layers, you can manage visibility, editability, and stacking order throughout the full document.

### How layers work in InDesign

Think of layers as see-through sheets arranged in a stack. A document is created with at least one named layer already present. Any transparent object exposes whatever sits below it. Because layers extend through the whole document, parent pages included, they are useful for recurring items and for separating content by category instead of by page position.

In the Layers panel, the layer at the front of the stack appears first.

The Layers panel shows the frontmost layer at the top of its list.

### Common layer uses

Layers can divide text from artwork, keep items separate for targeted printing, hold alternate layout versions, or make editing faster when complex graphics are hidden. In large files or designs with heavy visual content, that flexibility makes them especially useful.

### Managing layers

Efficient document management depends on knowing how objects, parent pages, stacking order, and layers affect one another. In the Layers panel, you can inspect the document hierarchy and directly adjust the properties and contents of each layer.

## Create and set up layers

Set up layers in Adobe InDesign so the document is easier to organize.

InDesign layers cover the full document, including every page and parent page. Creating a layer establishes organization at the document level. Use them for complex layouts, alternate designs, and high-resolution graphics.

### Create a new layer

Choose Window > Layers to display the Layers panel.

In the Layers panel, choose Create new layer to add a layer above the current selection.

For a new layer below the selected layer, press Ctrl (Windows) or Command (macOS) while choosing the Create new layer button.

To display the New Layer dialog box and its additional settings, press Alt (Windows) or Option (macOS) while choosing the Create new layer button.

### Configure layer properties

Double-click the name of an existing layer in the Layers panel.

In the Layer Options dialog box, type a clear layer name in the Name field.

Use the Color drop-down menu to choose the color that marks objects assigned to that layer.

Note

After an object is selected, its selection handles, bounding box, and frame edges use the color assigned to the layer.

Enable Show Layer when the layer should be visible, or turn it off to conceal the layer on every page.

Enable Lock Layer to stop objects on the layer from being changed.

Enable Print Layer when the layer should be included in print output.

Enable Suppress Text Wrap When Layer Is Hidden when text on other layers should disregard text wrap settings from hidden objects on this layer.

Choose OK to save the settings.

## Add, move, or duplicate objects across layers

Use the Layers panel in Adobe InDesign to place document objects on different layers and keep them organized.

Separating objects by layer helps manage complex layouts by dividing content types, changing visibility, and reducing unintended edits. As the design changes, objects can be added, moved, or copied from one layer to another whenever needed.

In the Layers panel, choose the disclosure arrow beside a layer name to expand the layer and view its objects; colored dots show the current selection. To select the whole layer, press Alt (Windows) or Option (macOS) while choosing the layer name.

### Add new objects to a specific layer

In the Layers panel (Window > Layers), choose the layer that should receive the new objects. A pen icon appears beside that layer name.

Make objects with any drawing tool, use the Type tool, or add placed graphics with File > Place.

Newly created objects go onto the target layer automatically.

### Move objects to a different layer

Objects keep their formatting, effects, and other attributes after they are moved to another layer.

With the Selection tool, select one or more objects on the page.

In the Layers panel, choose the arrow next to the layer that contains the selected objects.

Find the colored dot beside the selected objects, then drag that dot onto the target layer.

### Copy objects to another layer

With the Selection tool, select the objects to copy.

To copy to another layer from the Layers panel, drag the colored dot to the destination layer while pressing Alt (Windows) or Option (macOS).

Note

To place objects on a locked layer by moving them, press Ctrl (Windows) or Command (macOS) while dragging the colored dot.

To duplicate objects onto a locked layer, press Ctrl + Alt (Windows) or Command + Option (macOS) while dragging the colored dot.

## Manage layer visibility and stacking order

Use Adobe InDesign layer controls to adjust visibility and the display order of organized layouts.

Layer management lets you control whether objects are visible, avoid accidental edits, and preserve visual hierarchy in documents with multiple layers. In the Layers panel, layers are shown from top to bottom; items on upper layers display in front of items on lower layers.

### Change layer stacking order

Choose Window > Layers to display the Layers panel.

Choose the layer name that needs a new position, then drag it upward or downward in the panel.

Let go of the pointer when the horizontal line is shown at the intended location.

The layer, together with every object on it, moves to that stacking position.

### Show or hide layers

Choose Window > Layers to display the Layers panel.

Decide which visibility control you need:

- To show or hide a layer, choose the eye icon beside the layer name in the Layers panel.
- To control visibility for individual objects inside a layer, choose that layer's disclosure arrow to reveal its objects, then choose the eye icon.
- To conceal every layer except the selected layer, or every object on a layer except the selected object, open the Layers panel menu, then choose Hide Others.
- To make all layers visible, choose the Layers panel menu icon, then choose Show All Layers.

Note

Layers that are hidden are omitted from print and export. Use this approach for complicated documents or for alternate versions when the content should remain in the file.

## Lock or unlock layers

Use layer locking in Adobe InDesign to reduce accidental edits while handling complex documents.

When a layer is locked, its objects cannot be selected or edited directly. This protects background items, templates, or approved material while other document areas remain editable. Locking a layer still allows indirect changes, including changes made through shared swatches. Threaded text also keeps reflowing through locked and unlocked layers. For stronger protection against all changes, indirect changes included, choose Preferences > General and enable Prevent Selection of Locked Objects.

Choose Window > Layers.

To lock a layer, choose the empty square in the second column from the left beside the layer name.

To unlock it, choose the lock icon beside the layer name.

To keep only one layer unlocked, use Alt-click (Windows) or Option-click (macOS) on that layer's square in the second column. To lock separate objects inside layers, choose Object > Lock.

Open the Layers panel menu icon, then choose Unlock All Layers to unlock all layers at once.
