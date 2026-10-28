# Determining a preferred size

Every element has a preferredSize property whose initial value gives practical default dimensions for that element. ScriptUI calculates the default from fixed characteristics of the element type and variable details such as the text string displayed in a button or text element.

When size is undefined for an element, the layout manager uses preferredSize to determine that element's dimensions during layout. In most cases, avoid explicitly setting preferredSize and allow ScriptUI to calculate the best value from the element's state at layout time. This supports localizable strings for user-interface element text; see Localization in ScriptUI objects. The element's width and height are then computed from the selected language-specific text at layout time instead of from a fixed size written into the script.

A script can still set preferredSize explicitly to give the layout manager a hint for elements whose default size cannot be determined easily, such as an IconButton element without an initial image to measure.

preferredSize can specify only one dimension. A width or height of -1 tells the layout manager to calculate that dimension while using the provided value for the other one.

A control can also have maximum and/or minimum size values that restrict resizing. Automatic layout has a default maximum size that keeps generated elements from exceeding the screen.

To make controls fit current text contents, or to respond after a user resizes the window, explicitly call resize() on the layout object.
