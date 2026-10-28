# Delete media cache files manually to improve Premiere performance.

Exit Premiere.

After Premiere is closed, go to these folder locations and delete the files yourself.

- macOS: /Users/&lt;username&gt;/Library/Application Support/Adobe/Common
- Windows: \Users&lt;username&gt;\AppData\Roaming\Adobe\Common

After deleting the files, empty the trash.

Note

When troubleshooting errors, closing Premiere first and deleting files manually also removes the current media cache files, which is the intended result.

Once the files are removed, additional hard drive space should be available. For completed older projects, deleting these files is a useful way to recover storage and keep the computer's hard drive cleaner.

Opening a current project after all cache files are deleted includes a delay because Premiere has to rebuild them. For large projects, allow enough time for media cache files to be generated again.

Tip

For best results, place your Media Cache on a fast SSD or NVME drive, preferably one dedicated to cache storage. To relocate media cache files, click Browse and choose the desired folder location. If needed, the Media Cache can remain on the same drive as your media.
