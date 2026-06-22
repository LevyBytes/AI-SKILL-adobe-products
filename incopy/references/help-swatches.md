# Swatches

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Use the Swatches panel (Window > Swatches) to define, name, and apply colors, gradients, or tints in a document. Swatches work much like paragraph and character styles: changing a swatch updates every object that uses it. They also make color schemes easier to revise because you do not have to find and adjust each object separately.

When selected text or an object has a fill or stroke using a color or gradient from the Swatches panel, the corresponding swatch is highlighted there. Custom swatches belong only to the current document, so each document can keep its own Swatches panel set.

Note

For work with a prepress service provider, swatches provide clear names for spot colors. A preflight profile can also define color settings used to determine which settings are compatible with the printer.

The default Swatches panel includes six CMYK-defined colors: cyan, magenta, yellow, red, green, and blue.

## Work with swatches — Swatch types

The Swatches panel can hold these swatch categories:

Colors

The Swatches panel uses icons to show spot and process color types, along with LAB, RGB, CMYK, and Mixed Ink color modes.

Tints

A percentage beside a swatch in the Swatches panel marks it as a tint of a spot or process color.

Gradients

An icon in the Swatches panel identifies the gradient as radial or linear.

None

The None swatch clears an object's stroke or fill. This swatch cannot be edited or removed.

Paper

Paper is a built-in swatch for previewing the paper color used for printing. Objects below a paper-colored object do not print in areas overlapped by that object; the printed paper color shows there instead. To match a paper stock, double-click Paper in the Swatches panel and edit its color. Use Paper only as a preview color because it does not print on a composite printer or in color separations. This swatch cannot be removed. To remove color from an object, apply None rather than Paper.

Note

If Paper does not behave as described while printing to a non-PostScript printer, select Raster Graphics mode in the printer driver.

Black

The built-in Black swatch is 100% process color black based on the CMYK color model. It cannot be edited or removed. By default, every use of Black overprints underlying inks, including text characters at any size. This behavior can be turned off.

Registration

Registration is a built-in swatch that prints objects on every separation from a PostScript printer. Registration marks, for example, use the Registration color so printing plates can be aligned accurately on a press. This swatch cannot be edited or removed.

Colors from any color library can also be added to the Swatches panel and stored with the document.

## Work with swatches — Customize swatch display

You can choose swatch size and whether swatch names are shown.

From the Swatches panel menu, choose one of these display options:

Name shows a small swatch beside the swatch name. Icons to the right identify the color model, such as CMYK or RGB, and indicate whether the item is a spot color, process color, registration color, or none.

Small Name uses shorter, compact rows in the swatch panel.

Small Swatch or Large Swatch shows only the swatch. A triangle with a dot in the swatch corner marks a spot color; a triangle without a dot marks a process color.

To decide which swatch types are visible, click one of these buttons at the bottom of the Swatches panel:

Show All Swatches displays color, tint, and gradient swatches.

Show Color Swatches limits the view to tint swatches plus process color, spot color, and mixed ink color entries.

Show Gradient Swatches shows only gradient swatches.

Note

The None swatch remains visible no matter which button is clicked.

## Work with swatches — Create color swatches

A swatch may define spot or process colors, mixed inks made from process colors plus one or more spot colors, RGB or Lab colors, gradients, or tints.

Placing an image that includes spot colors automatically adds those colors as swatches in the Swatches panel. Those swatches can be applied to objects in the document, but they cannot be redefined or deleted.

Note

Before making swatches, confirm which settings your printer service provider expects. A preflight profile can flag color settings that are not compatible with the printer.

## Work with swatches — Create a new color swatch

Choose New Color Swatch from the Swatches panel menu. For Color Type, select the printing method used for document colors on a printing press. For Swatch Name, use the appropriate option:

If Color Type is Process and the swatch name should always reflect the color values, keep Name With Color Value selected.

If Color Type is Process and you want to supply your own name, deselect Name With Color Value, and enter a Swatch Name.

If Color Type is Spot, enter a Swatch Name.

For Color Mode, choose the mode used to define the color. Avoid switching modes after the color is defined. Then use one of these methods:

Drag sliders to adjust color values, or type numeric values in the text boxes beside the color sliders.

For spot colors, select a color library through Color Mode.

When an out-of-gamut alert icon appears and you want the nearest in-gamut version of the originally specified color, click the small color box beside the alert icon. Then use one of these actions:

Click Add to add that swatch and define another swatch. Click Done after finishing.

Click OK to add the swatch and close the dialog box.

Note

To define a spot color directly with the New Swatch button in the Swatches panel, make sure no swatches are selected, and then hold Alt+Ctrl (Windows) or Option+Command (Mac OS) while clicking the New Swatch button.

## Work with swatches — Create a swatch based on the color of an object

Choose the object. In either the Toolbox or the Swatches panel, activate the Fill box or Stroke box. From the Swatches panel, use one of these methods:

Click the New Swatch button, then double-click the swatch that is created.

Open the Swatches panel menu and choose New Color Swatch.

InCopy adds that color or gradient to the Swatches panel and shows it in the Toolbox Fill box or Stroke box. The same color or gradient is assigned to the fill or stroke on every selected object.

## Work with swatches — Add unnamed colors to the Swatches panel

Although the Color panel and Color Picker can define colors, colors without names are harder to revise later and harder to apply consistently. Add Unnamed Colors scans the document for unnamed colors already assigned to objects and places them in the Swatches panel. InCopy names those colors from their CMYK, RGB, or Lab component values.

In the Swatches panel, choose Add Unnamed Colors.

## Work with swatches — Manage swatches

The Swatches panel supports editing, duplication, sorting, and removal of swatches.

## Work with swatches — Edit the default colors in the Swatches panel

You can revise which swatches are present automatically when new documents are created.

Close every open document. In the Swatches panel, edit the swatches that should change.

## Work with swatches — Duplicate a swatch

Copying a swatch is useful when the next color should be a warmer or cooler version of one already present. Be aware that copying a spot color creates another spot color printing plate.

Use one of these methods:

Select a swatch, then open the Swatches panel menu and choose Duplicate Swatch.

Select a swatch, then click the New Swatch button along the panel's lower edge.

Drag a swatch onto the lower-edge New Swatch button.

## Work with swatches — Edit a swatch

To revise a swatch, change its per-swatch attributes in the Swatch Options dialog box. When the target is a mixed ink swatch or a mixed ink group, extra controls are available.

Select a swatch in the Swatches panel, then choose one method:

Double-click the swatch.

Open the Swatches panel menu and choose Swatch Options.

Set the options you need, then click OK.

## Work with swatches — Control swatch names

Process color swatch names normally come from the color component values. For instance, a red process color built with 10% cyan, 75% magenta, 100% yellow, and 0% black receives the default name C=10 M=75 Y=100 K=0, which makes the process-color mix easier to recognize.

When CMYK values change, a process color swatch name updates automatically unless that behavior is disabled for that swatch. As with other swatches you create, the name of a process color swatch can be edited whenever needed.

In the Swatches panel, double-click a process color. Choose one of these settings, then click OK:

To have InCopyrename the swatch after CMYK percentages are adjusted, leave Name With Color Value selected.

To keep the swatch name from changing after CMYK values are adjusted, clear Name With Color Value.

Note

If Name With Color Value is cleared, the new swatch receives New Color Swatch automatically; when multiple New Color Swatch entries exist, a number is appended. You can replace that generated name by typing your own.

## Work with swatches — Sort swatches

Swatches can be ordered alphabetically or by their color values. Sorting can target every swatch or only the selected ones.

Sort by Name

This sorts swatches alphabetically, from A to Z.

To sort every swatch by name, use either method:

- Use the Swatches panel menu: open Sort, then choose All Swatches by Name.
- Right-click a swatch and choose Sort > All Swatches by Name.

For selected swatches by name, first select them, then use either method:

- Use the Swatches panel menu: open Sort, then choose Selected Swatches by Name.
- Right-click the selected swatches and choose Sort > Selected Swatches by Name.

Sort by Color Values

Color-value sorting groups swatches by mode and then orders each group by value. The mode order is CMYK > Lab Color > Mixed Ink > RGB. Within a single mode, each swatch is arranged by that mode's component values; CMYK entries, for example, are ordered by C, M, Y, and K.

To sort every swatch by color value, use either method:

- Use the Swatches panel menu: open Sort, then choose All Swatches by Color Values.
- Right-click a swatch and choose Sort > All Swatches by Color Values.

For selected swatches by color value, first select them, then use either method:

- Use the Swatches panel menu: open Sort, then choose Selected Swatches by Color Values.
- Right-click the selected swatches and choose Sort > Selected Swatches by Color Values.

Note

A color group's internal swatches follow the same sort order that is applied.

## Work with swatches — Delete individual swatches

When a document object uses a swatch you delete, InCopy asks what swatch should replace it. The replacement can be an existing swatch or an unnamed swatch. Deleting a swatch that supports a tint or mixed ink also triggers a replacement choice.

Select one or more swatches, then use one of these methods:

Open the Swatches panel menu and choose Delete Swatch.

Click the Delete icon at the bottom of the Swatches panel.

Note

Spot colors used by placed graphics in the document cannot be deleted. Remove the graphic first if those colors need to be removed.

InCopy then asks how the deleted swatch should be replaced. Choose one option, then click OK:

To use a different swatch everywhere the deleted one appeared, click Defined Swatch and choose a swatch from the menu.

To substitute the swatch with a matching unnamed color everywhere, click Unnamed Swatch.

## Work with swatches — Delete all unused swatches

From the Swatches panel menu, choose Select All Unused. InCopy selects only swatches that the active file is not using. Click the Delete icon.

## Work with swatches — Merge swatches

Importing swatches or copying items from another document can create duplicate swatches, and those duplicates might be assigned to different objects. Merge Swatches combines the duplicates.

Select two or more duplicate swatches in the Swatches panel.

The first selected swatch is the one that remains; the other selected swatches are merged into it.

In the Swatches panel menu, choose Merge Swatches.

## Work with swatches — Copy swatches between InCopy documents

Swatches can be copied or dragged between documents, as can objects that have swatches applied. The destination document receives the swatch in its Swatches panel. To bring along the swatch's tints and gradients too, copy the source object itself rather than only the swatch.

Use one of these methods:

Move an object into the current document by drag-and-drop or copy-and-paste.

Select the swatches to copy, then drag them from the Swatches panel into the document window of another InCopy document.

Note

When a dragged swatch has the same name as an existing swatch, including capitalization, but different color values, InCopy renames it "[original swatch name] 2."
