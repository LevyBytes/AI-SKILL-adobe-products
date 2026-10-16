# Find text within quotation marks and reformat

Choose Edit > Find/Change, then select the GREP tab.

Put (")(\w+)(") in Find what; this matches text enclosed in quotation marks.

Use the Special characters for replace icon, then choose Found > Found Text so Change to receives $0. In the Change to field, $1, $2, and $3 can replace separate groups created by parentheses in the expression. $1 refers to the first parenthesized group, $2 to the second, and the numbering continues in order.

In Change Format, click Specify attributes to change and choose the formatting to apply.

Select Find Next to find the first occurrence.

Select Change, Change All, or Change/Find to replace the text and keep searching.
