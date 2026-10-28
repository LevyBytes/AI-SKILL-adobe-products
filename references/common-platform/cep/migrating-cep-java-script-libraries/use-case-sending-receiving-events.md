# Use Case: Sending/Receiving Events

CSXS/CEP events carry messages between extensions in one application and between extensions in separate applications.

**Photoshop DOM events**: Inside an extension, attach event listeners to the DOM of the plugin panel or modal to send and receive events, then listen for Photoshop app changes through the Photoshop UXP API.

**UXP events**: UXP lifecycle events let a plugin receive and send host-application events and manage its lifecycle more cleanly.

Plugin lifecycle events available to a plugin include:

- `uxpcreateplugin`: Fires after the plugin's JS context has been created and the plugin has loaded successfully.
- `uxpdestroyplugin`: Fires just before the plugin's JS context is destroyed.

Panel lifecycle events available to a plugin include:

- `uxpcreatepanel`: Fires just before a panel is created. It runs the first time a panel appears and again after the panel has been destroyed.
- `uxpdestroypanel`: Fires just before a panel is destroyed.
- `uxpshowpanel`: Fires just before a panel is shown and should render UI into the attached node. It runs whenever the panel is shown.
- `uxphidepanel`: Fires when a panel is hidden.
- `uxpinvokepanelmenu`: Fires after a panel menu item is invoked.

Command lifecycle events available to a plugin include:

- `uxpcommand`: Fires when the user, or Photoshop, requests that the plugin run a command.
- `uxpcommandrun`: Fires when the plugin is about to run a command.
- `uxpcommandcancel`: Fires when the user cancels the command.

These events are supported by the following additions:

1. Entrypoints support async behavior.
2. The latest manifest update changes entrypoint parameters:
   - [v4](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/entrypointsetup-v4.js) - takes Event {event name, node, PanelID, PanelInfo}
   - [v5](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/entrypointsetup-v5.js) - takes node and data(if applicable)
3. The default entrypoint timeout is now 300 milliseconds.
