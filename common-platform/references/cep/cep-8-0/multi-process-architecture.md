# Multi-process Architecture

CEP and the underlying Chromium both use a multi-process architecture. A CEP extension runs in a separate CEP HTML Engine that may be split into a main/browser process, a renderer process, and a GPU process. On Max OSX, `CEPHtmlEngine` names the main process, while the other two processes are named `CEPHtmlEngine Helper`. On Windows, all three processes use the name `CEPHtmlEngine.exe`. Well-implemented extensions should not suffer performance problems simply because multiple processes exist.

To identify which extension owns a CEP HTML Engine process, inspect that process's command line parameters. On Mac OSX, check the command line from a terminal with `ps -ef | grep CEPHtmlEngine`. On Windows, see http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for command-line inspection. The browser process omits `--type`; renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.
