# Adjusting your workflow - Placing InCopy files in InDesign documents

A common workflow starts in InDesign, where the basic layout plus text and graphics placeholders are created and exported to InCopy. Another workflow can begin with a stand-alone InCopy content file (.icml or .incx), which you place in InDesign with the FileÂ > Place command.

Consider these dependencies when placing InCopy content files in an InDesign document:

Styles

When styles are applied to the InCopy text file, they are added to the document's InDesign style list. If a style name conflicts, InDesign replaces the incoming style with the style already present.

Layout

InDesign can define the content's basic layout geometry first; text and styles can then be created or imported from a word-processing application. (When text files are placed within InCopy, they are embedded in the InCopy document rather than linked to any external file.)

Placing/Duplicating

Placing the same InCopy content file more than once creates multiple instances in the InDesign Links panel, but all instances are managed as a single content file. The same behavior applies to exact copies of a content file created by any duplication method.

Note

If you copy and paste some, but not all, text from a managed InCopy content file, the pasted content becomes a new content file. That new file is independent of the original and has no link to any external file, whether InCopy or otherwise. The original content and pasted portion can be edited independently.

Updates/Management

After multiple instances of a managed content file exist in an InDesign document, they act as though the file were open in two applications. For example, checking out one content-file instance locks every other instance, so only the checked-out instance can be edited. In that situation, refresh the other open content instances with the appropriate Update command.

### More like this

- Update, restore, and replace links
- Accidentally updating your work
