# Multi-process Architecture

CEP and its underlying Chromium runtime use a multi-process architecture. Every CEP extension runs inside its own CEP HTML Engine, which can include three processes: a main/browser process, a renderer process, and a GPU process. On macOS, the main process is named `CEPHtmlEngine`, while the other two are named `CEPHtmlEngine Helper`. On Windows, all three processes are named `CEPHtmlEngine.exe`. Well-implemented extensions should not suffer performance issues from multiple processes.

To identify which extension owns a CEP HTML Engine process, inspect its command-line parameters. On macOS, run `ps -ef | grep CEPHtmlEngine` in Terminal. On Windows, see http://superuser.com/questions/415360/how-do-i-find-out-command-line-arguments-of-a-running-program for command-line inspection. The browser process command line does not contain `--type`; the renderer and GPU processes include `--type=renderer` and `--type=gpu-process`.
