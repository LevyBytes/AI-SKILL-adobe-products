# Automatic layout — The AutoLayoutManager algorithm

When a script creates a Window object with elements and shows it for the first time, the visible platform UI window and controls are created. If the script has not supplied explicit control placement, all controls begin at [0, 0] inside their containers and use default dimensions. Before the window becomes visible, the layout manager's layout method assigns positions and sizes to all elements and containers.

During the first call to a Window object's show method, the default AutoLayoutManager layout method performs these operations:

1. Read the managed container's bounds property. If it is undefined, continue with automatic layout. If it is defined, treat the container as explicitly placed by the script and stop layout for that container. Setting both location and size is equivalent to setting bounds, so layout stops in that case as well.
2. Read margins and spacing from the container's margins and spacing properties. Read child orientation and alignment from the container's orientation and alignChildren properties. When any of those properties are undefined, use default values supplied by the platform and user-interface framework.

- If the child is a container, call its layout manager, meaning this same algorithm runs again for that container.
- Read the child's alignment property. If it is defined, use it to override the parent's alignChildren default.
- Read the child's size property. If size is defined, use it for the child's dimensions. If size is undefined, use preferredSize for the dimensions. Ignore the child's location property.
- Store all collected child information for later calculations.

4. Using the orientation, compute a trial location for every child in the row or column, applying inter-element spacing and container margins.
5. Compute the row, column, or stack dimensions from the children's dimensions.
6. Adjust each child's trial location against the container edges according to that child's desired alignment.
7. Assign the bounds property on every child element.
8. Set the container's preferredSize property from the margins and from the dimensions of the child row or column.
