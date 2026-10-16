# Multi-process Architecture

CEP and the underlying Chromium use a multi-process architecture. Every CEP extension runs in its own CEP HTML Engine, which may include three processes: main/browser, renderer, and GPU. For Max OSX, `CEPHtmlEngine` is the main process name, while the two other processes use `CEPHtmlEngine Helper`. On Windows, all three processes are named `CEPHtmlEngine.exe`. With well implemented extensions, multiple processes should not cause a performance problem.

You can identify which extension owns a CEP HTML Engine process by examining command line parameters. On Mac OSX, run `ps -ef | grep CEPHtmlEngine` in a terminal to inspect the command line. On Windows, use http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for command-line inspection guidance. The browser process command line lacks `--type`, whereas renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.
