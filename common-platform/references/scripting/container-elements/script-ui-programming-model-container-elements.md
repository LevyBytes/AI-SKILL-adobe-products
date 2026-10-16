# ScriptUI programming model — Container elements

Every Window is a container, meaning it holds other elements inside its bounds. A Window can contain Panels and Groups, which are additional container types. Those containers can hold controls and can also nest other Panel and Group containers. A Window itself cannot be placed inside another container.

- A Group is the simplest container for visually organizing related controls. A common pattern is to define a group and fill it with related elements, for example an edittext field paired with a descriptive statictext label.
- A Panel is a frame object, also commonly used to visually organize related controls. It provides a text property for a title and may include a border that separates its contents from other dialog elements.
- A TabbedPanel is a frame whose only children are Tab elements. Each Tab is a frame with a localizable title on the selection tab and contains its own set of controls. While a tab is active, the TabbedPanel.selection property contains that Tab object.

One approach is to create a Panel, then place several Groups inside it, each with its own elements. Nested containers with different layout properties let you build relatively complex layouts without explicit placement.

Use the add method to add elements to any container; see Adding elements to containers. An element added this way becomes a child of that container. Some container operations affect children as well: hiding a container also hides its children.
