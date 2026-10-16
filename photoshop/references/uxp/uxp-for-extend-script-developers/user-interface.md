# User interface

Some ExtendScripts have little or no UI: the user chooses a script from the File->Scripts menu, then it runs without a visible interface. If an ExtendScript _does_ need UI, simple JavaScript `alert()`, `confirm()`, and `prompt()` calls are typical. For complex dialogs, the full-featured but involved [ScriptUI](https://creativepro.com/files/kahrel/indesign/scriptui.html) is another option. Once you move from ExtendScript into CEP, panels become more available.

In UXP, by contrast, UI can be as simple or complex as needed. HTML and CSS produce the visual layer, while JavaScript handles the underlying behavior, such as "what should I do when this button is clicked".
