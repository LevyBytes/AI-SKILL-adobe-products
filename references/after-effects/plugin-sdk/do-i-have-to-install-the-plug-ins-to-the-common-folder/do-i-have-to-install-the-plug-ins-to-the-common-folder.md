# Where Installers Should Put Plug-ins - Do I Have To Install The Plug-ins To The Common Folder?

There can be legitimate motivation to scope your plug-in to After Effects alone — say it leans on suites or capabilities that Premiere Pro simply doesn't expose. The shared folder remains our strong recommendation wherever it's workable, yet the AE-only plug-in folder stays on hand for those edge cases.

Under Windows, the explicit path to the app-specific plug-ins folder comes from this registry key: `HKEY_LOCAL_MACHINE\SOFTWARE\Adobe\After Effects\(version)\PluginInstallPath`

For macOS, the app-specific plug-ins folder sits at: /Applications/Adobe After Effects [version]/Plug-ins/

At startup, After Effects walks down through its path's subdirectories as far as 10 levels. It will follow macOS aliases along the way, though Windows shortcuts get skipped. Any directory whose name ends in parentheses, or that begins with ¬ on macOS or ~ on Windows, is left unscanned.

However much you wall off AE from Premiere Pro, our integration features give users a way around it anyway — anyone who builds a dynamically linked AE composition containing your effect and drops it into a Premiere Pro sequence will still have your effects on hand.
