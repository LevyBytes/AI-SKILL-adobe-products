# Types of text variables and their behaviors

InDesign includes these variable types for specific kinds of dynamic document content:

- Chapter Number: Shows the current chapter number. You can place text before or after it and choose the numbering style. If a chapter is continued from an earlier document in a book, refresh the book's numbering so the chapter number displays correctly.
- Creation Date, Modification Date, and Output Date: These variables show when the file was first saved, most recently saved, or sent through an output process such as printing, PDF export, or packaging. Text can be added before or after each date, and the date-format controls are shared by all date variables.
- Date Format: Determines how date values are displayed. You can type the format yourself or pick one from the available list. Because date variables follow the language applied to nearby text, documents in different languages may show the same date in different forms. Examples: MM/dd/yy -> 12/25/07; MMM. d, yyyy -> Dec. 22, 2025. The same language rule applies to text: a creation date can appear in Spanish text as 01 diciembre 2025 and in German text as 01 Dezember 2025.

  - Include Entire Folder Path: Adds the complete folder path together with the file name. InDesign follows the normal path conventions for Windows or macOS.
  - Include File Extension: Adds the extension to the file name. The File Name variable refreshes whenever the document is saved under another name or in another location. The path or extension is not shown in the layout until the document has been saved.

- Image Name: Shows image metadata and is often used for automatic captions. Image Name contains a Metadata Caption variable type. When a text frame that holds this variable is next to, or grouped with, an image, it shows metadata from that image. Edit Image Name to choose the metadata field it should read.
- Last Page Number: Shows the total page count and is typically used in Page X of Y numbering. It changes automatically when pages are inserted or removed, and it can count either within a section or across the full document.
- Running Header (Paragraph Style or Character Style): This running-header variable returns the first or last instance of text with the chosen style on the page. If the page has no matching text, InDesign uses the value from the previous page.
- Custom Text: Shows reusable text that may need later revision. Changing the variable changes every occurrence at the same time, which is useful for placeholders such as project names or code names.

Tip

For finer control over variable content, insert special characters into text variables.
