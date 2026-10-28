# Page ranges (_pageRanges_)

Use this to pick which pages receive the watermark. Numbering of pages runs from 1 up to N. Omitting a range causes the mark to land on every page of the source document.
Supply the ranges as an array of objects, and that array may hold at most 20 entries. The properties carried by each object are:

- **Start Page** (_start_) : Where the range begins, as a page number. Defaults to 1.
- **End Page** (_end_) : Where the range ends, as a page number. Defaults to the document's final page.
