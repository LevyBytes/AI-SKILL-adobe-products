# Customize CEF Command Line Parameters

Pass Chromium/CEF command-line parameters to CEPHtmlEngine, such as --enable-media-stream. Available Chromium command line [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP filters out some parameters for these reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This could overwrite the one in .debug file. Filter out to avoid conflict. |
| --ignore-certificate-errors | This ignores SSL certificate errors. It is a security concern to ignore invalid server certificate, which allows extensions to load files from malicious sites. |

Every other parameter is passed to the underlying CEF. CEF decides whether each parameter is supported and how it behaves.
