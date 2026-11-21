# Activating full scripting features

Scripts cannot write files or communicate over a network until you enable **Allow Scripts To Write Files And Access Network**.

- Windows: choose **Edit > Preferences > Scripting & Expressions**, then enable that option.
- macOS: choose **After Effects > Settings > Scripting & Expressions**, then enable that option.

An error that prevents a script from finishing produces an application error message identifying the error and its script line. Use that location to inspect the failing statement.

For debugging with Visual Studio Code, use Adobe's [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug). A `launch` session evaluates the script with debugging active; an `attach` session remains connected for scripts and callbacks triggered later.

In legacy installations with the ExtendScript Toolkit (ESTK), **Preferences > General > Enable JavaScript Debugger** enables automatic debugger opening on script errors. That behavior is disabled by default. The legacy guide also places file and network permissions under **Preferences > General**; use the current platform-specific locations above for current releases.

Sources: [Adobe scripting permissions](https://helpx.adobe.com/after-effects/desktop/automate-in-after-effects/automate-animation/scripts.html), [scripting overview and legacy ESTK behavior](https://ae-scripting.docsforadobe.dev/introduction/overview/#activating-full-scripting-features).
