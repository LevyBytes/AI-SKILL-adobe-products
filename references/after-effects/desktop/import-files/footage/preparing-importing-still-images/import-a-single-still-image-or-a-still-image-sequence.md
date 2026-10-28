# Import a single still image or a still-image sequence

Still image files can come in as separate footage items, or a run of still image files can arrive as a still-image sequence—one footage item where every still serves as a single frame.

For several image files to import as one still-image sequence, they have to share a folder and follow a common numeric or alphabetic filename pattern (Seq1, Seq2, Seq3, for example).

Once you bring in a file that strikes After Effects as belonging to a still-image sequence, it goes ahead by default and pulls in every other file in that folder that seems to be part of the same sequence. The same holds when you pick several files that look sequential: After Effects, by default, brings them in as a sequence. Check the bottom of the Import dialog box to see what After Effects is poised to import. Dragging files and folders into the Project panel is another way to bring in images and sequences.

Note

So After Effects won't pull in files you didn't ask for when you only want a single file, or won't read several files as a sequence, clear the Sequence option in the Import dialog box. After Effects keeps that choice and applies it as the default from then on.

Several sequences from one folder can be imported at once: pick files belonging to different sequences and choose Multiple Sequences at the bottom of the Import dialog box.

While importing a run of still images, the Force alphabetical order option in the Import dialog box lets you bring in a sequence whose numbering skips values (Seq1, Seq2, Seq3, Seq5, for example). Import such a gapped sequence without that option and After Effects flags the missing frames and swaps in placeholders (provided the Report Missing Frames option is on under After Effects > Settings > Import).

After Effects reads the first image in the sequence to decide how the rest of the sequence's images get interpreted.

Should the sequence's image files be a layered type—Adobe Photoshop or Adobe Illustrator documents, say—you get to bring the sequence in either as an ordinary footage item or as a composition, where every layer of every file imports as its own sequence and shows up as its own layer in the Timeline panel.

Note

Rendering a composition that holds a numbered sequence has the output module treat the start frame number as the first frame number. So if rendering kicks off at frame 25, the file is named 00025.
