# The `entrypoints.setup()` method

Providing an implementation for `entrypoints.setup()` is optional, but strongly recommended. It can:

1. Set **lifecycle hooks at a Plugin** level.
2. Set **lifecycle hooks at a Panel** level.
3. Create **flyout menus** and connect the appropriate handlers for each Panel entrypoint.
4. Register **handlers for each Command** entrypoint.

Lifecycle hooks

Lifecycle hooks are callbacks that run automatically when particular Plugin or Panel lifecycle events occur. They are optional and can handle setup, teardown, or similar work.

Beginning with Manifest version 5, most lifecycle **handlers may be asynchronous** and can return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). See [Using Promises](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/entrypoints/index.md#using-promises) below for an example.
