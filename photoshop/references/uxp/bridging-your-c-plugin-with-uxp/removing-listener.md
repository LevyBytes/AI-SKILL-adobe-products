# Removing listener

Use this code to stop receiving messages from UXP plugins.

```cpp
sUxpProcs->RemoveUXPMessageListener(gPlugInRef);
```

> _NOTE_: A plugin can register only one notifier.
