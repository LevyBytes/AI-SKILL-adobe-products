# Convert phone numbers with a preset query

Use the Phone Number Conversion query to make phone number formatting consistent throughout the document.

Choose Edit > Find/Change and confirm that the GREP tab is active.

From the Query list, choose Phone Number Conversion (dot format).

Check the Find what GREP expression:

\(?(\d\d\d)\)?[-. ]?(\d\d\d)[-. ]?(\d\d\d\d).

Edit the Change to field to produce the desired number format.

Example replacements:

- 206.555.3982 uses $1.$2.$3.
- 206-555-3982 uses $1-$2-$3.
- 206 555-3982 uses $1 $2-$3.

Choose Change All.

Saved queries can be rerun and shared because the Query list in the Find/Change dialog box stores their text and formatting settings. Search range is not stored with a query, so choose the range each time it runs.
