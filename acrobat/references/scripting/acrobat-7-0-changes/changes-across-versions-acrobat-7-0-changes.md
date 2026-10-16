# Changes Across Versions — Acrobat 7.0 changes

What had been a standalone document in version 6.0.2, the Acrobat Multimedia JavaScript Reference, was folded into the Acrobat JavaScript Scripting Reference, which now goes by JavaScript for Acrobat API Reference. For the full roster of multimedia JavaScript objects, properties, and methods, turn to the section Introduced in Acrobat 6.0.2.

Running JavaScript by way of a menu event no longer carries privilege. There is now a way to run privileged code from inside a non-privileged context.

In releases prior to Acrobat 7.0, a set of JavaScript files — AForm.js, ADBC.js, Annots.js, AnWizard.js, media.js, and SOAP.js — sat in the App JavaScript folder. From Acrobat 7.0 onward, Acrobat Pro, Acrobat Standard, and Adobe Reader no longer ship those files. A precompiled bytecode stands in for them to boost performance. One file in the App folder, debugger.js, is left out of that bytecode.

The bytecode also leaves out anything in the User JavaScript folder.

Putting your own .js files in the user JavaScript folder is recommended — the same location that holds glob.js. Any JavaScript that wires up menu items (addMenuItem ) belongs in config.js inside the User JavaScript folder. You can discover that folder's path at runtime by calling app.getPath("user","javascript") from the console.

Adobe Reader now ships a console window. Reach it under Edit > Preferences > JavaScript by choosing Show Console on Errors and Messages. Beyond errors and exceptions, you can also bring the console up programmatically through console.show(). The console object writeup notes a few more particulars.

The JavaScript Debugging window's debugging features can be turned on for Adobe Reader on the Windows and Mac OS platforms. Debugging inside Adobe Reader calls for installing the JavaScript file debugger.js and making the right edits to the Windows registry.
