# Clipboard Security

UXP prevents plugins from reaching the system clipboard unless access is requested, which helps keep clipboard data from being read or changed unexpectedly. When a plugin has to read or write clipboard contents, declare the matching [clipboard permission](../supporting-definitions/permissions-definition.md) in `manifest.json`.

Select the permission tier that matches the operation:

| Permission | Access Level | Use When |
| --- | --- | --- |
| `"read"` | Read-only | Your plugin only needs to paste or read data |
| `"readAndWrite"` | Read and write access | Your plugin needs to copy and paste data |

Use the narrowest permission that still supports the workflow.

Later releases may prompt users to approve clipboard access. Read-only requests are likely to feel easier to approve unless the plugin's behavior clearly depends on writing clipboard data.
