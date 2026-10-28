# Customize CEF Command Line Parameters

CEPHtmlEngine accepts Chromium/CEF command line switches such as --enable-media-stream. For the complete external Chromium switch list, see [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP blocks certain parameters for specific reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This might replace the value from the .debug file, so CEP removes it to prevent conflicts. |
| --ignore-certificate-errors | This disables SSL certificate validation. Ignoring invalid server certificates is risky because extensions could load files from hostile sites. |

Every other parameter is forwarded to the underlying CEF layer. CEF itself determines whether a parameter is supported and how it behaves.
