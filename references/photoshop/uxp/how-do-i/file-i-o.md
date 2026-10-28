# File I/O

Files and folders in UXP for Photoshop can live in four different places, plus a separate `Secure Storage` facility:

- Your plugin's home directory. The plugin can read these files but cannot modify them, so this location fits localizations, static data files, and similar unchanging assets.

- Your plugin's data directory. UXP manages this directory and grants read/write access only to your plugin. Files stored here remain through application restarts and OS reboots.

- Your plugin's temp directory. Put session-specific data here when persistence is not guaranteed. Do not depend on anything in this directory being present after an application restart.

- The host OS filesystem. The plugin must request access to specific computer files or folders from the user, usually by displaying a file or folder picker. When the user chooses a file and does not cancel, the plugin receives a `token` for that file or folder.

- UXP also provides `Secure Storage`. This UXP-managed facility stores encrypted key/value pairs. It fits login information and other sensitive data that needs secure storage; it is not a general file-access area, though it can be appropriate for small amounts of data.
