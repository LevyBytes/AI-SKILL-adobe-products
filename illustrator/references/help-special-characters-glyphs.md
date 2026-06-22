# About Character Sets And Alternate Glyphs, Insert Special Characters, Glyphs Panel Overview, Replace Characters With Alternate Glyphs ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About character sets and alternate glyphs; Insert special characters; Glyphs panel overview; Replace characters with alternate glyphs; OpenType panel overview; Use ligatures and contextual alternates; Use swashes, titling alternates, or stylistic alternates; Add stylistic sets to selected text; Insert white space and break characters; Snap to Glyph options; Snap with glyph guides; Snap glyph to angles, anchor points, or text area.

## About character sets and alternate glyphs

Use character sets and alternate glyphs in Illustrator to create more varied text styling and customization.

Many typefaces contain characters beyond the normal keyboard set. Depending on the font, those extras can cover ligatures and fractions, swashes and ornaments, ordinals, superior and inferior characters, titling alternates, stylistic alternates, old-style figures, and lining figures.

A Glyph is one designed appearance for a character. In some fonts, for instance, the capital letter A may have variants such as swash and small-cap.

Alternate glyphs can be added in three ways:

- Selection In-Context menu: shows glyphs available for the selected character and lets you insert them.
- Glyphs panel: provides access to glyphs from any typeface so you can view and insert them.
- OpenType panel: defines glyph-use rules. This approach is usually simpler than adding Glyphs individually and can produce a steadier result.

Note

The OpenType panel requires OpenType fonts.

## Insert special characters

Use the Type menu to add special characters such as symbols, hyphens, dashes, and quotation marks.

Using the Type tool, put the insertion point where the character should go.

Choose Type > Insert Special Character.

Pick one of these items from the sub-menu:

- Symbols: adds frequently used icons or marks when the text needs clearer notation.
- Hyphens And Dashes: adds en dashes, em dashes, or discretionary hyphens for better text flow.
- Quotation Marks: inserts smart or typographic quotes for correct punctuation.

Choose the special character you need from the submenu.

Choose the special character you need from the submenu.

## Glyphs panel overview

The Glyphs panel in Illustrator lets you inspect, filter, and insert Glyphs across a broad set of fonts.

Open Window > Type > Glyphs to show the Glyphs panel. Initially, the panel lists all Glyphs for the selected font. To switch fonts, choose another font family and style in the Glyphs panel.

Glyphs panel overview

A. Show menu B. Set the font family C. Font Style D. Zoom Out E. Zoom In

Glyphs panel overview

After you choose an OpenType font in the Glyphs panel, the Show menu can narrow the display to particular Glyph types.

Tip

Where a glyph has alternates, selecting it in the glyph box can also show a pop-up menu of those alternate Glyphs.

## Replace characters with alternate glyphs

Replace characters with alternate glyphs when you want Illustrator letterforms to take on a customized appearance.

### Insert or replace a character using the Glyphs panel

Open Window > Type > Glyphs.

Choose the Type tool in the Tools panel.

Click the text area where the character will be inserted or replaced.

Do the needed step:

- To insert a new character: put the cursor at the insertion point you want, then double-click the character in the Glyphs panel.
- To replace a character: select the character to change. Then double-click the replacement glyph in the Glyphs panel.

### Highlight alternate glyphs in the text

Open File > Document Setup.

In the Document Setup dialog box, enable Highlight Substituted Glyphs.

Select OK.

### Replace a character with on-canvas alternate glyphs

With the Type tool in the Tools panel, select the character that needs a replacement.

Open Window > Type > Glyphs.

In the Glyphs panel, choose Alternates For Current Selection from the Show dropdown menu.

Move the pointer over the selected character, then choose an alternate glyph.

Alternate glyph replacements can be made directly on the canvas or through the Glyphs panel.

Alternate glyph replacements can be made directly on the canvas or through the Glyphs panel.

## OpenType panel overview

Use the OpenType panel in Illustrator to work with advanced typographic features included in supported fonts.

Open Window > Type > OpenType to display the OpenType panel. The panel determines how OpenType font alternates are applied. For example, Standard Ligatures can be applied to new text and to text that already exists.

Because OpenType fonts do not all provide the same features, some OpenType panel options may be unavailable for a given font. Use the Glyphs panel to inspect the characters included in a font.

OpenType panel overview

A. Standard Ligatures B. Contextual Alternates C. Discretionary Ligatures D. Swash E. Stylistic Alternates F. Titling Alternates

OpenType panel overview OpenType panel overview

A. Figure B. Position C. Ordinals D. Fraction E. Stylistic Sets

OpenType panel overview Note

Asian OpenType fonts can offer extra typographic features.

## Use ligatures and contextual alternates

Use ligatures and contextual alternates in Illustrator when text needs smoother flow and improved appearance.

In OpenType fonts, Ligatures and Contextual Alternates are typographic features that refine text appearance and flow.

Select the characters or text you need to modify.

Open Window > Type > Character, then choose an OpenType font.

Note

Standard Ligatures and Contextual Alternates work only with OpenType fonts.

Open Window > Type > OpenType.

In the OpenType panel, open More options and choose any needed option:

- Standard Ligatures: permits common letter-pair substitutions, including fi, fl, ff.
- Contextual Alternates: changes characters according to nearby letters.
- Discretionary Ligatures: enables optional decorative ligatures such as ct, st, or Th when the font includes them.

Tip

A greyed-out option means the active font lacks support for that feature.

Change the Figure and Position settings with the OpenType panel.

Change the Figure and Position settings with the OpenType panel.

## Use swashes, titling alternates, or stylistic alternates

Apply swashes, titling alternates, or stylistic alternates to give typographic designs more visual range.

OpenType fonts often contain character variants beyond the basic typeface. Those alternates can make typography feel more expressive: Swashes add flourishes, titling alternates are intended for large text, and stylistic alternates provide additional visual treatments for individual characters.

Using the Type tool, select the characters or type objects.

Note

Choose an OpenType font. When no text is selected, the setting affects text you create later.

Open Window > Type > OpenType.

In the OpenType panel, choose one of these actions:

- Toggle the Swash icon to add swash characters or remove them.
- Toggle the Stylistic Alternates icon to apply stylistic characters or clear them.
- Toggle the Titling Alternates icon to use titling characters or turn them off.

Select the desired options in the OpenType panel

A. Swash B. Stylistic Alternates C. Titling Alternates

Select the desired options in the OpenType panel Note

Swash, Stylistic Alternates, and Titling Alternates can be selected only when the active font supports them.

## Add stylistic sets to selected text

Add stylistic sets to selected text when alternate glyphs should change the text appearance.

A stylistic set is a font-developer-defined collection of glyph alternates. Applying a stylistic set swaps the selected text's default glyphs for those alternates. Illustrator may name the sets Set 1, Set 2, and so forth, or it may show custom names supplied by the font. A text range can use several stylistic sets at the same time.

Select the text box or text range with the Type tool.

Open Window > Type > OpenType to display the OpenType panel.

At the lower-right of the OpenType panel, select the Stylistic Sets icon and choose the set you want.

Select Stylistic Sets icon to apply alternate letterforms.

Select Stylistic Sets icon to apply alternate letterforms. Note

To remove a stylistic set, deselect it in the OpenType panel or the Glyphs panel.

### Add stylistic sets to a character

Open Window > Type > Character Styles to display the Character Styles panel.

Choose New Character Style from the panel menu.

In the New Character Style dialog box, select OpenType Features in the left pane.

Select Stylistic Sets, then choose the stylistic sets you want in that list.

Select Stylistic Sets from the New Character Style dialog box.

Select Stylistic Sets from the New Character Style dialog box.

Select OK to save the style.

### Add stylistic sets to a paragraph style

Open Window > Type > Paragraph Styles to display the Paragraph Styles panel.

Choose New Paragraph Style from the panel menu.

In the New Paragraph Style dialog box, select OpenType Features in the left pane.

Select Stylistic Sets, then choose the sets you want from the list.

Select OK to save the style.

## Insert white space and break characters

Insert whitespace and break characters when you need finer control over text spacing and flow.

With the Type tool, place the insertion point where the white space character should be inserted.

Choose Type > Insert WhiteSpace Character.

Pick one of these items from the sub-menu:

- Em Space: inserts a space equal to the current type size.
- En Space: inserts a space half as wide as an em space.
- Nonbreaking Space: prevents words from separating across lines.
- Hair Space: adds a very narrow space equal to one-twenty-fourth of an em.
- Thin Space: adds a narrow space equal to one-eighth of an em.

Insert a white space character from the Insert WhiteSpace Character submenu.

Insert a white space character from the Insert WhiteSpace Character submenu.

### Insert a break character

A break character can force a new line without creating a new paragraph.

Using the Type tool, place the insertion point where the break character should go.

Right-click and choose Insert Break Character > Forced Line Break from the context menu.

### View or delete break characters

Choose Type > Show Hidden Characters.

Select the break character, then press Delete to remove it.

Note

Non-printing characters include spaces, tabs, hard returns, soft returns, nonbreaking spaces, discretionary hyphens, and the end-of-text character. They appear only while hidden characters are visible.

## Snap to Glyph options

Review the Snap to Glyph settings and adjust them so text can line up accurately against baselines, heights, and edges.

Snap to Glyph settings let objects align precisely with live text. When you move, draw, or rotate artwork near text, glyph guides appear so objects can attach to chosen parts of each character. Glyph-guide targets include Baseline and x-height, and the feature can also snap glyphs to angles, anchor points, and the text area. These settings make clean, consistently aligned layouts easier to build.

Tip

For Glyph guide options, choose Window > Type > Character, then open the Character panel menu and choose Show Snap to Glyph Options.

Place text objects accurately with glyph features.

A. Baseline B. x-height C. Glyph Bounds D. Proximity Guides E. Angular Guides F. Anchor Point

Place text objects accurately with glyph features.

Glyph guide options available in the Character panel:

## Snap with glyph guides

### Learn how to snap to single glyphs, clear glyph selections, and adjust glyph guide colors for exact text alignment.

Glyph guides help objects align to specific characters within text. To make snapping precise in Adobe Illustrator, use these steps:

### Snap to glyph

Choose the text object that contains the glyph you plan to target.

Right-click the chosen glyph, then choose Snap to Glyph. Illustrator highlights that glyph and displays guides around its bounds, center, and straight segments. A glyph does not highlight when the text uses strokes, patterns, effects, or other appearance settings. Guides are shown on straight paths only; curves do not display them.

To clear the individual glyph target and end snapping, right-click the glyph and choose Release Snap to Glyph, or choose Release Glyph in the Control panel.

Tip

For Arabic and Hebrew workflows, glyphs from the default character set are available. To browse and insert glyphs from the default set or other language sets, open the Glyphs panel (Type > Glyphs).

### Change the color of glyph guides

Use these steps to replace the default green glyph-guide color:

Choose Edit > Preferences > Smart Guides (Windows) or Illustrator > Settings > Smart Guides (macOS).

Choose another color from the drop-down menu options.

### Manage missing glyph protection

Illustrator turns on missing glyph protection by default. When a font does not include needed glyphs, Illustrator handles the text automatically. To disable the feature, use these steps:

Choose Edit > Preferences > Type (Windows) or Illustrator > Settings > Type (macOS).

Clear Enable Missing Glyph Protection.

Note

Traditional fonts, such as AXT, continue to work, but Adobe recommends building text-based elements with newer OpenType fonts.

## Snap glyph to angles, anchor points, or text area

### Learn how to draw and align objects accurately with text placed at any angle or position.

### Draw and snap with angular guides on a glyph

Angular Guides can snap objects to a glyph at a chosen angle while you move, scale, rotate, or draw with the Pen tool. They appear only after selecting one glyph that includes angled segments, or when the glyph or text frame has been rotated.

Choose Window > Type > Character.

In the Character panel > More options, choose Show Snap to Glyph Options.

In the Snap to Glyph section, choose Angular Guides.

Choose the glyph that will serve as the snapping target.

Right-click the target character and use the context menu command Snap to Glyph.

Turn the glyph or text frame until Angular Guides become active.

With the Pen tool, or while moving, scaling, or rotating an object, work near the glyph's angled segment. You can also use Angular Guides while moving, scaling, or rotating objects.

Note

For angled objects, snapping uses the bounding box and object center.

### Draw and snap to anchor points on a glyph

Anchor Point snapping is available with the Pen tool, and it also works when the Selection tool moves an object near a glyph's anchor point.

Choose Window > Type > Character.

In the Character panel > More options, choose Show Snap to Glyph Options.

In the Snap to Glyph section, choose Anchor Point.

Select the Pen tool, then hover over the glyph to show its anchor points.

Draw the shape with the Pen tool.

The shape you draw snaps to the text's anchor points.

### Snap to the area text

Snap to Glyph supports point text as well as area text. For one text line, Illustrator shows all guides and anchors. In paragraphs, Illustrator displays only glyph bounds so the interface stays simpler.

Choose Window > Type > Character.

In the Character panel > More options, choose Show Snap to Glyph Options.

Create or select a paragraph-text block inside a text box.

To snap precisely to a glyph in that paragraph, select the glyph.

Continue snapping with the glyph guides.
