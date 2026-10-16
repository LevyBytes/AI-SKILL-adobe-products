# Batch options

Set source folders and related options to batch process files in Adobe Illustrator.

Use Window > Actions.

Open Batch from the Actions panel menu.

Under Source, choose:

- Folder: processes every file in the folder you specify.
- Data Sets: uses the variable data sets defined in the current file.

Choose a Source in the Batch dialog box.

If Folder is selected as the Source, choose any needed options:

- Override Action "Open" Commands: skips open steps recorded in the action and opens files from the chosen folder instead.
- Include All Subdirectories: includes files and folders inside nested subdirectories of the selected folder.
- Place Object in Same Document: puts all processed files into one open document instead of making separate documents for each file.

If the action includes a save or export command, choose any relevant options.

- Override Action "Save" Commands: writes processed files to a custom destination instead of the location stored in the action.
- Override Action "Export" Commands: exports files to a folder chosen by the user and ignores the originally recorded export paths.

When Source is set to Data Sets, set the filename-generation option used while overriding Save and Export commands:

- File + Number: builds the filename from the original document name with the extension removed, then adds a three-digit number that matches the data set.
- File + Data Set Name: builds the filename from the original document name with the extension removed, then adds an underscore and the data set name.
- Data Set Name: uses the data set name as the generated filename.

Select OK.
