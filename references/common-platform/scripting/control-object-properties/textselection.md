# textselection

controlObj.textselection

### Description

This is the selected text in a text-displaying control, or an empty string when nothing is selected.

Assigning the value replaces the current text selection and changes the text property. If there is no active selection, the new value is inserted into the text string at the current insertion point. After changing text, textselection resets to an empty string.

Note

Assigning textselection before the EditText control's parent Window exists has undefined behavior.

### Type

String
