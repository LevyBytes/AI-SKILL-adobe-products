# Documents with many (6+) artboards can freeze or lag when artboards are moved

Open

| App version | Adobe Photoshop 27.7 |
| --- | --- |
| Impacted device types | macOS, Windows |
| Last updated |  |

Summary

Summary

In Artboard documents containing six or more Artboards, moving the Artboards can briefly freeze the application.

Workaround

Set explicit canvas limits and turn off Auto-size Canvas.

1. Create two shape layers, i.e., rectangles, outside the artboards to mark the outer canvas boundaries in the work area.
2. In the Artboard tool options gear menu, disable Auto-size Canvas.

Remove the canvas-boundary shape layers before export, then save the document.
