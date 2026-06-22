# Using Fonts

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

A font is the full character set--letters, numbers, and symbols--sharing a common weight, width, and style; 10-pt Adobe Garamond Bold is one example.

Typefaces, also called type families or font families, group fonts with a related overall design that are intended to work together, such as Adobe Garamond.

A type style is one version of a font inside a family. In most families, Roman or Plain, depending on the family's naming, is the base font; related styles can include regular, bold, semibold, italic, and bold italic.

## Using fonts in InCopy — Font types

Font family and font style menus in the Character panel, along with other font-selection areas of the application, can show font samples. These icons identify the font types:

- OpenType
- OpenType SVG
- Type 1
- TrueType
- Adobe Fonts
- Multiple Master
- Composite

In Type preferences, you can disable previews or adjust the point size used for font names and samples.

## Using fonts in InCopy — Install fonts

For installing and activating fonts across all applications, consult the operating-system documentation or the documentation for your font manager.

To make fonts available to InCopy, place the font files in the Fonts folder inside the InCopy application folder on your hard drive. Fonts stored there are available only to InCopy.

If multiple active fonts in InCopy share a family name but have different Adobe PostScript names, InCopy can use them. Menus distinguish duplicate entries by adding abbreviated font technologies in parentheses. Examples include "Helvetica (TT)" for a Helvetica TrueType font, "Helvetica (T1)" for a Helvetica PostScript Type 1 font, and "Helvetica (OTF)" for a Helvetica OpenType font. When two fonts share the same PostScript name and one name contains .dfont, the other font is used.

## Using fonts in InCopy — OpenType fonts

OpenType fonts package Windows and Macintosh versions in a single font file, letting files move between platforms without font substitution concerns and other reflow-causing issues. They can contain features such as swashes and discretionary ligatures that current PostScript and TrueType fonts do not provide.

With an OpenType font, text can automatically use alternate glyphs including ligatures, small capitals, fractions, and old style proportional figures.

Regular (left) and OpenType (right) fonts

A. Ordinals B. Discretionary ligatures C. Swashes

Regular (left) and OpenType (right) fonts

Broader character sets and layout features in OpenType fonts can support more languages and provide advanced typographic control. Adobe OpenType fonts with central European (CE) language support include "Pro" in their application font-menu names. OpenType fonts without central European language support are labeled "Standard" and carry an "Std" suffix. They can coexist with PostScript Type 1 and TrueType fonts.

For details about OpenType fonts, see www.adobe.com/go/opentype.

## Using fonts in InCopy — Apply OpenType font attributes

### Apply OpenType font attributes using Character panel or Control panel

OpenType attributes, including fractions and swashes, can be assigned to text from either the Character panel or the Control panel.

More OpenType font details are available at www.adobe.com/go/opentype.

Highlight the text. In the Character panel or Control panel, verify that the chosen font is an OpenType font. Open the Character panel menu, choose OpenType, and pick an OpenType attribute such as Discretionary Ligatures or Fractions.

If the active font does not support a feature, that feature is shown in square brackets, for example [Swash].

Note

Paragraph and character styles can include OpenType font attributes as well. In the Style Options dialog box, configure those settings under OpenType Features.

### Apply OpenType font attributes using in-context menu

The in-context menu offers the OpenType font attributes that apply to the current text selection.

Select text.

From the pop-up window, choose an OpenType attribute such as Ordinals or Fractions.

Note

When a badge appears after you select text or a text frame, use the badge to open the available OpenType attributes list.

### OpenType font attributes

With an OpenType font active, formatting text or defining styles can include choosing particular OpenType features from the Control panel or Character panel menu.

Note

The styles and feature sets supplied by OpenType fonts differ widely. A missing OpenType feature appears in brackets in the Control panel menu, such as [Swash].

Discretionary Ligatures

Some font designers supply optional ligatures that are not intended for every situation. When this option is enabled, those extra optional ligatures are available whenever the font includes them. For more information on ligatures, see Apply ligatures to letter pairs.

The discretionary ligature feature can expose many compound character glyphs for Japanese katakana terms, such as "me-toru," and Kanji compounds, such as "yuugenkaisha."

Fractions

Slash-separated numbers, such as 1/2, become fraction characters when the font provides fraction glyphs.

Ordinal

When ordinals are available, ordinal numbers such as 1st and 2nd use superscript letters (1st and 2nd). Spanish superscript letters such as a and o in segunda (2a) and segundo (2o) are also set correctly.

Swash

If the font supplies them, regular swashes and contextual swashes are made available, including possible alternate caps and word-ending alternates.

Titling Alternatives

Fonts that provide uppercase title characters can activate them with this setting. In some fonts, using this option on mixed uppercase and lowercase text can produce unwanted results.

Contextual Alternatives

When a font offers contextual ligatures and connecting alternates, this option turns them on. Certain script typefaces include alternate characters so joins look better; for example, the "bl" pair in "bloom" can connect in a more handwritten way. This option is enabled by default.

All Small Caps

For fonts with true small caps, this option converts characters to small caps. See Change the case of type for more information.

Slashed Zero

This option shows the number 0 with a diagonal slash. The distinction between the number 0 and the capital letter O can be hard to see in some fonts, especially condensed fonts.

Stylistic Sets

Alternate glyph groups for esthetic effects are included in some OpenType fonts. A stylistic set groups glyph alternatives that can be applied to a single character or across selected text. Choosing another stylistic set replaces the default font glyphs with the glyphs assigned to that set. When a glyph from a stylistic set is combined with another OpenType setting, the glyph from the individual setting takes precedence over the character set glyph. Use the Glyphs panel to view the glyphs in each set.

Positional Forms

In some cursive scripts, and in languages such as Arabic, a character's appearance may be determined by its place in a word. Forms can differ at the beginning (initial position), in the middle (medial position), at the end (final position), or when the character stands by itself (isolated position). To format the character properly, select it and choose a Positional Forms option. General Form inserts the common character, while Automatic Form inserts the character shape based on its word position and whether it is isolated.

Superscript/Superior & Subscript/Inferior

Raised or lowered glyphs sized to fit the surrounding text are built into some OpenType fonts. If the OpenType font lacks those glyphs for non-standard fractions, use the Numerator and Denominator attributes instead.

Numerator & Denominator

Some OpenType fonts turn only basic fractions, such as 1/2 or 1/4, into fraction glyphs and leave non-standard fractions, such as 4/13 or 99/100, unchanged. For those non-standard fractions, apply Numerator and Denominator.

Tabular Lining

This setting provides full-height figures with matching widths. Use it when numbers must align from line to line, such as in tables.

Proportional Oldstyle

This setting provides figures with varied heights and varied widths. It works well for a classic, refined text appearance when the text is not set in all caps.

Proportional Lining

This setting provides full-height figures that have varied widths. It is recommended for text set in all caps.

Tabular Oldstyle

This setting provides old-style figures with varied heights but fixed, equal widths. Use it when you want classic old-style figures that still line up in columns, such as in an annual report.

Default Figure Style

Figure glyphs follow the default figure style supplied by the current font.

Use Proportional Metrics

Characters are set with the font's proportional metrics.

Use H or V Kana

For fonts that supply Kana for horizontal or vertical composition, this option uses the Kana glyphs suited to the current horizontal or vertical setting.

Roman Italics

When italic glyphs exist in the font, proportional Roman glyphs switch to italic type.

### Apply OpenType glyph forms

Selected text can receive glyph-form options from the Glyphs panel, including choices such as Expert Forms or JIS 90 Forms.

Open the Glyphs panel with Type > Glyphs. Select the character or characters that should receive glyph forms. In the Glyphs panel menu, choose an option such as Expert Forms or JIS 90.

## Using fonts in InCopy — OpenType SVG fonts

InCopy can use OpenType SVG fonts, including color fonts and emoji fonts. A single OpenType SVG glyph can contain multiple colors and gradients.

OpenType SVG fonts: Multiple colors and gradients

OpenType SVG fonts: Multiple colors and gradients

Emoji fonts let documents include colorful graphical characters, including smileys, flags, street signs, animals, people, food, and landmarks. OpenType SVG emoji fonts such as EmojiOne can build particular composite glyphs from one or more other glyphs. For example, they can generate country flags or recolor certain person glyphs and body-part glyphs, including hands and noses.

Glyphs panel showing EmojiOne SVG font characters

Glyphs panel showing EmojiOne SVG font characters

Use OpenType SVG fonts with this sequence:

Use the Type tool to create a text object.

Choose an OpenType SVG font. The font list marks these fonts with the SVG icon.

Choose particular glyphs in the Glyphs Panel. To show the Glyphs Panel, select Type > Glyphs. Another way to open it is Window > Type & Tables > Glyphs.

### Create composite glyphs

For illustration, consider EmojiOne, an OpenType SVG emoji font. Several EmojiOne OpenType SVG font characters can be combined into composite glyphs.

For example, you can build country flags or recolor default single-person and body-part characters that usually appear yellow, blue, or grey.

Note

EmojiOne and other emoji-font glyphs are separate from letters typed from the keyboard. These glyphs are handled as distinct characters and can be accessed only from the Glyphs Panel, not directly from keyboard keys.

Create flags of countries

In EmojiOne, the "letters" (A, B, C, D, and so on) are not mapped to the matching keyboard keys. Combining these characters in the Glyphs Panel to form a country's ISO code creates that country's flag. Examples: US produces the American flag, GB produces the British flag, AR produces the Argentine flag, and IN produces the flag of India.

Combine glyphs to form the flags of countries

Combine glyphs to form the flags of countries

Create character variants

Pair a single-person default character, usually colored yellow, blue, or grey, or a body part with one of the available skin colors. The original default character changes color to match the selected skin color. In general, these composites currently do not work for glyphs that contain more than one person.

Note

- A single-person character or body-part emoji can be paired with a skin-colored character one time only.
- Composite glyphs rely on font support. Not all OpenType SVG fonts allow characters to be combined into composite glyphs.
- Some EmojiOne composites can be decomposed into their constituent characters.

## Using fonts in InCopy — Live font preview

To preview fonts live, select text in the document and move the pointer over a font name in the font list shown in the Control panel or Character panel.

## Using fonts in InCopy — Live preview of font style

For a live font-style preview, expand a font family in the font menu and hover over the desired style name.

Disable the preview options this way:

- Choose Edit > Preferences.
- In Type Preferences, clear Enable in-menu font previews.

To adjust the preview size for the selected text or sample text in real time, click Show smaler sample text size, Show default sample text size, or Show larger sample text size.

## Using fonts in InCopy — Organize, search, and filter fonts

Font families you use frequently are easier to find when you star them as favorites or choose from the recently used fonts shown at the top of the font list. InCopy preserves recently used and starred fonts between sessions.

A. Recently used fonts B. Star fonts as favorites

During a font search, results can be narrowed by classification, including Serif, Sans Serif, and Handwritten. You can also search fonts installed on your computer or activated fonts from Adobe Fonts.

Fonts can also be searched by visual similarity (). Search results place the fonts that most closely resemble the target font at the top. A status strip in the font menu shows details about the filters currently applied.

## Using fonts in InCopy — Tools for searching fonts

A. Show Fonts By Classification B. Show Favorite Fonts C. Show Recently Added D. Show Activated Fonts

Show Fonts By Classification

Use classifications such as Serif, Script, and Handwritten to filter the font list.

Show Favorite Fonts

Show only fonts that were previously starred as favorites.

Show Recently Added

Show fonts that were recently added to the font list.

Show Activated Fonts

Limit the font list to activated fonts from Adobe Fonts.

## Using fonts in InCopy — Activate more fonts

Within InCopy, you can browse thousands of fonts from hundreds of type foundries, activate them immediately, and use them in the current document. After activation, every Creative Cloud application can use those fonts.

Click Find More in the Character panel.

Browse the font list and choose the desired font.

Note: Hover over a font name to preview it on selected text in real time.

Select the Activate icon displayed next to the font. Once activation finishes and the font is available, the Activate icon displays a check mark.

For more information about Adobe Fonts, visit fonts.adobe.com.

## Using fonts in InCopy — Apply a font to text

Specifying a font lets you choose the font family separately from its type style. When switching from one font family to another, InCopy tries to pair the current style with an available style in the replacement family. Example: changing Arial to Times turns Arial Bold into Times Bold.

When bold or italic is applied to type, InCopy uses the typeface style defined by that font. Usually the expected bold or italic version is used. In some fonts, however, the variation chosen for bold or italic may not be named exactly bold or italic. For example, a designer may define the semibold variation as the style used when bold is applied.

Select the text to modify, then use one of these methods:

In the Character panel or Control panel, choose a font from the Font Family menu or choose a style from the Type Style menu. (In Mac OS, type styles can be chosen from the Font Family submenus.)

In the Character panel or Control panel, click before the font family name or type style name, or double-click the first word, then type the first few characters of the desired name. As characters are entered, InCopy lists matching font family or type style names.

Choose a font in the Type > Font menu. This menu requires choosing both a font family and a type style.

## Using fonts in InCopy — Specify a typeface size

The default unit for typeface size is points, with 1 point equal to 1/72 of an inch. Typeface size can be set from 0.1 to 1296 points, using increments of 0.001 point.

Note

In Fireworks, pixels are the default unit for typeface size.

Select the characters or type objects you want to change. Without a selection, new text uses the chosen typeface size. Then choose one method:

Set Font Size in the Character panel or Control bar.

Choose a size from the Type > Size menu. Choose Other when you want to enter a new size in the Character panel.

Note

The Preferences dialog box lets you change the measurement unit used for type. Fireworks does not provide this option.

OpenType font details are available at www.adobe.com/go/opentype.

Units

Choose the units used for font attribute settings.

## Using fonts in InCopy — Use missing glyph protection

By default, InCopy blocks unsupported-character problems while you type and while you apply a font to selected text if that font lacks one or more selected glyphs. Those protections can be removed by turning off the related preferences.

Open Edit > Preferences > Advanced Type (Windows) or InCopy > Preferences > Advanced Type (Mac OS).

Use either setting below, then click OK.

Protect While Typing

Enable this option to prevent typing glyphs unsupported by the current font.

Protect When Applying Fonts

Enable this option to keep unsupported glyphs from being introduced when applying another font, such as a Roman font, to Asian-language text.

## Using fonts in InCopy — Work with missing fonts

Opening or placing a document that uses fonts not installed on your system displays an alert that identifies the missing fonts. If selected text uses a missing font, the Character panel or Control panel shows the font as missing by placing it in brackets in the font style pop-up menu.

InCopy replaces missing fonts with an available font. After substitution, you can select the affected text and apply any other available font. Missing fonts that have substitutes appear at the top of Type > Font in a section labeled "Missing Fonts." By default, text using missing fonts is highlighted in pink.

When a TrueType font is installed but the document uses a Type 1 (T1) version of the same font, that font is treated as missing.

Choose Type > Find Font to locate and replace missing fonts. If the missing font belongs to a style, edit the style definition to update the font used by that style.

The missing fonts dialog in InCopy indicates whether the Adobe Fonts service is enabled in the Creative Cloud application. When the service is disabled, the Missing fonts dialog also provides an option to enable Adobe Fonts.

## Using fonts in InCopy — Make missing fonts available

Use any of these methods:

- Use Adobe Fonts service to activate missing fonts. Additional help is in Add fonts from the Adobe Fonts service.
- Add the missing fonts to your system.
- Put the missing fonts in the Fonts folder located inside the InCopy application folder. Those fonts are available only to InCopy. See Installing fonts.
- Use a font-management application to activate the missing fonts.

Note

If the missing fonts are unavailable to you, use the Find Font command to locate and replace them.

## Using fonts in InCopy — Highlight substituted fonts in your document

When the Substituted Fonts preference is enabled, pink highlighting marks text formatted with missing fonts so it is easy to identify.

Open Edit > Preferences > Composition (Windows) or InCopy > Preferences > Composition (Mac OS).

Enable Substituted Fonts, and then click OK.

## Using fonts in InCopy — Document installed fonts

When an InCopy document has a Document Fonts folder in the same location, fonts in that folder are temporarily installed as the document opens. Use the Package command to create a Document Fonts folder when sharing the document or moving it to another computer.

Document Fonts folder fonts differ from fonts installed in normal operating system font locations. They load when the document opens and override fonts with the same PostScript name, but only within that document. Fonts installed for one document cannot be used by other documents. Closing the document uninstalls the document-installed fonts. The Font menu lists document-installed fonts in a submenu.

Some Type1 fonts cannot be used in the document. Mac OS fonts are also unavailable when InCopy runs in Windows.

Video reference for document installed fonts: http://tv.adobe.com/go/4955/.

## Using fonts in InCopy — Multiple parent fonts

Multiple master fonts are customizable Type 1 fonts whose typeface characteristics are defined through variable design axes, including weight, width, style, and optical size.

Some multiple parent fonts provide an optical size axis, allowing use of a font designed for best readability at a particular size. In general, a smaller optical size such as 10 point uses heavier serifs and stems, wider characters, lower contrast between thick and thin strokes, a taller x height, and looser letter spacing; a larger optical size such as 72 point uses a different design.

Open Edit > Preferences > Type (Windows) or InCopy > Preferences > Type (Mac OS). Enable Automatically Use Correct Optical Size, then select OK to confirm.

### More like this

- Insert glyphs and special characters
- Find and change fonts
