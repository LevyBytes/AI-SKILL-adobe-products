# Managing the media cache database

Search Last updated on Mar 27, 2026

The media cache database stores links to cached audio and video files imported into Adobe Media Encoder.

For some imported video and audio formats, Adobe Media Encoder prepares and caches accessible versions of the media. Each imported audio file is conformed into a new .cfa file, while MPEG files are indexed into a new .mpgindex file.

Note

On first import, the application may pause while it processes the media and adds it to the cache.

Links for cached media files are maintained in a database. Adobe Media Encoder, Adobe Premiere, and After Effects share this media cache database, allowing those applications to read and write against the same cached-file set. Changing the database location from any one of these applications updates the location for the others as well. Each application may use a separate cache folder, while one shared database tracks them all.

Media cache database and cached-file locations can be changed from Edit>Preferences>Media>Media Cache Files. For details, see Preferences.)

To move either the media cache database or the media cache itself, use one of the Browse buttons in the Media preferences.

To delete conformed and indexed files from the cache along with their database entries, choose Clean. This command removes only files linked to items whose source file is no longer available.

Note

Before choosing the Clean button, verify that any storage devices containing source media currently in use are connected to the computer. If footage is judged missing because the storage device that contains it is not connected, the related media cache files are removed. After that, the footage must be conformed or indexed again the next time you try to use it.

Note

Using the Clean button to clean the database and cache does not delete files associated with footage items whose source files remain available. To manually delete conformed files and index files, go to the media cache folder and remove the files there. The media cache folder location appears in the Media preferences. If the displayed path is shortened, choose the Browse button to show the full path.
