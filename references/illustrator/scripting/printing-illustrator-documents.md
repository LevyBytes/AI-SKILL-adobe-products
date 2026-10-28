# Printing Illustrator documents

The print options scripting feature lets scripts record and automate portions of an Illustrator print workflow. Through scripting, Illustrator exposes printing capabilities that may not appear in the application UI.

Because of limitations in the current printing architecture, Illustrator supports no more than one active print session.

The document object's print command or method accepts one optional parameter, used to supply a print options object.

A print options object defines settings such as PPD, PostScript options, paper options, and color-management options. It also includes a print preset property for selecting a preset that describes the print job.

When setting properties on a print options object, use the application object's read-only "list" properties to discover available printers, PPDs, print presets, and similar items. Examples include printer list, PPD file list, and print presets list.
