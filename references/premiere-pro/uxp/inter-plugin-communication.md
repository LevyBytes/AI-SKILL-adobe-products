# Inter Plugin Communication

UXP supports messaging between plugins that are installed in the same application

This is useful when a different installed plugin already performs the operation you need; your plugin can call into it rather than rebuilding the same behavior. For a good user experience, make the dependency clear to users.

### Overview

The **Plugin Manager** module supplies the APIs used to make the connection. Before working through the sample, review these related topics:

- [Plugin Entrypoints](uxp-entrypoints/reference-index.md)
- [Manifest Permissions](supporting-definitions/permissions-definition.md)

You also need enough knowledge about the target plugin to call it correctly, including:

- Its `id` and `entrypoints`
- The argument structure expected by the target, when arguments are required.
