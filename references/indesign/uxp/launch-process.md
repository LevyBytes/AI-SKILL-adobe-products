# Launch process

UXP core APIs include `shell` APIs for starting processes on the user's system.

These APIs mainly support two tasks:

1. Use the standard application to open a file, such as Acrobat Reader for a PDF.
2. Launch applications, such as starting the mail client with an email address.

Before looking at examples, note that these APIs are tied to the `launchProcess` permission in the manifest.

Plugins and Scripts

**In plugins**, the manifest must list the allowed schemes and file extensions under the `launchProcess` permission.
IMPORTANT: Review the [manifest permissions](uxp-plugins.md) module before continuing.

**In scripts**, `launchProcess` permission values are fixed. The manifest details in the examples below can be ignored. These values are explained in the [manifest fundamentals section](uxp-manifest.md).
