# JavaScript APIs — console

A single static object, console, opens the door to the Acrobat JavaScript Console, where you can run JavaScript and watch debug output appear.

Before Adobe Reader 7.0 this object has no effect. From 7.0 onward, Adobe Reader gained a console window whose main job is surfacing errors and messages. Whether it appears is governed by the JavaScript preference Show Console on Errors and Messages. The window isn't interactive there, yet the console object's methods behave just as they do under Acrobat.

On Windows and Mac OS, Adobe Reader can also be given access to the Acrobat JavaScript Debugging window. Debugging inside Adobe Reader requires installing the JavaScript file debugger.js and making the right edits to the Windows registry. Technical specifics are covered in the JavaScript Developer Guide.

See also the dbg object.
