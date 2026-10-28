# Process APIs

CEP developers manage processes with the `window.cep.process` object. This example creates a process and verifies whether it is still running:

This sample requires an X11 installation with `/usr/X11/bin/xterm`; use an absolute executable path suitable for the current platform.

```javascript
var result = window.cep.process.createProcess("/usr/X11/bin/xterm");

if(result.err === 0){
  var pid = result.data;
  result = window.cep.process.isRunning(pid);
  if (result.err === 0 && result.data === true){
    // running
  }
}
```

UXP does not currently provide a complete process API set. For external files and remote resources, call `openPath` or `openExternal`. With UXP 6.0.2+, manifest v5 requires the plugin to list the URI schemes and file extensions it is allowed to launch.

Manifest excerpt: merge the shown permissions with the complete UXP manifest.

```jsonc
{
"requiredPermissions": {
    "launchProcess": {
        // allows launching files with specified URI schemes
        "schemes":
            [ "https", "slack", "adobe" ],
        // allows opening files with the specified file extensions
        "extensions":
            [ ".pdf", ".xd", ".psd" ],
    },
}
}
```

`openPath` and `openExternal` both depend on that permission configuration. Each call presents the runtime consent dialog shown below; the API runs only after the user approves.

[Figure: User consent dialog](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/assets/user_consent.png)
