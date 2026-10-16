# AME Scripting Guide — How do I run scripts in AME?

As in Premiere Pro, Visual Studio Code with the "ExtendScript Debugger" extension can send scripts from VS Code into AME and debug them inside the application. Open the script, choose the target, then run or debug it.

Scripts can also be started from a Mac or Windows command line with this form:

Run the Media Encoder binary with `--console es.processFile`, followed by the script’s full path. Quote each path when it contains spaces. This is a shell invocation, not JavaScript.

Mac example for running a test script:

```bash
"/Applications/Adobe Media Encoder (Beta)/Adobe Media Encoder (Beta).app/Contents/MacOS/Adobe Media Encoder (Beta)" \
  --console es.processFile "$HOME/Desktop/test.js"
```
