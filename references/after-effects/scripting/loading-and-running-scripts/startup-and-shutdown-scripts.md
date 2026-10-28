# Running scripts automatically during application startup or shutdown

The Scripts folder holds two subfolders named Startup and Shutdown. On launch and on quit respectively, After Effects runs the scripts inside them on its own, working through each folder in alphabetical order.

Scripts you want to run when the application starts up go in the Startup folder. They run once the application has initialized and every plug-in has loaded.

Because scripting runs in a shared global environment, any script that fires at startup can declare variables and functions that every other script can then see. In every case, once a script defines variables and functions by running, they stick around for later scripts throughout a given After Effects session. Quitting the application wipes all of those globally defined variables and functions. Give your script variables distinctive names so one script doesn't accidentally overwrite global variables meant to last the whole session.

You can also bolt attributes onto existing objects — the Application object, for instance — to extend the application for the benefit of other scripts.

Scripts in the Shutdown folder run while the application is quitting, after the project has closed but ahead of the rest of the application's shutdown.
