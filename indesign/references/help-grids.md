# Create Customize Layout Grids, Use A Baseline Grid, Use A Document Grid, Convert Text Frames Grids ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create and customize layout grids; Use a baseline grid; Use a document grid; Convert between text frames and frame grids; Set frame grid properties; Show or hide frame grid character count; Show or hide grids; Snap objects to grids; Create and apply named grids to frames; Edit or delete named grids; Import grid formats from other documents.

## Create and customize layout grids

Use layout grid settings to manage character size, spacing, and page structure in Japanese document layouts.

For professional Japanese editorial design, layout grids provide exact typographic control through customizable digital grids instead of traditional paper-based layout sheets.

### Set up a new document with layout grid

Choose File > New > Document.

In the New Document dialog box, specify the page count and select the page dimensions.

Choose Layout Grid to move away from the default Margins and Columns view.

In Grid Attributes, choose the font family and style that define the grid's base character size.

Enter the Size value that sets the font size used to determine each grid cell's dimensions.

Set Char Aki (character spacing) and Line Aki (line spacing) to control the spaces between grid cells.

In Lines and Columns, enter Characters per line, Lines per column, and the number of Columns.

For Starting Point, choose where the grid begins on the page (Top/Outside, Center, Bottom/Inside).

Choose OK to build the document with the selected layout grid settings. After the layout grid is created, the page margins line up with the grid's outside edges automatically. Space left beyond the starting point becomes the margin area.

Note

In Grid Attributes, the Vertical and Horizontal fields set character scaling percentages. Use these values to change grid cell dimensions for condensed or expanded text.

### Modify existing layout grid settings

When you adjust grid settings for selected pages, InDesign generates grids that apply only to those pages. A single document can use separate layout grids for different sections. Because Layout Grid and Margins and Columns both describe the same document structure, edits in the Layout Grid dialog box also affect Margins and Columns settings. If the character or line count does not divide evenly into the entered values, the grid can contain gaps. To remove those gaps, open the Layout Grid dialog box again and choose OK without editing anything, allowing InDesign to fit the grid as closely as it can.

Move to the page or spread you need to change, or choose multiple pages in the Pages panel.

Choose Layout > Layout Grid.

Change the needed settings in the Layout Grid dialog box.

Choose OK.

### Apply layout grid to documents created with Margins and Columns

Open the document that was made with Margins and Columns.

Choose View > Grids & Guides > Show Layout Grid to show the default grid.

Choose Layout > Layout Grid to change the grid attributes.

Set Font, Size, Characters, Lines, and Starting Point so they fit the layout you need.

Choose OK. The layout grid is displayed as a positioning reference. To place text, draw frame grids with the Horizontal Grid tool or Vertical Grid tool.

Layout grids work with text frames, frame grids, and graphic frames. As you drag objects near grid cells, the nearest object corner snaps to one of the four corners of a grid cell for accurate alignment.

To make frame grids that take their character and spacing values from the layout grid, choose the Horizontal Grid tool or Vertical Grid tool in the Tools panel, then drag on the page. If a layout grid is active at creation time, new frame grids automatically use its font size, character spacing, and line spacing.

## Use a baseline grid

In Adobe InDesign, align text to a baseline grid when you need consistent spacing across columns and pages.

Baseline grids line up text baselines from column to column and page to page, improving spacing consistency and readability. They are useful for keeping frames and spreads aligned. A baseline grid follows the document leading and can be configured for the whole document or for a single frame.

The grid is drawn as horizontal lines, and it appears only when the zoom is above the configured view threshold.

### Set up the baseline grid

Choose Edit > Preferences > Grids (Windows) or InDesign > Preferences > Grids (macOS).

In the Baseline Grid section, choose a color from the Color menu or choose Custom.

For Start, enter the offset measured from either the top of the page or the top margin.

Tip

Use zero for the simplest alignment with the vertical ruler.

For Relative To, choose whether the grid begins at the top of the page or at the top margin.

For Increment Every, enter the same value as the leading used by your body text.

For instance, enter 12 pt when the text uses 12-point leading.

For View Threshold, set the lowest zoom level at which the grid should be visible.

Tip

Higher values keep lower zoom levels less cluttered.

Choose OK.

### Create a frame-based baseline grid

Frame-based baseline grids replace the document grid inside an individual frame, so selected text areas can use different leading. If Grids in Back is turned on (Preferences > Grids), frame grids are shown in front of the document grid.

With the Selection tool, select a text frame.

Choose Object > Text Frame Options.

Choose the Baseline Options tab.

Select Use Custom Baseline Grid.

Enter the Start and Increment Every values for the grid used by that frame.

Choose OK.

## Use a document grid

Use grid lines in Adobe InDesign to align objects and snap page items into position.

Document grids add nonprinting horizontal and vertical lines across the pasteboard for precise object alignment. They support consistent positioning and spacing throughout a layout. These grids are separate from baseline grids and can be displayed either in front of objects or behind them.

Choose Edit > Preferences > Grids (Windows) or InDesign > Preferences > Grids (macOS).

In the Document Grid section, choose a grid color from the Color menu or choose Custom.

In the Horizontal section, enter values:

Gridline Every: sets the distance between major grid lines.

Subdivisions: sets how many intermediate lines appear between major gridlines.

Tip

Subdivisions give you finer alignment locations. For example, if Gridline Every is 1 inch and Subdivisions is 4, alignment points are spaced every 0.25 inches.

Use the same settings in the Vertical section to define vertical grid spacing.

Select Grids in Back to display grids behind every object. Clear it to show grids in front of objects.

Choose OK.

## Convert between text frames and frame grids

In Adobe InDesign, you can change frame types when you need to add grid formatting or remove a grid structure from a text container.

Adobe InDesign provides two kinds of text containers: frame grids and plain text frames. Frame grids display character and spacing grids for Asian-language composition; plain text frames do not. Conversion keeps the text itself but changes the container structure and how formatting behaves.

### Convert a plain text frame to a frame grid

Select the text frame with the Selection tool.

Choose Object > Frame Type > Frame Grid.

To put grid formatting on the text, select the frame grid and choose Edit > Apply Grid Format. The story text is reformatted using the frame grid's default attributes. This optional step is recommended when the text should follow grid specifications.

After conversion to a frame grid, empty space can appear along the edges when the frame dimensions are not evenly divisible by the font size or leading values in the grid format. Remove that spacing by dragging the frame handles with the Selection tool.

### Convert a frame grid to plain text frame

Select the frame grid with the Selection tool.

Choose Object > Frame Type > Text Frame. Alternatively, choose Type > Story, then use the Frame Type panel menu to choose either Frame Grid or Text Frame.

Tip

For Asian-language layouts, frame grids are especially useful when you need fine control over character and line spacing. Plain text frames provide more flexibility for Western typography and documents that mix languages.

## Set frame grid properties

Use the Frame Grid Options dialog box in Adobe InDesign to adjust font, size, spacing, and alignment settings.

For Asian-language composition, frame grids define layout structure with visible character emboxes and spacing. You can tune the main typography and spacing values, then apply them to specific frame grids to control text flow. Frame grid settings and text frame settings update each other dynamically, which helps keep layouts consistent. Use layout grid options for document-wide grids.

### Configure font and character properties

With the Selection tool, choose the frame grid that needs changes. Another route is to switch to the Type tool, click within the frame, and place the text insertion point.

Choose Object > Frame Grid Options.

Turn on Preview so edits refresh on the page while you work.

Use the Font drop-down menu when you need a different font family or style.

Type the desired value in Font Size. This controls the font size and also sets how large each grid cell is. The Size value becomes that cell measurement for the grid; increasing or lowering it changes the overall scale of the grid structure.

For full-width Asian characters, enter percentage scaling values in Vertical and Horizontal.

Set Char Aki to define spacing between frame-grid cells and adjust the grid mesh spacing.

### Set line spacing and alignment

Choose the frame grid with the Selection tool.

Choose Object > Frame Grid Options.

In Line Aki, enter the distance between adjacent grid lines, measured from one line's lower or left edge to the next line's upper or right edge. If Line Aki is negative, Auto Leading changes automatically to 80% instead of the 100% default in Justification in the Paragraph panel. That adjustment keeps grid alignment from producing overly loose line spacing when it exceeds the leading value assigned through text attributes.

Use Line Align to decide the vertical placement of text lines inside the grid.

Use Grid Align to set alignment against the embox, ICF box, or roman baseline.

Use Char Align for the way smaller characters line up against larger characters on the same line.

### Configure display and grid structure

Choose the frame grid with the Selection tool.

Choose Object > Frame Grid Options.

Open View and choose one of these display modes:

- Grid: displays grid linework.
- NZ View: indicates direction with diagonal lines.
- Alignment View: displays lines only.
- Alignment: displays line alignment.
- Grid With NZ: presents Grid and NZ View together.

Use Char Count to decide where the character count is shown on the frame grid.

Enter the characters-per-line total in Characters.

Enter the lines-per-column total in Lines.

Set the number of frame-grid columns in Columns.

Type the column spacing in Gutter.

Select OK.

Afterward, the frame grid uses the revised properties. When character count display is on, the bottom of the grid reports characters per line, line count, total cells, and the actual character count. For instance, if a grid has 10 characters per line, 5 lines, and 50 total cells with 29 characters placed, it appears as "10×5 (50) 29".

Tip

If Frame Grid Options is opened while nothing is selected, changes made there become the defaults for new frame grids in the current document.

## Show or hide frame grid character count

Use commands in the View menu in Adobe InDesign to turn frame-grid character counts on or off.

At the bottom of a frame grid, InDesign can show a count that reports characters per line, total lines, total cells, and the actual character count. Hide it when you want a less cluttered workspace, or display it while checking whether text fits the layout. The readout makes it easier to see how much text is in the grid and whether overset text needs correction.

### Toggle character count display

Choose View > Grids & Guides > Show Character Count to show the readout, or choose Hide Character Count when you want it hidden.

The readout sits at the bottom of the frame grid. For example, a grid display of 10, 5, 50 (29) indicates:

- Per-line characters: 10
- Lines: 5
- Cell total: 50
- Characters actually placed: 29

### Customize character count appearance

If the position or size of the character count needs adjustment, change those controls in the Frame Grid Options dialog box.

Select the frame grid with the Selection tool.

Choose Object > Frame Grid Options.

In View Options, set the character count display choices and size preferences.

Select OK to apply the changes.

Tip

Character count is available for frame grids only; regular text frames do not use this feature.

## Show or hide grids

Control grid visibility in Adobe InDesign when you need layout structure visible or want to review a near-final design.

InDesign includes two nonprinting alignment grids: the baseline grid for aligning text and the document grid for positioning objects. During layout work you can show grids, then hide them for design review. The document stores their visibility state.

### Toggle baseline grid visibility

Choose View > Grids & Guides > Show Baseline Grid to reveal the baseline grid.

Choose View > Grids & Guides > Hide Baseline Grid to conceal it.

The baseline grid becomes visible only above the magnification level defined by View Threshold in Preferences > Grids. If it does not appear, zoom in further.

### Toggle document grid visibility

Choose View > Grids & Guides > Show Document Grid to reveal the document grid.

Choose View > Grids & Guides > Hide Document Grid to conceal it.

## Snap objects to grids

Set up grid snapping in Adobe InDesign so objects can align automatically to document or baseline grids.

When grid snapping is enabled, dragged objects align as they approach grid lines. The snap zone defines how near an object must be before it snaps. Snapping can use grids whether they are visible or hidden, although visible grids make alignment easier to judge.

### Allow snapping to the document grid

Choose View > Grids & Guides > Snap to Document Grid.

Open Edit > Preferences > Guides & Pasteboard (Windows) or InDesign > Preferences > Guides & Pasteboard (macOS).

In Snap to Zone, enter a pixel value that defines the required snapping distance.

Select OK.

Drag an object toward the document grid until at least one edge falls within the snap zone distance from a grid line.

### Allow snapping to the baseline grid

Choose View > Grids & Guides > Snap to Guides.

Open Edit > Preferences > Guides & Pasteboard (Windows) or InDesign > Preferences > Guides & Pasteboard (macOS).

Enter the Snap to Zone value in pixels, then select OK.

Move objects close to baseline grid lines so their edges snap into alignment.

Note

Snap to Guides controls snapping for both ruler guides and the baseline grid.

## Create and apply named grids to frames

Save frame grid formatting in Adobe InDesign as named grids so the same settings can be reused and applied consistently across a document.

Named grids act like reusable formatting styles for frame grids, which helps keep grid settings uniform across the document. They work from the Properties panel, support Variable Fonts, and can sync between devices with Creative Cloud Libraries. When CJK or East Asian Type options are turned on, named grids are available; they include the default Layout Grid and show which formatting is applied by highlighting the active grid style in the Named Grids panel.

### Create a named grid format

Using the Selection tool, select the frame grid whose formatting should become the saved format.

Choose Window > Type & Tables > Named Grids.

Choose the panel menu icon and then New Named Grid, or use the Create Style icon in the Contextual Task Bar.

In Edit Grid Format, type a clear name in Grid Name.

Set the grid options: Font (with Variable Font slider support), Size, Vertical Scale and Horizontal Scale, Char Aki (spacing between characters), Line Aki (spacing between lines), Line Align, Grid Align, and Char Align.

Turn on Live Preview at the bottom of the dialog box to preview formatting changes in the document before saving.

Select OK to save the named grid format.

Note

If a frame grid is selected when you create a named grid format from it, the new format attributes are applied to that frame right away. To keep the selected frame grid unchanged, clear the selection before opening Edit Grid Format.

### Apply a named grid format to frame grids

A named grid format applies grid-formatting attributes to text inside the frame grid. Text with character styles, paragraph styles, or direct formatting keeps those attributes, and those settings override the grid format. When both a style and grid formatting affect the text, a plus icon can appear beside the style name.

Select one or more frame grids with the Selection tool, or use the Type tool to select text inside a frame grid.

In the Named Grids panel (Window > Type & Tables > Named Grids) or in Frame Grid in the Properties panel, choose the grid format name to apply. The Apply to All Similar button in the Task Bar can apply the style to all matching frames in the story.

To push grid format attributes through all text in a story, select the frame grid with the Selection tool, then choose Edit > Apply Grid Format.

## Edit or delete named grids

Modify existing grid format definitions in Adobe InDesign, or delete grid formats that are no longer needed in the document.

In the Adobe InDesign Japanese or CJK (Chinese, Japanese, Korean) version, named grid formats let multiple frame grids share one format definition. Changing the definition updates every linked grid immediately; deleting it breaks the association while leaving the text formatting in place. These grids also work with Flex layout containers for responsive adjustments. Named Grids can be synchronized between documents through the Book panel.

### Edit a named grid format

Choose Window > Type & Tables > Named Grids.

In the panel, select the grid format to change. To update every frame grid that uses that format while nothing is selected, hold Shift + Ctrl + Alt (Windows) or Shift + Command + Option (macOS) and double-click the grid format name in the Named Grids panel.

Choose the panel menu icon and then Named Grid Options, or double-click the grid format name.

In Modify Named Grid, change settings such as font, size, character spacing, line spacing, or alignment options. If the grid is inside a Flex Container, Responsive Spacing options may also be available.

Select OK.

### Delete a named grid format

Choose Window > Type & Tables > Named Grids.

Select the grid format name to delete from the panel.

From the panel menu, choose Delete Named Grids, or use the Delete icon at the bottom of the panel.

Deleting a grid format leaves the text's visual formatting in frame grids as-is, but removes the link between those grids and the format. The text is then handled as Override formatting until another style is assigned.

The format no longer appears in the Named Grids panel. Frame grids that used it keep their appearance, but they are no longer connected to a named format.

## Import grid formats from other documents

Bring named grid formats into a document from existing Adobe InDesign files or Creative Cloud Libraries, then reuse those frame grid settings elsewhere.

You can carry alignment, spacing, size, and font settings between InDesign documents by importing named grid formats. This workflow is specific to the Japanese version. It brings saved formats into the Named Grids panel, can replace destination formats with matching names, and updates all grids tied to those formats. Before loading formats, make sure the source document contains saved formats and that the destination document is open. Synced formats can also be dragged from the Windows CC Libraries panel.

Choose Window > Type & Tables > Named Grids.

Choose the panel menu icon and then Load All Named Grids. If the source file is stored in the Adobe Cloud, an Import from Cloud Document option may also appear.

Browse to the InDesign document (INDD or INDC) that contains the grid formats to import, then double-click it.

Select OK. After import, the Named Grids panel lists the formats, and they can be used in the current document. If an imported grid format shares a name with a format already in the destination document, the imported format replaces the existing one. Any frame grids using that format update automatically to use the imported settings. Rename conflicting formats before importing when you need to prevent accidental overwrites.

## See also

- [Characters](uxp-characters.md)
