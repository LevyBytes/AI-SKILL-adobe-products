# Import Avid Media Composer project files

Use an AAF file when moving an Avid Media Composer export into Premiere.

Premiere cannot open native Avid Media Composer (.avf) project files. Export an AAF file from Avid Media Composer first, and then import that AAF file into Premiere.

Open an existing Premiere project or make a new one.

Go to the Project panel and choose File > Import.

Find the AAF file that was exported earlier, then select Import.

Premiere adds a sequence named for the AAF file to the Project panel and creates a bin containing the media used by that sequence.

When translation problems occur, Premiere places an FCP Translation Results file in the main bin.

Open the sequence and scrub through it to verify that the edit behaves as expected.

To inspect the report, double-click FCP Translation Results in the bin.

On Mac, the report opens in TextEdit; on Windows devices, it opens in Notepad. The report explains how Premiere handled effects, titles, or transitions that could not be translated.
