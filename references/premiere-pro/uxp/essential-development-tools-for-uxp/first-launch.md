# First launch

At first launch, Developer Tool asks to enable Developer Mode. Development plugins cannot be loaded until that mode is active. Selecting **Enable** requests elevated permissions, and the system may ask for a password or approval from Developer Tool.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/introduction/essentials/dev-tools/img/dev-tools-enable-developer-mode2.png)

If this step causes problems, Developer Mode can also be configured manually, but Administrative privileges are still required.

1. Quit the UXP Developer Tool
2. Open `/Library/Application Support/Adobe/UXP/Developer` on macOS, or `%CommonProgramFiles%/Adobe/UXP/Developer` on Windows. Create the folder if it is absent; administrative rights are required.
3. Create a new file named `settings.json` with this content; administrative rights are required to save it:

```json
{
  "developer": true
}
```

4. Launch the UXP Developer Tool again.

At this point, a successful UDT installation is enough. UDT is covered in more detail after the first plugin is built.
