# Top-Level (containing) Objects — Application

Through properties on the application object, scripts can reach global values, including:

- User preferences, which the Illustrator user configures interactively in the Preferences dialog (Edit > Preferences).
- System-level details such as installed fonts (the text fonts property) and printers (the printer list property).

Other properties expose Illustrator-specific state and broader details about documents that are open:

- Application information, including installation path, version, and Illustrator visibility.
- The active document currently shown as the art canvas and receiving user input.
- The full set of open documents.

Methods or commands on the application object let a script perform actions that affect the application as a whole, for example:

- Open files
- Undo and redo transactions
- Quit Illustrator

app

### Description

Referenced through the predefined global `app` object, this Adobe Illustrator application object contains every other Illustrator object.
