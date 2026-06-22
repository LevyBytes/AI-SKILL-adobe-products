# Fonts Overview, Apply And Format Fonts, Opentype Font Attributes, Preview And Explore Fonts ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Fonts; Fonts in InDesign; Apply and format fonts in your document; OpenType font attributes; Preview and explore fonts; Find and replace fonts.

## Fonts

Fonts in InDesign

Install and activate fonts

Apply and format fonts in your document

OpenType font attributes

Preview and explore fonts

Find and replace fonts

## Fonts in InDesign

Learn which font types Adobe InDesign supports and how those fonts behave across platforms.

### What are fonts?

Within typography, a font means a full character set, including letters, numbers, and symbols, sharing the same weight, width, and style. 10-pt Adobe Garamond Bold is one example.

A typeface, also known as a type family or font family, groups fonts with a shared visual design that are intended to work together; Adobe Garamond is an example. Each member of a font family is a distinct type style, such as regular, bold, semibold, italic, or bold italic. Depending on the family, the base font is usually named Roman or Plain.

This organization helps keep typography consistent while still letting you add emphasis and hierarchy across the document.

### Supported font formats

InDesign can work with several font technologies. Icons in application font menus identify the type:

- OpenType: uses one cross-platform font file for Windows and macOS, which helps prevent font substitution when documents move between platforms
- OpenType SVG: allows individual glyphs to contain multiple colors and gradients, a common choice for emoji and decorative type
- Variable fonts: OpenType fonts whose attributes, including weight, width, and optical size, can be changed with sliders
- TrueType: scalable fonts supported on both platforms, with separate files for each platform
- Adobe Fonts: cloud fonts available through a Creative Cloud subscription
- Multiple Master: older Adobe technology for interpolated font variants, with limited support
- Composite: combines characters from more than one font file and is generally used for Asian language typesetting

Font samples are visible in the font family and font style menus in the Character panel.

### Font installation and availability

InDesign finds fonts in two places:

System-level fonts: These are installed by the operating system or by font-management software, so every application can use them. The installation steps depend on the system; use your OS documentation or font manager for instructions.

Application-level fonts: These live in the Fonts folder inside the InDesign application folder. They appear only in InDesign, not in other applications. Use this method for project-specific fonts or when you do not have permission to install fonts at the system level.

Where family names match but PostScript names differ, InDesign shows technology abbreviations: TrueType uses (TT), Type 1 uses (T1), and OpenType uses (OTF). When two fonts have matching PostScript names and one name contains "dfont", InDesign chooses the other font.

Note

Adobe disabled authoring support for Type 1 fonts in January 2023. For more information, see the Postscript Type 1 End of Support help article.

## Apply and format fonts in your document

Learn to use the Character panel and font menus in Adobe InDesign for choosing typefaces, changing size, and applying OpenType attributes.

InDesign fonts provide complete character sets that share weight, width, and style traits. You can assign fonts to text, change type size, and use advanced OpenType features, including swashes, fractions, and alternate glyphs, to refine typography.

### Apply a font to text

With the Type tool, select the text to change.

Choose a font in the Character panel or Properties panel.

Choose a type style, such as Bold, Italic, Regular, and so on, from the Type Style menu. To filter fonts quickly, enter the opening characters of a font name in the Font Family field. InDesign lists matching font names while you type.

Fonts are also available from Type > Font, where one menu shows both font family and type style. On macOS, the Character panel lists type styles as submenus under each font family.

### Specify a typeface size

Select the characters or type objects to update.

In the Character panel or Properties panel, enter a value in the Font Size field or choose a preset size from the menu.

Press Enter to apply the size.

### Apply OpenType font attributes

Select the text to format.

Open the Character panel menu icon, then choose OpenType.

From OpenType, choose attributes such as Fractions, Swash, Discretionary Ligatures, or Small Caps.

Font menus show an icon beside OpenType font names. They may provide larger character sets and features such as ligatures, old-style figures, and contextual alternates. Feature availability varies by OpenType font. To inspect glyphs and alternates for a particular font, open the Glyphs panel with Window > Type & Tables > Glyphs.

### Make text superscript or subscript

Select the text to format.

Choose Type > Character.

Open the panel menu icon, then choose OpenType > Superscript/Superior or Subscript/Inferior. When the OpenType font contains properly designed superscript or subscript glyphs, InDesign uses those glyphs. If those glyphs are absent, InDesign applies default scaling and baseline shift.

### Automatically map Optical Size in variable fonts

With this preference turned on, InDesign keeps the optical size axis in variable fonts aligned with the chosen font size. In font menus, variable fonts are marked with an icon, and the Character panel exposes sliders for weight, width, optical size, and additional custom attributes.

Go to Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

Turn on Map Optical Size to Font Size in Variable Fonts.

Select OK.

Tip

Turn this preference off when optical size needs to remain under manual control instead of following font size edits.

## OpenType font attributes

Review which OpenType features are available in Adobe InDesign and how they affect typography.

Use this reference while choosing OpenType settings for character styles or paragraph styles, or while deciding which refinements should be applied to text. Feature support depends on the font, so a given font may provide only some OpenType attributes.

In Adobe InDesign, OpenType font features can be reached from the Character panel menu or from contextual badges after text is selected. Unsupported features for the active font are shown in brackets, for example [Swash].

## Preview and explore fonts

Use live previews and font filtering in Adobe InDesign to evaluate font families and styles before applying them.

InDesign can preview fonts immediately on selected text, letting you judge a typeface before committing the change. Search and filtering tools work alongside preview, which makes large font collections easier to scan and narrow down for a design.

Preview uses the selected document text, or sample text when nothing is selected. As the pointer moves over font names in the Character panel, Control panel, or Properties panel, the preview refreshes automatically. The same behavior covers installed fonts and fonts from Adobe Fonts.

### Preview fonts on selected text

With the Type tool, select the text you want to test.

Open the Character panel with Type > Character.

Move the pointer across font names without choosing one.

The highlighted text changes live so each font can be previewed.

Icon markers in the font list identify technologies: the OpenType icon, the OpenType SVG icon, the Variable fonts icon, the TrueType icon, and the Adobe Fonts icon. These markers make the font type visible while scanning the menu.

### Preview font styles within a family

Choose either document text or the frame containing the text.

In the Character panel or Properties panel, open the font family drop-down.

Find the font family to inspect, then select the arrow beside its name to expand the family.

Point at style names in the expanded family, such as Regular, Bold, Italic, Semibold, and so on, so the text shows each preview.

Tip

Preview size is controlled from the font menu's upper-right icons: the Show smaller sample text size icon, the Show default sample text size icon, or the Show larger sample text size icon. The chosen size applies to previews for selected text and sample text.

### Filter and organize fonts

Open a font menu from either the Character panel or the Properties panel.

Use Filter fonts by classification icon to limit the menu to categories such as Serif, Sans Serif, Script, or Handwritten.

For one saved set, select the matching control: Show Favorite Fonts icon; Show Recently Added icon; Show Added Fonts icon.

Saving a font as a favorite works by hovering on the font and choosing the Add to favorites icon. To browse related designs, choose Show Similar Fonts icon.

InDesign keeps starred fonts and recently used fonts between sessions, so preferred typefaces stay easy to reach. Recently used fonts also appear at the top of the font menu for faster access.

### Preview Japanese fonts from Adobe Fonts

Open Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

In the Type Preferences dialog box, turn on Enable Japanese Font Preview in 'Find More'.

Select OK, then restart InDesign so the preference takes effect.

Choose Type > Character to open the Character panel, then switch to the Find More tab.

Scan the font list to preview Japanese fonts from Adobe Fonts.

### Turn off font preview

Open Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

In the Type Preferences dialog box, turn off Enable in-menu font previews.

Select OK to apply the preference change.

After font preview is off, menus show font names only; live sample-text previews no longer appear.

## Find and replace fonts

Replace fonts across an Adobe InDesign document, or locate fonts that appear in imported graphics.

InDesign can list every font used by a document and substitute those fonts with fonts available on the system. The replacement is global, including paragraph styles and character styles. Fonts inside imported graphics have to be changed in the original source files.

Open Type > Find/Replace Font.

Under Fonts in Document, choose one or more fonts to replace.

Locate fonts:

- Choose Find First to find the font in text.
- Choose Find Graphic to find fonts in imported graphics.

In the Replace With area, choose the new Font Family and Font Style.

Select Change, Change All, or Change/Find.

Select Done.

The Find/Replace Font dialog box is also available from Preflight: choose Window > Output > Preflight, open the Fonts tab, and select Find/Replace Font.

Note

Find Font cannot replace fonts that are embedded in imported graphics, including EPS or PDF files. For missing fonts in placed files, either install the fonts on the system or rebuild the graphic with fonts embedded.
