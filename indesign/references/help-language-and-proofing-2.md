# Manage Language Dictionaries, Spell Check

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add or remove Hunspell dictionary; Set default language dictionary; Manage user dictionaries; Add or remove words from dictionaries; Import or export word lists; Change dictionary preferences; Manage the Duden dictionary; Duden dictionary hyphenation styles; Select Duden spell-check styles; Set up autocorrect and dynamic spelling; Check spelling; Set spelling preferences.

## Add or remove Hunspell dictionary

Add Adobe InDesign spell-checking and hyphenation support for over 90 languages.

Hunspell dictionary support lets InDesign use extra language dictionaries beyond its default set, enabling spell-checking and hyphenation for specialized languages and regional variants.

Before you begin

Changing or replacing InDesign dictionaries can alter line breaks and spell-check results in existing documents once you edit them again. Keep backups of original dictionary files for rollback. To modify existing InDesign dictionaries or manage user-added words, open Edit > Preferences > Dictionary (Windows) or InDesign > Preferences > Dictionary (macOS).

### Download and prepare dictionary files

Get the required Hunspell dictionary from Open Office or Mozilla Firefox. Sources often provide an OXT extension from OpenOffice, although another extension may appear.

Rename OXT (or other extension) to ZIP.

Unpack the ZIP archive contents into a temporary folder.

From the extracted contents, identify three files: AFF (affix), spelling dictionary DIC, and hyphenation dictionary DIC.

Rename each file with ISO language codes in the languageCode_COUNTRYCODE format (for example, en_US for English United States). Use ISO 639-1 language codes and ISO 3166-1 country codes to format names correctly.

Use these naming rules for the three file types:

### Install dictionary files in InDesign

In the platform-specific Dictionaries folder shown in the table, create a folder named for your ISO language code format (for example, en_US).

Place the three renamed dictionary files inside that new language folder.

Go to the platform-specific Info.plist location listed in the table.

Open Info.plist with a text editor, then find the SpellingService, UserDictionaryService, and HyphenationService elements.

Within each of those three service elements, insert a new element for your ISO language code (for example, en_US).

Save Info.plist, and then exit the text editor.

Relaunch InDesign.

### Dictionaries folder locations

### Info.plist file locations

### Remove a Hunspell dictionary

Using the table above, open the Dictionaries folder path for your platform and InDesign version.

Find the folder whose name matches the ISO language code you plan to remove (for example, en_US).

Remove the three dictionary files stored there: the AFF file, the spelling DIC file, and the hyphenation DIC file.

Return to the Info.plist location shown in the table above.

Open Info.plist in a text editor, then find the SpellingService, UserDictionaryService, and HyphenationService elements.

Delete the element for your ISO language code from each of those three service elements.

Save Info.plist, and then exit the text editor.

Relaunch InDesign.

## Set default language dictionary

Use the Character panel in Adobe InDesign when assigning the dictionary used for spell-checking and hyphenation.

For spelling and hyphenation, InDesign works with Hunspell dictionaries. It can apply languages to selected text and can also store custom words. The default dictionary can be set for the open document or for future documents. In an existing document, changing that default applies to text created afterward, while text already entered keeps its current setting.

Before you begin

For the current document's default dictionary, open that document first. For the default used by new documents, launch InDesign with no document open.

Choose Type > Character.

In the Language drop-down menu, choose the dictionary you want. To apply a language only to selected text, use the Type tool to select that text, and then choose a Language.

## Manage user dictionaries

Create, add, and arrange custom dictionaries for use across Adobe InDesign documents.

User dictionaries hold custom spell-check terms and are available throughout all InDesign documents. You can make new dictionaries or bring in dictionaries from earlier InDesign or InCopy versions, shared dictionary files, or a workgroup server. These settings are global to InDesign documents, rather than limited to the file currently open.

Choose Edit > Preferences > Dictionary (Windows) or InDesign > Preferences > Dictionary (macOS).

In the Language drop-down menu, choose the language whose dictionaries you want to manage.

Choose an option:

- Relink User Dictionary icon: when a question mark appears beside a user dictionary, locate that dictionary file and open it.
- New User Dictionary icon: creates a dictionary. Enter the user dictionary name and location, including the .udc extension, and then choose Save.
- Add User Dictionary icon: adds an existing dictionary. Choose a user dictionary file with a .udc or .not extension, and then choose Open.
- Remove User Dictionary icon: removes a dictionary entry from the list. Added dictionaries appear in the list under the Language drop-down menu. Words can be added to or removed from dictionaries during spell checking or through the User Dictionary dialog box.

## Add or remove words from dictionaries

### Customize the word lists used for spell-checking in your Adobe InDesign language workflows.

For each language dictionary, InDesign keeps separate Added Words, Removed Words, and Ignored Words lists, and those edits affect every document using that dictionary. You can add terms during a spelling check, but the Dictionary dialog box gives finer control over the storage target and list placement.

Choose Edit > Spelling > User Dictionary.

Choose the Target and Language.

In the Dictionary List drop-down menu, choose the list type:

Added Words: entries included by the selected Target and Language dictionaries.

Removed Words: entries excluded by the selected Target and Language dictionaries.

Ignored Words: entries skipped by the selected Target and Language dictionaries for the current session.

Enter a term in the Word field, or choose an existing list entry if you need to edit it.

Choose Hyphenate to display the word's default hyphenation. Tildes (~) mark possible places where the word can break.

Choose one of these options:

Add: places the term from the Word field into the chosen Target, Language, and Dictionary List.

Remove: deletes the selected term from the chosen Target, Language, and Dictionary List.

Choose Done.

## Import or export word lists

Use text files to move spelling exceptions and custom dictionary terms between Adobe InDesign setups.

User dictionary word lists can be exported as TXT files so spelling exceptions can be shared or moved between projects and users. The exported lists can be edited and then imported into other InDesign installations. Added Words and Removed Words are supported; Ignored Words are not.

Before you begin

In the text file, separate the words with spaces, tabs, or paragraph returns.

### Export a word list

Choose Edit > Spelling > User Dictionary.

Choose the Target and Language.

In the Dictionary List drop-down menu, choose either Added Words or Removed Words as the dictionary category.

Choose Export, provide the filename and destination, and then choose Save.

### Import a word list

Choose Edit > Spelling > User Dictionary.

Choose the Target and Language.

In the Dictionary List drop-down menu, choose the dictionary category that should receive the imported words.

Choose Import, browse to the prepared text file, and then choose Open.

## Change dictionary preferences

Set the language dictionaries and hyphenation behavior used for spelling and composition in Adobe InDesign.

Dictionary preferences determine spelling and hyphenation behavior across InDesign languages, unless text overrides them. Hunspell dictionaries are used by default, and installed third-party choices can also be selected.

Choose Edit > Preferences > Dictionary (Windows) or InDesign > Preferences > Dictionary (macOS).

In the Language drop-down menu, choose the language whose settings need adjustment.

Create, add, or remove user dictionaries as needed.

From the Hyphenation and Spelling drop-down menus, choose any installed non-Adobe components you want to use.

In the Hyphenation Exceptions section, choose from the Compose Using drop-down menu:

- User Dictionary: takes exceptions from the external user dictionary.
- Document: takes exceptions saved inside the InDesign document.

Enable Merge User Dictionary into Document to copy the exception list from the external user dictionary into the exception list saved with the document. Disable it when custom dictionaries should remain separate for different clients or collaborators.

Enable Recompose All Stories When Modified if InDesign should automatically recompose every story after dictionary settings are changed.

Choose OK.

## Manage the Duden dictionary

Configure German spelling and hyphenation choices in Adobe InDesign.

For German language spelling and hyphenation, InDesign includes the Duden dictionary. It provides several spelling and hyphenation styles, letting German speakers and learners match different editorial standards.

Choose Edit > Preferences > Dictionary (Windows) or InDesign > Preferences > Dictionary (macOS).

In the Language drop-down menu, choose the German language variant you want.

Turn on Show Hyphenation Options to display the Duden hyphenation choices.

Use Show Hyphenation Options so the Duden hyphenation options are visible.

Choose Duden in both the Hyphenation and Spelling drop-down menus.

Choose OK.

## Duden dictionary hyphenation styles

Apply hyphenation styles in Adobe InDesign to manage German word breaks.

Duden hyphenation styles define the places where German words may break at line endings. Four choices are available, balancing correct word division against typographic quality.

Before you begin

Confirm that InDesign uses the Duden dictionary for German and that Show Hyphenation Options is enabled in Dictionary preferences.

### Configure hyphenation style in paragraph styles

Open Window > Styles > Paragraph Styles.

To edit a paragraph style, double-click an existing style. To create one instead, open the panel menu icon and choose New Paragraph Style.

In the left-side categories, choose Hyphenation.

From the Style drop-down menu, choose a Duden Hyphenation option:

- All: allows every technically correct hyphenation point, including breaks that can produce awkward syllable splits (e.g., Ur-ins-tinkt plus Ur-in-s-tinkt).
- All but unaesthetic: includes valid breakpoints while excluding splits that alter the sense of the word (e.g., Ur-ins-tinkt is allowed, but Ur-in-s-tinkt is not).
- Aesthetic: uses only hyphenation points defined as aesthetically acceptable (e.g., Auto-bahn is allowed; Au-tobahn is not).
- Preferred Aesthetic: uses aesthetic hyphenation where available and adds logical breaks for longer words (six+ characters) that lack predefined aesthetic breaks (e.g., Na-po-leon).

If necessary, set other hyphenation controls, such as minimum word length and consecutive hyphens.

Choose OK.

## Select Duden spell-check styles

Choose German spelling variants in Adobe InDesign to decide which word forms pass spell check and which are reported as errors.

Many German words have more than one valid spelling. The Duden dictionary integrated with InDesign includes four spell-check styles for determining which variants are accepted.

### Configure the Duden spell-check style

Choose Edit > Preferences > Dictionary (Windows) or InDesign > Preferences > Dictionary (macOS).

In the Language drop-down menu, choose the German language you want to configure.

Confirm that Duden is selected in the Spelling drop-down menu.

Choose the spelling standard you want from the Spelling style options:

- Duden: accepts only the spelling Duden recommends. Other variants are marked as errors.
- Duden: Conservative: accepts only traditional forms, for example Delphin rather than Delfin, and Graphik rather than Grafik.
- Duden: Press Agencies: applies Duden recommendations based on spelling rules agreed to by major press agencies and publishers.
- Duden: Tolerant: accepts every valid spelling variant, such as both Graphik and Grafik, or Delphin and Delfin.

Choose OK.

### Duden spell-check examples

Note

For JavaScript or ExtendScript automation of document workflows, refer to the Duden spell-check styles by their German names: Duden, Duden: Konservativ, Duden: Presse, Duden: Tolerant.

## Set up autocorrect and dynamic spelling

Enable Autocorrect, define custom corrections, and use Dynamic Spelling while typing in Adobe InDesign.

Autocorrect and Dynamic Spelling can catch and correct frequent spelling and capitalization problems as text is entered. You can build a custom list of commonly mistyped words so documents maintain consistent accuracy across projects.

### Turn on Autocorrect and add custom word corrections

Choose Edit > Preferences > Autocorrect (Windows) or InDesign > Preferences > Autocorrect (macOS).

Turn on Enable Autocorrect to activate the feature.

Turn on Autocorrect Capitalization Errors to fix capitalization problems. Capitalized words do not need to be added separately to the autocorrection list.

In the Language dropdown menu, choose the language you are using.

Choose Add.

In the Add to Autocorrect List dialog box, enter the Misspelled Word and the Correction in their fields.

Choose OK.

Note

To begin applying autocorrections to a particular section or document, choose Edit > Spelling > Autocorrect.

### Use dynamic spelling

Choose Edit > Spelling > Dynamic Spelling.

Words that may be misspelled are shown with underlines in the document.

To open suggested corrections in the context menu, right-click an underlined word on Windows, or hold Control and select it on macOS.

Choose a suggestion to replace the word, or choose Add "<word>" To User Dictionary to accept that spelling.

## Check spelling

Use spell check in Adobe InDesign to locate and correct spelling problems in documents.

InDesign includes manual spell check, dynamic spelling, and autocorrect for catching errors. Spell check can detect misspellings, duplicate words, and capitalization problems, using the dictionary assigned to the language of the text.

Choose Edit > Spelling > Check Spelling.

Choose the range to check from the Search dropdown:

- All Documents: checks every open document.
- Document: checks the selected document.
- Story: checks the selected frame, including overset text and text in other threaded frames.
- To End of Story: checks from the insertion point or selection to the story ending.
- Selection: checks only selected text. This option appears only when text was selected before spell check was opened.

Choose Start.

When a possible error is shown, choose a term from Suggested Corrections or enter the correct term in the Change To field.

Choose Change for this occurrence, Change All for every occurrence, Skip to ignore this one, or Ignore All to ignore every occurrence.

Continue until the spell check is finished.

## Set spelling preferences

Configure spell-check detection options and dynamic spelling underline colors in Adobe InDesign.

Spelling preferences decide which errors InDesign checks for and how Dynamic Spelling marks them. These settings apply to every document and affect both manual checks and dynamic spell-checking according to the assigned dictionary.

Choose Edit > Preferences > Spelling (Windows) or InDesign > Preferences > Spelling (macOS).

Choose the error categories to detect:

- Misspelled Words: terms missing from the language dictionary.
- Repeated Words: duplicate words appearing consecutively.
- Uncapitalized Words: words found in the dictionary only with capitalization.
- Uncapitalized Sentences: words after periods, exclamation points, or question marks.

Turn on Enable Dynamic Spelling to underline possible errors while typing.

Choose underline colors for Misspelled Words, Repeated Words, Uncapitalized Words, and Uncapitalized Sentences.

Choose OK.

## See also

- [Paragraph Styles](uxp-paragraph-styles.md)
