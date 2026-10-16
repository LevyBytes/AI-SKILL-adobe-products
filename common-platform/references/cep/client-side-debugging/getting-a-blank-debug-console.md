# Getting a blank debug console

When Chrome opens an empty debug console, [review the contents of your `.debug` file again](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#write-contents-for-the-debug-file):

- Is the extension ID in `.debug` identical to the one in `manifest.xml`?
- Did you list each supported host app with the correct Host ID(s)?
- Is `localhost` being opened on the same port named in the debug console?

If the issue continues, follow the process in [this Adobe forum discussion](https://community.adobe.com/t5/exchange-discussions/debug-console-not-working-correctly/m-p/9608300).
