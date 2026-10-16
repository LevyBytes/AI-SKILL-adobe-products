# Bridging your C++ Plugin with UXP

When developers want to combine the C++ based plugin SDK with a UXP based plugin, the C++ SDK now provides a way to communicate with the UXP counterpart. On the C++ side, the plugin is identified through the component's plugin name property in the plugin resource; on the UXP side, the identifier comes from the `id` field in `manifest.json`.
