# index.js

```js
// Copy formatted text to the clipboard âœ‚ï¸
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.setContent({
      "text/plain": text,
    });
    console.log("âœ… Text copied to clipboard");
  } catch (err) {
    console.error("âŒ Failed to copy to clipboard:", err);
  }
}

// Example usage
copyToClipboard("Welcome to UXP for Premiere!");
```

### index.js

```js
// Paste text from the clipboard ðŸ“‹
async function pasteFromClipboard() {
  try {
    const clipboardData = await navigator.clipboard.getContent();

    if (clipboardData["text/plain"]) {
      console.log(`Pasted text: ${clipboardData["text/plain"]}`);
      return clipboardData["text/plain"];
    } else {
      console.log("âš ï¸ No text data found on clipboard");
      return null;
    }
  } catch (err) {
    console.error("âŒ Failed to read from clipboard:", err);
  }
}

// Example usage
pasteFromClipboard();
```
