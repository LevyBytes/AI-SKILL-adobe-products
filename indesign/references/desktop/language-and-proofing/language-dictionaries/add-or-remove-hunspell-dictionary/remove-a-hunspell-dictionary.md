# Remove a Hunspell dictionary

Using the table above, open the Dictionaries folder path for your platform and InDesign version.

Find the folder whose name matches the ISO language code you plan to remove (for example, en_US).

Remove the three dictionary files stored there: the AFF file, the spelling DIC file, and the hyphenation DIC file.

Return to the Info.plist location shown in the table above.

Open Info.plist in a text editor, then find the SpellingService, UserDictionaryService, and HyphenationService elements.

Delete the element for your ISO language code from each of those three service elements.

Save Info.plist, and then exit the text editor.

Relaunch InDesign.
