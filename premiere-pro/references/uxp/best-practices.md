# Best Practices

1. **Provide clear context**: `developerText` is shown in the consent dialog. Use plain language that clearly explains the requested action.

```javascript
// âœ… Good: Clear and specific
await shell.openExternal("https://example.com/guide", "Opening tutorial guide in your browser");

// âŒ Avoid: Vague or technical
await shell.openExternal("https://example.com/guide", "Opening URL");
```

2. **Handle user denial gracefully**: A user may refuse the launch request. Inspect the return value and offer another path when needed.

```javascript
const result = await shell.openPath(filePath, "Opening project file");
if (result !== "") {
  // User denied or operation failed
  console.log("Unable to open file. Please open it manually.");
}
```

3. **Check platform compatibility**: Detect the platform before using schemes that exist only on specific systems.

```javascript
const isMac = require("os").platform() === "darwin";
const scheme = isMac ? "maps://" : "bingmaps:";
```

4. **Encode URL parameters**: Encode special characters whenever query parameters are assembled into a URL.

```javascript
const subject = encodeURIComponent("My Subject");
const url = `mailto:user@example.com?subject=${subject}`;
```

5. **Declare all schemes and extensions**: List only the schemes and extensions that the plugin uses, avoiding permissions that are not needed.
