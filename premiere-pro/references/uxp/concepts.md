# Concepts

Before starting plugin work, learn how UXP Plugins are organized and how they attach to Premiere.

Every UXP plugin relies on several core ideas:

- **The Manifest** - the `manifest.json` JSON file for plugin identity, capabilities, permissions, and entrypoints.
- **Entrypoints** - Premiere-facing commands and panels through which plugin functionality appears.
- **Hybrid Plugins** - a model for combining JavaScript-driven extension code with native C++ libraries.

Together, these concepts determine how the host application and users discover, load, and interact with a plugin. Knowing them helps you plan architecture, manage lifecycle events, and integrate cleanly with UXP.

Explore the following guides to learn more:

- [**Entrypoints**](uxp-entrypoints/entrypoints.md): How to declare, wire, and handle plugin panels and commands.
- [**Manifest**](manifest.md): How the `manifest.json` file is structured and configured.
- [**Hybrid Plugins**](hybrid-plugins/reference-index.md): How to extend plugins with high-performance C++ native libraries.
