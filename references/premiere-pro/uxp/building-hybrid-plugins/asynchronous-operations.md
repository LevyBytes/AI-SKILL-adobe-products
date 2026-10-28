# Asynchronous Operations

Understand the uxpaddon threading model before adding native behavior:

- **Initialization and termination** routines execute on the host application's **main thread**.
- **JavaScript calls** into addon functions execute on a **dedicated scripting thread**, never on the main thread.

If an addon needs main-thread work, such as host-specific API interaction, and then must return data to JavaScript, use the asynchronous scheduling APIs. JavaScript receives these operations as **Promises**.

The flow has three parts:

1. **From the scripting thread**: create a deferred promise and schedule the main-thread work.
2. **On the main thread**: run the task, then schedule result handling back on the scripting thread.
3. **Back on the scripting thread**: settle the promise by resolving or rejecting it.

```cpp
addon_value MyAsyncOperation(addon_env env, addon_callback_info info) {
    // Extract and convert arguments to standard C++ types
    // (addon_value is transient and cannot be used after this function returns)
    std::string myArg = ExtractString(env, argValue);

    // Create a promise for the JavaScript caller
    addon_deferred promiseValue = nullptr;
    addon_value deferred = nullptr;
    apis.uxp_addon_create_promise(env, &deferred, &promiseValue);

    // Schedule work on the main thread
    apis.uxp_addon_schedule_on_main_queue(env, MainThreadTask, ...);
    return deferred;
}

void MainThreadTask(...) {
    // Perform the task on the main thread...

    // When done, schedule the result back to the scripting thread
    apis.uxp_addon_schedule_on_javascript_queue(env, ScriptThreadTask, ...);
}

void ScriptThreadTask(...) {
    apis.uxp_addon_open_handle_scope(env, &scope);

    // Resolve (or reject) the JavaScript promise
    addon_value resultValue = nullptr;
    apis.uxp_addon_resolve_deferred(env, deferred, resultValue);
    apis.uxp_addon_close_handle_scope(env, scope);
}
```

The SDK's `template-dev` project contains this pattern in working form; see `MyAsyncEcho` in `module.cpp`.
