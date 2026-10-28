# Create Watched Folders in Acrobat Pro

How to have Acrobat Distiller turn PostScript files into PDFs on its own through Watched Folders.

Set a PostScript file down in a Watched folder and the sequence runs itself: Acrobat Distiller spots the file, converts it to a PDF, and relocates that PDF to an output folder. Each such folder accepts its own security settings, conversion parameters, and file-handling choices, giving you an automated yet tailorable route from PostScript to PDF.

Within Acrobat Distiller, go to Settings > Watched Folders.

Choose Add Folder, then point to the folder you want to watch.

Inside that target folder, Distiller sets up an In folder alongside an Out folder.

When a folder needs its own security rules, select it and choose Edit Security.

Dial in the security preferences you want and choose OK.

Note

Should you want to undo a folder's security preference, select that folder and choose Clear Security.

Adobe PDF conversion settings for a watch folder come from selecting the folder and then choosing Edit Settings.

Adjust whatever you need in the Adobe PDF Settings dialog box and choose OK. Your choices are written out as a folder.joboptions file inside the watched folder.

Already have Adobe PDF Settings saved? Select the folder, choose Load Settings, pick the setting you want, and choose Load.

To stop watching a folder, select it and choose Remove folder.

Note

Pulling a watched folder from the list leaves the in and out folders and the folder.joboptions file untouched on your system; clear them out yourself if you wish.

Choose OK.
