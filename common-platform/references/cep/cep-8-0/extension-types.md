# Extension Types

CEP supports the following extension types. Declare the extension's type in manifest.xml.

- **Panel**
  - A Panel behaves like a normal application panel: it can dock, participate in workspaces, provide fly-out menus, and reopen at startup when it was open at shutdown.
- **ModalDialog**
  - A Modal Dialog opens a new extension window and requires the user to work only in the extension window until it closes. The host application becomes interactive again after the extension window closes.
- **Modeless**
  - A Modeless Dialog opens a new extension window without requiring the user to focus interaction on that window.
- **Custom (Since CEP 5.0)**
  - Use this type for invisible extensions. An invisible extension stays hidden and does not become visible at any point in its life cycle. See "Invisible HTML Extensions" for more detail.
