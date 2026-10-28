# Scripting plug-ins

The CC JavaScript scripting interface provides limited scripting access for plug-ins. A plug-in may define a command along with an event, notifier, and handler that carries out an action. A JavaScript script can call app.sendScriptMessage() to pass parameters to that plug-in command and receive the response supplied by the plug-in.

The Adobe Custom Workspace plug-in, for example, exposes "Switch Workspace" as a command. The following code shows a script calling that command:

```javascript
result = app.sendScriptMessage (
    "Adobe Custom Workspace",
    "Switch Workspace",
    '<workspace="Essentials" >'
);
```

Here, the plug-in returns this string value:

Reference data, output or notation; not an executable JavaScript program.

```text
"<error= errNo>".
```
