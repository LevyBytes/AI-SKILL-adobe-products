# Using text macros - Swap text with macro text

Swap Macro Text checks the text immediately before the current insertion point for a defined macro code (case-sensitive). When it finds one, the command deletes that code and inserts the associated macro text. For example, suppose you created a text macro for Centers for Disease Control and Prevention with CDC as the macro code. To use it, type The CDC, place the insertion point immediately after the macro code, and choose Swap Macro Text. InCopy examines the text just before the insertion point and changes CDC to the macro text Centers for Disease Control and Prevention.

With the Type tool, click immediately after the macro code that should be replaced, or select the replacement target text. Use the Text Macros panel menu command Swap Macro Text, or choose Edit > Swap Macro Text.

Note

Swap Macro Text does not scan the whole document for each occurrence of the macro code. Use Find/Change when all instances of a word or phrase need to be found and replaced.
