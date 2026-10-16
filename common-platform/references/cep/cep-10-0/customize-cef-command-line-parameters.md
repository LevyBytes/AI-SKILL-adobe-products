# Customize CEF Command Line Parameters

Pass Chromium/CEF command line parameters, such as --enable-media-stream, to CEPHtmlEngine. The Chromium command-line switch list is available at [parameters](http://peter.sh/experiments/chromium-command-line-switches/).

CEP filters out certain parameters for specific reasons:

| Parameters | What is it filtered out? |
| --- | --- |
| --remote-debugging-port | This could overwrite the one in .debug file. Filter out to avoid conflict. |
| --ignore-certificate-errors | This ignores SSL certificate errors. It is a security concern to ignore invalid server certificate, which allows extensions to load files from malicious sites. |

Every other parameter is passed to the underlying CEF layer. CEF determines whether a parameter is supported and how it behaves.
