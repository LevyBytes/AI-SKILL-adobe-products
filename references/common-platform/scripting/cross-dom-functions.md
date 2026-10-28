# Cross-DOM functions

The cross-DOM is a compact application programming interface (API) containing functions common to message-enabled applications. The set includes functions for opening files, executing scripts, and printing files. For the function list, see Cross-DOM API reference.

Any script can call a cross-DOM function by placing the target application's namespace specifier before the function name. Namespace specifiers explains that prefixing syntax. Example: from a Photoshop CC script, indesign.open(file) opens a file in Adobe InDesign CC.

Each application's cross-DOM functions are implemented in JavaScript. To inspect an installed implementation, look in the Adobe startup folder for the relevant startup script. As an example, illustrator-14.jsx defines Adobe Illustrator CC's illustrator.open(); 14 is the installed application's version number. See Startup folder locations.

### Example

The Adobe ExtendScript SDK sample code includes these examples specifically for cross-DOM function use:

| Example | Description |
| --- | --- |
| OpenImageInPhotoshop.jsx | Demonstrates sending an image file for Photoshop to open. |
