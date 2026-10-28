# Text variables - Create variables for running headers and footers

Running Header variables normally pull in the first styled text occurrence found on the page. They are useful when a header or footer needs to show the active title or heading.

If the source text has not been styled yet, make and apply the paragraph style or character style that marks the header text, for example a title or heading style. Open Type > Text Variables > Define. Click New, then name the variable. In the Type menu, choose one of these values: Running Header (Paragraph Style), Running Header (Character Style). Then set these options:

Style

Select the style whose text should appear in the header or footer.

Use

Choose whether the variable should use the first or last styled occurrence found on the page. First On Page means the first paragraph or character that starts on that page. When the page has no matching occurrence, the most recent previous occurrence of that applied style is used instead. If the document has no earlier occurrence, the variable has no content.

Delete End Punctuation

When this option is enabled, the variable omits final punctuation from the displayed text, including periods, colons, exclamation points, and question marks.

Change Case

Enable this option to alter the capitalization of the header or footer text. For example, a footer can use sentence case while the page heading remains in title case.

Click OK, then click Done in the Text Variables dialog box.

Afterward, insert the variable into a header or footer built on the parent page.

When an InDesign document already has a header or footer text frame on the parent page, that frame can contain the variable. (See Edit text on a parent page.)
