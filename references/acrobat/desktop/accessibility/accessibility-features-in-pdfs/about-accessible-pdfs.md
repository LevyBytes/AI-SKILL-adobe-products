# About accessible PDFs

Here's what sets an accessible PDF apart.

- Searchable text: When a document is built from scanned pictures of text, it's inaccessible by nature, because what it holds is imagery rather than searchable words. The words can't be read or pulled out by assistive software, users can't select or edit them, and the PDF can't be adjusted for accessibility. Run the scanned text imagery through optical character recognition (OCR) to turn it into searchable text before the document's other accessibility features will work.
- Alternate text descriptions (Acrobat Pro): Document elements like images and interactive form fields stay invisible to screen readers without alternate text attached to them. While screen readers do handle web links, supplying richer alternate-text descriptions tends to be more useful. Both alternate text and tool tips can support a wide range of users, learning disabilities included.
- Fonts that allow characters to be extracted to text (Acrobat Pro): For a PDF to be accessible, its fonts have to carry enough detail that Acrobat can pull every character out to text for uses beyond on-screen display. Open such a PDF through Read Out Loud or with a screen reader, and Acrobat pulls characters out as Unicode text. The same Unicode extraction happens when you save as text for a braille printer. Should Acrobat be unable to work out how the font maps to Unicode, that extraction breaks down.
- Reading order and document structure tags (Acrobat Pro): A screen reader or other text-to-speech tool needs a structured document if it's going to voice the text and lay it out in a way that makes sense to the user. Inside a PDF, document structure tags set the reading order and flag headings, paragraphs, sections, tables, and the rest of the page elements.
- Interactive form fields (Acrobat Pro): Certain PDFs hold forms meant to be completed on a computer. Accessibility requires those form fields to be interactive so the user can key values into them.
- Navigational aids (Acrobat Pro): Links, bookmarks, headings, a table of contents, and a preset tab order for form fields all count as navigational aids in a PDF. They let users get a handle on a document without slogging through every word. Bookmarks pull especially heavy weight here and can be spun up from a document's headings.
- Document language (Acrobat Pro): When a PDF declares its document language, certain screen readers can flip over to the matching language.

Security that doesn’t interfere with assistive software (Acrobat Pro): Some PDF authors lock users out of printing, copying, extracting, commenting, or editing text. A screen reader still has to be able to reach the text of an accessible PDF. Acrobat lets you confirm that the security settings won't block a screen reader from turning onscreen text into speech.

For more information about PDF accessibility, see www.webaim.org/techniques/acrobat/.
