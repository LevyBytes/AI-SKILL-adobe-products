# ExternalObject.searchFolders

ExternalObject.searchFolders

### Description

Alternate locations for shared library lookup are stored in one string, with each path specification separated by semicolons (;).

Each path may be absolute or relative to Folder.startup.

Default value is:

- In Windows, "Plugins;Plug-Ins;."
- In Mac OS, "Plugins;Plug-Ins;Frameworks;.;../../../Plugins;../../../Plug-ins;../../../Frameworks;../../..;"
- In UNIX, "Plugins;Plug-Ins;plugins;."

### Type

String
