# More Accessibility enhancements

InDesign can produce accessible EPUB output with structured tables, figures, semantic tagging, and ARIA roles.

- Tables provide correct headers and data cells, including column headers, for assistive technologies.
- Figures can export with captions through figure and figcaption tags, so screen readers can announce captions. Live Captions are supported as well.
- Drop caps use a special pseudo-element styling approach so screen readers still recognize the text.
- SVGs can export with image tags while retaining vector quality plus accessibility metadata such as alt text and decorative roles.
- Context breaks can map to tags like hr to mark section separation. You can create them with empty paragraphs, text, or inline images, then style them through paragraph settings.
- ARIA roles can be assigned at object/frame level or through paragraph or character styles, helping screen readers identify notes, chapters, credits, and other content types.
- Glossaries can use definition list semantics, which improves navigation in reflowable EPUBs.
