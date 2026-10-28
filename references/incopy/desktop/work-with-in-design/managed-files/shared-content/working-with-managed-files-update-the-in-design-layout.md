# Working with managed files - Update the InDesign layout

InDesign users can change layout, such as the size or position of a story's text frames, and save those edits while InCopy users are editing text in the same frames. In a shared-server workflow, notification behavior for layout changes depends on whether InCopy users opened an assignment file or checked out separate content files and also opened the linked InDesign file.

Consider these cases:

If an InDesign user changes frame layout inside an assignment, the assignment must be updated before InCopy users can see the design changes. Saving the document does not make InDesign update assignment files automatically.

For an assignment kept on a shared server, once the InDesign user updates it, the InCopy Assignments panel places the Out Of Date icon  beside the assignment. To view the current layout, the InCopy user must update the design.

For exported content outside any assignment, when an InDesign user changes the layout, the Assignments panel marks the InDesign document name with the Out Of Date icon, and the title bar reports that the layout is out-of-date. InCopy users can refresh the active InDesign document to bring in the newest layout and style changes.

Layout updates in InCopy help with copyfitting because Layout and Galley views show the latest appearance and line breaks.

Use one of these methods:

When an assignment file is open and the Assignments panel displays the Out Of Date icon  beside the assignment name, click the Update Design button , or choose File > Update Design. This command cannot be undone.

When you are not using assignment files and more than one InDesign document is open, choose the document that should become active, then choose File > Update Design.
