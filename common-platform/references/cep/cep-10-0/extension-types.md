# Extension Types

CEP recognizes the following extension categories. Declare the chosen type for an extension in its manifest.xml.

- **Panel**
  - A Panel acts like a standard panel in the host application: it can dock, join workspaces, expose fly-out menus, and reopen at startup when it was open during shutdown.
- **ModalDialog**
  - A Modal Dialog opens a separate extension window and blocks work in the host application until the user finishes with that extension window. The host becomes interactive again only after the extension window closes.
- **Modeless**
  - A Modeless Dialog also opens a separate extension window, but it does not require the user to work in that window before returning to the host.
- **Custom (Since CEP 5.0)**
  - Use this type for invisible extensions. Such an extension stays hidden for its entire lifecycle and is never shown onscreen. For details, read "Invisible HTML Extensions".
