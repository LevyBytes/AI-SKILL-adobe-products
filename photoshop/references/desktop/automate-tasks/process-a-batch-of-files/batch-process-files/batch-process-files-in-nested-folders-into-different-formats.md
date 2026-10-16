# Batch-process files in nested folders into different formats

To sharpen, resize, and save JPEGs back into their original folders, create an action for those steps first. Then run Batch with Include All Subfolders selected, Destination set to Save and Close, and Override Action “Save As” Commands selected.

Continue through Batch setup until you reach Destination.

Set Destination to Save and Close.

Use Override Action “Save As” Commands for these effects:

- Name output from the current document rather than from a filename captured in the Save As step.
- Save files in their original folders rather than the folder captured in the Save As step.

Confirm that the action contains a Save As step; otherwise Photoshop will not save files automatically.

Select OK to run the batch process.
