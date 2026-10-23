# Getting Started with the VS Code Debugger - Creating a debug launch task

Before the extension can debug extendscript, create a VS Code debug task for it to run.

Inside your project directory:

- add a folder named .vscode (with the period)
- inside that folder, add launch.json
- insert this code:

```javascript
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "extendscript-debug",
            "request": "attach",
            "name": "extendScript-Debug attach",
        }
    ]
}
```

This configuration makes VSCode's debugger attach to the host app you select.
