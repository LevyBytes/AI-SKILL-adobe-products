# Option #2 - `ExManCmd`

1. Download `ExManCmd` - Get the Extension Manager Command Line tool (ExManCmd) from these locations. Its command-line interface covers many operations available in the Extension Manager interface:

   - ExManCmd - Mac: https://www.adobe.com/go/ExManCmdMac
   - ExManCmd - Windows: https://www.adobe.com/go/ExManCmdWin

1. Unzip the `ExManCmd` toolkit - Extract the downloaded toolkit so the `ExManCmd` file is ready for the next step.

1. Install the package - Use the available `ExManCmd` commands to install or uninstall the package. See [Extension Manager command-line basics](https://helpx.adobe.com/extension-manager/using/command-line.html) for details.

Command syntax notation: replace angle-bracket arguments and omit unused optional brackets before execution.

```text
ExManCmd --install <zxpPath>
```

   **Example**

```bash
./ExManCmd --install ~/Documents/myExtension.zxp
```

   If an error appears, consult the [extensions installation error codes and description](https://helpx.adobe.com/exchange/kb/error-codes.html) for additional information.
