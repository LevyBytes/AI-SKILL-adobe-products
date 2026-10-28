# ComponentsPanel

Community declaration reference: Animate/22.0.

fl.componentsPanel exposes the Components panel through the flash object (fl); see flash object (fl).

```typescript
declare class ComponentsPanel {
    /**
    - Places the specified component in the document at the requested position.
    - Example calls:
    - fl.componentsPanel.addItemToDocument({x:0, y:0}, "User Interface", "CheckBox");
    - fl.componentsPanel.addItemToDocument({x:0, y:100}, "Data", "WebServiceConnector");
    - fl.componentsPanel.addItemToDocument({x:0, y:200}, "User Interface", "Button");
    - @param position A point, such as {x:0, y:100}, that gives the location where the component is added. Specify position relative to the component center point, rather than the component registration point (also called origin point or zero point).
    - @param categoryName A string naming the component category, for example "Data". Accepted category names are listed by the panel.
    - @param componentName A string naming the component inside the specified category, for example "WebServiceConnector". Accepted component names are listed by the panel.
      */
      addItemToDocument(position: Point, categoryName: string, componentName: string): void
    /**
    - Refreshes the component list shown in the Components panel.
    - @returns true when the Component panel list is refreshed; otherwise false.
      */
      reload(): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
