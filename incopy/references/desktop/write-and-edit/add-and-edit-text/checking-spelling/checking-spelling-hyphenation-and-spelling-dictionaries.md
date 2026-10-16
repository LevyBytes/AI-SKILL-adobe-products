# Checking spelling — Hyphenation and spelling dictionaries

For most languages, InCopy relies on Proximity dictionaries to check spelling and hyphenate words. Each dictionary can be customized by adding words. Text can be assigned different languages, and InCopy uses the matching dictionary for spelling and hyphenation. Additional user dictionaries can be created, and word lists stored as plain text files can be imported or exported.

Customizing a dictionary builds lists of added words, meaning words not already present, and removed words, meaning existing entries that should be treated as possible misspellings. In the Dictionary dialog box, you can view and edit added words, removed words, and ignored words, which are words ignored for the current session after Ignore All is selected. Words can also be added for all languages, a useful approach for last names, street names, and other terms that are not tied to one language.

Note

To use language dictionaries from an earlier version of InDesign or InCopy, locate the user dictionary files (.udc) with the system Find command, then add those files to the dictionary list in Dictionary preferences.

Where dictionary words are stored

By default, spelling and hyphenation exceptions are stored outside the document in user dictionary files on the computer where InCopy is installed; those file names end with .clam or .not. Exception lists can also be stored inside any InCopy document. Word lists may be kept in an external user dictionary, in the document, or in both places. Existing dictionary locations are shown in Dictionary preferences.

Putting hyphenation and spelling exceptions inside a document helps keep text treatment consistent when the document moves to another computer. For that purpose, Dictionary preferences can merge the user dictionary into the document. Exception locations can also be managed from the Create Package Folder dialog box. Keeping an exception list outside the document is better when the same exceptions must be shared by multiple documents.

Note

When a user dictionary is merged into the exceptions list, the full user dictionary is added to the document even if none of its words are used, which increases the document file size.

Applying languages to text

Apply a language to selected text from the Language menu in the Character panel. A default language can also be set for the entire document or future new documents. InCopy also has language locking: when Asian text is included in a selection, choosing a non-Asian language from the Language menu does not change that Asian text's language setting. Cross-reference: Assign a language to text.

For selected text, language assignment is available from the Language menu in the Control panel or Character panel. A default language can also be set for the entire document or future new documents. Cross-reference: Assign a language to text.

Exception word lists

Words can be excluded from acceptance. For example, if a common word such as "bicycle" needs an alternate spelling for a company name or a particular document, add that word to the excluded list so it is flagged during spell check. InCopy can keep separate added-word and removed-word lists for each installed language.
