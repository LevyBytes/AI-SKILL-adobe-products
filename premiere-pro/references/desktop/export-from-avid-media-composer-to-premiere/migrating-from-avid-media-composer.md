# Migrating from Avid Media Composer

Export the AAF version of the Avid sequence.

Note

Prepare the Avid Media Composer sequence before creating the AAF that will move into Premiere. Clean up the sequence tracks ahead of export, and place each asset type on its own track.

Exporting a Reference Movie is also useful because it can later help identify and rebuild effects that do not carry over.

Open the project in Avid Media Composer.

In the project bin, choose the sequence for export.

Choose File > Export.

In the Export Settings dialog box, choose AAF Edit Protocol. Also choose Include All Video / Data Tracks in Sequence, and then choose Include All Audio Tracks in Sequence.

To restrict the AAF to the portion between In/Out points, enable Use Marks.

Open the Video / Data Details tab, and then set Link to (Don't Export) Media.

Open the Audio Details tab, and then set Link to (Don't Export) Media. You can also enable Include Rendered Audio Effects.

Save the AAF file.
