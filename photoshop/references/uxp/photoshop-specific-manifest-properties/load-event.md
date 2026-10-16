# loadEvent

> `Available in Photoshop 23.1 and later` Loading plugins consumes memory and CPU. To reduce ordinary Photoshop overhead, plugins normally load lazily. The default behavior loads a plugin when its panel UI is shown, or when the user runs one of its commands from the `Plugins` menu. Some workflows need the plugin present as soon as Photoshop starts. Examples include plugins that monitor and react to user actions, or plugins that must talk to a remote server or process while Photoshop is open. The loadEvent field lets a plugin choose the point at which it loads. Supported values are:
- `use`: Loads the plugin on demand, either when its UI becomes visible or when a plugin command runs. This is the default value.
- `startup`: Loads the plugin automatically soon after Photoshop starts.
