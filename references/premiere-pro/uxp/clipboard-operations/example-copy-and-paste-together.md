# Example: Copy and Paste Together

Some workflows need both clipboard directions, such as changing copied text before placing it back or moving data between a plugin and outside tools.

```js
// Transform clipboard text to uppercase
async function transformClipboardText() {
  try {
    // Read current clipboard content
    const data = await navigator.clipboard.getContent();

    if (data["text/plain"]) {
      const originalText = data["text/plain"];
      const transformedText = originalText.toUpperCase();

      // Write the transformed text back
      await navigator.clipboard.setContent({
        "text/plain": transformedText,
      });

      console.log(`âœ… Transformed: "${originalText}" â†’ "${transformedText}"`);
    } else {
      console.log("âš ï¸ No text found on clipboard");
    }
  } catch (err) {
    console.error("Failed to transform clipboard text:", err);
  }
}

// Example usage
transformClipboardText();
```

That combined read/write workflow requires `"readAndWrite"` in the manifest.
