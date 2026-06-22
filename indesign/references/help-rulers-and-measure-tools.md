# Create Ruler Guides, Show Hide Guides, Customize Ruler Guides, Manage Ruler Guides ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create ruler guides; Show or hide measurement and ruler guides; Customize ruler guides; Manage ruler guides; Snap objects to guides; Use smart guides; Change ruler measurement units; Measure distance between points; Measure angles.

## Create ruler guides

Use ruler guides in Adobe InDesign when objects need exact placement on pages and spreads.

InDesign provides page guides, which belong to individual pages, and spread guides, which run across whole spreads and the surrounding pasteboard. A ruler guide is created on the active layer and follows that layer's visibility and locking behavior.

Before you begin

Confirm that rulers are showing with View > Show Rulers, and work in Normal mode rather than Preview mode.

### Create page and spread guides

Place the pointer in the horizontal ruler when creating a horizontal guide, or in the vertical ruler when creating a vertical guide.

For page guide: start at the ruler and place the guide on the page where it belongs. For spread guide: start at the ruler and place the guide on the pasteboard area around the spread.

Release the mouse button after the guide reaches the correct location.

Tip

For exact placement, select a guide and type X and Y coordinate values in the Control panel.

To switch a guide between horizontal and vertical while creating it, select a guide and hold down Alt (Windows) or Option (macOS).

### Create evenly spaced guides

When the document includes multiple layers, choose the destination layer in the Layers (Window > Layers) panel.

Choose Layout > Create Guides.

In the Number fields, enter how many rows or columns to create.

Use the Gutter fields to set the space between guides.

Choose Margins to place the guide set inside page margins, or Page to place it inside the page edges.

Turn on Remove Existing Ruler Guides to remove current guides, including guides on locked or hidden layers.

Use Preview to check the settings before applying them.

Choose OK.

### Additional guide creation methods

While dragging from the ruler, press Ctrl (Windows) or Command (macOS) to create a spread guide even when the pasteboard is not visible.

To make a spread guide without dragging, double-click the desired location on the horizontal or vertical ruler.

Press Ctrl (Windows) or Command (macOS) while dragging from the ruler intersection to create horizontal and vertical guides together.

## Show or hide measurement and ruler guides

Use View menu commands in Adobe InDesign to show or hide margin guides, column guides, and ruler guides.

InDesign uses margin guides (magenta), column guides (violet), and ruler guides (cyan) as layout alignment aids. Showing or hiding those guides does not change document content, so the view can be cleaned up while you preview a design.

Open the document where guide visibility needs to change.

To control all guides at once, choose View > Grids & Guides > Show Guides or Hide Guides.

For ruler guides on one layer, double-click the layer name in the Layers panel (Window > Layers), turn Show Guides on or off, and choose OK.

To view the document without guides, choose the Preview icon in the Toolbox.

Tip

Use Ctrl + ; (Windows) or Cmd + ; (macOS) for a quick guide-visibility toggle.

## Customize ruler guides

Control guide appearance and behavior in Adobe InDesign by changing ruler guide colors and view thresholds.

Ruler guide customization can reduce clutter by assigning colors and magnification limits. Ruler guides belong to particular layers, and their settings can differ from margin and column guide settings.

Select the ruler guides to change, or deselect all guides when setting defaults for newly created guides.

Choose Layout > Ruler Guides.

In View Threshold, enter the magnification level below which the ruler guides should be hidden.

For Color, choose a preset from the menu, or choose Custom to define the color through the system color picker.

Choose OK to apply the changes.

Tip

To make selected guides use the current magnification as their view threshold, drag the guides while holding Alt (Windows) or Option (macOS).

## Manage ruler guides

Move, rearrange, lock, unlock, and delete ruler guides on Adobe InDesign pages and spreads.

Ruler guide management covers guide position, visibility, and how guides interact with page objects and layers.

### Delete ruler guides

Choose the guide or guides on the page or spread.

Press Delete to remove the chosen guides.

To remove every guide on the spread, right-click (Windows) or Ctrl-click (macOS) any guide, then choose Delete All Guides on Spread.

Note

A guide may resist deletion because it is locked, comes from a parent page, or sits on a locked layer.

### Lock and unlock ruler guides

Choose View > Grids & Guides > Lock Guides to toggle locking for all ruler guides.

To lock or unlock ruler guides on one layer, double-click a layer name in the Layers panel (Window> Layers), turn Lock Guides on or off, and choose OK.

### Change ruler guide stacking order

Put ruler guides behind page objects so they do not cover content, while keeping them ahead of the margin and column guides.

On Windows, choose Edit > Preferences > Guides & Pasteboard. On macOS, choose InDesign > Preferences > Guides & Pasteboard.

Turn on Guides in Back.

Choose OK.

Note

Guides in Back applies to ruler guides collectively, no matter which layer contains them. Guide visibility is not changed by layer stacking order.

### Move ruler guides

Choose the Selection tool or the Direct Selection tool.

Select a ruler guide, then drag it to a new position.

For several guides at once, Shift-select the guides and drag them as a group.

For precise movement, nudge guides with the arrow keys, or use the Control or Transform panels.

Hold Shift while dragging when the guide should snap to the closest ruler tick mark.

Move a spread guide by dragging its pasteboard segment.

To transfer guides to another page or document, select the guides, choose Edit > Cut or Edit > Copy, go to the destination page or document, and choose Edit > Paste.

## Snap objects to guides

Use snapping in Adobe InDesign to line up objects accurately with ruler guides and grids.

Snapping pulls objects toward guides or grids once they enter the defined snap-to zone. Snap to Guides governs snapping to ruler guides and to the baseline grid.

Objects can snap to any visible ruler guide on any layer, so hiding a layer's guides prevents those guides from attracting objects. Document grids and baseline grids may still snap even while hidden, and they take priority when both snapping choices are enabled.

### Turn on snapping to guides

Choose View > Grids & Guides > Snap to Guides to enable snapping.

Drag an object toward a ruler guide until at least one edge falls inside the snap-to zone.

Release the pointer once the object aligns with the guide.

### Adjust the snap-to zone

On Windows, open Edit > Preferences > Guides & Pasteboard. On macOS, open InDesign > Preferences > Guides & Pasteboard.

In the Snap to Zone field, type a pixel value that sets how close an object must get to a guide before snapping occurs.

Choose OK.

Tip

During an object drag, hold down Ctrl (Windows) or Command (macOS) to suspend snapping temporarily. Release the key to turn snapping back on.

## Use smart guides

Use smart guides in Adobe InDesign for dynamic alignment cues that help snap objects to page elements and nearby objects.

Smart guides appear temporarily while objects are created, moved, resized, or rotated, giving cues for centers, edges, and spacing without manual measuring. When alignment points are close, they appear automatically and help snap objects into position. Use smart guides for exact alignment among multiple objects. For fixed reference lines that remain visible throughout the document, use ruler guides instead.

### Turn smart guides on or off

Choose View > Grids & Guides > Smart Guides to enable the feature.

Choose the checked command again to turn the feature off.

### Configure smart guide categories

On Windows, choose Edit > Preferences > Guides & Pasteboard. On macOS, choose InDesign > Preferences > Guides & Pasteboard.

In the Smart Guides section, turn these options on or off:

Align to Object Center: displays guides when an object's center lines up.

Align to Object Edges: displays guides when object edges align.

Smart Dimensions: displays size details during object resizing or rotation.

Smart Spacing: displays indicators when object spacing matches.

Choose OK.

### Change smart guide appearance

Choose Edit > Preferences > Guides & Pasteboard (Windows) or InDesign > Preferences > Guides & Pasteboard (macOS).

In the Color section, use the Smart Guides menu to choose another color.

Choose OK.

Note

- For the clearest Smart guides behavior, zoom closely into the part of the layout you are working on.
- Smart cursors show X and Y values for objects under the pointer. To disable them, choose Edit > Preferences > Interface (Windows) or InDesign > Preferences > Interface (macOS), then clear Show Transformation Values.

## Change ruler measurement units

Use either ruler preferences or temporary field overrides in Adobe InDesign to change how measurements are shown.

InDesign uses ruler units to format measurements on rulers, inside panels, and in dialog boxes. Tabs, margins, and indents follow the horizontal ruler; spread measurements follow the vertical ruler. Unit changes only alter displayed values, leaving existing guides, grids, and object locations in place.

### Change units through preferences

Choose Edit > Preferences > Units & Increments (Windows) or InDesign > Preferences > Units & Increments (macOS).

In Ruler Units, configure these options:

Origin: sets where the zero point begins.

Horizontal: selects the measurement system for horizontal values.

Vertical: selects the measurement system for vertical values.

In Other Units, choose the unit you want to use for Stroke.

In Points/Pica Size, specify how points are calculated by choosing a value in the Points/Inch menu.

In Keyboard Increments, enter values for these controls:

Cursor Key: sets how far objects move when you nudge them with the arrow keys.

Size/Leading: sets the step used when keyboard shortcuts increase or decrease point size or leading.

Baseline Shift: sets the step used by keyboard shortcuts that move the baseline.

Kerning/Tracking: sets the keyboard shortcut step for kerning and tracking changes.

Choose OK.

Tip

At the point where the horizontal and vertical rulers meet, right-click (Windows) or Control-click (macOS) to change both ruler units at once.

### Override default units temporarily

Choose a measurement field that currently shows a value.

Enter the replacement value and append the needed unit notation from the reference table.

Press Enter (Windows) or Return (macOS) to use the temporary unit value.

### Unit notation reference

## Measure distance between points

Use the Measure tool in Adobe InDesign when you need to calculate distances inside a document layout.

To confirm spacing and alignment, the Measure tool reports the precise distance between two points. Results use the current document units and stay visible until another measurement is made or you change tools.

Go to the Eyedropper tool and choose the Measure tool.

Place the pointer on the document point where the measurement should begin.

Drag to the endpoint for the distance you want to check.

Tip

Hold Shift while dragging to lock the measurement line to 45° increments.

Choose Window > Info if the Info panel is not already open.

Use the Info panel to read the live distance value.

A. Horizontal (X) and Vertical (Y) position of the cursor B. Width and Height in current units C. Distance an object or tool moved relative to its starting position

## Measure angles

In Adobe InDesign layouts, you can measure both custom angles and angles referenced from the x-axis.

Angle measurements help keep rotation, alignment, and geometric relationships consistent in a design. With the Measure tool, you can define an angle from any pair of points and review the degree value in the Info panel.

### Measure an angle from the x-axis

Choose the Measure tool.

Drag from the starting point to draw a measuring line in any direction.

Read the angle value in the Info panel (Window > Info).

### Measure a custom angle between two lines

Choose the Measure tool.

Drag to draw the first measuring line.

Move the tool over one endpoint of that first line.

Hold Alt (Windows) or Option (macOS), then drag to draw the second side of the angle.

Check both the angle value and the line lengths in the Info panel (Window > Info).

Measurement lines stay on the page until you make another measurement or switch tools.

A. Individual line lengths (D1 and D2) for custom angles B. Rotation in degrees
