# Extension Types

CEP supports the extension types below. The extension type must be declared in manifest.xml.

- **Panel**
  - A Panel works like a standard application panel: it can dock, join workspaces, provide fly-out menus, and reopen at startup if it was open when the host closed.
- **ModalDialog**
  - A Modal Dialog opens an extension window and requires the user to finish with that window before control returns to the host application. The host application can be used again only after the extension window closes.
- **Modeless**
  - A Modeless Dialog opens a separate extension window without requiring interaction with that window first.
- **Embedded**
  - An Embedded Panel matches **Panel** behavior except that it cannot be undocked.
- **Custom (Since CEP 5.0)**
  - This type is intended for invisible extensions. An invisible extension stays hidden and is never shown during its lifecycle. For details, read "Invisible HTML Extensions".
