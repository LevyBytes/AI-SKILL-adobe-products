# ScriptUI programming model - Removing elements

Use the container's remove method to remove elements from a Window, Panel, or Group. The argument can be the element object, the element name, or the element's index in the container's children collection; see Accessing child elements.

If the target element is visible, it is taken out of view, and it can no longer be accessed from the container or window. Any later script references to that element object have undefined results.

Remove list items from a list by calling the parent list control's remove method in the same manner. The item is removed from the parent's items list, hidden from view, and its item object is deleted.
