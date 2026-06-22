# Checking Spelling

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Spelling can be checked in one document or across all open stories. InCopy marks misspelled or unknown words, repeated terms such as "the the," words that should be capitalized, and sentences that start without a capital letter. During a spelling check, InCopy also checks XML content and expanded inline notes.

InCopy checks spelling against the dictionaries assigned to the languages used by the document text. The Proximity language dictionaries support both spelling and hyphenation, and each dictionary includes hundreds of thousands of entries with standard hyphenation points.

For stand-alone stories, meaning stories not linked to an InDesign layout, language dictionaries can be customized so specialized vocabulary is recognized and handled correctly. For example, during a spelling check with Edit > Spelling > Check Spelling, select Add and enter the desired settings.

## Checking spelling — Set spelling preferences

Choose Edit > Preferences > Spelling (Windows) or InCopy > Preferences > Spelling (Mac OS). Use any of these options:

Select Misspelled Words to flag words missing from the language dictionary.

Select Repeated Words to catch duplicate terms such as "the the."

Select Uncapitalized Words to catch words such as "germany" when the dictionary lists only the capitalized form, "Germany."

Select Uncapitalized Sentences to catch lowercase words that follow periods, exclamation points, and question marks.

Select Enable Dynamic Spelling to underline possible misspellings while you type. Set separate underline colors for misspellings (not present in user dictionaries), repeated terms (such as "the the"), lowercase proper words (such as "nigeria" instead of "Nigeria"), and sentences that start with a lowercase letter.

Note

For spell-checking notes, select Include Note Content When Checking Spelling in Notes preferences. For deleted text, select Include Deleted Text When Spellchecking in Track Changes preferences.

If the document contains text in another language, select that text and use the Language menu in the Character panel to assign the correct language. Choose Edit > Spelling > Check Spelling.

Spell-checking starts.

Note

The Check Spelling command skips collapsed stories in a multistory file. However, Change All and Ignore All still affect every collapsed story and table.

To change the spell-check range, choose one of the following options, then select Start:

Select Document to check the entire document. Select All Documents to check every open document.

Select Story to check all text in the selected frame, including threaded frames and overset text. Select Stories to check stories in every selected frame.

Select To End Of Story to check from the insertion point forward.

Select Selection to check only selected text. This choice is available only when text is selected.

When unknown words, misspellings, or other possible errors appear, choose an option:

Select Skip to continue checking without changing the highlighted word. Select Ignore All to ignore every occurrence of that highlighted word until InCopy is restarted.

Choose a word from Suggested Corrections or type the correct spelling in Change To, then select Change to edit only that occurrence. Select Change All to replace every occurrence of the misspelled word in the document.

To add a word to a dictionary, choose the dictionary from Add To, then select Add.

Select Dictionary to open the Dictionary dialog box, where the target dictionary and language can be set and hyphenation breaks can be specified for the added word. To add the word for all languages, choose All Languages from the Language menu. Select Add.

## Checking spelling — Correct spelling errors as you type

Autocorrect can replace capitalization mistakes and common typing errors as you type. Before it can operate, build a custom mapping that pairs frequent misspellings with their corrections.

Use Edit > Preferences > Autocorrect (Windows) or InCopy > Preferences > Autocorrect (Mac OS), then enable Enable Autocorrect. For a quick toggle, use Edit > Spelling > Autocorrect. Choose the autocorrection language from Language menu. To fix capitalization mistakes such as typing "germany" instead of "Germany," select Autocorrect Capitalization Errors. Capitalized words do not have to be added to the autocorrection list. To add a frequent misspelling, select Add, type the misspelled form such as "teh," type the correction such as "the," and select OK. Add any other frequent misspellings, then select OK.

When text matches a misspelled word that you added, it is automatically replaced with the correction you entered.

To delete autocorrect entries you added, select the word in the list and choose Remove. To revise an entry, select the word, choose Edit, type the correction again, and select OK.

## Checking spelling — Use dynamic spelling

With dynamic spelling enabled, spelling problems can be corrected from the context menu. Words that may be misspelled are underlined according to the dictionary for the text language. For multilingual text, select the relevant text and assign the correct language.

To turn on dynamic spelling, choose Edit > Spelling > Dynamic Spelling.

Possible misspellings are underlined in the document.

Right-click (Windows) or Control-click (Mac OS) the underlined word, then choose one of these actions:

Select a suggested correction. For repeated words or capitalization issues, the context menu offers Delete Repeated Word [word] and Capitalize [word].

Use Add [word] To User Dictionary. InCopy stores the word in the current dictionary without displaying the Dictionary dialog box, and leaves the document text as-is.

Select Dictionary. The Dictionary dialog box opens so you can choose Target dictionary, adjust hyphenation breaks, and set a language. To add the word for every language, choose All Languages from the Language menu, then select Add. That stores the word in the selected dictionary without changing the document text.

Select Ignore All to ignore this word in every document. After InCopy restarts, the word is flagged again as a misspelling.

Note

After using Ignore All, you can stop ignoring that word by opening the Dictionary dialog box, choosing Ignored Words from the Dictionary List menu, and removing the word from the list.

## Checking spelling — Hyphenation and spelling dictionaries

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

## Checking spelling — Create or add user dictionaries

You can create a user dictionary, or add one from an earlier InDesign or InCopy version, from a file supplied by someone else, or from a server that stores a workgroup dictionary. Once added, that dictionary is available throughout InCopy documents.

Use Edit > Preferences > Dictionary (Windows) or InCopy > Preferences > Dictionary (Mac OS). Pick the language to associate with the dictionary from Language menu. Then do one of the following:

To create a dictionary, select the New User Dictionary icon below the Language menu. Enter the user dictionary name and location, including the .udc extension, then select Save.

To add an existing dictionary, select the Add User Dictionary icon, choose the user dictionary file with a .udc or .not extension, then select Open.

Note

If the dictionary file is hard to find, use the system Find command to locate .udc files, for example by searching for \*.udc, note the location, and try again.

The dictionary appears in the list under the Language menu. Words can be added to it during spell-checking or through the Dictionary dialog box.

## Checking spelling — Set the default language dictionary for the current document

The default language dictionary can be changed for the current document or for all new documents. In an existing document, this change leaves previously created text and new text entered into already existing frames unchanged.

Note

For a style-specific dictionary, use the Character Style or Paragraph Style panel. The Language menu is in Advanced Character Formats.

Open the document. Select the Selection tool from the toolbar and confirm that no document items are selected. Choose Type > Character. In the Character panel, choose the desired dictionary from the Language menu. If the language option is hidden in the Character panel, select Show Options, then choose the language from the list.

## Checking spelling — Set the default language dictionary for all new documents

Launch InCopy without opening a document. Open Type > Character. In the Character panel, use the Language pop-up menu to pick the dictionary you want as the default. If the Character panel does not show the language control, select Show Options, then choose your language from the list.

## Checking spelling — Remove, relink, and reorder user dictionaries

Open Edit > Preferences > Dictionary (Windows) or InCopy  > Preferences > Dictionary (Mac OS). Use the Language menu to choose the language that owns the dictionary. Then use any of these actions:

For dictionary removal, select the entry in the list and click the Remove User Dictionary icon . Each language must keep at least one dictionary.

When a question mark icon appears beside the language dictionary, select that dictionary, click the Relink User Dictionary icon , then locate and open the user dictionary.

To reorder user dictionaries, drag them into the required sequence. Dictionaries are checked in the same order shown in the list.

## Checking spelling — Add words to dictionaries

During a spell check, if InDesign shows an unknown word in the Check Spelling dialog box, choose the dictionary in the Add To menu, then click Add. The Dictionary dialog box also lets you set the destination dictionary and language, and control how exception-word entries are recorded.

Words can also be added to language dictionaries for stand-alone stories (stories not linked to an InDesign layout). Tailoring dictionaries helps your unique vocabulary be recognized and handled correctly.

Open Edit > Spelling > User Dictionary. In the Language menu, pick a language. Every language includes at least one dictionary. To add the word across every language, choose All Languages. In the Target menu, select the dictionary that should store the word. The Target menu can save changes outside the file in a user dictionary, or inside a document that is open. Set the Dictionary List menu to Added Words. In the Word box, type or revise the word for the word list. Click Hyphenate to display the word's default hyphenation. Tildes (~) mark possible hyphenation points. When those points are not the ones you want, use these rules:

Type one tilde (~) at the best possible hyphenation points, or at the word's only acceptable hyphenation point.

Type two tildes (~~) for your second choice.

Type three tildes (~~~) for a poor but still acceptable hyphenation point.

To prevent the word from ever being hyphenated, put a tilde before its first letter.

Note

If the word itself needs an actual tilde, put a backslash before the tilde (\~).

Click Add, then click Done. The currently selected Dictionary List receives the word. Note

Hyphenation points still interact with the hyphenation settings in your documents. Because of that, the word may not break where you expect. Adjust these settings from Hyphenation in the Paragraph panel menu. (See Hyphenate text.)

## Checking spelling — Remove or edit words in dictionaries

Open Edit > Spelling > User Dictionary. In the Language menu, pick a language. In the Target menu, choose the dictionary that contains the word you want to remove. The Target menu can point to an external user dictionary or to any open document. In the Dictionary List menu, use one of these choices:

To edit additions in the selected Target word list, choose Added Words.

To edit the words flagged as misspelled, choose Removed Words.

To edit words ignored during the current InCopy session, choose Ignored Words. This list contains every word for which Ignore All was chosen.

Edit the word in the word list, or select the word and click Remove. Click Done.

## Checking spelling — Export a word list

Word lists can be exported to a text file (.txt) and then imported into an InCopy user dictionary. In the text file, separate words with a space, tab, or paragraph return. Added words and removed words can be exported; ignored words cannot, because they apply only during the current session.

Open Edit > Spelling > User Dictionary. Select the language in the Language menu and the dictionary in the Target menu that contains the word list for export. Click Export, enter the file name and location, then click Save.

The word list is written to a text file. Use any text editor to revise the list, then import it again. You can also send the word list to other people so they can import it into their user dictionaries.

## Checking spelling — Import a word list

Open Edit > Spelling > User Dictionary. Set the Language menu to the needed language and the Target menu to the dictionary. Click Import, find the text file that contains the spelling exceptions list, then click Open.

## Checking spelling — Change dictionary preferences

Dictionary preferences control how InCopy uses hyphenation dictionaries and spelling dictionaries. For most InCopy languages, Proximity dictionaries handle both spelling verification and word hyphenation. When spelling or hyphenation components from another company are installed, vendor choices can be assigned per installed language.

Note

The Dictionary Preferences dialog box is not where you choose the language dictionary for spell checking or text hyphenation. Instead, this dialog box selects the hyphenation and spelling plug-ins that InCopy uses for the language shown in the Language field. With only the default hyphenation and spelling plug-in installed, no Dictionary Preferences dialog box settings usually need adjustment. After a third-party developer's spelling or hyphenation plug-in is installed, it becomes available in the Hyphenation Vendor and Spelling Vendor menus in this dialog box. That makes it possible to use one vendor's hyphenation or spelling engine for some languages and a different vendor's engine for other languages.

Open Edit > Preferences > Dictionary (Windows) or InCopy  > Preferences > Dictionary (Mac OS). For Language, choose the language whose settings or vendor assignments need to change. Manage user dictionaries as needed. (See Create or add user dictionaries.) If a hyphenation component from a company other than Adobe is installed, choose it in the Hyphenation menu. If a spelling dictionary component from a company other than Adobe is installed, choose it from Spelling. In Hyphenation Exceptions, open Compose Using and use one of these options:

For composition based on the external user dictionary's hyphenation exceptions list, choose User Dictionary.

For composition based on the exceptions list stored inside the document, choose Document.

When both exception lists should be used, choose User Dictionary And Document. This is the default setting.

To copy the external user dictionary's exception list into the document's own exception list, select Merge User Dictionary Into Document. Note

In workflows with many different partners or clients, consider clearing Merge User Dictionary Into Document. For example, a service provider usually should avoid merging its user dictionary into every customer's file.

To force every story to recompose after related settings change, select Recompose All Stories When Modified. This option recomposes stories after Compose Using settings change (see step 6) or after the Dictionary command adds or removes words. Recomposition time depends on how much text the document contains. Click OK.

## Checking spelling — Using dictionaries in a workgroup

Install and add the same customized user dictionaries on every station in the workgroup, so a document follows identical spelling and hyphenation rules no matter who edits it. You can have everyone add identical dictionaries to their computer, or you can share a user dictionary on the network server.

A lock icon  means the dictionary is available but cannot be changed. For server-stored user dictionaries, the first person to load the dictionary locks the file; later users see it as locked. The operating system can also lock files when they are made read-only. If a user dictionary is shared on the network server, you may want to make the file read-only for all users and allow only the administrator to add words.

Have everyone in the workgroup use the customized user dictionary installed on the common network workstation, rather than the dictionary stored with a document. Before sending a document to a service provider, however, you may want to merge the user dictionary into the document.

If no customized user dictionary is shared on a common network workstation, locate the user dictionary files and copy them between workstations. User dictionary locations appear in Dictionary preferences.

Note

After a shared workstation's user dictionary is updated, users on individual workstations see the changes only after restarting InCopy or pressing Ctrl+Alt+/ (Windows) or Command+ Option+/ (Mac OS) to recompose all text.

## Checking spelling — Duden dictionary

Duden is built directly into InCopy. For German text, Duden can provide more precise hyphenation and spell checking.

To use Duden dictionary in InCopy with German language, open:

- Windows: Edit > Preferences > Dictionary
- macOS: InCopy > Preferences > Dictionary

From the Language drop-down, select one of these languages:

- German: 1996 Reform
- German: 2006 Reform
- German: Austria 2006 Reform
- German: Swiss
- German: Swiss 2006 Reform

Note

German:Austria 2006 Reform is available as a new language.

From the Hyphenation and Spelling drop-down, choose Duden if it is not already selected.

## Checking spelling — Hyphenation

To enable Duden hyphenation, open Preferences > Dictionary and select Show Hyphenation Options.

These Duden hyphenation options appear in:

- the Hyphenation settings available during new paragraph style creation.

- Paragraph panel menu > Hyphenation.

### Duden hyphenation styles

For German words, Duden provides four hyphenation styles:

All:

Permits every technically correct hyphenation that also follows spelling rules. Both Ur-ins-tinkt and Ur-in-s-tinkt are valid examples. This is the default setting.

All but unaesthetic:

Allows all hyphenations except unaesthetic breaks that could distort the word's sense. Ur-ins-tinkt may be used; Ur-in-s-tinkt may not.

Preferred aesthetic:

Alongside words with defined aesthetic hyphenation, longer words (minimum six characters) are also hyphenated when no aesthetic hyphenation has been defined. For example, Napoleon can break as Na-po-leon, even though no aesthetic hyphenation is defined for it.

Aesthetic:

Applies only hyphenations marked as aesthetic. Example: Auto-bahn is used, not Au-tobahn.

### Some more examples of Duden hyphenation styles

## Checking spelling — Spell-check

German permits several valid spellings for many words, including Delphin vs Delfin and Graphik vs Grafik.

Four spell-check styles are available. For consistent writing that accepts only one valid spelling variant (for example either Delphin or Delfin), choose Duden, Conservative, or Press agencies. To flag only invalid spellings as errors, choose Tolerant.

Duden is selected by default. Other choices are available from Preferences > Dictionary > Spelling.

### Duden spell-check styles

Duden:

Accepts only Duden's recommended variation; other variants are treated as errors.

Conservative:

Older spelling variants are accepted, such as Delphin rather than Delfin (ph instead of f). For the Graphik/Grafik pair, Graphik is valid and Grafik is rejected.

Press agencies:

Uses Duden-style checking with a separate rule set from press agencies and publishing houses.

Tolerant:

Permits every valid spelling. Graphik and Grafik are both accepted; Delphin and Delfin are accepted as well.

### Some more examples of spell-check

## Checking spelling — Scripting

When scripting Duden spelling vendors, use these German spell-check style names:

- Duden
- Duden: Konservativ
- Duden: Presse
- Duden: Tolerant

## Checking spelling — Assign a language dictionary to selected text

When a stand-alone story (stories not linked to an InDesign layout) uses more than one language, InCopy can be told which language dictionary should handle spell checking and hyphenation for each language. Dictionary assignments can vary throughout the document, including individual characters.

Different hyphenation breaks depending on the language dictionary

A. Glockenspiel in English B. Glockenspiel in Traditional German C. Glockenspiel in Reformed German

Different hyphenation breaks depending on the language dictionary

Select the text that should use a particular dictionary. Open Type > Character to display the Character panel. Use the Language menu in the lower Character panel area to choose a dictionary. (If the Character panel does not show the Language menu, open Customize from the Character panel menu, select Language, and click OK.) Note

When an InCopy story is linked to an InDesign layout that contains an embedded hyphenation list, spell checking and hyphenation are controlled by that embedded list.
