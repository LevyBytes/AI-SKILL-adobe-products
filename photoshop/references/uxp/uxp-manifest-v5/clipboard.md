# Clipboard

Read and/or write access to the system clipboard is granted through `requiredPermissions`. `clipboard` accepts:
- `readAndWrite`: enables both clipboard reading and writing.
- `read`: enables reading only. 

```json
{
  "requiredPermissions": {
    "clipboard": "readAndWrite"
  }
}
```

 

Requires clipboard readAndWrite permission.

```javascript
const clipboard = navigator.clipboard;
const dataTransferProviders = { 'text/plain': 'Sample text' };
await clipboard.write(dataTransferProviders);
```
