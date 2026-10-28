# Host-specific APIs

These APIs are for changing or interacting with the document.

**IMPORTANT**

These APIs are also called **Document Object Model (DOM) APIs** and **Object Model View (OMV)**. In this documentation, InDesign APIs, DOM APIs, and OMV are used interchangeably.

Do not confuse them with the HTML DOM that provides your plugin/script UI.

The mounting technique is covered in the [InDesign API](../host-api/dom-version.md) topic.

### Example

Suppose you want to write a script/plugin that:

1. Reads text from a file on the user's system.
2. Adds that text to the document.
3. Applies certain modifications to it.

For Step #1, because the user's file system is involved, use the UXP API's `localFileSystem` or `fs` module.
For Steps #2 and 3, document updates use the DOM APIs.
