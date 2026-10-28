# Edit keyframe values using a spreadsheet or text editor

Keyframe data can be copied out as tab-delimited text and pasted into a spreadsheet application — Microsoft Excel, for instance — or other text-editing software. A spreadsheet then becomes a place to run numerical analysis on that keyframe data or to build and edit keyframe values.

Most properties travel this way, among them the Transform properties such as Position and Opacity, the Material Options properties, and motion trackers.

Note

The motion tracking tools let you track an object's movement within a layer, after which the tracker data can be pasted into a spreadsheet for numerical analysis.

Certain helper utilities — Imagineer Systems mocha for After Effects (mocha-AE) is one — push keyframe data onto the clipboard, ready for you to paste into the right layer back in After Effects.

As tab-delimited text, keyframes can be copied from just one layer at a time.

Inside the Timeline panel, choose keyframes for one or more properties that sit on the same layer. Selecting the property name picks up all of that property's keyframes.

Slide the Current Time Indicator onto the first of the selected keyframes.

Drop a composition marker at the first selected keyframe's time so the last step has a clear paste target for the edited keyframes. Explore more about layer markers and composition markers.

Keep the keyframes selected and choose Edit > Copy.

Paste the keyframe data into the spreadsheet. Taking the first column as A and the first row as 1, cell A1 is where it goes. Column B holds the frame numbers. Columns C, D, and E carry the property values, the count depending on how many dimensions the property has. A Position in a 3D layer fills all three columns, whereas Opacity occupies only column C.

5. Adjust the keyframes' numbers, touching nothing in the sheet apart from the frame numbers and property values.
   Highlight the cells holding your data. A1 should be the top-left cell of that selection, and its bottom row should be the one carrying the text End of Keyframe Data.

6. Pull the data back out of the spreadsheet by copying it.
   Back in After Effects, slide the Current Time Indicator to where the new keyframe data should be pasted — typically the time of that first keyframe you selected and copied when starting this procedure.

Choose Edit > Paste.
