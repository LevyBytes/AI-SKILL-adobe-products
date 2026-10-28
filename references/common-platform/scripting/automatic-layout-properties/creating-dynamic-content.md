# Creating dynamic content

Many dialogs must show different information depending on an option the user chooses inside the dialog. The stack orientation can present multiple views in one dialog region.

With stack orientation, a container centers child elements in an area large enough for the widest child and tall enough for the tallest child. By arranging groups or panels in that stack, a script can show and hide them in different combinations, displaying different controls in the same space according to other dialog choices.

For example, the dialog responds when the user chooses an item in the DropDownList.

This script constructs that dialog. It folds the earlier "Personal Info" and "Work Info" panels into one Panel containing two Groups arranged as a stack. A DropDownList lets the user choose which information set to display. The list's onChange function hides the nonselected group and reveals the selected one.

The complete program is in the [upstream source](https://raw.githubusercontent.com/docsforadobe/javascript-tools-guide/ac6839049e17f4652d301e7d28f8f0d3d5fbb66a/docs/user-interface-tools/automatic-layout.md).
