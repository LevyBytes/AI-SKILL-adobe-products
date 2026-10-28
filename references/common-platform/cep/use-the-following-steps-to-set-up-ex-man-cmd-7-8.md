# Use the following steps to set up ExManCmd 7.8

- [**Don't update to Catalina if you still depend on ExtendScript ToolKit.**](https://medium.com/adobetech/estk-and-macos-10-15-catalina-cbcc30300918?source=friends_link&sk=76b9896b1eec630691f5603839ae28fe "Don't update to Catalina if you still depend on ExtendScript ToolKit.") Consider testing Catalina in a separate Mac partition first.
- BridgeTalk is not fully Catalina compliant and needs the extra download-time steps listed below.

To check which ExManCmd version is installed, use this visual cue:

[Figure: ExManVersionWarrow](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/ExManVersionWarrow.png)

~~1. Download ExManCmd 7.8 here: [https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html](https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html "https://partners.adobe.com/exchangeprogram/creativecloud/support/exman-com-line-tool.html")~~
The linked page now provides the latest ExManCmd release, and Version 7.8 can no longer be downloaded there.

2. Mount the `.dmg` volume by double-clicking the `.dmg` folder.
3. Copy the `Contents` folder and paste it onto your hard drive, or into another System location.
4. Open `Contents - > MacOS`.
5. Start Terminal.app.
6. Run this command to clear Apple's quarantine flag from the BridgeTalk component: `xattr -dr com.apple.quarantine Your/SystemPath/Contents/MacOS/ExManBridgeTalkCmd`
   - One convenient approach is to paste the command first, then drag the `ExManBridgeTalk` file directly into Terminal so you do not have to browse the file system manually:

[Figure: filepathdrag drop.small](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/filepathdrag_drop.small.gif)

- Press return to execute the command.

6. Double-click ExManCmd Tool from `/Contents/MacOS/ExManBridgeTalkCmd`.

7. macOS still displays this warning:
   [Figure: ExManCantBeOpenedOpen](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/ExManCantBeOpenedOpen.png)

8. In `System Preferences -> Security`, choose "Open Anyway" to approve ExManCmd:

[Figure: catalinaSysPrefError](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/catalinaSysPrefError.jpg)

8. ExManCmd should now launch correctly, except possibly for BridgeTalk-dependent workflows. Tell us if this procedure fails.
9. Continue using ExManCmd for normal addon install/remove tasks.
   - When installing directly into the Creative Cloud app, running ExManCmd with `sudo` is recommended.
   - Other installation types may not need `sudo`.
