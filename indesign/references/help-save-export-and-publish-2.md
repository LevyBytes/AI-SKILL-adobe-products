# Export To Epub, Export To Html And Web

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Export to EPUB; EPUB export options in InDesign; Accessibility features while exporting to EPUB; Accessibility enhancements for indexes; Adjust text resizing for accessibility; Add ARIA role while exporting to EPUB; Add ARIA labels to objects; EPUB export support and limitations; Create accessible glossaries; Export to Adobe Express; Create and manage articles; Export to HTML (Legacy); HTML export options; Export content as HTML5; HTML5 export options.

## Export to EPUB

Create digital-distribution eBooks from Adobe InDesign through the Export command, choosing either reflowable or fixed-layout output.

Run File > Export to save the InDesign document as EPUB. Choose Reflowable when text should adapt across devices; choose Fixed Layout when the design must stay exact and can include audio, video, and interactive elements.

Select File > Export.

In the Export dialog box, choose where to save the file, then fill in File name.

Use Save as type (Windows) or Format (macOS) to choose EPUB (Fixed Layout) or EPUB (Reflowable).

Select Use InDesign Document Name as the Output Filename if the output should reuse the document name.

Select Save.

Configure EPUB export options in the Export dialog box, then select OK.

Note

InDesign writes one .epub file with XHTML-based content inside it. Opening the file requires an EPUB reader. Adobe Digital Editions is also available as a free reader from the Adobe website.

### EPUB Interactivity Preview panel options

The EPUB Interactivity Preview panel lets you test document interactivity before export, including animations, buttons, and forms. For an EPUB document preview, choose Window > Interactive > EPUB Interactivity Preview.

Exporting an InDesign document to EPUB creates an interactive file ready for an EPUB reader. This workflow is useful when building an interactive slideshow or flipbook from an InDesign document.

## EPUB export options in InDesign

When exporting Adobe InDesign documents to EPUB format, review the available accessibility metadata, ARIA roles, and structural improvements.

InDesign can export to EPUB Fixed Layout and EPUB Reflowable. EPUB Fixed Layout keeps design placement precise, making it appropriate for image-heavy work. EPUB Reflowable adapts text across devices and emphasizes readability and flexibility.

### Export options for EPUB (Fixed Layout) and EPUB (Reflowable) formats

During EPUB export, the available options can change according to the layout format you selected.

### General options

### Version

Sets the EPUB version.

### Cover

Chooses the cover image used for the eBook.

### Navigation TOC

Controls how the EPUB viewer builds its table of contents.

### Pagination Source (Reflowable only)

Defines where page numbers come from.

### Source

Available only after ISBN Number or Other Source is selected.

### Options (Fixed Layout only)

Spread Control defines how page elements are included in the export.

### Content (Reflowable Format only)

Sets the reading sequence for exported content.

### Split Document (Reflowable Layout only)

Breaks the document apart during export.

### Text (Reflowable Layout Format only)

### Footnotes

Placement controls where footnotes appear.

Note

Document-defined footnote rules, including values such as a 10-point weight, remain intact when exporting to reflowable EPUB.

### Lists

### Object (Reflowable Layout Format only)

Determines export behavior for graphic and media objects.

### CSS

### SVG options

### Conversion Settings

### Format options

### HTML & CSS (Reflowable Layout Format only)

To build a nested list, choose the consecutive item, increase its left indent, and change the bullet style if needed.

### Metadata

Metadata from the document, or from the style source document when a book is selected, is packaged with the export.

### General

### Object Export Options

Use the EPUB and HTML tab after choosing Object > Object Export Options to set object behavior for EPUB export.

### Preserve Appearance From Layout

### Size

For reflowable EPUB output, use the Size list to keep an object's aspect ratio, such as for an image without internal fixed content.

Note

- These options do not apply to main text frames.
- Objects containing Edge Animate do not support relative measures.

## Accessibility features while exporting to EPUB

When exporting Adobe InDesign documents to EPUB, use this topic to map available accessibility metadata, ARIA roles, and structural enhancements.

InDesign's EPUB accessibility options make exported files work better with screen readers and other assistive technology. They support accessibility metadata, ARIA roles, and structural tagging so the EPUB can serve more readers and more assistive tools.

Tip

To reach this feature, choose File > Export, enter a File name, and choose EPUB (Fixed Layout) in Save as type. In EPUB - Fixed Layout Export Options, select Metadata, then open the Accessibility tab.

### More Accessibility enhancements

InDesign can produce accessible EPUB output with structured tables, figures, semantic tagging, and ARIA roles.

- Tables provide correct headers and data cells, including column headers, for assistive technologies.
- Figures can export with captions through figure and figcaption tags, so screen readers can announce captions. Live Captions are supported as well.
- Drop caps use a special pseudo-element styling approach so screen readers still recognize the text.
- SVGs can export with image tags while retaining vector quality plus accessibility metadata such as alt text and decorative roles.
- Context breaks can map to tags like hr to mark section separation. You can create them with empty paragraphs, text, or inline images, then style them through paragraph settings.
- ARIA roles can be assigned at object/frame level or through paragraph or character styles, helping screen readers identify notes, chapters, credits, and other content types.
- Glossaries can use definition list semantics, which improves navigation in reflowable EPUBs.

## Accessibility enhancements for indexes

This section lists index-focused accessibility improvements for Adobe InDesign exports to EPUB (Reflowable) format.

You can see these Indexes enhancements after InDesign documents are exported to EPUB (Reflowable) format:

- Index output uses a element instead of or .
- Indexes receive the ARIA role .
- Indexes include a top-level header plus subheaders for each alphabetical section.
- The main index content appears in unordered lists with list markers removed.
- Indexes can include ARIA labels for page ranges.
- For indexes made from regular text, export tagging plus ARIA role can produce . If you use the Index feature, InDesign generates this markup automatically.

## Adjust text resizing for accessibility

Configure text resizing options for Adobe InDesign exports to EPUB (Reflowable) format.

### Prevent text clipping across the document

To avoid clipped text in grouped or anchored frames throughout the document, adjust the EPUB export sizing behavior.

Go to File > Export.

Enter the file name in Save As, then choose EPUB (Reflowable) in the Format dropdown menu.

Choose Save.

In EPUB - Reflowable Layout Export Options, open the Object tab, then choose one CSS Size setting from the drop-down menu:

- None: strips CSS size rules from text frames, groups, anchored frames, and their child elements. With those rules removed, images and other objects can use the available space for reflow instead of matching the print layout, which helps avoid clipped text during export.
- Fixed: keeps the existing layout as it is, without applying changes.
- Relative to Text Flow: scales text and images proportionally in relation to the text flow.

### Prevent text clipping for the selected frame

Select the overset text frame, then choose Object > Object Export Options.

In Object Export Options, open the EPUB and HTML tab and set Size to None. This setting applies only to text frames, including grouped or anchored frames, and does not affect images.

Choose File > Export, then pick EPUB (Reflowable) from the Format drop-down menu. In the exported EPUB document, the selected text frame's full content is shown.

### Enhancements and limitations

- Relative to Text Flow is the default option.
- Paragraph Styles indents and spacing, including left, right, top, and bottom indents plus space before and space after, are written as em units in the exported CSS no matter which units were used in the layout.
- Earlier Relative to Text Flow export handling is still in place, so text may remain clipped unless None is selected.

## Add ARIA role while exporting to EPUB

Use Adobe InDesign to assign ARIA roles and labels to hyperlinks and cross-references, helping EPUB (Reflowable) output meet accessibility needs.

For EPUB digital publishing, InDesign includes ARIA Role (Accessible Rich Internet Applications) support. These roles give screen readers better cues for identifying and announcing the function of content elements such as math, note, chapter, and credits. Roles can be applied at the Object, Frame, Paragraph Style, or Character Style level.

### Add ARIA Role for hyperlinks

Select the hyperlink text.

Open the Accessibility tab in the New Hyperlink or Edit Hyperlink dialog box.

Choose an ARIA Role: Custom Role, doc-backlink, doc-biblioref, or doc-glossref.

When Custom Role is selected, enter the custom role name in that same field.

Pick an ARIA Role option so the hyperlink remains accessible after EPUB (Reflowable) export.

Pick an ARIA Role option so the hyperlink remains accessible after EPUB (Reflowable) export.

Export in EPUB (Reflowable) format so e-readers can detect the selected ARIA role.

### Add ARIA Role for cross-references

Select the cross-reference text.

In New Cross-Reference or Edit Cross-Reference, open the Accessibility tab.

Choose an ARIA Role: Custom Role, doc-backlink, doc-biblioref, or doc-glossref.

When Custom Role is selected, enter the custom role name in that same field. Pick an ARIA Role option so the cross-reference remains accessible after EPUB (Reflowable) export.

Pick an ARIA Role option so the cross-reference remains accessible after EPUB (Reflowable) export.

Export in EPUB (Reflowable) format so e-readers can detect the selected ARIA role.

## Add ARIA labels to objects

In Adobe InDesign, add ARIA roles and labels to objects so EPUB (Reflowable) files can provide better accessibility information.

For EPUB digital publishing, InDesign includes ARIA Role (Accessible Rich Internet Applications) support. These roles let screen readers more reliably identify and announce what content elements are for, including math, note, chapter, and credits. Roles can be applied at the Object, Frame, Paragraph Style, or Character Style level.

### Add ARIA labels to objects in the Object Export Options panel

Select any object in InDesign.

Choose Object > Object Export Options > EPUB and HTML.

Choose an ARIA Label:

- For a text frame, use the Tag field in the Export Tagging section of Object Style Options to enter a landmark tag: main, section, article, nav, aside, header, footer, or headings.
- For a paragraph, apply a Paragraph Style whose Tag field in the Export Tagging section is set to h1, h2, h3, h4, h5, or h6.

- Custom Label: adds a custom ARIA label.
- None: exports the object with no ARIA label.

Choose an ARIA Label option so the object is accessible after EPUB (Reflowable) export.

Choose an ARIA Label option so the object is accessible after EPUB (Reflowable) export.

### Add ARIA labels to objects in the Object Styles panel

Open the Object Styles panel by choosing Window > Styles > Object Styles.

Select the Create new style icon, or double-click an existing object style.

Under Basic Attributes, choose Export Tagging.

Choose an ARIA Label:

- For a text frame, use the Tag field in the Export Tagging section of Object Style Options to enter a landmark tag: main, section, article, nav, aside, header, footer, or headings.
- For a paragraph, apply a Paragraph Style whose Tag field in the Export Tagging section is set to h1, h2, h3, h4, h5, or h6.

- Custom Label: adds a custom ARIA label.
- None: exports the object with no ARIA label.

Choose an ARIA Label option to configure Export Tagging for the selected Object Style.

Choose an ARIA Label option to configure Export Tagging for the selected Object Style.

## EPUB export support and limitations

Review the features and technical limits that apply when Adobe InDesign documents are exported to EPUB formats.

During export to EPUB (Fixed Layout or Reflowable), some text, typography, navigation, and structure features are retained, while EPUB specifications and reader compatibility can restrict others. Checking these details helps keep EPUB rendering and functionality consistent across readers and devices.

### Text support

When preparing documents for fixed layout export, these text features are supported:

- Text remains live rather than rasterized, so it can be searched and selected.
- Live text supports horizontal and vertical scaling.
- Tab leaders can be exported.
- Language attributes are added to tags.
- CSS classes are added to tags.
- Hyperlinks and cross references on text can target URLs, text anchors, and pages.

### Limitations

- Individual-glyph kerning is not supported; instead, the spacing is spread as letter spacing across all letters in a word.
- Because device support is limited, alternate glyphs produced by OpenType features such as small caps, all caps, and fractions are not supported.
- Middle Eastern right-to-left text frames do not have proper support.

### Japanese text support

For export to fixed layout format, these Japanese feature options are available:

- Ruby text stays live in the output and is not rasterized.
- Live text supports Warichu.
- Live text supports character rotation.
- Composite fonts can be used.
- Vertical Text Frames can be exported with rotated glyphs included.

### Limitations

- Japanese Tate-Chu-Yoko is not supported in vertical text frames.
- When True Type fonts are used, Japanese ideographic characters lose their positioning.
- Live text rasterizes Japanese Kenten font.

### Nested list support

InDesign can export nested bulleted and numbered lists to EPUB formats. If paragraph styles define list levels, the exported EPUB file keeps that nested structure. To preserve the intended hierarchy:

- Use Paragraph Styles that define each list level.
- Show the nesting visually in the layout with indentation.
- Before exporting, inspect the Structure pane to verify the reading order.

Note

For a nested list, choose the consecutive item, increase its left indent, and change the bullet style if needed.

### Hyperlink support

When documents are prepared for fixed layout export, these hyperlink options are supported:

- Text hyperlinks and cross references
- Hyperlinks assigned to objects
- Hyperlinks to Pages for both text-based and object-based hyperlinks

### Navigation support

The EPUB output can include the following navigation capabilities during export:

## Create accessible glossaries

Build accessible glossaries in Adobe InDesign so EPUB (Reflowable) readers retain the glossary structure and offer improved navigation.

### Create a flat glossary (single-level list)

### Create paragraph styles

Make a new Paragraph Style for the description term, then set Tag to dt under Export Tagging.

Make a new Paragraph Style for the description definition, then set Tag to dd under Export Tagging.

### Create the glossary list

Enter the description term, followed by the details that define it.

Apply the matching Paragraph Style to each term and each definition.

Tip

Multiple definition terms () can point to a single definition (), and one term () can also have multiple definitions ().

### Create a multilevel glossary

### Create paragraph styles

For terms at each level, make separate Paragraph Styles and set Tag to dt under Export Tagging. Define the hierarchy level with Left Indent under Indent and Spacing. The Term node's hierarchy level comes from the indent value.

For definitions, make separate Paragraph Styles and set Tag to dd under Export Tagging. Left Indent should be used only for visual alignment. When applied to a , the indent value does not change the hierarchy level.

### Create the glossary list

Enter the description term, followed by the details that define it.

Apply the matching Paragraph Style to each term and each definition. Build a glossary list and apply paragraph styles to the terms and definitions.

Build a glossary list and apply paragraph styles to the terms and definitions.

### Create a glossary using dfn tags

Create the glossary content with its definitions, then apply the Character Style to those definitions.

For the definition, make a Character Style and put dfn in the Tag field under Export Tagging.

Export in EPUB (Reflowable) format so e-readers can recognize the dfn tags inside the list.

## Export to Adobe Express

Use the Export to Adobe Express command in Adobe InDesign to turn a document into an editable template for people who are not professional designers.

Export InDesign documents to Adobe Express for fast online editing. Communicators and non-designers can then customize InDesign templates in Adobe Express, and InDesign documents can open as native, editable Express documents.

Open an InDesign document.

Choose File > Export to Adobe Express to edit the exported InDesign document in Adobe Express.

In Adobe Express, open the More icon and choose Lock to lock the elements.

To share through Adobe Express, choose Share, add the names, and set the access level.

## Create and manage articles

Use the Articles panel in Adobe InDesign when an export needs an explicit content sequence.

Articles let page items such as text, images, and graphics be grouped into ordered relationships. During export to EPUB, HTML, or accessible PDF formats, those relationships determine which content is included and how it is read.

A layout article may combine page items that already exist on the page. Once the article exists, its contents can be expanded, trimmed, or rearranged. Manual setup is done in the Articles panel by placing one or more page items into an article. For larger additions, selected items or the full document can also be added to an article at once.

For EPUB, HTML, and accessible PDF export workflows, the XML Structure panel can also define content order. The Articles panel is the more approachable route, particularly when the user does not work with XML. Either approach remains available, so choose the one that fits the workflow.

### Create an article and add content

Choose Window > Articles.

Choose the page items that should belong to the article.

For a blank article, leave the page items unselected and continue.

In the Articles dialog box, choose Create New Article.

In the New Article dialog box, provide a Name.

Enable Include When Exporting so the article is part of the EPUB or HTML output.

### Add all page items in a document to an article

Choose Window > Articles.

In the Articles dialog box, choose an existing article, or continue by creating a new article.

Hold Command (macOS) or Ctrl (Windows), then choose Add Selection to Articles in the Articles dialog box.

When an article is already selected, open the Articles panel menu and choose Add Document Content to Selected Articles.

If the New Article dialog box appears, enter a Name.

Enable Include When Exporting so the article is included in EPUB or HTML output.

### Manage articles

Choose Window > Articles.

Add page items to an article by dragging them into the panel.

Set the reading sequence by rearranging the items inside an article.

Shift items from one article to another when the structure requires it.

Open the Articles panel menu for more article-management commands.

### Include articles for export

Choose Window > Articles.

In the Articles panel, choose the article.

From the Articles panel menu, choose Article Options, then enable Include When Exporting.

## Export to HTML (Legacy)

Export Adobe InDesign content to HTML (Legacy) when the result needs to be prepared for web use.

HTML (Legacy) export changes InDesign content into a browser-compatible package. The exported result represents text, images, and layout elements with HTML and CSS. Names assigned to paragraph, character, object, table, and cell styles are kept as matching CSS class names in the output file.

When only part of a document should be exported, first select the relevant content, such as text frames, a text range, table cells, or graphics.

Choose File > Export and set HTML (Legacy) as the file type.

Choose the File name and destination for the HTML document.

In Save as type, choose HTML (Legacy), then choose Save.

Use the HTML Export Options dialog box to configure settings in General, Image, and Advanced.

Choose OK to complete the export and create the HTML file.

The export creates a document with the chosen name and an .html extension, for example "newsletter.html". When requested by the settings, a web images subfolder, for example "newsletter-web-images", is written alongside that file.

## HTML export options

Review the HTML export settings in Adobe InDesign before producing web-ready content.

HTML export options determine how document structure, content, images, and styling become HTML. They affect reading order, formatting treatment, image processing, and the inclusion of CSS or scripts.

### General options

### Export and content handling

### Formatting options

### Image options

### Image export and handling

### Image quality and sizing

### Image conversion

### GIF options

### JPEG options

### Additional image setting

### Advanced options

### HTML and CSS

### JavaScript

### Exported content

- Stories; linked graphics and embedded graphics; SWF files; footnotes; text variables exported as text; bulleted-list content; numbered-list content; internal cross-references; hyperlinks that point to web pages; and text anchors.
- Tables that include formatting, including strokes and cell styles.
- Objects including shapes, pasted content, and outlined text.
- Audio and H.264 video enclosed in HTML5 <audio> and <video> tags.

### Unsupported content

- Non-web hyperlinks, except text-anchor links.
- XML tags, plus books, bookmarks, and SING glyphlets.
- Page transitions and index markers.
- Pasteboard objects that are not selected and do not intersect the page.
- Parent page items, except when they have been overridden or selected before export.

## Export content as HTML5

Export a page, spread, or chosen object from Adobe InDesign as HTML5.

HTML5 export turns an InDesign document into output that works across platforms and can carry rich interactive content. The format supports stronger engagement, accessibility improvements, SEO benefits, and faster page performance, while also letting you choose how text is represented for the web.

Choose File > Export.

In Save as type (Windows) or Format (macOS), choose HTML5.

Enable Use InDesign Document Name as the Output Filename to reuse the document name, then choose Save.

In the Export HTML5 Package dialog box, choose either HTML text tags or HTML SVG tags.

Enable Copy Fonts (Except added from Adobe Fonts) to include fonts.

Choose Export to create the HTML5 package.

### Quick fixes to resolve HTML5 rendering issues

- If HTML text tags was used, make sure Copy Fonts is selected during export.
- If Copy Fonts was selected, verify whether a missing font is still causing the problem. Use HTML SVG tags as a comparison to check whether the issue is font-related.
- If the problem is confirmed to be a font issue and HTML SVG tags renders correctly, check that the fonts used in the InDesign document were exported into the package's fonts folder. When they are absent, copy the fonts into that folder manually.
- If the problem remains after adding the fonts, contact the Customer support team.

Note

- Website use of fonts must follow the terms of your font license. A separate license may be necessary when fonts are self-hosted on a website.
- Some fonts may be blocked from copying into the package folder because of font foundry restrictions. For more questions, contact sharewithID@adobe.com.

### Difference between HTML5 Package and HTML (Legacy)

HTML5 Package is intended to reproduce the InDesign file's layout in HTML5 output from the beginning of the process. HTML (Legacy), by contrast, builds HTML from an InDesign file with a bottom-up method, so the final result has only limited resemblance to the source layout.

### Scripting support for HTML5 export

HTML5 export is available from the InDesign Application UI and can also be driven with VBScript, ExtendScript, and AppleScript. These scripting environments call the same export operations used by the HTML5 export option, allowing teams to automate HTML5 generation on Windows, macOS, or cross-platform workflows.

InDesign ships without scripts for this workflow. Create your own scripts when automation is required.

### Known issues

- Text effects such as drop shadow, blur, etc. may not export correctly.

Workaround: Choose HTML SVG tag rather than HTML text tags when exporting text.

## HTML5 export options

Use the HTML5 package settings in Adobe InDesign to review export options, formats, and property mappings.

For HTML5 output, some properties come from settings associated with the Publish Online workflow (File > Publish Online). Those properties shape the package structure and the way exported content is represented.

## See also

- [Paragraph Styles](uxp-paragraph-styles.md)
