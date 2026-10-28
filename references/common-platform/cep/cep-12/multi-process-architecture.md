# Multi-process Architecture

CEP and Chromium beneath it use a multi-process architecture. Every CEP extension runs in its own CEP HTML Engine, which can include three processes: a main/browser process, a renderer process, and a GPU process. On Max OSX, the main process is called `CEPHtmlEngine`; the other two are called `CEPHtmlEngine Helper`. On Windows, all three use the name `CEPHtmlEngine.exe`. Well-built extensions should not have performance trouble simply because multiple processes exist.

To determine which extension owns a CEP HTML Engine process, inspect that process's command line parameters. On Mac OSX, run `ps -ef | grep CEPHtmlEngine` in a terminal to view the command line. On Windows, see http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for checking command line arguments. The browser process has no `--type` argument, while renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.
