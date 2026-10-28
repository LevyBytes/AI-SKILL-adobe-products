# Inspecting object models

The ExtendScript Toolkit can inspect the object model for any loaded dictionary through the Object Model Viewer, opened from the Help menu.

Object Model Viewer (OMV) opens as its own floating window. In the OMV, you can browse the object hierarchy, inspect each property's type and description, and view each method's description and parameters.

The Browser section's drop-down menu at the upper left lets you choose among loaded object dictionaries. Each dictionary gives access to one application or subsystem's object model.

- Adobe tools and utilities such as File and Folder are included in the Core JavaScript Classes dictionary.
- The ScriptUI Classes dictionary lists interface elements from the ScriptUI JavaScript module.
- Every Adobe application defines a dictionary for its Document Object Model (DOM). A particular application's dictionary may appear only after that application is launched or selected as the Toolkit target.

To inspect an object model, choose the relevant dictionary from the Browser menu. Classes from that model appear in the Classes panel. Selecting a class fills the Types panel with available element types (Constructor, Class, Instance, Event). Selecting a type fills the Properties and Methods panel with elements of that type.

After you select a class or element, a description opens on the right. Descriptions stack and remain visible until closed. Each one can be closed separately from the mouse-over menu in its lower-right corner, or every open description can be closed with the Close All button at the upper left of the OMV window.

The same mouse-over menu can bookmark an element for quick access or copy text from the description. Live links in descriptions navigate to related objects and elements, and text can be searched in names or descriptions.
