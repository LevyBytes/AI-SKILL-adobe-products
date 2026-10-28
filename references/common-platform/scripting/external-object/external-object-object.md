# ExternalObject object

The library name is supplied to the constructor. The constructor looks for that library by using paths listed in the static property ExternalObject.searchFolders.

If loading a library as an ExternalObject is failing, set ExternalObject.log to true and then call ExternalObject.search('lib:myLibrary'). The search is performed by that function, and the log shows the checked paths in the ExtendScript Toolkit Console.

Before the library is loaded, the current folder is temporarily changed to the location of the executable file that was found.

- In Mac OS, the current directory becomes the library's bundle or framework folder.
- In Windows and UNIX, the current directory becomes the folder containing the library.
