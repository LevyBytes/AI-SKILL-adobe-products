# location

controlObj.location

### Description

This Point object gives the element location as [x, y], the upper-left corner coordinates. Window elements use screen coordinates; other elements use coordinates relative to their parent.

location is defined as [bounds.x, bounds.y].

By default, location remains undefined until the parent container's layout manager runs.

Warning

Changing an element's size or location also changes bounds, and changing bounds likewise affects size or location.

### Type

Point object
