# The two-pass search logic

When historical paths do not find the media, Premiere runs an automated search using the project file location as the starting point.

Two-pass search process:

- Pass 1: Searches the folder that contains the project file, along with its subfolders.
- Pass 2: Moves one level upward and searches the full containing folder, including adjacent folders.

This search pattern handles typical project layouts, whether media sits beside the project file or inside organized subfolders.

When both passes fail, Premiere displays the Link Media dialog box so relinking can be done manually.

If media is not found inside the project folder, Premiere widens the search to the parent folder, here 'Sample project,' which can find files kept in neighboring folders such as 02_Media.

When media is missing from the project folder, Premiere expands to the parent folder, here 'Sample project,' allowing adjacent folders such as 02_Media to be searched.
