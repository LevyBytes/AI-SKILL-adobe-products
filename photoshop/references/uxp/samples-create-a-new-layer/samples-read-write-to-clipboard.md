# Samples - Read/write to clipboard

The clipboard module, `navigator.clipboard`, is available for these operations:
- place data on a clipboard (`setContent()`)
- retrieve clipboard text (`readText()`) 

```javascript
try {
    const clipboard = navigator.clipboard;
    await clipboard.setContent({ 'text/plain': "Test string" });
} catch (e) {
    throw new Error(e);
}
try {
    const clipboard = navigator.clipboard;
    const text = await clipboard.readText();
    console.log(text);
}  catch (e) {
    throw new Error(e);
}
```
