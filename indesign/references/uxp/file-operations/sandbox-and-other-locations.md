# Sandbox and other locations

By default, UXP limits file access to specific areas of the user's file system. Those allowed areas make up the sandbox.

Plugins and Scripts

**In plugins**, the sandbox normally includes the plugin folder together with temporary and data folders. The plugin folder cannot be written to. The temporary and data folders are intended for transient data. Information stored there may be erased unexpectedly, so do not treat it as durable.

**In scripts**, the sandbox contains only a temporary folder. Use it for transient data, and expect that it may be erased.

Some workflows need files outside those locations. UXP can reach them, but only after permission is requested.
