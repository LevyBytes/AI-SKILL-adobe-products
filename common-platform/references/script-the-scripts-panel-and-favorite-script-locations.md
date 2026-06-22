# The Scripts Panel And Favorite Script Locations, The Script Editor, Coding Aids, Searching In Text ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: The Scripts panel and favorite script locations; The Script Editor; Coding aids; Searching in text; Syntax marking; Debugging in the Toolkit; Selecting a debugging target; The JavaScript console; Controlling code execution; Visual indication of execution states; Setting breakpoints; Evaluation in help tips.

## The Scripts panel and favorite script locations

### Selecting Scripts — The Scripts panel and favorite script locations

The Scripts panel lists scripts that can be debugged. Entries can be JS or JSX files, and in some applications they can also be HTML files that include embedded scripts.

To see scripts exposed by a specific target application, choose that application from the leftmost drop-down list. The right-hand list then provides the JavaScript engines available for that application.

After you choose a target application, the Toolkit can prompt to open it if it is not already running. It then shows the scripts that the application publishes. Selecting a script in this panel opens and loads it into a new document window, where you can edit, save, or run it in the target application.

If the target is Favorites, the right-hand list contains the default favorite script location plus any additional favorite locations already defined. The flyout menu lets you build your own set of favorite script locations.

Those favorite script locations are also exposed to the Find and Replace dialog; see Searching in text.

The Favorites page of the Preferences dialog (Edit > Preferences) also lets you view and configure favorite locations. Use Add, Modify, and Remove to change the folder list.

### Adobe Scripts folder

During first launch, the Toolkit creates an Adobe Scripts folder inside the user's Documents folder. In the Scripts panel, Default shows what is inside that folder.

For a double-clicked JSX file, the Toolkit usually works as an invisible security filter. Before the file actually launches, a security dialog asks whether running the script is acceptable. The user's Documents/Adobe Scripts folder is treated by the Toolkit as trusted, so double-clicking a JSX file from that folder does not show the security alert.

## The Script Editor

The Script Editor provides a complete JavaScript source-code editing environment. Any number of Script Editor document windows can be open, with each window showing one Unicode source code document.

Editing and navigation capabilities in the Script Editor cover both general text work and JavaScript-specific code work. Features include:

- Text navigation aids and options for any text file, along with JavaScript-specific code navigation; see Navigation aids.
- Standard editing and coding support, including undo-redo, plus JavaScript-focused support such as syntax checking; see Coding aids.
- A full text-search facility that can search across multiple files; see Searching in text.
- Syntax marking, using color and font styles for selected syntactic structures, for JavaScript and many other computer languages. You can configure the marking styles; see Syntax marking.

The Script Editor can be configured to show text in ways that make code structure easier to follow or file navigation easier. It also includes mouse and keyboard shortcuts for particular cursor-movement and text-selection actions.

### View options

Several Script Editor view settings help with code navigation, including these:

- Automatic line numbering. View > Line Numbers switches numbering on or off.
- A collapsible tree view for code structure, where logical sections such as comments or function definitions can be opened or closed. View > Code Collapse switches the tree view on or off.
- A line-wrapping mode that removes the horizontal scroll bar and wraps lines at word breaks. View > Word Wrap switches line-wrapping on or off.
- Syntax marking applies color and font styles to emphasize particular syntactic structures.
- View > Syntax Highlighting lets you disable syntax marking or choose a language to mark, including JavaScript and many other computer languages. You can configure the marking styles; see Syntax marking.

Default values for these states can be set from the Documents page of the Preferences dialog (Edit > Preferences).

### Function finders

Lists of functions defined in the active document are available both in the Functions panel and in the flyout menu at the upper right of the document window. Choosing a function from either list jumps the document straight to that function definition.

### Bookmarks

Navigation points in text are managed from Edit > Bookmarks. The default shortcut key for bookmark commands is the F2 function key:

- Use CTRL-F2 to toggle the bookmark on the current line.
- Use F2 to move to the next bookmark, or SHIFT-F2 to move to the previous bookmark. Bookmark navigation wraps, so the first bookmark comes after the last.
- Use SHIFT-CTRL-F2 to remove every bookmark from the current text.

Navigating to a bookmark inside collapsed code automatically expands that section.

Bookmarks appear as a blue arrow pointing right at the left side of the line, placed to the right of the line number when numbering is visible. A breakpoint dot uses the same location (see Setting breakpoints). When one line contains both a breakpoint and a bookmark, the blue arrow appears over the breakpoint dot.

In the document window, the insertion point or a text selection can be moved with the mouse or with special keyboard shortcuts. Click the left mouse button in the document window to place the caret.

For mouse selection, click unselected text and drag over the desired range. Dragging beyond the top or bottom of the visible text scrolls while selection continues. A double-click selects a word, and a triple-click selects a line.

To start dragging selected text, click within the selected block and drag it to the destination. Text can be dragged between document windows. Text can also be dragged from the Toolkit into another application that accepts dragged text, or from another application into a Toolkit document window.

Dropping files from the Explorer or the Finder onto the Toolkit opens them in a document window.

Keyboard shortcuts for every menu command can be assigned or changed on the Keyboard Shortcuts page in the Preferences dialog (Edit > Preferences).

Beyond ordinary keyboard input and menu-command shortcuts, the document window recognizes the following special movement keys. Holding SHIFT while using a movement key selects text as well.

| Shortcut | Behaviour |
| --- | --- |
| ENTER | Insert a Line Feed character |
| Backspace | Delete character to the left |
| DELETE | Delete character to the right |
| Left arrow | Move insertion point left one character |
| Right arrow | Move insertion point right one character |
| Up arrow | Move insertion point up one line; stay in column if possible |
| Down arrow | Move insertion point down one line; stay in column if possible |
| Page up | Move insertion point one page up |
| Page down | Move insertion point one page down |
| CTRL + Up arrow | Scroll up one line without moving the insertion point |
| CTRL + Down arrow | Scroll down one line without moving the insertion point |
| CTRL + Page up | Scroll one page up without moving the insertion point |
| CTRL + page down | Scroll one page down without moving the insertion point |
| CTRL + Left arrow | Move insertion point one word to the left |
| CTRL + right arrow | Move insertion point one word to the right |
| HOME | Move insertion point to start of line |
| END | Move insertion point to end of line |
| CTRL + HOME | Move insertion point to start of text |

Extended keyboard entry through IME (Windows) or TMS (Mac OS) is supported by the Script Editor. This matters especially when working with Far Eastern characters.

## Coding aids

### The Script Editor — Coding aids

For navigating and maintaining the syntactic structure of JavaScript code, the Script Editor includes several visual and editing aids.

### Code completion

When the cursor is in a document and you begin typing, the Toolkit presents completion candidates drawn from keywords, global functions, functions in the current document, and functions in the object-model dictionary currently chosen from the flyout menu.

The object-model dictionary used for completion is selected from the flyout menu in the upper right corner of the document window. Which dictionaries are available depends on the applications that are loaded. See Inspecting object models.

### Brace matching

The Edit menu includes two brace-matching selection commands. They work when the cursor sits beside one side of a brace pair:

- Edit > Select to Brace: Jumps to the paired bracing without selecting any text. CTRL 0 (zero) is the default keyboard shortcut.
- Edit > Select Including Brace: Selects the contents enclosed by the brace pair. SHIFT CTRL 0 (zero) is the default keyboard shortcut.

Parentheses, curly braces, and square brackets count as brace characters.

### Block indentation

With Word Wrap turned off, whole blocks of text can be indented or outdented automatically. To indent a block, select part or all of the text on the target line or lines, then press TAB. Be careful: when Word Wrap is on, pressing TAB removes the selected text. Press SHIFT TAB to outdent.

### Comment and uncomment commands

Edit > Comment or Uncomment Selection lets you temporarily take parts of a JavaScript program out of the execution path. The command toggles its effect. The first time it is used, it inserts the special comment sequence //~ at the beginning of any line that is fully or partly selected. Running the command again on such a selected line removes that comment marker.

Only comment markers inserted by this command are affected; markers already present in the selected lines are ignored. That behavior lets you remove and restore blocks of text that contain both code and comments.

### Version comments

Adobe scripts use a reserved special comment format for code versioning, and all scripters can use it. Choose Edit > Insert Version Tag to add a comment with the file name and the current date-time in this format:

```
/**
 * @@@BUILDINFO@@@ SnpCreateDialog.jsx !Version! Tue Dec 05 2006 08:03:38 GMT-0800
 */
```

You must manually replace the !Version! portion with your own version details.

### Undo and redo

Undo and Redo, available from the Edit menu and from the document window's right-click context menu, step backward and forward through multiple editing changes. The history begins when a file is created or loaded and remains available across file-save operations.

### Syntax checking

Before running a new script or saving text as a script file, choose Edit > Check Syntax to test for JavaScript syntax errors. The default keyboard shortcut is F7.

- When the script syntax is valid, the status line displays "No syntax errors."
- When the Toolkit detects a syntax error, such as a missing quote, it highlights the relevant text, plays a sound, and reports the error in the status line so it can be corrected.

### Multiline statements

Triple-quote syntax in the Script Editor lets strings span several source-code lines. For a very long string, you can enter:

```
var myString = "This very long string might wrap onto a second line visually, but you typed no CR character when entering it."
```

```
var myString = "This string spans \
two lines."
```

```
var myString = """This "quoted" word is inside the
multiline string enclosed by triple quotes."""
```

With triple quotes, embedded quotes can appear inside the string.

## Searching in text

### The Script Editor — Searching in text

The search utility in the Toolkit is opened with Edit > Find and Replace. That command displays the Find and Replace panel. When the panel is undocked, ESC hides it.

The Find and Replace panel can search multiple documents for text matching a chosen search string or regular expression. Search targets can include:

- The current document, or only the current selection within that document
- Every open document
- Scripts published by the current target application
- Folders you have set as favorite locations; see The Scripts panel and favorite script locations.

Search matches appear in the Find Results tab. By default, it is stacked with the Find and Replace panel, but it can be dragged to another stack or shown as an independent floating panel.

Double-clicking a row in the Find Results panel jumps directly to the document and line containing the match.

### Using regular-expression syntax

For the Find and Replace dialog, the Toolkit accepts this limited Regular Expression syntax:

| RegEx Token | Behaviour |
| --- | --- |
| . | Matches any character |
| ( | Marks the start of a region for capturing a match. |
| ) | Marks the end of a capturing region. |
| < | Matches the start of a word using the editor's current definition of words. |
| > | Matches the end of a word using the editor's current definition of words. |
| \x | Escapes a character x that would otherwise have a special meaning. For example, [ is interpreted as a left bracket, rather than the start of a character set. |
| [...] | A set of characters; for example, [abc] means any of the characters a, b or c. You can also use ranges, for example [a-z] for any lower case character. |
| [^...] | The complement of the characters in a set. For example, [^A-Za-z] means any character except an alphabetic character. |
| ^ | Matches the start of a line (unless used inside a set). |
| $ | Matches the end of a line. |
| \* | Matches 0 or more times. For example, Sa\*m matches Sm, Sam, Saam, Saaam etc. |

In replacement text, captured match regions can be inserted with placeholders \1 through \9, where \1 is the first captured region, \2 is the second, and so forth.

For instance, searching for Fred\([1-9]\)XXX and replacing with Sam\1YYY changes Fred2XXX into Sam2YYY.

## Syntax marking

### The Script Editor — Syntax marking

Language-based syntax highlighting in the Script Editor helps while editing code. Debugging features, including syntax checking, apply only to JavaScript, but other code types can still be edited with syntax highlighted for the chosen language. Highlighting style is selected automatically from the file extension, or manually from View > Syntax Highlighting.

The Fonts and Colors page of the Preferences dialog controls the highlighting style.

## Debugging in the Toolkit

Code in the active document window can be debugged. Debugging commands either run the program or step through it one operation at a time.

Running code from the document window executes it in the selected JavaScript engine of the current target application. The Toolkit also has its own separate JavaScript engine, allowing quick script edits and runs without attaching to a target application.

## Selecting a debugging target

### Debugging in the Toolkit — Selecting a debugging target

Multiple applications can be debugged at once by the Toolkit. When more than one Adobe application is installed, the drop-down list at the upper left of a document window selects that window's target application. The list includes every installed application that supports JavaScript. If a script is run in an application that is not already running, the Toolkit asks for permission to start it.

Some applications provide more than one JavaScript engine. The engines available in the chosen target application appear in the drop-down list to the right of the application list, along with an icon showing each engine's current debugging state. A target application may expose several JavaScript engines, and more than one engine can be active even though only one is current. An active engine is currently executing code, paused at a breakpoint, or finished with all scripts and waiting for events.

The icon next to an engine name reports one of three states: running, halted, or waiting for input:

| Icon | Status |
| --- | --- |
|  | running |
|  | halted |
|  | waiting |

Toolkit panes show the data and state for the current engine. If the selected target application has only one engine, choosing the application makes that engine current. If the target application has multiple engines, selecting one from the list makes that engine current.

At startup, the Toolkit itself is the default target application. Choosing a different target that is not running causes the Toolkit to request permission and then launch that application. The same permission prompt appears if a script uses the #target directive to specify an application that is not running. If the application is already running but is not the current target, the Toolkit asks whether to switch to it.

Selecting an application that the Toolkit cannot debug opens an error dialog stating that the Toolkit cannot connect to that application.

JSX files use the ExtendScript Toolkit as their default editor. When a JSX file is double-clicked in a file browser, the Toolkit looks for a #target directive and launches that application to run the script, but it checks the script for syntax errors first.

If syntax errors are found, the Toolkit shows the error in a message box and exits silently instead of launching the target application. Example follows:

## The JavaScript console

### Debugging in the Toolkit — The JavaScript console

The JavaScript console combines a command shell with an output window for the currently selected JavaScript engine. It gives access to that engine's global namespace.

Input in the console is handled by a JavaScript listener, so entered text is expected to be JavaScript code.

The console can evaluate expressions or call functions. Enter any JavaScript statement, then press ENTER. It runs in the scope for the stack line highlighted in the Call Stack panel, and the following line displays the result.

- Use the up- and down-arrow keys to move through previous entries, or position the cursor with the mouse. Pressing ENTER runs the line containing the cursor or runs every selected line.
- The right-click context menu offers the same editing commands available in the document window.
- Text can be copied, cut, and pasted, and previous actions can be undone and redone.
- Mouse selection is supported, as are the normal copy and paste shortcuts.
- The flyout menu can clear the current content.
- Console commands run with a one-second timeout. If execution takes more than one second, the Toolkit creates a timeout error and ends the attempt.
- Standard output from JavaScript execution goes to the console. Syntax errors generated by scripts appear here with the file name and line number. The Toolkit also reports startup errors here.

## Controlling code execution

### Debugging in the Toolkit — Controlling code execution

You can invoke debugging commands through the Debug menu, the document window's right-click context menu, keyboard shortcuts, or toolbar buttons. When the JavaScript Debugger is active, use these commands and buttons to manage code execution.

Icon

Action

Hotkey

Description

Run/Continue

F5 (Windows) Ctrl R (Mac OS)

Starts or resumes execution of a script. Disabled when script is executing.

Break

Ctrl F5 (Windows) Cmd . (Mac OS)

Halts the currently executing script temporarily and reactivates the JavaScript Debugger. Enabled when a script is executing.

Stop

Shift F5 (Windows) Ctrl K (Mac OS)

Stops execution of the script and generates a runtime error. Enabled when a script is executing.

Step Over

F10 (Windows) Ctrl S (Mac OS)

Halts after executing a single JavaScript line in the script. If the statement calls a JavaScript function, executes the function in its entirety before stopping (do not step into the function).

Step Into

F11 (Windows) Ctrl T (Mac OS)

Halts after executing a single JavaScript line statement in the script or after executing a single statement in any JavaScript function that the script calls.

Step Out

Shift F11 (Windows) Ctrl U (Mac OS)

When paused within the body of a JavaScript function, resumes script execution until the function returns. When paused outside the body of a function, resumes script execution until the script terminates.

| --- | --- | --- | --- |

## Visual indication of execution states

### Debugging in the Toolkit — Visual indication of execution states

When a script stops at a breakpoint, or reaches the next line during line-by-line stepping, the document window shows the current script and highlights the current line in yellow.

For a runtime error, the Toolkit stops script execution, shows the current script with the current line highlighted in orange, and reports the error in the status line. Use the Data Browser for more detail about current data assignments.

Scripts commonly wrap code that might raise a runtime error in a try/catch clause, so the error can be handled programmatically instead of terminating the script. To allow that normal catch-clause handling instead of breaking into the debugger, choose Debug > Don't Break On Guarded Exceptions. Some runtime errors, including Out Of Memory, always terminate the script regardless of this setting.

## Setting breakpoints

### Debugging in the Toolkit — Setting breakpoints

During debugging, pausing on chosen lines helps with inspecting environment state, checking function-call nesting, and confirming variable contents.

- To make a script stop on a particular line, click left of the line number and set a breakpoint. The breakpoint is shown by a red dot.
- A second click disables the breakpoint temporarily, changing the icon color.
- A third click removes the breakpoint and its icon.

Conditional breakpoints are useful in some situations. For example, a loop that runs several thousand times should not necessarily stop on every iteration, but might need to stop only on every 1000th pass.

A breakpoint condition is written as a JavaScript expression. Each time execution reaches that breakpoint, the JavaScript expression runs. Execution stops if the expression evaluates to a nonzero number or true.

For a loop breakpoint, one possible condition is "i >= 1000"; execution stops once iteration variable i has reached 1000 or above.

### The Breakpoints panel

Every breakpoint set in the current document window is listed in the Breakpoints panel. Its flyout menu can add, change, or remove a breakpoint.

Double-click a breakpoint to edit it, or select it and choose Add or Modify from the panel menu. A dialog lets you change the line number, the enabled state, and the condition statement. It can also set a hit count, allowing the breakpoint to be skipped for a specified number of hits before the debugger is entered. The default is 1, so the first execution breaks.

After the specified hit count is reached, the debugger evaluates the condition. If the condition is not true, the breakpoint is ignored and execution continues. This makes it possible to break only under particular conditions, such as when a variable has a chosen value.

### Breakpoint icons

The document window marks each breakpoint with an icon to the left of the line number, and the Breakpoints panel shows an icon and line number as well. The document window and Breakpoints panel use different icons.

| Document window | Breakpoints panel | Description |
| --- | --- | --- |
|  |  | Unconditional breakpoint. Execution stops here. |
|  |  | Unconditional breakpoint, disabled. Execution does not stop. |
|  |  | Conditional breakpoint. Execution stops if the attached JavaScript expression evaluates to true. |
|  |  | Conditional breakpoint, disabled. Execution does not stop. |

## Evaluation in help tips

### Debugging in the Toolkit — Evaluation in help tips

Resting the mouse pointer over a variable or function in a document window shows a help tip with the evaluated result of that variable or function. Outside a debugging session, this is useful only when the JavaScript engine already knows those variables and functions. While debugging, it is a very convenient way to see a variable's current value together with its current data type.
