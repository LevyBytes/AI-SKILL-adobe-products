# UXP Manifest Notes

Because of an Exchange portal issue, specify `host.minVersion` and `host.maxVersion` in your UXP plugin manifest using a.b format. Support for a.b.c format is planned, but the timing was unconfirmed for later in 2023. As an example, your `manifest.json` might contain:

Merge this property excerpt into the corresponding configuration object.

```json
{
  "host": {
    "app": "PS",
    "minVersion": "22.5.7"
  }
}
```

Before Marketplace submission, change `manifest.json` so minVersion uses a.b. format:

Merge this property excerpt into the corresponding configuration object.

```json
{
  "host": {
    "app": "PS",
    "minVersion": "22.5"
  }
}
```
