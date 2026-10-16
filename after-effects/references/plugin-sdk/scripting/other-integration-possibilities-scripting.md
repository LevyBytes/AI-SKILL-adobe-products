# Other Integration Possibilities — Scripting

As a fairly light and agile route to automating After Effects tasks, scripting fits the bill. For UI integration, ScriptUI offers one path — letting you build custom dialogs and panels (HTML5 Panels are worth a look as well). Scripting can also work hand in hand with plug-in development whenever some capability is surfaced through scripting but not through the C APIs covered in this document.

ExtendScript, which builds on JavaScript, is the language After Effects scripts are written in. Bundled with After Effects is the ExtendScript ToolKit, a handy environment for authoring and trying out scripts of your own. To safeguard intellectual property, scripts can be compiled down into .jsxbin binary files.

Over on the Adobe I/O website you can reach the After Effects Scripting Guide and turn up a link to the scripting forums, at: https://www.adobe.io/apis/creativecloud/aftereffects.html

Running scripts from the command line is another way to drive After Effects. From within your script you're able to open the project and fire script actions against it. As one example, the statement below runs a script straight from the command line:

```powershell
AfterFX -s "app.quit()"
```

Or, to run a .jsx script that finishes with a quit, use this statement instead:

```powershell
AfterFX -r "C:/path/to/script.jsx"
```

Feedback to the console on Windows comes by way of AfterFX.com, since AfterFX.com is the command line application.
