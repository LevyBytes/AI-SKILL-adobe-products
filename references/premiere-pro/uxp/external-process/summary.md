# Summary

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
