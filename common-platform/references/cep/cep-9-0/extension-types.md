# Extension Types

CEP supports the following extension types. Specify the extension type in manifest.xml.

- **Panel**
  - Panel behaves like any other application panel: it can dock, take part in workspaces, provide fly-out menus, and reopen at startup when it was open at shutdown.
- **ModalDialog**
  - ModalDialog opens a new extension window and requires the user to work only with that extension window until control returns to the host application. The user can interact with the host application only after closing the extension window.
- **Modeless**
  - Modeless opens a new extension window but does not require the user to focus interaction on that extension window.
- **Custom (Since CEP 5.0)**
  - Custom is used for invisible extensions. An invisible extension stays hidden and never appears throughout its lifetime. See "Invisible HTML Extensions" for details.
