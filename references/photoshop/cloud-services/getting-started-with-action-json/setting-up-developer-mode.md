# Setting up developer mode

To turn on developer mode in Photoshop, use this flow:

1. Navigate to:

   - Open Photoshop → Preferences → Plugins... (For Mac).
   - Open Edit → Preferences → Plugins... (For Windows).

2. Choose _Enable Developer Mode_.
3. Quit Photoshop.
4. Open Photoshop again with developer mode enabled.

If your Photoshop version is 23.4 (July 2022) or older, use the command below to enable developer mode as a hidden feature.

For Mac:

```bash
echo "UXPEnableScriptingUtilities 1" >>  "/Users/$USER/Library/Preferences/Adobe Photoshop 2021 Settings/PSUserConfig.txt"
```

For Windows Powershell:

```bash
echo  "UXPEnableScriptingUtilities 1" >> "C:\Users\$env:USERNAME\AppData\Roaming\Adobe\Adobe Photoshop 2021\Adobe Photoshop 2021 Settings\PSUserConfig.txt"
```
