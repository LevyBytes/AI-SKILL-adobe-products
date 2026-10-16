# Add Lifecycle Hooks

Handle plugin and panel events with lifecycle hooks.

### Overview

The [Entrypoints concept guide](uxp-entrypoints/reference-index.md) describes lifecycle hooks as callback functions that run automatically when particular Plugin or Panel lifecycle events occur. They are optional and fit setup work, teardown work, or similar lifecycle logic.

This guide applies only to **Plugins with at least one Panel**; Commands do not have related hooks. If you need to review the difference between a Command and a Panel, read [here](panels-and-commands/reference-index.md).
