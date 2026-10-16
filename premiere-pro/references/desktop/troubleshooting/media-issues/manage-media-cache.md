# Manage media cache

Clearing old or unused media cache files can help keep performance steady.

Removing outdated or unused media cache files is one way to maintain good performance. When Premiere imports video and audio, it creates processed versions that can be accessed quickly for faster operation. These media cache files are saved in the Media Cache Files folder. A separate database folder stores links to each cache file; those media cache database files are located in the Media Cache folder.

Premiere uses the Media Cache to store accelerator files such as peak files (.pek) and conformed audio (.cfa) files.

Regularly clearing old or unused media cache files supports optimal performance. Deleted cache files are rebuilt whenever source media needs them. Clearing the media cache on a routine basis is a recommended practice for troubleshooting and for keeping Premiere performance at its best.

For best results, put your Media Cache on a fast SSD or NVME drive, preferably a dedicated one. Change media cache file locations by clicking Browse and selecting the desired folder. If needed, you can store the Media Cache on the same drive as your media.
