# Getting a "not properly signed" alert

A successful change from [Set the Debug Mode section](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#set-the-debug-mode) does not show any visible confirmation. If the setting is wrong, the host displays this unsigned-extension error:

[Figure: _The “Your Panel Name” extension could not be loaded because it was not properly signed._](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/UnsignedError.png)**The “Your Panel Name” extension could not be loaded because it was not properly signed.**

Extension signing can wait until the extension is ready for users; see the Cookbook's [extension-signing notes](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#signing-extensions) when that time comes.

If debug mode is already set and the same error still appears, [quit the **cfprefsd** process](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#special-notes-for-mac-109-and-higher). Another useful reference is an Adobe forums [debug-mode troubleshooting thread](https://forums.adobe.com/thread/2444749).
