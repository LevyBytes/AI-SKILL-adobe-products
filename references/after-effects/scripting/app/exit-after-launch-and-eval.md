# app.exitAfterLaunchAndEval

app.exitAfterLaunchAndEval

### Description

This one matters solely when a script is run from a Windows command line. Launching the program that way and supplying the -r or -s command line flag tells it to run a script, sourced from a file or from a string respectively.

Set this to true and After Effects closes once the script finishes; leave it false and the program stays open. The attribute does nothing unless After Effects was started from the Windows command line, and it carries no weight on Mac OS.

### Type

Boolean; read/write.
