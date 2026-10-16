# Creating a new plugin

Manual plugin setup is possible, but templates usually get a project moving faster. In the Developer Tool, create a template-based plugin this way:

- Choose \*_Create Plugin..._.
- The dialog titled "Create Plugin" opens.
- In **Plugin Name**, type the plugin name.
- In **Plugin Id**, type the plugin ID. For local development, any identifier is acceptable if it does not collide with another plugin on the same system; for publishing, obtain one here: https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/. That destination is the Developer Distribution portal.
- Put the plugin version in **Plugin Version**.
- In **Host Application**, choose **Adobe Photoshop**.
- In **Host Application Version**, enter `23.0.0` as the minimum version. UXP plugins are not supported by earlier Photoshop releases. If the plugin depends on APIs added after that release, use the later required version instead.
- In **Template**, choose a template. The "ps-starter" template creates a small plugin without extra frameworks, while "ps-react-starter" creates a React-based plugin.
- Choose **Select Folder**.
- Pick the location for the plugin. The files are generated _inside the selected folder_; when the plugin should live in its own directory, create that directory from this dialog first.

After the files are generated, the Tool's workspace lists the new plugin.
