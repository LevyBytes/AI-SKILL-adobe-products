# Step 1: Create the plugin

Start in the UXP Developer Tool and press the _"Create plugin..."_ button. When the dialog appears, supply these values:

| Field | Value |
| --- | --- |
| Plugin Name | My first plugin |
| Plugin Id | my.first.plugin |
| Plugin Version | 1.0.0 |
| Host Application | Adobe Photoshop |
| Host Application Version | 23.0.0 |
| Template | quick-layers-starter |

Press _"Select Folder"_ and choose a new empty folder for plugin development. The Developer Tool writes the required files into that folder and adds the plugin to its plugin list.

The chosen folder should now include these files:

- `icons`: a folder with the plugin icon set
- `index.html`: the plugin entrypoint, loaded when the plugin starts
- `manifest.json`: metadata from the UDT dialog, plus a pointer to `index.html` as an
  entrypoint.

Additional "meta" files such as `LICENSE`, `README.md`, etc. are created as well.
