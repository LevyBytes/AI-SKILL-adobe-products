# Debugging Script files

Script debugging is available with Photoshop 23.5 plus UXP Developer Tool (UDT) version 1.6.0; use the [download page](https://creativecloud.adobe.com/apps/download/uxp-developer-tools).

The [general documentation for UXP Scripting](how-uxp-scripting-works/reference-index.md) already walks through UDT. This section instead shows the preceding script loaded into UDT after a breakpoint has been enabled. From there, set breakpoints or use Step Into for script files. (The earlier empty first line accounts for the wrapper surrounding the script body.)

[Figure: cloudy.psjs loaded into UDT](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/cloudy-udt.png)

Compare the properties under `require('uxp').script` with [those present for `executeAsModal`](executeasmodal.md). Scripts run in a related context. Over time, the shared properties and methods will align around common usage patterns. This documentation will be revised once they are available.
