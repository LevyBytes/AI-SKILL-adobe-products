# TextDocument.justification

textDocument.justification

### Description

How paragraphs are justified within the Text layer.

### Type

A ParagraphJustification enumerated value; read/write. One of:

- ParagraphJustification.`LEFT_JUSTIFY`
- ParagraphJustification.`RIGHT_JUSTIFY`
- ParagraphJustification.`CENTER_JUSTIFY`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_LEFT`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_RIGHT`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_CENTER`
- ParagraphJustification.`FULL_JUSTIFY_LASTLINE_FULL`
- ParagraphJustification.`MULTIPLE_JUSTIFICATIONS`

When a Text layer mixes justification values, the read returns ParagraphJustification.`MULTIPLE_JUSTIFICATIONS`.

Trying to set a TextDocument to ParagraphJustification.`MULTIPLE_JUSTIFICATIONS` lands on ParagraphJustification.`CENTER_JUSTIFY` instead.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.
