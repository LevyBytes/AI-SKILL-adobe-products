# Host Applications

A UXP plugin `.ccx` installer may target only a single host application. In `manifest.json`, the [`host`](../required-properties/host.md) property therefore has to be one [`HostDefinition`](../supporting-definitions/host-definition.md) object.

**Only during development**, you may make `host` an array of `HostDefinition` objects so the same plugin can load into more than one application at once.

Production: one HostDefinition object.

```json
{
  "host": {
    "app": "premierepro",
    "minVersion": "25.6.0"
  }
}
```

Development only: an array of HostDefinition objects.

```json
{
  "host": [
    {
      "app": "premierepro",
      "minVersion": "25.6.0"
    },
    {
      "app": "ps",
      "minVersion": "25.0.0"
    }
  ]
}
```

When `host` contains an array, the **UXP Developer Tool automatically packages the plugin for the first host application** by converting that array to a single `HostDefinition` object internally.
