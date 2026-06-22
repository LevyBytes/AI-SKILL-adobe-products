# Frames Grids Rulers Guides, Frame Grids

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Frames, grids, rulers, and guides — About frames in InCopy files; Frame grids — About frame grids in InCopy documents.

## Frames, grids, rulers, and guides — About frames in InCopy files

As in Adobe InDesign, InCopy places all text and graphics inside frames. In linked documents, frame placement and publication design are controlled in InDesign. InCopy Layout view lets you inspect the frame structure from the InDesign document.

Modifying frames

Frame edits must be made in the InDesign document by you or another team member, except when the frames contain inline graphics. Inline graphics frames can be moved, scaled, rotated, or sheared; other frames cannot. See your workflow documentation for more information.

Threading text

Lengthy story text can continue through a sequence of connected frames, also called threaded frames. The threaded story starts in a chosen page column and can continue through other columns and pages in the publication. The InDesign user always defines the threading sequence used by an InCopy story.

When text is added to a threaded story, it continues into each following frame until the assigned frames are filled.

Flow of threaded text: Original text in threaded frames (top); after you add text to first frame, text reflows to second frame (bottom)

Flow of threaded text: Original text in threaded frames (top); after you add text to first frame, text reflows to second frame (bottom)

Text that does not fit inside its assigned frame area becomes overset text; the overset portion is hidden.

### Frames, grids, rulers, and guides — Change measurement units and rulers

InCopy provides a vertical depth ruler for copyfitting in Galley and Story views, plus horizontal and vertical rulers in Layout view for layout measurement. By default, ruler measurement begins at the upper-left corner of a page or spread. Moving the zero point changes that starting location.

Several standard measurement units are available. You can change them whenever needed, and you can temporarily override the active unit while entering a value. Changing measurement units does not reposition guides, grids, or objects. Because of that, updated ruler tick marks may no longer align with objects that were placed against the earlier tick marks.

Horizontal and vertical rulers can use different measurement systems. For example, newspapers often measure horizontal layouts in picas while measuring vertical text stories in inches. Tabs, margins, indents, and related measurements follow the horizontal ruler setting. A separate vertical ruler exists on each spread, but all vertical rulers share the setting chosen in the Units & Increments section of the Preferences dialog box.

Rulers use picas by default, with 12 points in a pica. You can change ruler units and define where major tick marks appear. For example, setting the vertical ruler unit to 12 points shows a major ruler increment every 12 points when the current magnification can display it. Tick mark labels include the custom major increments; in this example, a label of 3 marks the third increment of 12 points, totaling 36 points overall.

Rulers

A. Labeled tick marks B. Major tick marks C. Minor tick marks

Rulers Vertical ruler using inches (left), and custom 12‑point increments (right)

Vertical ruler using inches (left), and custom 12‑point increments (right) Note

Custom vertical ruler increments are useful when you need major tick marks to align with a baseline grid.

### Frames, grids, rulers, and guides — Specify the measurement units

Custom measurement units can be set for on-screen rulers and for values used in panels and dialog boxes. These settings can be changed whenever needed, and a typed value can temporarily override the active measurement unit.

On Windows, choose Edit > Preferences > Units & Increments. On Mac OS, choose InCopy > Preferences > Units & Increments.

For Horizontal and Vertical, choose the measurement system for ruler, dialog-box, and panel dimensions. To define major tick marks yourself, choose Custom and enter the number of points at which the ruler should display them. Click OK.

Note

Ruler units can also be changed from a ruler's context menu: right-click (Windows) or Control-click (Mac OS) the ruler, then choose the units.

### Frames, grids, rulers, and guides — Override default measurement units

A unit of measurement can be entered that differs from the default.

In a panel or dialog box, select the existing value, then type the replacement value using one of the notations listed below:

To specify:

Type these letters after the value:

Examples

Result

Q

q

6q

6 Q

Ha

h

6h

6 Ha

Inches

i

in

inch

"

5.25i

5.25in

5.25inch

5.25”

5 1/4 inches

Millimeters

mm

48mm

48 millimeters

Centimeters

cm

12cm

12 centimeters

Picas

p

3p

3 picas

Points

pt

p (before value)

6pt

p6

6 points

American points

ap

6ap

6 American points

Picas and points

p (between values)

3p6

3 picas, 6 points

Pixels

px

5px

5 pixels

Ciceros

c

5c

5 ciceros

Agates

ag

5ag

agates

| --- | --- | --- | --- |

### Frames, grids, rulers, and guides — Japanese measurement units

Q and Ha are Japanese manual or automatic photo-composer units used for font size, tracking, or leading length. Each unit equals 0.25mm. Q is reserved for font-size values, while Ha can express direction and length for leading, object spacing, and similar uses.

Points, also called American points, can be used for computer font size, and Adobe PostScript® points can indicate leading or spacing. One American point equals 0.35146 millimeters; 1 inch contains 72.27 American points and 72 PostScript points.

### Frames, grids, rulers, and guides — Change the zero point

The zero point is where the zeros of the horizontal and vertical rulers meet. By default it sits at the upper-left corner of the first page in each spread. As a result, its default location remains consistent within a spread, although it can appear to shift when judged against the pasteboard.

The X and Y coordinates shown in the Control panel, Info panel, and Transform panel are measured from the zero point. Move the zero point when you need to measure distances, create a different measurement reference, or tile oversized pages. By default, every spread has a single zero point at the upper-left corner of its first page; you can instead place it at the binding spine, or make each page in a spread use its own zero point.

### Frames, grids, rulers, and guides — Adjust the zero point

Moving the zero point applies that same relative position to every spread. For example, setting it at the upper-left corner of the second page in one spread makes it appear at that position on the second page of all other document spreads.

Use one of these methods:

- Drag from the intersection of the horizontal and vertical rulers to the layout position where the zero point should be set.

Establishing a new zero point

Establishing a new zero point

To restore the zero point, double-click where the horizontal and vertical rulers meet.

For locking or unlocking the zero point, right-click (Windows) or Control-click (Mac OS) the rulers' zero point, then choose Lock Zero Point in the context menu.

### Frames, grids, rulers, and guides — Change the default zero point

The Origin setting in the Preferences dialog box sets the default ruler zero point and the horizontal ruler's scope. Scope controls whether measurement runs across a page, across the whole spread, or, in multipage spreads, from the spine center.

When ruler origin is set at a spread's binding spine, the origin is locked at the spine. You cannot reposition it by dragging from the rulers' intersection unless you first select a different origin option.

On Windows, choose Edit > Preferences > Units & Increments. On Mac OS, choose InCopy  > Preferences > Units & Increments. In the Ruler Units section, open the Origin menu and use one of these choices:

Choose Spread to place the ruler origin at the top-left corner of each spread. The horizontal ruler measures across the whole spread.

Choose Page to place the ruler origin at the top-left corner of each page. In a spread, the horizontal ruler begins at zero on every page.

Choose Spine to place the ruler origin at the center of the spine. The horizontal ruler shows values left of the spine as negative and values to the right as positive.

Note

Horizontal ruler origin settings can also be changed from the context menu opened on the horizontal ruler with right-click (Windows) or Control-click (Mac OS).

### Frames, grids, rulers, and guides — Use grids

In Layout view, InCopy can display or suppress the grid-and-guide overlay used to judge where objects sit and how they line up. In many production workflows, the publication's InDesign designer defines those grids and guides. After an InCopy story has been linked with the InDesign document, InCopy users can view those layout aids.

InCopy also lets you build grids directly. However, linked files take their grid behavior from InDesign, so InDesign grid definitions override the InCopy preferences. For that reason, InCopy-created grids are most practical in stand-alone documents that will be published directly from InCopy.

Printed pages and exported files never include these grids or guides. Each page has one ruler/grid set, while a guide may be limited to one page or may run across every page in a spread.

Note

Galley view and Story view do not provide grids, rulers, or guides.

### Frames, grids, rulers, and guides — Set up a baseline grid

Set the document-wide baseline grid from Grid Preferences.

Open Edit > Preferences > Grids (Windows) or InCopy > Preferences > Grids (Mac OS).

In the Color menu, pick the color for the baseline grid. Custom is also available from the Color menu.

For Relative To, choose whether the grid begins at the top of the page or at the top margin.

For Start, enter the offset from the top of the page or from the page's top margin, according to the Relative To selection. If the vertical ruler is difficult to line up with the grid, begin by testing a zero value.

For Increment Every, enter the distance between baseline grid lines. Usually this should match the leading of the body text, which lets lines of type sit on the grid.

Baseline grid in document window

A. First grid line B. Increment between grid lines

Baseline grid in document window

For View Threshold, enter the zoom level below which the grid is hidden. Raising the view threshold keeps grid lines from becoming dense at lower zoom levels.

Baseline grid at magnification below view threshold (left) and above view threshold (right)

Baseline grid at magnification below view threshold (left) and above view threshold (right)

Click OK.

Note

Snap To Guides governs snapping both to guides and to the baseline grid.

### Frames, grids, rulers, and guides — Set up a document grid

Open Edit > Preferences > Grids (Windows) or InCopy > Preferences > Grids (Mac OS).

Choose the document grid color from the Color menu. Custom can also be chosen from that same Color menu.

For horizontal spacing, use Gridline Every in the Horizontal part of Document Grid, then set the Subdivisions value between grid lines.

For vertical spacing, use Gridline Every in the Vertical part of Document Grid, then set the Subdivisions value between grid lines.

Select one of these placement choices, and then click OK:

To draw the document grid and baseline grid behind every object, keep Grids In Back selected.

To draw the document grid and baseline grid over every object, clear Grids In Back.

Note

Guides can also be sent behind all objects by choosing Guides In Back from the context menu that opens when you right-click (Windows) or Control-click (Mac OS) an empty part of the document window.

### Frames, grids, rulers, and guides — Show or hide grids

For the baseline grid, use View > Grids & Guides > Show/Hide Baseline Grid to switch its visibility.

For the document grid, use View > Grids & Guides > Show/Hide Document Grid to toggle display.

For the layout grid, use View > Grids & Guides > Show/Hide Layout Grid to show it or hide it.

For frame grids, use View > Grids & Guides > Show/Hide Frame Grid to control visibility.

### Frames, grids, rulers, and guides — View ruler guides

Unlike grids, ruler guides are free-positioned on a page or on the pasteboard. InDesign users can create pageguides, which appear only on the page where they were made, and spreadguides, which extend across every page and the pasteboard in a multiple-page spread. InCopy can display ruler guides that are already present in the InDesign document or assignment file, but it cannot create new ones.

Guides

A. Spread guide B. Page guide

Guides

### Frames, grids, rulers, and guides — Show or hide ruler guides

Confirm that Layout view is active; when needed, use the Layout view tab at the top of the edit pane. Then choose View > Grids & Guides > Show/Hide Guides.

### Frames, grids, rulers, and guides — Display ruler guides behind objects

Ruler guides normally draw in front of the other guides and objects. Some guides can obscure artwork, for example lines with very small stroke widths.

The Guides In Back preference changes whether ruler guides appear before or behind the rest of the objects. Even when that preference is changed, objects and ruler guides still draw above margin guides and guides for columns.

Open Edit > Preferences > Guides & Pasteboard (Windows) or InCopy > Preferences > Guides & Pasteboard (Mac OS). Enable Guides In Back, and then click OK.

### Frames, grids, rulers, and guides — Customize the pasteboard and guides

From the Edit menu (Windows) or the InCopy menu (Mac OS), choose Preferences > Guides & Pasteboard. To adjust margin guide or column guide color, choose a preset from a menu, or choose Custom and define a color with the color picker. To resize the pasteboard vertically, enter a Minimum Vertical Offset value. Click OK.

### Frames, grids, rulers, and guides — Use layers

Think of layers as clear sheets placed one above another. Where a layer contains no objects, items on lower layers remain visible through it.

Layer creation is available only in InDesign. InCopy users can show or hide layers, show or hide objects on those layers, and adjust layer settings. When an InDesign document contains several layers, hiding selected layers in InCopy lets you work on particular regions or content types without changing the others. For instance, when many large graphics make a document print slowly, hiding all non-text layers lets you print the text layer quickly for proofreading.

Additional layer notes:

Items on parents sit at the bottom of each layer. Parent-page objects can still appear above document-page objects when the parent-page objects are placed on a higher layer.

Layers apply across the whole document, including masters. For example, hiding Layer 1 while editing page 1 hides that layer on every page until you show it again.

In the Layers panel, layers are ordered with the frontmost layer at the top.

The top entry in the Layers panel represents the frontmost layer.

### Frames, grids, rulers, and guides — Show and hide layers

Choose Window > Layers. In the Layers panel, use any of these controls:

To hide one layer, click the eye icon to the left of that layer's name.

To reveal one layer, click the blank area to the left of that layer's name.

To list the objects on a layer, click the triangle beside the layer name. Use the eye icon to show or hide individual objects.

To toggle every layer in a single action, choose Show/Hide All Layers from the panel menu.

Note

Printing includes only layers and objects that are visible.

### More like this

- About frames
- Copyfitting text
- About frame grids in InCopy documents

## Frame grids — About frame grids in InCopy documents

When you make a new InCopy document, the text area can be a frame grid or a plain text frame. A frame grid provides squares for Japanese characters. In everyday use and visual form, frame grids are much like plain text frames, except that their grids can influence how text looks.

Frame grids have the following characteristics:

Frame grids store character attribute settings. Those preset attributes are applied to text that is placed into the frame. Plain text frames do not store character attributes; placed text instead receives the attributes currently active in the Character panel.

Use File >Document Setup to change character attributes for a frame grid. With a plain text frame, select some placed text and set its attributes through the Character panel. Text inside a frame grid can also be selected and edited with the Character panel to change character attributes.

Grid attributes determine the frame grid, including text direction, vertical and horizontal percentage, character aki, and line aki. InCopy does not let you change a frame grid's color.

When an existing InDesign frame grid or text frame receives an InCopy document, text formatting follows the InDesign settings. If the loaded text icon is clicked during placement, the InCopy document keeps the text area setting that was defined in InCopy.

InCopy, unlike InDesign, has no layout grid or named grids.

Frame grids are visible only in Layout View while Show Frame Grid is selected. Show Frame Grid is enabled by default.

### Frame grids — Document setup options for frame grids

These controls become available in the New Document or Document Setupdialog box when Text Area is set to Frame Grid:

Vertical and Horizontal Grid Scaling

Set, as a percentage, the grid scaling used for full-width Japanese characters.

Char Aki

Set the space between characters. The grid mesh spacing uses this value.

Line Aki

Enter the grid line spacing value. The measurement runs from the character embox's bottom (or left) edge on line one to the character embox's top (or right) edge on the following line.

### Frame grids — View frame grids

Normally, frame grids are visible.

Use View > Layout View. Then choose View > Grids & Guides > Show Frame Grid.

When the frame grid still is not visible, choose File >Document Setup, and verify that Frame Grid is selected from theWork Area menu.

### Frame grids — Convert text frames and frame grids

In stand-alone documents, plain text frames can be converted to grid frames, and frame grids can be converted to text frames. If a plain text frame becomes a frame grid, any story text without an applied character style or paragraph style receives the frame grid document defaults. (See About frame grids in InCopy documents.)

Grid format cannot be applied directly to documents that do not contain frame grids. Once the text area is converted into a frame grid, grid format attributes can be applied by using a predetermined grid format on a frame grid with text that has no paragraph style. (See Apply grid format to text.)

Note

Text frames do not have character attributes, so converting a frame grid that does have character attributes into a plain text frame may reformat the text. For example, if Character Aki is set to ‑1H in a frame grid and that frame grid becomes a plain text frame, character spacing changes to 0H and the characters spread slightly. The frame grid settings are retained, so converting back to a frame grid restores character spacing to the original ‑1H value.

### Frame grids — Convert a text frame into a frame grid

Choose File > Document Setup.

Document Setup is unavailable when you are editing content linked to InDesign. For linked content, make the change in InDesign.

From the Text Area menu, choose Frame Grid. Enter the needed attributes for the frame grid. (See Document setup options for frame grids.) Click OK.

To make selected text follow the grid attributes, select it and choose Edit > Apply Grid Format.

### Frame grids — Convert a frame grid to a plain text frame

Choose File > Document Setup.

Document Setup is unavailable when you are editing content linked to InDesign. For linked content, use InDesign for this setting.

Use the Text Area menu to choose Text Frame. Confirm with OK.

### More like this

- Work with stand-alone documents
