# Global functions

### Description

A handful of globally reachable functions exist purely for After Effects work. They are callable from inside any JavaScript object or function, and they let you push text into the compact (3-line) region of the Info panel, swap numeric time values back and forth with their string equivalents, or roll a random number.

| Global function | Description |
| --- | --- |
| clearOutput() | Clears text from the Info panel. |
| currentFormatToTime() | Converts string time value to a numeric time value. |
| generateRandomNumber() | Generates a random number. |
| getEnumAsString() | Converts an Enum value to it's string name. |
| timeToCurrentFormat() | Converts a numeric time value to a string time value. |
| write() | Writes text to the Info panel, with no line break added. |
| writeLn() | Writes text to the Info panel, adding a line break at the end. |
| isValid() | When true, the specified object exists. |

Beyond these, ExtendScript itself supplies the usual user-I/O helpers (alert, confirm , and prompt) plus the static file-I/O functions; the JavaScript Tools Guide carries the full reference for those.

## See also

- [Application](application-object.md)
