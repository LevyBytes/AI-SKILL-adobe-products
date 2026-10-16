# Custom Script manifest

The manifest is a plain JSON file with this structure:

Choose one host-version strategy. Major/minor values below are the source’s illustrative version values, not a claim that they are the newest Illustrator version.

`latest_version` manifest example:

```json
{
  "manifestVersion": "1.0.0",
  "id": "<Unique ID for the custom script>",
  "name": "<Name of the custom script>",
  "version": "<x.y.z>",
  "host": {
    "app": "illustrator",
    "appVersionStrategy": "latest_version"
  },
  "apiEntryPoints": [
    {
      "type": "capability",
      "path": "script.jsx",
      "language": "extendscript"
    }
  ]
}
```

`fixed_major_version` manifest example:

```json
{
  "manifestVersion": "1.0.0",
  "id": "<Unique ID for the custom script>",
  "name": "<Name of the custom script>",
  "version": "<x.y.z>",
  "host": {
    "app": "illustrator",
    "appVersionStrategy": "fixed_major_version",
    "majorAppVersion": 20
  },
  "apiEntryPoints": [
    {
      "type": "capability",
      "path": "script.jsx",
      "language": "extendscript"
    }
  ]
}
```

`fixed_major_and_minor_version` manifest example:

```json
{
  "manifestVersion": "1.0.0",
  "id": "<Unique ID for the custom script>",
  "name": "<Name of the custom script>",
  "version": "<x.y.z>",
  "host": {
    "app": "illustrator",
    "appVersionStrategy": "fixed_major_and_minor_version",
    "majorAppVersion": 20,
    "minorAppVersion": 1
  },
  "apiEntryPoints": [
    {
      "type": "capability",
      "path": "script.jsx",
      "language": "extendscript"
    }
  ]
}
```

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| `manifestVersion` | string | Version for the manifest file format. At present, only 1.0.0 is supported. | YES |
| `name` | string | Script name used when invoking the capability. See [API Capability Naming Rules](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/getting-started/concepts/index.md#api-capability-naming-rules) for additional rules. | YES |
| `version` | string | Custom script version in x.y.z format. It must contain three segments, with every version component from 0 through 99. | YES |
| `host.app` | string | Host application that runs this script. The sole currently valid value is `illustrator`. | YES |
| `host.appVersionStrategy` | string | Controls app-version selection: latest_version, fixed_major_version, or fixed_major_and_minor_version. | NO |
| `host.majorAppVersion` | string | Major app version; for 20.0.34, this value is 20. It is required when appVersionStrategy is fixed_major_version or fixed_major_and_minor_version. | NO |
| `host.minorAppVersion` | string | Minor app version; for 20.0.34, this value is 0. It is required when appVersionStrategy is fixed_major_and_minor_version. | NO |
| `apiEntryPoints` | array | Array containing `<EntryPointDefinition>` objects. It defines the API entry points used by the custom script. | NO |

- If a customer registers a script and omits the strategy, latest_version is selected automatically as the default.
- The majorAppVersion parameter is required when appVersionStrategy is fixed_major_version.
- Both majorAppVersion and minorAppVersion are required when appVersionStrategy is fixed_major_and_minor_version.
