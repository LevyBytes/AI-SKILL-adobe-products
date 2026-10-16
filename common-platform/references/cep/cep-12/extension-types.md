# Extension Types

CEP supports the extension types below. Specify the extension's type in manifest.xml.

- **Panel**
  - The Panel type acts like other application panels. It can be docked, appears in workspaces, supports fly-out menus, and opens again at startup if it was open at shutdown.
- **ModalDialog**
  - A Modal Dialog type opens an extension window and requires the user to work only with that extension window until it is closed. The host application becomes interactive again after the extension window closes.
- **Modeless**
  - A Modeless Dialog type opens an extension window without requiring the user to interact only with that window.
- **Custom (Since CEP 5.0)**
  - Use this type for invisible extensions. An invisible extension remains hidden for its full life cycle and never becomes visible. See "Invisible HTML Extensions" for details.
