# Singleton Pattern

The Singleton pattern keeps the dialog class to **one instance for the whole plugin lifetime**. If the code created a new dialog every time, it could add duplicate DOM nodes and repeated event listeners, causing leaks and erratic behavior.

`static #instance` is **private to the class** because of the `#` prefix. When `new ModalDialog()` is called, the constructor returns the existing instance if one is already present. The `getInstance()` static method is a clearer entry point and is the **preferred way to get the singleton**.

`#dialog` keeps the actual `<dialog>` DOM element. `#params` stores validated user-entered width and height after OK is clicked. Both fields are private because external code does not need direct access.
