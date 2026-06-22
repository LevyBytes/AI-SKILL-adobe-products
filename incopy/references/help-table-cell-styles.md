# Table Cell Styles

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Table and cell styles let table formatting work the way text styles handle text formatting. A table style gathers table-level formatting attributes, including table borders plus row and column strokes, so they can be applied together. A cell style can carry cell insets, paragraph styles, strokes, and fills. Editing a style automatically updates every table or cell that uses it.

Note

Text-style nesting and table-style nesting differ in one important way. A paragraph style may include character style attributes, but table styles do not contain the attributes of cell styles. You therefore cannot change the border color of interior cells with only a table style. Instead, create a cell style, then attach that cell style to the table style.

[Basic Table] and [None] styles

New documents include [Basic Table] for tables you create, and [None] for stripping cell styles from cells. You may edit [Basic Table], but neither [Basic Table] nor [None] can be renamed or deleted.

Using cell styles in table styles

While defining a table style, assign cell styles to table regions: header and footer rows, left and right columns, and body rows. For instance, the header row can use a cell style that applies a paragraph style, while the left and right columns can use separate cell styles that apply background shading.

Cell styles applied to regions in table style

A. Header row formatted with cell style that includes paragraph style B. Left column C. Body cells D. Right column

Cell styles applied to regions in table style

Cell style attributes

A cell style does not have to capture every formatting attribute on the selected cell. When building the style, choose which attributes belong to it. Applying that cell style then changes only those chosen attributes, such as cell fill color, while all other cell attributes are left alone.

Formatting precedence in styles

When formatting conflicts within a table cell, the order below controls the winning formatting:

Cell style precedence

1. Header/Footer 2. Left column/Right column 3. Body rows. If one cell is both in the header and in the left column, the header cell style supplies the formatting.

Table style precedence

1. Cell overrides 2. Cell style 3. Cell styles applied from a table style 4. Table overrides 5. Table styles. If the Cell Options dialog box applies one fill and the cell style applies another, the Cell Options dialog box fill takes precedence.

See www.adobe.com/go/vid0084 for a video tutorial about table styles.

## Table and cell styles — Table/Cell Styles panels overview

Create and name table styles in the Table Styles panel (Window > Styles >Table Styles), then apply them to existing, newly created, or imported tables. In the Cell Styles panel (Window > Styles > Cell Styles), create and name cell styles and apply them to table cells. A document stores its styles, so those styles return in the panel whenever you reopen that document. For easier management, put table and cell styles into groups.

When the insertion point sits in a cell or table, either panel highlights the applied style. Cell styles supplied through a table style show their names in the lower-left corner of the Cell Styles area. If the selected cell range mixes styles, no style is highlighted and the Cell Styles panel shows “(Mixed).”

## Table and cell styles — Open the Table Styles or Cell Styles panel

Open Window > Styles, then select Table Styles or Cell Styles.

## Table and cell styles — Change how styles are listed in the panel

- Turn on Small Panel Rows to show styles in a more compact row height.
- Move a style by dragging it to another position. You can also drag styles into groups you created.
- From the panel menu, choose Sort By Name to arrange the styles alphabetically.

## Table and cell styles — Define table and cell styles

Standalone stories allow InCopy to define, modify, and apply table and cell styles. Styles from another InCopy document can be imported into the current document, but table or cell styles cannot be imported from an InDesign document.

See www.adobe.com/go/vid0084 for a video tutorial about table styles.

To build a new style from existing table or cell formatting, start from a cell by placing the insertion point there. Define a paragraph style for the cell style if you want one. Open the Table Style panel with Window > Styles >Table Styles, or open the Cell Styles panel with Window > Styles > Cell Styles. From the Table Styles panel menu, choose New Table Style; from the Cell Styles panel menu, choose New Cell Style. For Style Name, type a name. For Based On, select the style that the current style uses as its base. To define a style shortcut, put the insertion point in the Shortcut text box and confirm that Num Lock is on. Use Shift, Alt, or Ctrl in any combination on Windows, or use Shift, Option, and Command on Mac OS, then press a number on the numeric keypad. Letters and non-keypad numbers are not valid for style shortcuts. For formatting attributes, select a category on the left and set the values you need. Example: when a cell style needs a paragraph style, click the General category, then pick the paragraph style in the Paragraph Style menu.

For cell styles, any option without a specified setting is ignored by the style. When a setting should not belong to the style, choose (Ignore) from that setting's menu, clear the field, or click a check box until Windows shows a small box or Mac OS shows a hyphen (-).

To place the new style in a style group you created, drag it onto the style group folder.

## Table and cell styles — Load (import) table styles from other documents

Table and cell styles can be brought from another InDesign document into the active document. During the import, choose which styles load and how to handle a loaded style whose name matches a style already in the current document. Styles may also be imported from an InCopy document.

For a standalone InCopy document or InCopy content linked to InDesign, import table and cell styles from an InDesign or InCopy document. You decide which styles are loaded and what happens when a loaded style uses a name already present in the current document.

Note

When linked content receives imported styles, updating the content adds the new styles to the InDesign document; if a style name conflicts, the InDesign style with that name replaces the imported conflict.

Open the panel menu for Cell Styles or Table Styles. Pick Load Cell Styles, Load Table Styles, or Load Table And Cell Styles. Then double-click the InDesign document that contains the styles to import. In the Load Styles dialog box, confirm that a check mark appears next to each style you want to import. If an existing style has the same name as one of the imported styles, select one of the following options under Conflict With Existing Style, then click OK:

Use Incoming Style Definition

Replaces the existing style with the loaded definition and updates every cell in the current document that used the old style. The Load Styles dialog box displays both the incoming and existing definitions at the bottom for comparison.

Auto-Rename

Changes the name of the loaded style. For example, when both documents contain “Table Style 1,” the current document names the loaded style “Table Style 1 copy.”

## Table and cell styles — Apply table and cell styles

Paragraph and character styles behave differently from table and cell styles: table and cell styles do not share attributes. Applying a table style therefore leaves cell formatting intact, and applying a cell style leaves table formatting intact. By default, when you apply a cell style, formatting from any previous cell style is removed while local cell formatting remains. Applying a table style likewise removes formatting from any previous table style, but overrides made in the Table Options dialog box remain.

In the Styles panel, a plus sign (+) beside the current cell or table style means the selected cell or table contains extra formatting outside the applied style. That extra formatting is an override.

After positioning the insertion point in a table or selecting target cells, use either method below:

In the Table Styles or Cell Styles panel, click the table or cell style (Window > Styles >Table Styles or Cell Styles). Expand the style group first if the style is inside one.

Press the shortcut assigned to the style. Make sure that Num Lock is on.

## Table and cell styles — Base one table or cell style on another

Build relationships among related table or cell styles by creating a base, or parent, style. If the parent style is edited, changed attributes that also appear in child styles update in the children. The default base is [No Table Style] for table styles and [None] for cell styles.

After creating the new style, use the New Table Style or New Cell Style dialog box to choose the parent style from the Based On menu. The new style becomes the child style. Add formatting to the new style so it differs from the parent style.

## Table and cell styles — Edit table and cell styles

One benefit of styles is that changing a style definition also changes every table or cell using that style so it matches the new definition.

Note

When styles are edited in InCopy content linked to an InDesign document, the edits are overridden after the linked content is updated.

Do one of the following:

When the selected table or cell should not receive the style, use the context menu in the Styles panel: right-click (Windows) or Control-click (Mac OS) the style, then choose Edit [style name].

Another option is to double-click the style in the Styles panel, or select it and choose Style Options from the Styles panel menu. Be aware that this route assigns the cell style when a cell is selected, or assigns the table style when a table is selected. With no table selected, double-clicking a table style makes it the default for tables you create later.

Change settings in the dialog box, then click OK.

## Table and cell styles — Delete table and cell styles

Deleting a style lets you choose a replacement style and decide whether the formatting stays.

In the Styles panel, select the style, then use one of these methods:

Panel menu: choose Delete Style.

Delete icon: click it at the bottom of the panel, or drag the style onto the Delete icon.

Alternatively, right-click (Windows) or Control-click (Mac OS) the style, then choose Delete Style. Use this approach when you need to remove a style while avoiding application to the selected cell or table.

Select the replacement style.

If [No Table Style] replaces a table style or [None] replaces a cell style, select Preserve Formatting to retain the formatting on the table or cell that used the style. The table or cell keeps its formatting but is no longer linked to a style.

Click OK.

## Table and cell styles — Redefine table or cell styles based on current formatting

After a style is applied, any of its settings can be overridden. If the changed formatting is the result you want, redefine the style so it keeps that new formatting.

Note

After linked InCopy content is updated from its InDesign document, those style redefinitions are overridden.

To redefine, activate the table or cell that uses the style you want to redefine. Change the table or cell as needed. Choose Redefine Style from the Styles panel menu.

Note

For cell styles, Redefine Style becomes available only when the changed attributes are included in the cell style. Suppose the cell style contains a red fill; changing a cell to blue fill can feed a redefinition. If the changed attribute is ignored by that cell style, that attribute cannot be captured by redefining the style.

## Table and cell styles — Override table and cell styles

Once a table or cell style is applied, any setting can be overridden. For table style overrides, change options in the Table Options dialog box. For cell overrides, change settings in the Cell Options dialog box or use other panels to adjust stroke or fill. Selecting a table or cell with an override shows a plus sign (+) next to the style in the Styles panel.

Overrides can be cleared at the moment you apply a table or cell style, or later from a table or cell that already uses a style.

Note

When a plus sign (+) appears next to a style, hover over the style to see a description of the override attributes.

## Table and cell styles — Preserve or remove overrides while applying a table style

- Alt (Windows) or Option (Mac OS) + click the style in the Table Styles panel: applies a table style, preserves cell styles, and clears overrides.
- Alt+Shift (Windows) or Option+Shift (Mac OS) + click the style in the Table Styles panel: applies a table style and removes both cell styles and overrides.

Note

Table Styles panel context menu: right-click (Windows) or Control-click (Mac OS) the style, then choose Apply [table style], Clear Cell Styles; this applies a style while clearing cell styles.

## Table and cell styles — Remove overrides while applying a cell style

Alt (Windows) or Option (Mac OS) + click the style name in the Cell Styles panel: applies a cell style and clears overrides.

Note

A change counts as an override only when the changed attribute belongs to the cell style. For example, if the cell style defines a red fill and ignores all other attributes, changing some other cell option is not treated as an override.

## Table and cell styles — Clear attributes not defined by a cell style

From the Cell Styles panel menu, choose Clear Attributes Not Defined By Style.

## Table and cell styles — Clear table or cell overrides

With the override-bearing table or cells selected, use either the Clear Overrides In Selection icon in the Styles panel or Clear Overrides from the Styles panel menu.

## Table and cell styles — Break the link to table or cell styles

Breaking the connection between tables or cells and their assigned style leaves current formatting in place. Later edits to that style no longer change those tables or cells.

Select the cells that use the style. From the Styles panel menu, choose Break Link To Style.

### More like this

- Group styles
- Table Styles video
- Use Quick Apply
- Duplicate styles or style groups
