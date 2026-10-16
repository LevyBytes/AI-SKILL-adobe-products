# System.callSystem()

system.callSystem(cmdLineToExecute);

### Description

Runs a system command exactly as though you had entered it at the operating system's command line, and returns whatever the system prints back, if anything. On Windows, hand the command to cmd.exe behind its /c switch, wrapping the command you want in escaped quotes (\"...\"). For instance, the snippet below fetches the current time and shows it to the user:

```javascript
var timeStr = system.callSystem("cmd.exe /c \"time /t\"");
alert("Current time is " + timeStr);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| cmdLineToExecute | String | The command and its parameters. |

### Returns

The output from the command.
