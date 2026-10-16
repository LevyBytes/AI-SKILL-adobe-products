# app.exitCode

app.exitCode

### Description

A numeric status code in play when a script runs externally, that is, from a command line or AppleScript.

- In Windows, the value is returned on the command line when After Effects was launched on the command line (using the afterfx or afterfx -m command), and a script was specified with the -r or -s option.
- In Mac OS, the value is returned as the AppleScript DoScript result for each script.
- In both Mac OS and Windows, the value is set to 0 (`EXIT_SUCCESS`) at the beginning of each script evaluation. In the event of an error while the script is running, the script can set this to a positive integer that indicates what error occurred.

### Type

Integer; read/write.

### Example

```javascript
app.exitCode = 2; // on quit, if value is 2, an error has occurred
```
