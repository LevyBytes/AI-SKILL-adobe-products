# CEP native process example

- Create a process and confirm its running state.

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

Other available APIs cover tasks such as deleting folders, renaming folders, setting file permissions, deleting files, showing the file-open dialog, quitting processes, and related operations.

These samples show some of those APIs in use:

- https://github.com/Adobe-CEP/Samples/tree/master/Flickr
- https://github.com/Adobe-CEP/Samples/tree/master/Collage
- https://github.com/Adobe-CEP/CEP-Resources/tree/master/CEP_9.x/Samples

Related: [CEP filesystem and process APIs](filesystem-process-apis.md).
