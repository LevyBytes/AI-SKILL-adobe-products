# Type On A Path, Conditional And Variable Text

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add or delete type on path; Edit type on path; Apply effects to type on path; Conditional text overview; Create and edit conditional text; Use condition sets; Text variables overview; Create and manage text variables; Format text variables; Markers types and display options.

## Add or delete type on path

Add text that follows the edge of an open or closed path in Adobe InDesign, then edit or remove that path text as needed.

Path text is useful for typographic effects in which letters follow curves, shapes, or custom outlines. The same approach works on any vector path in the document, including circular, wavy, and geometric paths.

### Add type on path

Create a shape or path.

Right-click Type tool to open the flyout menu, then choose Type on a Path tool.

Move the pointer onto the target path segment until a plus icon appears beside the cursor.

Click the path to place an insertion point, or drag along it to define the span that will hold the text. Dragging sets a limited range, so text appears only along that part of the path. A single click lets text continue along the full path length from the clicked point.

Type directly on the path, or paste text already on the clipboard.

### Delete type from path

With the Selection tool, select one or more type-on-a-path objects.

Choose Type > Type on a Path > Delete Type from Path. Threaded path text moves into the next frame or path; unthreaded path text is removed. The path itself stays in place, but type-on-a-path attributes and threading elements are cleared.

When the path's fill and stroke are both None, removing the type leaves the path invisible. To show it again, press the D key immediately after choosing Type > Type on a Path > Delete Type from Path. The selected path receives the default fill and stroke.

## Edit type on path

In Adobe InDesign, modify path text by changing the text, spacing, direction, and position around path objects.

Use InDesign character and paragraph controls with type on a path. Paragraph panel alignment determines how the path text aligns, while paragraph rules and paragraph spacing settings do not affect type on a path.

### Edit and format text

Choose the Type on a Path tool, then click between characters on the path to set an insertion point or drag through characters to select them.

Make the needed text edits and formatting changes.

### Change start or end position of type on a path

Using the Selection tool, select the type on a path.

Place the pointer over the text path's start position until a right arrow appears with the pointer. Zoom in when needed so the bracket is easier to select.

Move the start or end bracket by dragging it along the path to a new location. Any paragraph indent value is calculated from the start and end brackets.

### Flip type on a path

Change the text orientation while leaving its alignment and formatting intact. Type on a path can be flipped back again, which gives more layout flexibility for text on curves, circles, or custom shapes.

With the Selection tool, select the type on a path.

Choose Type > Type on a Path > Options.

In the Type on a Path Options dialog box, enable Flip, then select OK. Another way to flip the text is to place the pointer over the center bracket and drag it across the path.

### Slide type along a path

Reposition type along a path while keeping the path, orientation, and formatting unchanged. Use the center bracket at the text midpoint to move the text to another place on the path.

Using the Selection tool, select the type on a path.

Move the pointer to the path's center bracket; the center bracket icon appears beside the pointer when you are on target.

Zoom in on the path if the bracket is hard to select.

Drag the center bracket along the path until the text reaches the desired position.

If the text does not move, drag the start or end bracket away from the path ends to make room, then drag the center bracket again.

## Apply effects to type on path

In Adobe InDesign, tighten spacing on sharp path curves, apply type-on-path effects, and attach anchored objects to path text.

### Tighten character spacing around sharp turns on paths

Curved or sharply angled paths can make characters fan apart and leave visible gaps. Spacing reduces that extra distance only in those curved or angled areas, while straight portions remain unchanged. This differs from kerning and tracking because it addresses distortion caused by the path shape. Use kerning or tracking when the whole path needs spacing changes.

With the Selection tool or the Type tool, select the path text to adjust.

Choose Type > Type on a Path > Options.

Enter the needed value in the Spacing field. The Spacing value offsets the way characters spread around curves or sharp angles. Characters on straight path segments are not affected.

Increase values to close extra gaps between characters on sharp curves or angles.

Use higher values when you need less space between characters placed on sharp curves or angles.

To adjust character spacing anywhere on the path, select the characters and apply kerning or tracking.

Select OK.

### Apply effects

Use type-on-path effects to build more distinctive path-text designs. InDesign provides five alignment effects plus spacing controls for improving readability on curves and angles. These settings change the relationship between characters and the path by rotating them, distorting them, or leaving them vertical. Apply the effect after the path text has been created.

With the Selection tool or the Type tool, select the type on a path.

Choose Type > Type on a Path > Options.

In the Effect menu, choose one of these options:

- Rainbow: aligns each character so its baseline center stays parallel with the path's tangent.
- Skew: keeps characters' vertical edges upright while their horizontal edges follow the path.
- 3D Ribbon: keeps characters' horizontal edges level while their vertical edges stay perpendicular to the path.
- Stair Step: places each baseline's left edge on the path while leaving characters unrotated.
- Gravity: holds each character's baseline center on the path while directing vertical edges toward the path's center.

Select OK.

### Add anchored objects

Attach images, text frames, or graphics to type on a path so those objects travel with the text and keep their placement. Only inline and above-line objects work; custom-positioned objects are unsupported. When text reflows, anchored objects follow it and take on the path's rotation and skew.

With the Type tool or the Type on a Path tool, set an insertion point for the anchored object.

Add the anchored object to the path as an inline object, above line object, or frame. For above-line anchored objects, Alignment is measured relative to the anchored object marker, and Space Before is unavailable.

## Conditional text overview

Use conditional text in Adobe InDesign to keep several document variants inside one source file.

### What conditional text does

In an InDesign file, conditional text controls whether selected content appears or stays hidden without requiring duplicate documents. Apply conditions to text, then set each condition's visibility state inside the same document.

### How conditions work

A condition works as a label attached to a text range. After the label is assigned, InDesign treats that range as belonging to the condition, so you can include it or leave it out for viewing, printing, or export.

### Plan before you apply conditions

Plan conditional text before applying it. That planning step clarifies which content sections can change and how those variations connect. Documents remain easier to manage as they expand when condition names are clear and usage stays consistent.

### Use multiple conditions when needed

The same text can carry more than one condition. Overlapping variations are easier to handle with these combinations. InDesign decides whether the text displays by checking the visibility state of each assigned condition.

### Hidden text stays in the document

Adding conditions does not delete anything from the file. Even when text is hidden, it stays editable and searchable, which helps you maintain every variation and update it without losing information.

## Create and edit conditional text

Create, apply, and maintain conditional text in Adobe InDesign when one layout needs content that can be shown, hidden, or managed as multiple versions.

### Create conditions for your document

Choose Window > Type & Tables > Conditional Text.

In the Conditional Text panel menu, choose New Condition.

Enter a condition name.

Choose the Indicator method, appearance, and color so the document shows the condition with the intended indicator style.

Choose OK. InDesign stores the conditions in the active document. When no document is open, the conditions are added to future new documents instead. Indicators, such as wavy underlines, are visible by default but are not printed or exported. In the Conditional Text panel, use the Indicators menu to display, suppress, or include indicators while checking output.

### Apply conditions to text ranges

Open the document containing the content, then select the target text.

Choose Window > Type & Tables > Conditional Text.

Choose a condition to assign it to the selected text.

To assign one condition while clearing others, hold Alt (Windows) or Option (macOS) as you choose the condition.

Use the check mark to clear one condition, or choose [Unconditional] to clear every condition.

For quicker condition assignment, use Quick Apply (Ctrl + Enter (Windows) or Cmd + Enter (macOS)). The selected text displays its assigned conditions. By default, indicators identify conditional text. In the Conditional Text panel, a solid check mark means the condition covers the entire selection; a dim check mark means only part of the selection has that condition.

### Edit a condition

Choose Window > Type & Tables > Conditional Text.

In the Conditional Text panel, double-click the condition.

Change the name, or adjust the indicator style, color, or method.

Choose OK. The condition is revised, and its indicators in the document update to match.

### Delete conditions

Choose Window > Type & Tables > Conditional Text.

In the Conditional Text panel, choose a condition. Hold Shift for adjacent conditions, or hold Ctrl (Windows) or Cmd (macOS) for conditions that are not adjacent.

Choose the Delete Condition icon.

Choose which condition should replace the one being deleted.

Choose OK. InDesign removes the deleted condition and applies the chosen replacement condition to every affected text range.

### Show or hide individual conditions

Choose Window > Type & Tables > Conditional Text.

Use the eye icon beside a condition name to switch its visibility on or off. The condition you chose becomes shown or hidden.

### Show or hide all conditions

Choose Window > Type & Tables > Conditional Text.

In the Conditional Text panel menu, choose Show All or Hide All. The document's conditional text is displayed or concealed as a group.

Note

Hidden text is omitted from printing, export, search, spell check, and indexes. When text has several conditions, it remains visible as long as at least one assigned condition is visible. Changing condition visibility can alter layout and page numbering. Use Smart Text Reflow to adjust pages automatically.

## Use condition sets

Save and reuse visibility choices in Adobe InDesign so you can move between document versions quickly and consistently.

A condition set records the visibility choices for every condition in a document and lets you reuse them. This makes version switching faster, especially in complex documents that differ by platform, language, or review content. Create a condition set

Choose Window > Type & Tables > Conditional Text.

From the panel menu, choose Show Options to reveal the Set drop-down menu if it is hidden.

Use the eye icon next to each condition to set whether that condition is visible.

In the Set drop-down menu, choose Create New Set.

Enter a name for the set and choose OK. The set you created becomes active.

### Apply a condition set

Choose Window > Type & Tables > Conditional Text.

In the Set drop-down menu, choose a condition set.

### Modify a condition set

Choose Window > Type & Tables > Conditional Text.

In the Set drop-down menu, choose the condition set to change.

Use the eye icon next to each condition to revise its visibility.

Choose Redefine (condition set name). The condition set is refreshed with the revised visibility choices. A plus sign (+) beside the condition set marks overrides. Choose that condition set again to clear the overrides.

### Delete a condition set

Choose Window > Type & Tables > Conditional Text.

In the Set drop-down menu, choose the condition set to remove.

Choose Delete [condition set] in the Set drop-down menu. Removing a condition set leaves its conditions intact and does not detach them from text where they are assigned.

## Text variables overview

Use text variables in Adobe InDesign to keep document content such as dates, file names, and page numbers updated throughout a layout.

Text variables are inserted document elements whose values refresh automatically from context. Rather than manually entering information that repeats or changes, add a variable that reflects the document's current content or state. For example, a variable can display the last page number and refresh after pages are inserted or removed.

### Text variable behavior

As document content or attributes change, text variables refresh dynamically. If a variable is tied to source information such as a page number, file name, or running header, InDesign updates the displayed value whenever that source changes.

### Where variables are commonly used

Text variables help when information should mirror the document's current structure or metadata. Common uses include:

- Running headers and footers that pull from section names or chapter titles.
- Standard page numbers, plus numbering that uses Page X of Y.
- Slug areas that display metadata, including creation date or file name.
- Templates where repeated values need to remain consistent across pages or documents.

### Types of text variables and their behaviors

InDesign includes these variable types for specific kinds of dynamic document content:

- Chapter Number: Shows the current chapter number. You can place text before or after it and choose the numbering style. If a chapter is continued from an earlier document in a book, refresh the book's numbering so the chapter number displays correctly.
- Creation Date, Modification Date, and Output Date: These variables show when the file was first saved, most recently saved, or sent through an output process such as printing, PDF export, or packaging. Text can be added before or after each date, and the date-format controls are shared by all date variables.
- Date Format: Determines how date values are displayed. You can type the format yourself or pick one from the available list. Because date variables follow the language applied to nearby text, documents in different languages may show the same date in different forms. Examples: MM/dd/yy -> 12/25/07; MMM. d, yyyy -> Dec. 22, 2025. The same language rule applies to text: a creation date can appear in Spanish text as 01 diciembre 2025 and in German text as 01 Dezember 2025.

  - Include Entire Folder Path: Adds the complete folder path together with the file name. InDesign follows the normal path conventions for Windows or macOS.
  - Include File Extension: Adds the extension to the file name. The File Name variable refreshes whenever the document is saved under another name or in another location. The path or extension is not shown in the layout until the document has been saved.

- Image Name: Shows image metadata and is often used for automatic captions. Image Name contains a Metadata Caption variable type. When a text frame that holds this variable is next to, or grouped with, an image, it shows metadata from that image. Edit Image Name to choose the metadata field it should read.
- Last Page Number: Shows the total page count and is typically used in Page X of Y numbering. It changes automatically when pages are inserted or removed, and it can count either within a section or across the full document.
- Running Header (Paragraph Style or Character Style): This running-header variable returns the first or last instance of text with the chosen style on the page. If the page has no matching text, InDesign uses the value from the previous page.
- Custom Text: Shows reusable text that may need later revision. Changing the variable changes every occurrence at the same time, which is useful for placeholders such as project names or code names.

Tip

For finer control over variable content, insert special characters into text variables.

## Create and manage text variables

Use variables in Adobe InDesign to place dynamic items such as dates, file names, and page numbers in a document automatically.

Before you begin

Close every document when the variables should be available for all newly created documents. If documents remain open, the variables are limited to the active document.

### Define a new text variable

Available settings depend on the selected text variable type. For example, a chapter number variable supports added text and a selected numbering style, while a running header variable uses a chosen style plus punctuation and case controls. Text variables stay on one line; in tight frames, too much variable text can overset.

Use Type > Text Variables > Define.

In the Text Variables dialog box, choose New.

Type a name, such as Full Chapter or Running Title.

Choose a variable type from the Type drop-down menu.

Configure the options for that variable type.

Select OK, then select Done.

### Insert a variable

Put the insertion point at the position where the variable should be inserted.

Select Type > Text Variables > Insert Variable, then select the variable. InDesign places the variable as document text, such as a date or file name.

To show a box around the variable in the current layer color, select Type > Show Hidden Characters.

### Add text before or after a variable

Select Type > Text Variables > Define.

Select the variable, then select Edit.

Type the added content in the Text Before and Text After fields.

Select the triangle icon when you need to add special characters.

Select OK, then select Done. The variable refreshes to include the added text.

### Edit an existing text variable

Select Type > Text Variables > Define.

Select the variable, then select Edit.

Change the variable name, type, or formatting settings as required.

Select OK, then select Done.

### Delete text variables

Open Type > Text Variables > Define.

Choose the variable, then select Delete.

Select Done.

### Import variables from another document

Select Type > Text Variables > Define.

Select Load, then double-click the document that contains the variables.

Select the variables you want to import.

If names collide, choose Use Incoming Definition to replace the current variables or Auto-Rename to rename the imported variable.

Select OK, then select Done.

Book synchronization can also copy variables into other documents.

Tip

Variables are listed alphabetically. To control their sequence, rename them with prefixes such as numbers or categories.

## Format text variables

In Adobe InDesign, styles can format text variables so you can control their appearance, assign character styles, change case, and handle numbering.

### Use styles with text variables

Apply a paragraph or character style to the text that the variable should reference.

Open Type > Text Variables > Define.

Use New, or choose an existing variable and then select Edit.

From the Type drop-down menu, choose a style-based variable. Examples include Running Header (Paragraph Style) and Running Header (Character Style).

In the Style option, select the style for the variable.

Set any other needed options, such as punctuation or case.

Select OK, then select Done.

### Remove end punctuation from variables

Open Type > Text Variables > Define.

Choose a running header variable and open it with Edit.

Select the Delete End Punctuation option.

Select OK, then select Done.

### Control numbering style for numbered variables

Open Type > Text Variables > Define.

Choose a numbered variable type and open it with Edit.

Set the numbering Style, or choose [Current Numbering Style] to follow the document settings.

Select OK, then select Done.

## Markers types and display options

Review marker categories and display controls for index entries, hyperlinks, and XML tags in Adobe InDesign.

InDesign adds text markers for items including index entries, XML tags, hyperlink text, and anchors. These markers occupy no width and do not alter composition, but they can be selected, cut, copied, or deleted. Their positions are what InDesign uses to build accurate bookmarks or page references in a table of contents, index, and exported PDF files.

You can show every marker or limit the display to hyperlink markers or tagged text markers. To display markers, select Type > Show Hidden Characters. Markers are also visible in Story Editor, where they appear larger and are easier to spot.

Selecting a word that contains markers selects its related markers as well. Consider that behavior before cutting, copying, or deleting text so you do not remove markers by mistake.

To select a marker by itself, select Type > Show Hidden Characters. Place the insertion point beside the marker. Hold Shift, then use Left Arrow or Right Arrow so the selection includes the marker.

## See also

- [Characters](uxp-characters.md)
