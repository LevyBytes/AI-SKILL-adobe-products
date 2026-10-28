# Customize CEF Command Line Parameters

CEPHtmlEngine accepts Chromium/CEF command-line parameters such as `--enable-media-stream`. The Chromium switch list is available at [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP removes certain parameters for specific reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This could overwrite the one in .debug file. Filter out to avoid conflict. |
| --ignore-certificate-errors | This ignores SSL certificate errors. It is a security concern to ignore invalid server certificate, which allows extensions to load files from malicious sites. |

Every remaining parameter is forwarded to the underlying CEF layer. CEF then determines whether each parameter is supported and how it behaves.
