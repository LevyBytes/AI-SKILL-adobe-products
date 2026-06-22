# Launch Process, Network, Persistent Storage Migration, Recipe Template

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Launch process; Network I/O; Persistent Storage Migration; Topic Heading.

## Launch process

UXP core APIs include `shell` APIs for starting processes on the user's system.

These APIs mainly support two tasks:

1. Use the standard application to open a file, such as Acrobat Reader for a PDF.
2. Launch applications, such as starting the mail client with an email address.

Before looking at examples, note that these APIs are tied to the `launchProcess` permission in the manifest.

Plugins and Scripts

**In plugins**, the manifest must list the allowed schemes and file extensions under the `launchProcess` permission.
IMPORTANT: Review the [manifest permissions](uxp-plugins.md) module before continuing.

**In scripts**, `launchProcess` permission values are fixed. The manifest details in the examples below can be ignored. These values are explained in the [manifest fundamentals section](uxp-resources.md).

### Opening a file

To open a file, pass its full path and declare the relevant file `extensions` in the manifest for that plugin.

### Example

### JavaScript

```js
async function foo() {
  const { shell } = require("uxp");
  try {
    await shell.openPath("/Users/user/Desktop/test.pdf");
  } catch (e) {
    console.error(e);
  }
}
```

### manifest

```json
{
  "launchProcess": {
    "extensions": [".pdf"]
  }
}
```

[Figure: User consent for open-path](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/launch-process/open-path.png)

### Launch a process

URL Schemes let you open an application on the user's system.

### Example

### JavaScript

```js
async function foo() {
  const { shell } = require("uxp");
  try {
    await shell.openExternal("https://www.adobe.com", "Opening browser for testing purpose.");
    await shell.openExternal("mailto:/example.com/");
  } catch (e) {
    console.error(e);
  }
}
```

### manifest

```json
{
  "launchProcess": {
    "schemes": ["https", "mailto"]
  }
}
```

[Figure: User consent for open external](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/launch-process/open-external.png)

### Additional notes

- Operations of this kind prompt the user for consent. Add a note so the user has more context, such as "Opening browser for testing purpose." in the example above.
- Handle the case where the user rejects the request.
- With `openExternal`, remember that URL schemes depend on the operating system. For example, `facetime` is unavailable on Windows, and custom schemes behave the same way. Add pre-checks and prefer standard URL schemes to reduce unexpected errors.

### Reference material

- [Shell API](https://raw.githubusercontent.com/reference/uxp-api/reference-js/modules/uxp/shell/shell.md)

## Network I/O

Network calls may be needed for image retrieval, web API access, remote-resource browsing, content sync, and similar plugin or script tasks. UXP provides several networking APIs, so choose the one that matches the job.

Plugins and Scripts

**In plugins**, request permission for ``access in the manifest and list endpoint`domains`.  
IMPORTANT: Before continuing, review the [manifest permissions](uxp-plugins.md) module.

**In scripts**, `network` permission is preset. The manifest-specific details in the examples below do not apply to scripts. The [manifest fundamentals section](uxp-resources.md) explains these values.

For a quick network-call test, render a remotely served image.

### HTML

```html
<img src="https://source.unsplash.com/random" />
```

### manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://source.unsplash.com"]
    }
  }
}
```

As noted above, `fetch`, `XHR (XML HTTP Request)`, and `WebSocket` are exposed on the UXP global scope. If their differences are unclear, first compare the available options here: [fetch](https://javascript.info/fetch) | [WebSocket](https://javascript.info/websocket) | [XHR](https://javascript.info/xmlhttprequest)

### Examples

Here are representative samples.

### fetch

### JavaScript

```js
async function foo() {
  // Get weather forecast for San Jose
  try {
    const response = await fetch(`https://api.weather.gov/gridpoints/MTR/99,82/forecast`);
    if (!response.ok) {
      throw new Error(`HTTP error fetching weather station; status: ${response.status}`);
    }
    const responseJson = await response.json();
    console.log(`Forecast ${responseJson.properties.periods[0].detailedForecast}`);
  } catch (e) {
    console.error(e);
  }
}
```

### manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.weather.gov"]
    }
  }
}
```

### XHR

### JavaScript

```js
function foo() {
  // Get weather forecast for San Jose via XHR
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.weather.gov/gridpoints/MTR/99,82/forecast");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    const responseObj = xhr.response;
    console.log(`Forecast ${responseObj.properties.periods[0].detailedForecast}`);
  };
}
```

### manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.weather.gov"]
    }
  }
}
```

### WebSockets

### JavaScript

```js
let socket;
async function foo() {
  // Establish web socket connection
  if (!!socket) {
    console.log("Already connected; disconnecting first.");
    await socket.close();
    return;
  }

  socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

  socket.onopen = function (e) {
    console.log("Connection established");
    // sending data to server
    socket.send("My name is John");
  };

  socket.onmessage = function (event) {
    alert(`Data received from server: ${event.data}`);
  };

  socket.onclose = function (event) {
    console.log("Connection closed");
    socket = null;
  };

  socket.onerror = function (error) {
    console.error(`Connection error ${error}`);
  };
}
```

### manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["wss://javascript.info"]
    }
  }
}
```

### Additional notes

- The APIs are already on the global scope; no `require` import is needed to mount them.
- In a plugin manifest, `domains` can cover endpoint variants. For instance, a plugin might target 'api.dev.example.com', 'api.stage.example.com' or 'api.prod.example.com' based on environment; `[\"https://api.*.example.com\"]` covers all three.
- For `http` domains, note the host differences: Photoshop allows the http protocol only on Win32 and blocks it on macOS. InDesign does not apply that limitation.

### Reference material

- [fetch API](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/fetch.md)
- [XHR API](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md)
- [WebSocket API](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-transfers/web-socket.md)

## Persistent Storage Migration

InDesign persistent storage migration lets plugin data move from one application release to the next. During installation, choosing 'Import Previous Settings and Preferences' keeps plugin data available after upgrading to the latest InDesign version.

Plugins and Scripts

**In plugins**, Supported.

**In scripts**, Not Supported.

### System requirements

Before continuing, confirm that the local setup meets this application-version requirement.

- InDesign v20.0 or higher

### Import Previous Settings and Preferences

[Figure: CCD Setting](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/persistent-storage-migration/ccd-setting.png)

When installing a newer InDesign release, selecting "Import Previous Settings and Preferences" in the Creative Cloud Desktop (CCD) app causes plugin data to be copied into these folders:

**Plugins Installed from CCD or Plugin Market Place (External)**

- **Windows:**

  `AppData\Roaming\Adobe\UXP\PluginsStorage\IDSN\{App Version}\External`

- **MAC:**

  `Library/Application Support/Adobe/UXP/PluginsStorage/IDSN/{App Version}/External`

**Plugins Installed from UDT or Developer Plugins (Developer)**

- **Windows:**

  `AppData\Roaming\Adobe\UXP\PluginsStorage\IDSN\{App Version}\Developer`

- **MAC:**

  `Library/Application Support/Adobe/UXP/PluginsStorage/IDSN/{App Version}/Developer`

### Specifying plugin data using Local File Storage

Use this API to reach folders that hold plugin data:

```js
// Import the required module from UXP for file system access
const uxp = require("uxp");
const fs = uxp.storage.localFileSystem;

// Example: Access the folder where plugin data can be stored
(async () => {
  try {
    // Get the data folder (persistent storage location)
    const folder = await fs.getDataFolder();

    // Example: Log the folder object or use it for further operations
    console.log("Data folder:", folder);

    // Perform additional actions with the folder, such as reading/writing files
    // const file = await folder.createFile('example.txt', { overwrite: true });
    // await file.write('This is an example content.');
  } catch (error) {
    console.error("Error accessing the folder:", error);
  }
})();
```

## Topic Heading

Plugins and Scripts

**In plugins**, lorem ipsum.

**In scripts**, lorem ipsum.

### Example

### HTML

```html

```

### JavaScript

```js
async function foo() {
  // do something
}
```

### manifest

```json

```

Screenshot showing the resulting output (if applicable)

### Reference material

-
