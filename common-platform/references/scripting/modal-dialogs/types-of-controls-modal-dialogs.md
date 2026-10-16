# Types of controls — Modal dialogs

A modal dialog starts out hidden. A script opens it with the show method, and show does not return until the dialog has closed. The user can close it with a platform-specific window action or with one of the dialog controls you provide, commonly OK or Cancel. For a button used this way, its onClick method must call close or hide. The close method can receive a value that show returns.

For a sample showing those button definitions and callbacks, refer to Defining behavior with event callbacks and listeners.
