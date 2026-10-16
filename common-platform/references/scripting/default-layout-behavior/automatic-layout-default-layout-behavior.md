# Automatic layout — Default layout behavior

By default, autoLayoutManager provides the standard layout behavior. A script may change properties on the default layout manager object, or it may create a custom layout manager when the layout needs specialized handling. See Custom layout-manager example.

A container's children can be arranged in one row, in one column, or in a stack where child elements overlap in the same container area and only the uppermost element is fully shown. The container's orientation property controls this, using row, column, or stack.

Panel and Group containers can be nested for more complex structure. To show two columns of controls, for example, create a row-oriented panel that contains two groups, each group using column orientation.

Containers expose properties for margins and for spacing between elements. If a script leaves those unset, the layout manager supplies defaults.

Child alignment inside a container is set by alignChildren on the container and alignment on individual controls. alignChildren defines the container-wide alignment strategy, while a child element can override it with its own alignment value.

The layout manager can obtain a child element's best size from preferredSize. By default, ScriptUI computes that value from control-type characteristics and variable factors such as displayed text plus the font and text size. If either width or height in preferredSize is -1, the layout manager calculates that dimension and uses the specified value for the other dimension.

For information on setting these property values to influence automatic layout, see Automatic layout properties.

Note

Default font and font size choices vary by platform and can also vary between applications on the same platform. As a result, ScriptUI windows created from the same script can look different in different contexts.
