# Field versus widget attributes

A handful of Field object properties, value among them, reach every widget that is a child of the field. Others, such as rect, belong to one widget alone.

These field properties and methods touch field-level attributes:

Reference data, output or notation; not an executable JavaScript program.

```text
calcOrderIndex, charLimit, comb, currentValueIndices,defaultValue,

 doNotScroll, doNotSpellCheck, delay, doc, editable, exportValues,

 fileSelect, multiline, multipleSelection, name, numItems,page, password,

 readonly, required,submitName, type, userName, value, valueAsString,

 clearItems, browseForFileToSubmit, deleteItemAt, getItemAt, insertItemAt,

 setAction, setItems,signatureInfo, signatureSign, and signatureValidate.
```

These field properties and methods touch widget-level attributes:

Reference data, output or notation; not an executable JavaScript program.

```text
alignment, borderStyle, buttonAlignX, buttonAlignY, buttonPosition,

 buttonScaleHow, buttonScaleWhen, display, fillColor, hidden, highlight,

 lineWidth, print, rect, strokeColor, style, textColor, textFont, textSize,

 buttonGetCaption, buttonGetIcon, buttonImportIcon, buttonSetCaption,

 buttonSetIcon, checkThisBox, defaultIsChecked, isBoxChecked,

 isDefaultChecked, setAction, and setFocus.
```

Note

Whether setAction lands at the field or the widget level turns on the event involved. Fields are the target of the Keystroke, Validate, Calculate, and Format events, while widgets are the target of the MouseUp, MouseDown, MouseEnter, MouseExit, OnFocus, and OnBlur events.

A widget index, nWidget, is taken as a parameter by the checkThisBox, defaultIsChecked, isBoxChecked, and isDefaultChecked methods. Call any of them on a Field object f that stands for one specific widget and the nWidget parameter turns optional — ignored even if supplied — with the method acting on the one widget f wraps.
