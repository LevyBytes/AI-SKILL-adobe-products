# Portability issues

For applications expected to run on several platforms, prefer relative path names or build paths from the home directory. If neither approach works, use Mac OS X and UNIX aliases, and keep the files on a machine remote from Windows so UNC names can be used.

For example, suppose the UNIX machine myServer stores the data. If you create an alias share in myServer's root directory and create a Windows-accessible share named share that points to the same data location, //myServer/share/file works on all three platforms.
