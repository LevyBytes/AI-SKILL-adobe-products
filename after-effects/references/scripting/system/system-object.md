# System object

system

### Description

Through the System object you can read details about the user's machine, including the user name plus the operating system's name and version. Reach it via the global variable system.

### Example

```javascript
alert("Your OS is " + system.osName + " running version" + system.osVersion);
confirm("You are: " + system.userName + " running on " + system.machineName + ".");
```
