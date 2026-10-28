# Custom script ZIP structure

Package a custom script as a ZIP archive with this structure:

```text
my-capability.zip
  â”œâ”€â”€ script.jsx     â€” Script with main() function
  â””â”€â”€ manifest.json  â€” Capability metadata
```

- **script.jsx**: This script file must expose `main()` as the entry point.
- **manifest.json**: Provides the capability metadata. The capability name used in the execute URL comes from this file. For script-name requirements, see [API Capability Naming Rules](../illustrator-api-key-concepts/api-capability-naming-rules.md).
