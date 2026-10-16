# How conflicts are resolved

When mixed sizing modes keep Flex Layout rules from satisfying both a container and its child elements, InDesign applies automatic fixes that avoid unstable results.

- If a container size is Fixed and it contains child elements set to Fill Space, changing the layout to Auto makes InDesign switch those child elements to Fixed size so the structure is preserved.
- If a container is Auto and includes child elements set to Fixed, changing one child element to Fill Space creates a conflict. InDesign then changes the parent container size to Fixed, allowing the layout to stabilize.
- If Wrap Content is on and a child element is Fill Space, InDesign disables wrapping because the fill-space item takes all available space on that axis.
