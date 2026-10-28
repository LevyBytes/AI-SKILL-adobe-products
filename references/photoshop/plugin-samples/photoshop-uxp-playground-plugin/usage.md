# Usage

[Figure: Screenshot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/ui-playground/_assets/screenshot.png)

Two panels are included. Use "Edit HTML Playground" to change the HTML, then use "Run HTML Playground" to view the output.

The editor can switch among HTML, Styles, and JS modes from the dropdown in the panel's upper-left corner. In JavaScript mode, turn on "auto-run" or press the "Play" button to execute the snippet. Errors appear below the editor.

> **Note**
>
> JavaScript runs inside a function that receives the preview panel root node, named `rootNode`. That lets you keep your JS scoped to the preview panel.

Use the two buttons at the plugin's top right to copy editor text to the clipboard or paste clipboard text into the editor. Use the "paste" button carefully because it **replaces** the full editor contents.

"Run HTML Playground" displays a live preview of the HTML in a separate panel. Keeping editor and preview open together lets you watch edits update while you type.
