# Importing and interpreting footage items - Edit interpretation rules for all items of a specific kind

Holding the rules for how After Effects interprets footage items is the interpretation rules file. Customizing it isn't something you'll usually need to do. As a footage item comes in, After Effects hunts for a match within the interpretation rules file and from that works out the footage item's interpretation settings. After import, the Interpret Footage dialog box lets you override those settings.

Generally the interpretation rules file goes by the name interpretation rules.txt; some After Effects updates, though, drop in a fresh interpretation rules file whose name flags the new version number, and the updated application turns to that new file. If you'd edited the old interpretation rules file, you might have to carry those edits over to the new one as well.

Where the file sits in current After Effects:

- Windows: &lt;drive&gt;\Users&lt;username&gt;\AppData\Roaming\Adobe\After Effects/&lt;version&gt;
- macOS: &lt;drive&gt;/Users/&lt;username&gt;/Library/Preferences/Adobe/After Effects/&lt;version&gt;

Where it sat in earlier After Effects releases:

- Windows: &lt;drive&gt;\Users&lt;username&gt;\AppData\Roaming\Adobe\After Effects&lt;version&gt;
- macOS: &lt;drive&gt;/Users/&lt;username&gt;/Library/Preferences/Adobe/After Effects/&lt;version&gt;

1. Quit After Effects.
2. As a precaution, make a backup copy of the interpretation rules file. By default, this file is in the same location as the After Effects application.
3. Open the interpretation rules file in a text editor.
   For each footage type or codec you'll have to supply a four-character file-type code. Unsure which code a given file or codec uses? Hold Alt (Windows) or Option (macOS) while selecting that file in the Project panel. Up at the Project panel's top, the file description's bottom line then shows the file-type code, along with a codec code if the file happens to be compressed.

4. Save interpretation rules.txt.
