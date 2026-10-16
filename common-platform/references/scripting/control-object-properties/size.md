# size

controlObj.size

### Description

This Dimension object defines an element's actual dimensions.

It starts as undefined; unless a script assigns it explicitly, a LayoutManager object defines it.

A script can set size before invoking the layout manager to request an element size other than preferredSize or the default size, but doing so is not recommended.

Defined as [bounds.width, bounds.height].

Warning

Changing an element's size or location also changes bounds, and changing bounds likewise affects size or location.

### Type

Dimension object
