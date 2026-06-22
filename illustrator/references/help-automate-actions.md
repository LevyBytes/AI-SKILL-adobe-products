# Actions Panel Overview, Record Actions, Insert Non Recordable Tasks Into Actions, Insert Stops In Actions ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Actions panel overview; Create new actions; Insert non-recordable tasks into actions; Insert stops in actions; Exclude commands from actions; Specify playback speed; Add commands to actions; Re-record actions; Manage a set of actions; Play actions on a batch of files; Batch options; Merge data; Set up data source files; Import data source files; Variable panel overview; Work with variables; Edit dynamic objects.

## Actions panel overview

The Actions panel in Adobe Illustrator helps streamline work across one file or many files.

An action is an ordered set of tasks that can be replayed on a single file or on multiple files. It can capture menu commands, panel choices, and tool operations. For example, an action might resize an image, add an effect, and save the file in the format you choose.

Actions may also contain:

- Steps that cannot be recorded, such as using a painting tool.
- Modal controls that stop playback long enough for you to type values in a dialog box.

Illustrator provides predefined actions for common tasks. You can run them unchanged, modify them, or build your own actions for your workflow.

Use the Actions panel to record, play, edit, and delete individual actions.

A. Action set B. Action C. Recorded command D. Delete Selection E. Create New Action F. Create New Set G. Play Current Selection H. Begin Recording I. Stop Playing/Recording J. Toggle Dialog On/Off K. Toggle Item On/Off

Use the Actions panel to record, play, edit, and delete individual actions.

Open the Actions panel with Window > Actions.

UI options

Functions

Action set

Keeps multiple actions grouped for organized access and batch processing.

Action

Holds recorded commands in sequence so tasks can be automated through replay.

Recorded command

Shows each separate step captured while an action was recorded.

Delete Selection

Deletes the highlighted panel item, whether it is an action, command, or action set.

Create New Action

Places a new custom action inside the selected action set.

Create New Set

Makes a folder for grouping and organizing related actions.

Play Current Selection

Runs the selected action or command against the active document.

Begin Recording

Begins capturing the steps you perform for a new action.

Stop Playing/Recording

Stops action playback or ends the current recording.

Toggle Dialog On/Off

Enables or disables dialog boxes during playback when user input is needed.

Toggle Item On/Off

Marks whether a particular command belongs to the recorded action sequence.

| --- | --- |

Tip

Use the expand icon when you need to expand or collapse every action in a set or every command in an action.

Select the Actions panel menu to reach more controls for the action set.

To show playable-file actions, choose Button Mode from the Actions panel menu.

To show playable-file actions, choose Button Mode from the Actions panel menu. Note

Individual commands and sets are hidden in Button Mode. In Button Mode, clicking a button runs the entire action, but Illustrator omits any commands you previously excluded.

## Create new actions

Create and record custom actions in Illustrator to automate repeated work and improve workflow speed.

After you create a new action, Illustrator adds the commands and tools you use to that action until recording stops.

Open Window > Actions.

Use Create New Action icon in the Actions panel.

In the New Action dialog box, provide Name, choose an action Set, and then configure:

- Function Key: choose a keyboard shortcut from the dropdown menu; then add Ctrl (Windows) or Command (macOS), together with Shift.
- Color: choose the color shown in Button Mode. Button Mode is available from the Actions panel menu.

Note

On Windows, F1 and Ctrl + F4 or Ctrl + F6 cannot be used as function keys.

When an action uses a shortcut already assigned to a command, the shortcut triggers the action instead of that command.

Configure the new action with its name, set, shortcut key, and Button Mode color.

Configure the new action with its name, set, shortcut key, and Button Mode color.

Choose Record. In the Actions panel, the Begin Recording button turns red.

Tip

While recording the Save As command, leave the file name unchanged. A new name is recorded by Illustrator and reused whenever the action runs. You can still choose another folder before saving if you need a different location without changing the file name.

Run the operations and commands that should become part of the recording.

Select Stop Playing/Recording to end recording.

To continue recording in that same action, choose Start Recording icon from the Actions panel menu.

## Insert non-recordable tasks into actions

Use the Actions panel menu in Adobe Illustrator to add tasks that cannot be recorded directly into actions.

Some action tasks are not directly recordable. Examples include Effects and View menu commands, panel visibility commands, and tasks performed with these tools: Selection, Pen, Paintbrush, Pencil, Gradient, Mesh, Eyedropper, Live Paint Bucket, and Scissors.

If a command or tool name does not appear after you record and perform the task, the Actions panel menu may still let you insert that task with menu commands.

### Insert a non-recordable menu command

Select Window > Actions.

Choose the item in the action after which the task should be inserted.

In the Actions panel, open Actions panel menu icon, and then choose

Insert Menu Item.

Choose Insert Menu Item to add a non-recordable menu command.

Choose Insert Menu Item to add a non-recordable menu command.

Choose the command through its menu, or enter the command name in the text box and use Find.

Select OK.

### Insert a path

Select the path with the Selection tool.

Choose Insert Select Path from the Actions panel menu.

### Insert selection of an object

Choose the object.

Open Window > Attributes.

In the Attributes panel, use the expand icon until every option is shown.

Use Show Note from the Attributes panel menu to display the note field.

Before recording starts, type the object's name in the Attributes panel note field.

Use the Expand icon, then enter the object name in the note field.

Use the Expand icon, then enter the object name in the note field.

Use the Begin Recording icon in the Actions panel.

During action recording, choose Select Object from the Actions panel menu.

In the Set Selection dialog box, type the object's name, and then select OK.

## Insert stops in actions

Add stops in the Actions panel when an action needs to pause playback and show instructions.

A stop can pause an action at a chosen step so a task that cannot be recorded automatically can be completed manually, such as using a painting tool or making a brush stroke. You can also attach a brief message to the stop that reminds the user what to do before continuing.

Select Window > Actions.

In the Actions panel, choose the action name or the existing command where the stop should be inserted.

From the Actions panel menu icon, select Insert Stop.

Tip

A stop can be inserted while recording an action or after the recording is finished.

In the Record Stop dialog box, type a Message in the text box, and then choose OK.

Custom Message text in the Record Stop dialog box controls action pauses.

Custom Message text in the Record Stop dialog box controls action pauses.

To allow the action to keep running without halting at the stop, select Allow Continue.

Select Play Current Selection in the Actions panel to finish the action.

## Exclude commands from actions

Use the Actions panel in Adobe Illustrator to leave particular commands out of recorded actions.

Open Window > Actions to display the Actions panel.

Commands excluded in the Actions panel.

Commands excluded in the Actions panel.

In the Actions panel, expand the action's command list with the control to the left of the action name.

Use one of these methods:

- To leave out one command, clear the check mark next to that command name. Select it again to restore the command.
- To leave out or include every command or action in an action or set, toggle the check mark beside the action or set name.
- To leave out or include every command other than the selected one, use Alt-click (Windows) or Option-click (macOS) on its check mark.

Note

Commands cannot be excluded in Button Mode.

## Specify playback speed

Use Adobe Illustrator playback options when an action needs to run at a preferred speed.

An action can run faster or slower, and pauses can help while debugging the recorded steps.

Choose Playback Options from the Actions panel menu.

In the Performance section, pick one of these speed choices:

- Accelerated: runs the action at normal speed and is the default choice.
- Step By Step: finishes one command, redraws the artwork, and then advances to the next action command.
- Pause For: sets the interval that Illustrator waits between individual commands in the action.

Use the Playback Options dialog box to choose the performance setting for action playback.

Use the Playback Options dialog box to choose the performance setting for action playback. Note

With Accelerated playback, Illustrator may not refresh the display while the action is running. Files can open, change, save, and close without showing on-screen, which lets the action finish sooner. To watch files on-screen as the action runs, choose Step By Step instead.

## Add commands to actions

Add more commands to an existing Adobe Illustrator action through the Actions panel.

Select Window > Actions.

In the Actions panel, choose the action name or the existing command that should receive the new command.

Select the Begin Recording icon, then complete the edits or steps that should be captured.

Use Begin Recording to record each performed step as part of the action.

Use Begin Recording to record each performed step as part of the action.

After finishing, select the Stop Playing/Recording icon. Illustrator stores the new command inside the selected action, or directly beneath the command you selected.

To reposition a command, drag it within the current action or into another action in the Actions panel, then release it when the highlighted insertion line is in the target location.

## Re-record actions

Re-record Illustrator actions when automation steps need updated or replaced behavior.

Select Window > Actions.

Choose an action, then choose Record Again from the Actions panel menu.

Use Record Again in the Actions panel menu when the Illustrator workflow needs new recorded steps.

Use Record Again in the Actions panel menu when the Illustrator workflow needs new recorded steps.

If a modal tool opens, use it to produce a different result and press Enter or Return. To keep the current tool settings, press Enter or Return without changing them.

If a dialog box opens, adjust the settings and select OK to record the new values, or select Cancel to preserve the previous values.

## Manage a set of actions

Manage action sets in Adobe Illustrator to group related actions and keep them easy to find.

### Manage action sets

Action sets let you gather related task actions, save them to disk, and move them to other computers. Illustrator automatically lists newly created actions in the Actions panel, but durable saving requires putting the action into an action set. That protects it from being lost if the Illustrator preferences file, or the Photoshop Actions panel file, is deleted.

### Save a set of actions

Select a set using the Selection tool.

Note

To save just one action, create a new action set first, then move that action into the set.

Choose Save Actions from the Actions panel menu.

Save an action set by choosing Save Actions from the Actions panel menu.

Save an action set by choosing Save Actions from the Actions panel menu.

In the Save Set To panel, enter the set name in the File Name field, choose a location, and select Save.

Tip

The file can be saved in any location. The Actions panel saves a complete set only; it does not save individual actions by themselves.

### Load a set of actions

Choose Load Actions from the Actions panel menu.

Find the action set file, select it, and then select Open.

### Restore actions to the default set

From the Actions panel menu, choose Reset Actions.

To swap the current Actions panel contents for the default set, select OK. To keep the existing actions and add the default set beside them, select Append.

## Play actions on a batch of files

Run actions across a batch of files in Adobe Illustrator to automate repeated document work.

Select Window > Actions.

Choose Actions from the Window menu to open and manage automated Illustrator tasks.

Choose Actions from the Window menu to open and manage automated Illustrator tasks.

Choose Batch from the Actions panel menu.

For Play, choose the action to run.

For Source, choose Folder to run the action on files in a folder, or choose Data Sets to run it on each data set in the current file.

For Destination, define how Illustrator should treat the processed files. Available outcomes include leaving them open without saving changes (None), saving and closing them in their current location (Save and Close), or saving them somewhere else (Folder).

Set how Illustrator should respond to errors during batch processing. When Log Errors to File is selected, select Save As and give the error file a name.

Select OK.

Tip

For batch processing with several actions, make a new action and record the Batch command for every action that should run. The same approach can process multiple folders in one batch. To batch-process several folders, put aliases to the other target folders inside one folder.

## Batch options

Set source folders and related options to batch process files in Adobe Illustrator.

Use Window > Actions.

Open Batch from the Actions panel menu.

Under Source, choose:

- Folder: processes every file in the folder you specify.
- Data Sets: uses the variable data sets defined in the current file.

Choose a Source in the Batch dialog box.

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

## Merge data

Merge data in Adobe Illustrator when designs need efficient dynamic personalization.

### Quick steps for merging data

Create an Illustrator document that will serve as the template.

Prepare the source data file in CSV or XML format.

Select Window > Variables, then use the Variables panel to import a data source file. In Illustrator, choose Import from the Variables panel to bring in the source file.

In Illustrator, choose Import from the Variables panel to bring in the source file.

Bind a variable to an object in the template.

Preview the document with each data set before exporting all files.

Use Window > Actions when the data must be exported as a batch of files through the Actions panel.

### Save a template for data merge

Defining variables in an Illustrator document turns that file into a data merge template. The template can be saved in SVG format for use by other Adobe products, including Adobe Graphics Server. For instance, Adobe Graphics Server developers can wire the SVG variables straight into database-backed workflows or different data feeds.

Choose File > Save As to start saving the template.

When the save window appears, choose the Save on your computer option before continuing.

Enter the filename, choose SVG for the file format, then select Save to continue.

When the SVG Options dialog box appears, select More Options, then select Include Adobe Graphics Server Data. This option stores the information required for variable substitution inside the SVG file.

Select OK.

## Set up data source files

Set up data source files in Adobe Illustrator to streamline automated design personalization.

### Prepare a data source file

Save data source files in comma-delimited (.csv) or Extensible Markup Language (.xml) format.

### Set up your CSV source files

In a comma-delimited (.csv) file, paragraph breaks separate records, while commas or tabs separate fields. A data source file may also contain text or disk paths that point to images. Set up the CSV this way before import so Illustrator can identify each variable type.

Open your spreadsheet.

Enter the data field name in the spreadsheet's first row. Then use these conventions:

- Begin the data field name with an "at" symbol (@) when the field inserts text or paths to image files. The @ symbol is needed only on the first line; later lines should contain the image paths.
- Prefix graph fields with a "percentage" symbol (%) and visibility fields with a "hashtag" symbol (#).
- To control whether an object is visible, enter true or false for each data field.

Note

Spreadsheet data field names should not include blank spaces. For example, use Company_Name as the data field, not the spaced field label Company Name instead.

(Windows) Example of image and graph references in the data source file

Name

Age

@Photos

%Graphs

#Visibility

Bill Tucker

36

C:\Photos\BillTucker.jpg

C:\Photos\BillTucker.csv

True

Dat Nguyen

53

C:\MyDocuments\dat.jpg

C:\MyDocuments\dat.csv

True

Maria Ruiz

26

C:\Photos\Ruiz.jpg

C:\Photos\Ruiz.csv

False

| --- | --- | --- | --- | --- |

(macOS) Example of image and graph references in the data source file

Name

Age

@Photos

%Graphs

#Visibility

Bill Tucker

36

/Users/photos/BillTucker.jpg

/Users/photos/BillTucker.csv

True

Dat Nguyen

53

/Users/family/photos/dat.jpg

/Users/family/photos/dat.csv

True

Maria Ruiz

26

/Users/alpha/photos/Ruiz.jpg

/Users/alpha/photos/Ruiz.csv

False

| --- | --- | --- | --- | --- |

Enter your data into the spreadsheet.

Do one of the following:

- Save spreadsheets created using the latest version of Microsoft Excel (2016 release) to the following file formats:
- CSV (Comma-delimited) (\*.csv)
- CSV (MS-DOS) (\*.csv)
- Save spreadsheets created using Apple Numbers to CSV format with Unicode (UTF-8) encoding.

Note

Illustrator currently imports CSV files exported in the formats listed above. Other CSV formats, including Mac Comma Separated (.csv), are not supported for data merge.

### Prepare an XML file

In your document, define a variable.

In the Variables panel, select the Data Set button.

After creating the number of data sets you need, save them as XML by choosing Save Variable Library from the Variables panel menu. Enter the filename and location, then select Save.

Next, use a text editing application such as Notepad++ (Windows) or TextWrangler (macOS) to open the XML file and add the data sets.

Choose Load Variable Library from the Variables panel menu to import the XML file into Illustrator. Select the XML file and select Open.

## Import data source files

Import CSV or XML data source files through the Variables panel and manage data sets in Adobe Illustrator.

The Variables panel can import a data source and bind variables to the data you choose. Each document can have only one selected data source file.

Open Window > Variables.

Select Import in the Variables panel.

In the Load Variable Library dialog box, pick a CSV or XML data source file and select Open.

Later, use the Data Set dropdown menu to choose the data set that should be edited, renamed, or deleted.

- To move between data sets, use the Variables panel's Data Set dropdown to choose the next entry.

Tip

Use Previous Data Set or Next Data Set to toggle through data sets.

- To apply the artboard data to the current data set, use Update Data Set in the Variables panel menu.

Use the panel menu's Update Data Set command to apply the data currently on the artboard.

Use the panel menu's Update Data Set command to apply the data currently on the artboard.

- To rename a data set, change the Data Set text box value, then press Enter or return.
- For deletion, choose Delete Data Set from the Variables panel menu.

Note

CSV (UTF-8 Comma Delimited) files that contain double-byte characters from Excel cannot be imported through the Variables panel. For a successful import, reopen the file in a text editor and resave it as a CSV using UTF-8 encoding.

## Variable panel overview

Use CSV or XML data in the Variables panel to build multiple artwork variations from one design.

Inside the Variables panel, combine CSV or XML file data with an Illustrator document to produce several artwork variations. For example, event badge names can change by participant, or images can vary across web banners and postcards, without rebuilding the artwork.

Illustrator exposes data merge features in the Variables panel (Window > Variables). The panel lists every variable's name and type, and the Objects column shows the linked object's Layers panel name. Select the column headers to sort by variable name, object name, or variable type.

A. Sort by Type set
Panel item B. Capture Data Set
Panel item C. Switch between data sets
Panel item D. Panel menu
Panel item E. Name of bound object
Panel item F. Variable name
Panel item G. Variable type
Panel item H. Delete variables
Panel item I. Create variables
Panel item J. Unbind variables
Panel item K. Make visibility dynamic
Panel item L. Make object dynamic
Panel item M. Lock variables

## Work with variables

Work with variables in Illustrator to make dynamic designs that respond to different text or image data sets.

Through the Variables panel, you can rename a variable, change its type, unbind it, or lock it.

Unbinding removes the connection between a variable and the object it controls. Locking variables stops variable creation, variable deletion, and edits to variable options. Even with variables locked, objects can still be bound to or unbound from those variables.

### Define variables

Open Window > Variables.

Choose an object.

In the Variables panel, choose the variable that should be linked to that object.

Use Make Object Dynamic to create the binding between the object and the variable.

### Create a variable without binding it to an object

Open Window > Variables.

In the Variables panel, use New Variable.

To attach an object to the variable, choose both the object and the variable, then use Make Visibility Dynamic or Make Object Dynamic.

In the Variables panel, use Make Visibility Dynamic when data should determine whether the object is visible.

Use Make Visibility Dynamic in the Variables panel for data-driven object visibility. Note

Variable names cannot include Surrogate Pair or 4-byte characters. When those characters are entered in a name, Illustrator shows an error message.

## Edit dynamic objects

In Adobe Illustrator, dynamic-object edits make design updates faster and easier to reuse.

### Identifying dynamic objects using XML IDs

Dynamic object names shown in the Variables panel match the names listed in the Layers panel. When an SVG template will be used with other Adobe products, make those names valid XML names. For example, a valid XML name starts with a letter, underscore, or colon, and spaces are not allowed.

Every dynamic object you create receives an XML ID from Illustrator that already satisfies XML rules.

Open Edit > Preferences > Units (Windows) or Illustrator > Settings > Units (mac OS).

Enable XML ID. In Preferences > Units, XML ID lets you view, change, and export object names as XML IDs.

For viewing, editing, and exporting object names as XML IDs, turn on XML ID under Units in the Preferences menu.

To change a variable's data, edit the object bound to it. With a Visibility variable, for example, adjust the object's visibility state in the Layers panel. Editing dynamic objects allows one template to hold multiple data sets.

Open Window > Variable.

On the artboard, choose a dynamic object, or use one of these methods to select one automatically:

- In the Variables panel, Alt-click (Windows) or option-click (macOS) a variable.
- After choosing a variable there, use Select Bound Object from the Variables panel menu.
- From the Variables panel menu, use Select All Bound Objects to choose every dynamic object.

Change the object-bound data in the relevant way:

- Change the text directly on the artboard.
- For linked files, swap the image through the Links panel or File > Place.
- Update graph information in the Graph Data dialog.
- For any object using dynamic visibility, set the object's visibility state in the Layers panel.
