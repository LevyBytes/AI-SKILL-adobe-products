# XMLUI

Community declaration reference: Animate/22.0.

Flash 8 can display custom dialog boxes written with a subset of XML User Interface Language (XUL). An XML User Interface (XMLUI) dialog can support Flash extensibility features such as commands and behaviors by presenting UI for custom features. The XMLUI object lets code read or change dialog properties and finish the dialog with accept or cancel. XMLUI methods are callable from callbacks, including button oncommand handlers.
Create dialog.xml and open it from the JavaScript API through document.xmlPanel(). To obtain the object for the active XMLUI dialog box, read fl.xmlui.

```typescript
declare class XMLUI {
    /**
    - Closes the active XMLUI dialog box as accepted, matching an OK button click.
      */
      accept(): void
    /**
    - Closes the active XMLUI dialog box as canceled, matching a Cancel button click.
      */
      cancel(): void
    /**
    - Reads one property value from the active XMLUI dialog box.
    - @returns String value for the requested property. Boolean-style results arrive as the strings "true" or "false".
    - @param controlPropertyName String naming the XMLUI property to read.
      */
      get(controlPropertyName: string): string
    /**
    - Gets the label/value pair for the selected row in a ListBox or ComboBox identified by controlPropertyName.
    - @returns Object for the current item in the control named by controlPropertyName.
    - @param controlPropertyName String naming the property whose control-item element should be returned.
      */
      getControlItemElement(controlPropertyName: string): XMLUIObj
    /**
    - Reports whether the control is enabled or dimmed.
    - @returns true when the control is enabled; otherwise false.
    - @param controlID String containing the ID attribute of the control whose status is requested.
      */
      getEnabled(controlID: string): boolean
    /**
    - Reports whether the control is visible or hidden.
    - @returns true when the control is visible; false when it is hidden.
    - @param controlID String containing the ID attribute of the control whose visibility is requested.
      */
      getVisible(controlID: string): boolean
    /**
    - Changes one property value on the active XMLUI dialog box.
    - @param controlPropertyName String naming the XMLUI property to change.
    - @param value String holding the new value for that XMLUI property.
      */
      set(controlPropertyName: string, value: string): void
    /**
    - Updates the label/value pair for the selected row in the ListBox or ComboBox named by controlPropertyName.
    - @param controlPropertyName String naming the control item element being set.
    - @param elementItem JavaScript object with a string label property and optional string value property. If value is missing, it is added and set equal to label.
      */
      setControlItemElement(controlPropertyName: string, elementItem: XMLUIObj): void
    /**
    - Empties the ListBox or ComboBox identified by controlID, then fills it with the label/value pairs in elementItemArray.
    - @param controlID String containing the ID attribute of the control to update.
    - @param elementItemArray Array of JavaScript objects with string label properties and optional string value properties. Missing value properties are created and set equal to label.
      */
      setControlItemElements(controlID: string, elementItemArray: XMLUIObj[]): void
    /**
    - Enables a control or disables/dims it.
    - @param controlID String containing the ID attribute of the control to enable or disable.
    - @param enable Boolean selector: true enables the control, false disables/dims it.
      */
      setEnabled(controlID: string, enable: boolean): void
    /**
    - Makes a control visible or hides it.
    - @param controlID String containing the ID attribute of the control to show or hide.
    - @param visible Boolean selector: true shows the control, false hides it.
      */
      setVisible(controlID: string, visible: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
