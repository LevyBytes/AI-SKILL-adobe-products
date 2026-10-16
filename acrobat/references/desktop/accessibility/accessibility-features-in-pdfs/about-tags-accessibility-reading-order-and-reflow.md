# About tags, accessibility, reading order, and reflow

In a lot of respects PDF tags resemble XML tags. What they spell out is the document's structure — which text serves as a heading, which content forms a section, which text is a bookmark, and so forth. The document's organizational layout is mirrored by a logical structure tree built from these tags. As a result, tags lay down the reading order and make navigation easier — a real benefit in long, complicated documents — all without altering how the PDF looks.

By working through that logical structure tree, assistive software figures out how to present and make sense of the document's content. For working out the right reading order of text, most assistive software leans on document structure tags. Those tags also let assistive software relay what images and other content mean by way of an alternate format, sound for instance. A document with no tags carries no structure information, so Acrobat is left to guess at one off the Reading Order preference setting — which frequently leaves page items voiced out of sequence or skipped entirely.

Those very same document structure tags are what reflow leans on when a document is being viewed on a mobile device's small screen.

Note

Acrobat usually tags PDFs during creation. To check if a PDF contains tags, go to > Document Properties. Under Description tab, check the 'Tagged PDF" value in the Advanced pane.

Within Acrobat Pro, you'll find the logical structure tree on the Tags panel. There it lays out the document's content as page elements nested across various levels.

### More like this

- Reading PDFs with reflow and accessibility features
- Creating accessible PDFs
- Touch Up Reading Order tool for PDFs (Acrobat Pro)
- Editing document structure with the Content and Tags panels(Acrobat Pro)
- Keys for accessibility (Acrobat Pro)
