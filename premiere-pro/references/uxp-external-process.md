# External Process

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Open files and start applications from a plugin when a workflow needs to leave Premiere.

The [`shell` API](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/shell.md) lets a UXP plugin communicate with the user's operating system. It can open files in their default apps and start external programs through URL schemes, which helps when a workflow crosses between tools.

## Launch Process Security

UXP blocks plugins from launching external processes by default, reducing the chance of unwanted or malicious activity. If a plugin needs to open files or start applications, declare the [`launchProcess`](uxp-manifest.md) permission in `manifest.json`. It contains two parts:

- **Extensions**: file extensions the plugin is allowed to open, such as `[".pdf", ".txt"]`.
- **Schemes**: URL schemes the plugin may invoke, such as `["https", "mailto"]`.

```json
{
  // ...
  "requiredPermissions": {
    "launchProcess": {
      "extensions": [".pdf", ".mp4"],
      "schemes": ["https", "mailto"]
    }
  }
  // ...
}
```

User consent is always required

Every attempt to launch an external process must be approved by the user in a system dialog. Put clear, useful context in the `developerText` parameter so the user understands why the action is being requested.

## Using the Shell API

The [`shell`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/shell.md) module exposes two primary methods:

- **`openPath()`**: opens a file or folder with the system default application.
- **`openExternal()`**: starts an application through a URL scheme.

Each call prompts for user approval, then gives back a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). On success, the promise resolves to an empty string; on failure, it resolves to an error message.

**Access the API:**

```javascript
const { shell } = require("uxp");
```

### Example: Open with Default Application

Call `openPath()` when the plugin should open a file on the user's system in whatever application owns that file type, such as a PDF reader, video player, or plain-text app.

### index.js

```js
const { shell } = require("uxp");

// Open a PDF file in the default PDF reader ðŸ“„
async function openPDFFile() {
  try {
    // For macOS
    const result = await shell.openPath(
      "/Users/user/Desktop/report.pdf", // ðŸ‘ˆ update with your path
      "Opening project report for review",
    );
    // For Windows, use: "C:\\Users\\user\\Desktop\\report.pdf"

    if (result === "") {
      console.log("âœ… File opened successfully");
    } else {
      console.error(`âŒ Failed to open file: ${result}`);
    }
  } catch (err) {
    console.error("Error opening file:", err);
  }
}

// Open a folder in Finder/Explorer ðŸ“
async function openProjectFolder() {
  // ðŸ‘‡ Must have an empty string "" to allow opening folders
  // in the Manifest requiredPermissions.launchProcess.extensions array
  try {
    // For macOS
    const result = await shell.openPath("/Users/user/Documents/Projects", "Opening project folder");
    // For Windows, use: "C:\\Users\\user\\Documents\\Projects"

    if (result === "") {
      console.log("âœ… Folder opened successfully");
    } else {
      console.error(`âŒ Failed to open folder: ${result}`);
    }
  } catch (err) {
    console.error("Error opening folder:", err);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "launchProcess": {
      "extensions": [".pdf", ".txt", ".mp4", ""]
    }
  }
  // ...
}
```

The user sees a confirmation dialog requesting permission to open the file, and the selected choice can be saved for later attempts.

[Figure: User consent dialog for openPath](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/external-process/img/external-process-request-permission.png)

When calling `openPath()`, list the file extensions the plugin will open in the [`launchProcess.extensions`](uxp-manifest.md) array inside the Manifest [`requiredPermissions`](uxp-manifest.md) object. Include an **empty string** `""` when folders should be openable in Finder/Explorer, as shown by `openProjectFolder()` above.

Trying to open a file whose extension is not listed causes the operation to fail.

### Example: Launch Application with URL Scheme

Use `openExternal()` for URL-scheme launches, including websites in browsers, prefilled email messages, and platform-specific apps such as Maps.

### index.js

```js
const { shell } = require("uxp");

// Open a website in the default browser ðŸŒ
async function openDocumentation() {
  try {
    const result = await shell.openExternal(
      "https://developer.adobe.com/",
      "Opening Adobe Developer documentation",
    );

    if (result === "") {
      console.log("âœ… Browser opened successfully");
    } else {
      console.error(`âŒ Failed to open browser: ${result}`);
    }
  } catch (err) {
    console.error("Error opening browser:", err);
  }
}

// Compose an email with pre-filled content ðŸ“§
async function sendFeedbackEmail() {
  try {
    const subject = encodeURIComponent("Plugin Feedback");
    const body = encodeURIComponent("I have feedback about your plugin...");

    const result = await shell.openExternal(
      `mailto:support@example.com?subject=${subject}&body=${body}`,
      "Opening mail client to send feedback",
    );

    if (result === "") {
      console.log("âœ… Mail client opened successfully");
    } else {
      console.error(`âŒ Failed to open mail client: ${result}`);
    }
  } catch (err) {
    console.error("Error opening mail client:", err);
  }
}

// Open Maps to a specific location ðŸ—ºï¸
async function openLocationInMaps() {
  try {
    // For macOS: use maps:// scheme
    const macResult = await shell.openExternal(
      "maps://?address=345+Park+Ave+San+Jose",
      "Opening Maps to Adobe office location",
    );

    // For Windows: use bingmaps: scheme
    // const winResult = await shell.openExternal(
    //   "bingmaps:?q=345+Park+Ave+San+Jose,+95110",
    //   "Opening Maps to Adobe office location"
    // );

    if (macResult === "") {
      console.log("âœ… Maps opened successfully");
    } else {
      console.error(`âŒ Failed to open Maps: ${macResult}`);
    }
  } catch (err) {
    console.error("Error opening Maps:", err);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "launchProcess": {
      "schemes": ["https", "mailto", "maps", "bingmaps"]
    }
  }
  // ...
}
```

`openExternal()` and `openPath()` use the same permission confirmation flow for user consent.

[Figure: User consent dialog for openExternal](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/external-process/img/external-process-request-permission-scheme.png)

`file:/` is not a permitted scheme for `openExternal()`. For local files, call `openPath()` instead.

### Platform-specific Schemes

Available URL schemes differ by operating system, and some apply only on one platform:

| Scheme | Platform | Purpose |
| --- | --- | --- |
| `https://` | Both | Open web browser |
| `mailto:` | Both | Compose email |
| `maps://` | macOS | Open Apple Maps |
| `bingmaps:` | Windows | Open Bing Maps |
| `facetime:` | macOS | Start FaceTime call |

Check the user's operating system before invoking a platform-only scheme. For example, `maps://` on Windows or `bingmaps:` on macOS can fail without visible feedback or can show an error.

### Run CLI commands

A plugin can use `shell.openPath()` to run CLI commands directly, including AppleScripts or shell scripts. This pattern has limitations: arguments cannot be passed, and command output cannot be captured.

```js
const result = await shell.openPath(
  // external command
  "/bin/ls", // âœ… will run
  "Running the ls command", // âš ï¸ result is an empty string
);

const result = await shell.openPath(
  // external command + argument
  "/bin/ls -la", // âŒ will fail
  "Running the ls -la command",
);
```

## Best Practices

1. **Provide clear context**: `developerText` is shown in the consent dialog. Use plain language that clearly explains the requested action.

```javascript
// âœ… Good: Clear and specific
await shell.openExternal("https://example.com/guide", "Opening tutorial guide in your browser");

// âŒ Avoid: Vague or technical
await shell.openExternal("https://example.com/guide", "Opening URL");
```

2. **Handle user denial gracefully**: A user may refuse the launch request. Inspect the return value and offer another path when needed.

```javascript
const result = await shell.openPath(filePath, "Opening project file");
if (result !== "") {
  // User denied or operation failed
  console.log("Unable to open file. Please open it manually.");
}
```

3. **Check platform compatibility**: Detect the platform before using schemes that exist only on specific systems.

```javascript
const isMac = require("os").platform() === "darwin";
const scheme = isMac ? "maps://" : "bingmaps:";
```

4. **Encode URL parameters**: Encode special characters whenever query parameters are assembled into a URL.

```javascript
const subject = encodeURIComponent("My Subject");
const url = `mailto:user@example.com?subject=${subject}`;
```

5. **Declare all schemes and extensions**: List only the schemes and extensions that the plugin uses, avoiding permissions that are not needed.

## Troubleshoot Common Issues

| Symptom | Likely Cause | Solution |
| --- | --- | --- |
| Permission denied error | Missing manifest entry | Add the extension or scheme to `launchProcess` in manifest |
| Operation fails silently | User denied consent | Check return value and handle denial gracefully |
| Platform-specific scheme not working | Wrong scheme for OS | Use platform detection to choose the correct scheme |
| `file://` scheme doesn't work | Wrong method used | Use `openPath()` for local files, not `openExternal()` |
| UWP restrictions on Windows | System security policy | UWP apps can only access files in their sandbox on Windows Store apps |

## Reference Material

- [`shell` module](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/shell.md): full reference for the Shell API.
- [Manifest Permissions](uxp-manifest.md): explanation of the available permission fields.
- [`launchProcess` Permission](uxp-manifest.md): expanded details for that permission.

## Summary

1. **Launch Process Security**: Plugins start with external process launching blocked. To allow it, add the `launchProcess` permission to `manifest.json`:

   - **`extensions`**: Array containing the file extensions your plugin is allowed to open (e.g., `[".pdf", ".mp4"]`). Use an empty string `""` when folders should open in Finder/Explorer.
   - **`schemes`**: Array listing the URL schemes the plugin may invoke (e.g., `["https", "mailto"]`).
   - Security still requires **user consent**: unless the user saves the choice, each launch attempt shows a dialog.

2. **Two Shell Methods**:

   - **`openPath(path, developerText)`**: Opens a file or folder with the default application for the system; the extension must appear in `extensions`.
   - **`openExternal(url, developerText)`**: Starts an application through a URL scheme; the scheme must appear in `schemes`; `file://` is not supported, so use `openPath()` for files.

3. **User Experience Best Practices**:
   - URL schemes vary by operating system, so call `require("os").platform()` and choose the scheme for that platform.
   - In `developerText`, tell the user plainly why the plugin needs to perform the launch.
   - Treat denial as a normal path: inspect return values and provide fallback behavior.
   - Declare only the schemes and extensions the plugin really needs, avoiding broad permission requests.
   - Use `encodeURIComponent()` on URL parameters so special characters are handled correctly.
