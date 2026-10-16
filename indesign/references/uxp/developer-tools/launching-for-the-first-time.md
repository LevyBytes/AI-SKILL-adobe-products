# Launching for the first time

The first launch of the Developer Tool asks you to turn on Developer Mode. This setting is necessary before development plugins can be loaded into the application.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/essentials/dev-tools/devmode.png)

After you select `Enable`, the tool requests elevated permissions, and the flow may ask for a password or a Developer Tool approval.

[Figure: Elevated Permissions request](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/essentials/dev-tools/macos-elevated-permissions.png)

If that step does not work, Developer Mode can be configured by hand, provided you have Administrative privileges:

1. Quit the UXP Developer Tool
2. On macOS, open `/Library/Application Support/Adobe/UXP/Developer`; on Windows, open `%CommonProgramFiles%/Adobe/UXP/Developer`. Create the folder with administrative rights if it is missing.
3. Create a new file named `settings.json` containing the JSON below. Saving the file requires administrative rights:
   ```json
   { "developer": true }
   ```
4. Start the UXP Developer Tool again.

For the moment, having UDT installed successfully is enough. Later, after you create your first script or plugin, UDT is covered in more detail.
