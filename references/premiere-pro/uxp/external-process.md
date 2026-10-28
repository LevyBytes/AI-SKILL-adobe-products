# External Process

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Open files and start applications from a plugin when a workflow needs to leave Premiere.

The [`shell` API](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/shell.md) lets a UXP plugin communicate with the user's operating system. It can open files in their default apps and start external programs through URL schemes, which helps when a workflow crosses between tools.
