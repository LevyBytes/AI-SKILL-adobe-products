# Launching for the first time

At the first launch of the Developer Tool, you will be asked to enable Developer Mode. Developer Mode is necessary for loading development plugins into Photoshop.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/devmode.png)

After you click `Enable`, the tool requests elevated permissions, and it may ask for a password or approval of a Developer Tool action.

[Figure: Elevated Permissions request](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/macos-elevated-permissions.png)

If that step causes problems, Developer Mode can also be configured manually, but Administrative privileges are required:

- Close the UXP Developer Tool
- For macOS, go to `/Library/Application Support/Adobe/UXP/Developer`; for Windows, go to `%CommonProgramFiles%/Adobe/UXP/Developer`. (If that folder is absent, create it with administrative rights.)
- Add a new file named `settings.json` with the following contents (administrative rights are required to save it):
  ```json
  { "developer": true }
  ```
- Launch the UXP Developer Tool again.
