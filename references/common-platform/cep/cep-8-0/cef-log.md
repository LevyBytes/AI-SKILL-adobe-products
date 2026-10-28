# CEF Log

For CEP 4.0 - 6.0, the Chromium Embedded Framework (CEF) inside CEPHtmlEngine writes an additional log:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp\cef_debug.log`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cef_debug.log`

In CEP 6.1 and later, that log is folded into the CEPHtmlEngine log.
