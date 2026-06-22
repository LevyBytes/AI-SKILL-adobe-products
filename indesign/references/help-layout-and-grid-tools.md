# Apply Layout Adjustments

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Layout and grid tools; Flex Layout overview; Create a Flex Layout; Create team pages using Flex Layout; Apply Flex Layout properties; Flex Layout conflicts; Liquid page rules overview; Adjust page or spread layout; Change document layout settings; Create alternate layouts; Alternate layout options.

## Layout and grid tools

### Apply layout adjustments

Flex Layout overview

Create a Flex Layout

Create team pages using Flex Layout

Apply Flex Layout properties

Flex Layout conflicts

Liquid page rules overview

Adjust page or spread layout

Change document layout settings

Create alternate layouts

Alternate layout options

### Rulers and measure tools

Create ruler guides

Show or hide measurement and ruler guides

Customize ruler guides

Manage ruler guides

Snap objects to guides

Use smart guides

Change ruler measurement units

Measure distance between points

Measure angles

### Grids

Create and customize layout grids

Use a baseline grid

Use a document grid

Convert between text frames and frame grids

Set frame grid properties

Show or hide frame grid character count

Show or hide grids

Snap objects to grids

Create and apply named grids to frames

Edit or delete named grids

Import grid formats from other documents

## Flex Layout overview

The Flex Layout panel in InDesign provides controls for creating, aligning, orienting, wrapping, justifying, and spacing items in Flex Layout.

### What is a Flex layout?

Flex Layout lets you build containers whose contents respond automatically as the material changes. Direction, spacing, padding, and alignment determine how items are placed inside the container. As content is inserted, deleted, or resized, the arrangement updates by itself, reducing manual layout work.

### Access Flex Layout options

To reach Flex Layout options, select an object/group/multiple objects in the document, then use one of these methods:

- Use Object > Flex Layout.
- Open the object's context menu and choose Flex Layout.
- Open Window > Flex Layout panel.
- Click once to target the parent flex; double-click to target the child.
- Select child items with the Direct Selection tool.

InDesign uses Flex Layout to bring a CSS Flexbox-style container model into page layout work. Child objects gain stronger layout controls, so designs can be more structured, adapt more readily, and depend less on manual repositioning.

### Flex Layout container

Flex Layout properties can be stored directly inside Object Styles. For instance, an Object Style named Vertical Container can include Flex Layout settings and then be assigned to any Flex Layout container in the layout.

Example:

Use the Object Styles panel to apply Flex Layout and configure properties such as direction, alignment, and spacing. After the style is saved, apply it to additional containers to keep layout behavior consistent.

### Flex Layout child

Object Styles can use the same Flex Layout section to specify settings for Flex Layout child elements and their nested children. This makes it possible to standardize behaviors such as fixed or flexible sizing across the layout.

- Direct creation of interactive elements: Convert child elements inside a Flex Layout into interactive elements without building them separately and adding them afterward.
- Lock child elements: Lock one or more child elements in a Flex Layout so they cannot be dragged, resized, or moved outside the frame directly, while arrow-key position changes remain available.
- Keyboard navigation for child elements: Move locked or unlocked elements with the left or right arrow keys in horizontal layouts, or with the up or down arrow keys in vertical layouts.

Tip

Object Styles can define flex properties inside locked flex frames.

### Flex Layout panel

Open Window > Flex Layout; the Flex Layout panel appears. From there, create a new Flex Layout, add one, or revise an existing layout for the current design. With nothing selected, the panel changes defaults instead, provided auto-detect is OFF. To review that switch, open Preferences > General > Auto-detect and apply Flex Layout settings.

A. Width of the Flex container B. Height of the Flex container C. Wrap D. Direction of objects in Flex Layout E. Vertical Spacing F. Horizontal Spacing G. Padding H. Justification I. Alignment of the objects in Flex Layout

### Selection indicators in flex layouts

InDesign marks flex-layout selections with different outlines so you can read what is active and what can be selected:

- Dotted outlines show layout levels that are not active.
- Solid outlines mark sibling frames that can be selected.
- Use the Direct Selection tool to target nested frames directly and avoid repeated clicking.

Together, these cues make nested-layout hierarchy and current selection focus easier to read.

### On‑canvas padding and spacing controls

Flex layouts include on-canvas handles for changing padding and spacing:

- Linked padding: changes all four padding values as one set.
- Unlinked padding: lets each side be changed on its own.
- Horizontal and vertical spacing: updates the gaps between items directly, including rows or columns created by wrapping.

Canvas indicators show the current values, and the Flex Layout panel refreshes as you work.

### Transform and shear Flex Layout frames

Flex Layout frames can now be rotated, mirrored, scaled, or sheared without disabling the layout behavior. The same transformation support covers parent flex frames and nested flex frames, with the Flex Layout panel staying available during object transforms. As a result, you can keep changing alignment, spacing, wrapping, and direction while transforming the layout and preserving its flex structure.

## Create a Flex Layout

Use Flex Layout when a design needs to stay dynamic and adjust cleanly as content changes.

### Create an empty Flex layout

Select several objects in the document.

Choose the Flex layout icon in the Properties panel. InDesign places the selected objects inside a Flex Container.

Drag objects into the container. Its items respond automatically to the Flex Container settings, including direction, alignment, justification, and spacing.

- Flex Layout can be scripted.
- Press Esc to move focus out of a child object and onto its Flex Layout parent.

### Create a Flex Layout in an existing document

Converting a selection to Flex Layout prompts InDesign to inspect alignment and spacing, then assign layout behavior that fits the selection. That behavior helps the layout react reliably when content changes.

Select the target objects or groups.

Group conversion: with the group selected, right-click and choose Flex Layout > Convert to Flex Layout.

Multiple-object conversion: after selecting the objects, right-click and choose Flex Layout > Add to Flex Layout.

Note

InDesign can auto-detect the direction and properties for Flex Layout. To enable or disable it, choose Edit > Preferences > General (Windows) or InDesign > Preferences > General (macOS), select or clear Auto-detect and apply Flex Layout settings, and then select OK.

InDesign derives layout properties from the alignment of selected objects:

- Aligned selections: direction follows the alignment; sizing on that axis becomes Auto, and spacing becomes Space Between.
- Unaligned selections: InDesign enables Wrap Content, then uses a fixed size on the primary axis and automatic sizing on the secondary axis.

Direction, justification, spacing, wrap, and alignment remain editable.

Use the Flex Layout panel to refine Flex Layout properties.

Make additional Flex Layout property adjustments in the Flex Layout panel.

Convert parent elements into Flex Layouts when you need nested structures.

Add items or remove them, observe the response, and keep refining until the layout adapts smoothly.

Note

Auto-detection does not create nested Flex Layouts. If a group already includes a Flex Layout, InDesign treats it as one object, so convert inner groups manually either before creating the outer container or afterward.

## Create team pages using Flex Layout

Build responsive member cards in Adobe InDesign by using adaptive containers.

With Flex Layout, team pages can update automatically as cards are added, removed, or resized. Placing member cards in flexible containers keeps spacing and alignment consistent without hand-positioning every change.

Create the initial team-member card with a picture, the person's name, and descriptive text.

With those three items selected, use the Flex Layout icon in the Properties panel (Window > Properties).

Duplicate the card.

Select the two cards, then return to the Properties panel and create a Flex Layout that contains both cards.

Turn on the Wrap Content icon in the Flex Layout section, and set the Flex Layout's width to the page size.

Choose the first child, then create more card copies.

Set justification to Center and vertical spacing to 2p0.

Replace the images and text for each card, add peripheral content, and include everything in the Flex Layout.

## Apply Flex Layout properties

Use Object Styles in Adobe InDesign to define reusable Flex Layout configurations for containers and child objects.

Because Object Styles can include Flex Layout properties, they let you reuse consistent behavior across multiple containers or child objects. This is useful for standardizing layouts already in a document or applying identical flex settings to newly created containers. For single-use designs, work directly in the Flex Layout panel.

### Set Flex Layout container styles

Choose Window > Styles > Object Styles.

Open the panel menu icon, then choose New Object Style.

Choose the Flex Layout option in the Basic Attributes list.

Change the Object Style settings for the Flex Layout container.

Make any further Object Style adjustments needed for the Flex Layout container.

Set container width and height to Auto (responds to content) or Fixed (uses the dimensions you specify).

Type a descriptive name in the Style Name field.

Select OK.

Select the Flex Layout container, then select the style name in the Object Styles panel to apply it.

Tip

Create new Flex Layout styles from existing styles by choosing a style in the Based On drop-down menu.

### Define Flex Layout child properties in styles

The Flex Layout section in Object Styles can define settings for Flex Layout child elements and nested child elements as well. Use it to standardize behavior such as fixed or flexible dimensions throughout the layout.

- Direct creation of interactive elements: turn child elements inside a Flex Layout into interactive elements without making them separately and then adding them to the Flex Layout.
- Lock child elements: locks one or more child elements in a Flex Layout so users cannot directly drag, resize, or move them outside the frame; arrow-key position changes still work.
- Keyboard navigation for child elements: move locked or unlocked elements with the left or right arrow keys in horizontal layouts, or with the up or down arrow keys in vertical layouts.

Object Styles can define flex properties within locked flex frames.

Choose Window > Styles > Object Styles.

Open the panel menu icon, then choose New Object Style, or double-click an existing style to edit it.

Choose Flex Layout in the Basic Attributes list.

Find the Flex Layout Child section in the Flex Layout options.

Change the Width and Height values for Flex Layout children.

Make any additional Width and Height changes needed for Flex Layout children.

Select OK. Object Styles can also define flex properties within locked flex frames.

### Work with nested Flex Layouts

With nested Flex Layout containers, container properties and child properties both remain in effect, and the Flex Layout Child section controls width and height.

Select the Flex Layout container that will serve as the parent.

Put one or more Flex Layout containers inside that parent to form the nesting.

For the nested container, open the Object Styles panel.

Under the Flex Layout Child section, enter W (Width) and H (Height) values.

Confirm that those width and height values match the values in the Flex Layout section.

## Flex Layout conflicts

Review how Adobe InDesign resolves sizing conflicts automatically between parent containers and child elements.

In a Flex Layout, parent containers and child objects use defined rules for flow, sizing, and wrapping. Sometimes the container settings and child element settings disagree. InDesign resolves those cases with built-in logic so the resulting layout stays predictable.

### How conflicts are resolved

When mixed sizing modes keep Flex Layout rules from satisfying both a container and its child elements, InDesign applies automatic fixes that avoid unstable results.

- If a container size is Fixed and it contains child elements set to Fill Space, changing the layout to Auto makes InDesign switch those child elements to Fixed size so the structure is preserved.
- If a container is Auto and includes child elements set to Fixed, changing one child element to Fill Space creates a conflict. InDesign then changes the parent container size to Fixed, allowing the layout to stabilize.
- If Wrap Content is on and a child element is Fill Space, InDesign disables wrapping because the fill-space item takes all available space on that axis.

### Special content considerations

- Flex Layouts do not support auto-sizing text frames. Placing auto-sizing text inside a Flex Layout turns auto-sizing off. To manage text dimensions in Flex Layout, set the text frame size manually or use the Fill or Auto child sizing options.
- A graphic frame set to Fill Space inside a Flex Layout uses the frame's current Fitting settings, so the image scales properly within the container.

## Liquid page rules overview

See how Adobe InDesign uses liquid page rules to adapt alternate layouts and liquid layouts for varied page sizes and orientations.

Alternate layouts store multiple document versions inside one InDesign file. Layouts may use different sizes or orientations while sharing content. Liquid layouts determine how page items react when layout dimensions shift. Rather than moving objects by hand, apply rules that decide how items scale, move, or resize so the layout structure is easier to preserve.

Together, these features help multi-format design workflows stay efficient and produce consistent variations.

### How liquid page rules work

Liquid page rules specify how objects react after a page's size or proportions change. Each page can use only one rule, although different pages may use different rules.

Apply liquid page rules when content must adapt to different output sizes, such as while creating alternate layouts or resizing existing pages.

### Types of liquid page rules

InDesign includes four liquid page rules:

- Scale: changes all content proportionally while preserving relative positions. If aspect ratios differ, gaps may appear. It works best for simple layouts dominated by graphics.
- Re-center: leaves content at its current size and centers it during page resizing. Use it when elements need to keep a fixed size.
- Guide-based: relies on liquid guides to control changes in content and whitespace. Text reflows, and image frames resize without distortion. It fits structured layouts with multiple elements.
- Object-based: sets resize and position behavior for individual objects, including fixed or relative relationships to page edges. Use it for complex layouts that mix different behaviors.

### Liquid page rules and alternate layouts

Liquid page rules combine with alternate layouts when new page-size variations are created. The chosen rule controls how elements respond to the new dimensions. This lowers manual work because one layout can generate several formats, such as tablet portrait, tablet landscape, and phone variations, with only limited adjustment.

## Adjust page or spread layout

Use Layout and Margins settings in Adobe InDesign to resize existing document layouts automatically.

You can change margins and columns on selected pages or spreads without altering the overall document structure. InDesign keeps object alignment, spacing, text threading, and image proportions intact. You can decide whether locked objects should move too. Text-size edits are added as overrides. When the change should apply to every page, adjust the document layout settings instead.

Choose Layout > Margins and Columns.

Type the margin and column values.

Enable Adjust Layout.

Use Adjust Font Size when text should adjust automatically.

Choose Set Font Size Limits, then provide the lower and upper font-size limits.

To move locked objects too, enable Adjust Locked Content.

Select OK.

Note

Adjust Layout is off by default in the Margins and Columns dialog box. Select it whenever you want automatic adjustment.

For multi-page spreads, first deselect Allow Selected Spread to Shuffle in the Pages panel (Window > Pages) so the spreads become island spreads before adjustment.

## Change document layout settings

### Use the Adjust Layout panel in Adobe InDesign when you need to revise a document's dimensions, margins, or bleed settings.

Changing a page size or margin setup can otherwise mean a lot of manual object repositioning. Adjust Layout helps adapt an existing design for another size or later margin changes, especially when the layout is built around guides.

Choose File > Adjust Layout.

Choose a preset page size, or type custom Width and Height values.

Pick the page orientation. Portrait is the default orientation.

Use Auto-adjust margins to page size changes when margins should respond dynamically, or type values in the Top, Bottom, Left, and Right fields.

To define the bleed, fill in the Top, Bottom, Left, and Right fields for bleed values.

Use Adjust Font Size when text should scale proportionally, or use Set Font Size Limits and enter values that define the permitted scaling range.

Turn on Adjust Locked Content when locked objects or items on locked layers should be moved as part of the adjustment.

Choose OK.

## Create alternate layouts

Create different page sizes or orientations inside one Adobe InDesign document by duplicating layouts and applying liquid page rules.

Alternate layouts support separate sizes, orientations, and aspect ratios in a single document. Each layout may use its own dimensions and orientation, which can avoid maintaining separate files for each version.

Before you begin

Set liquid page rules before making alternate layouts so content adaptation is controlled in advance. Choose the Page tool, select a page, and then choose a liquid page rule in the Control panel.

Choose Layout > Create Alternate Layout.

Type the new layout name in the Name field.

Use the From Source Pages menu to choose the layout that contains the original content.

Choose a Page Size from the menu, or type custom values in Width and Height.

For Orientation, choose Portrait or Landscape.

In the Liquid Page Rule menu, choose Preserve Existing to keep the liquid rules from the source layout, or choose another rule for different adaptation behavior.

Enable Link Stories to connect the text content in the source layout with the new layout.

Enable Copy Text Styles to New Style Group when this layout needs text styles that can be edited separately.

Enable Smart Text Reflow to clear forced line breaks and style overrides.

Choose OK.

## Alternate layout options

Review the controls in Adobe InDesign's Create Alternate Layout dialog box.

Use alternate-layout settings to determine how a new layout is built from the selected source pages. The controls are available from Layout > Create Alternate Layout.
