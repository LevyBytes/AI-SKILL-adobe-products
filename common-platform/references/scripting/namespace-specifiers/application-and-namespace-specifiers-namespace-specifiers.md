# Application and namespace specifiers — Namespace specifiers

For cross-DOM and exported function calls into other applications, a namespace specifier qualifies the call and routes it to the correct application.

A namespace specifier uses the application name from an application specifier and can include a major version number. Place it before the exported function name with JavaScript dot notation. appname[majorVersion].functionName(args)

For example:

- For the cross-DOM quit function, use photoshop.quit() in Photoshop and illustrator.quit() in Adobe Illustrator.
- For the exported place function in Illustrator CS5 version 15, call illustrator15.place(myFiles).

For details on cross-DOM and exported functions, see Remote function calls.
