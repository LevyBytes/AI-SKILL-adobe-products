# Set the Debug Mode

Begin by changing the Adobe preference below so the host application, such as Photoshop or InDesign, does not warn when extensions are unsigned. For the same setup, see the [HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md), especially its [unsigned-extension debugging section](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions):

> Windows: In regedit, open `HKEY_CURRENT_USER`/Software/Adobe/CSXS.8, then create `PlayerDebugMode` as type `string` and set it to `1`.

> Mac: Run this in Terminal: `defaults write com.adobe.CSXS.8 PlayerDebugMode 1`

[Figure: This is what Regedit looks like in Windows 10. You can access it using CMD, too.](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/RegistryEditor.png) _On Windows, Regedit is located in (C:\Windows\regedit). You can access it using CMD, too._

[Figure: Here's what Terminal looks like in MacOS Sierra.](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/Terminal.png)_On macOS, Terminal is located in (Applications > Utilities > Terminal)._
