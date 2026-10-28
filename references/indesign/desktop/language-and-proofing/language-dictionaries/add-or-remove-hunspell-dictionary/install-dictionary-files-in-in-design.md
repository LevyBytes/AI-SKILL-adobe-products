# Install dictionary files in InDesign

In the platform-specific Dictionaries folder shown in the table, create a folder named for your ISO language code format (for example, en_US).

Place the three renamed dictionary files inside that new language folder.

Go to the platform-specific Info.plist location listed in the table.

Open Info.plist with a text editor, then find the SpellingService, UserDictionaryService, and HyphenationService elements.

Within each of those three service elements, insert a new element for your ISO language code (for example, en_US).

Save Info.plist, and then exit the text editor.

Relaunch InDesign.
