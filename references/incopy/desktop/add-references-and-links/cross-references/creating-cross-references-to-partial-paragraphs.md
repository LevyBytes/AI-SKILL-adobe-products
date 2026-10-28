# Creating cross-references to partial paragraphs

Cross-reference formats can be built so they include only the opening portion of a paragraph. For example, a document heading such as “Chapter 7—Granada to Barcelona,” can target just “Chapter 7” instead.

Cross-reference to partial paragraph

A. The cross-reference source ends at an em dash (^\_) B. “false” excludes the em dash from the source

Cross-reference to partial paragraph

After inserting the Partial Paragraph building block, provide two pieces of information. First, enter the delimiter inside the quotation marks. The delimiter is the character that stops the paragraph text. Typical delimiters are colons, as in Chapter 7: Granada; periods, as in Chapter 7. Granada; and dashes, as in Chapter 7—Granada. To add special characters such as em dashes (^\_), em spaces (^m), or bullet characters (^8), choose from the menu shown by the Special Characters icon.

Second, specify whether the delimiter character is included or excluded. Use includeDelim=”false” to omit the delimiter, as in Chapter 7, and includeDelim=”true” to keep it, as in Chapter 7—. The values “0” and “1” can be used in place of “false” and “true,” respectively.
