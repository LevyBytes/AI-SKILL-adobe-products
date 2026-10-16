# File promise

When the file content already exists as an ArrayBuffer — local PDF files being one case — you can pass it straight in as a Promise, one that ought to resolve to the file content's ArrayBuffer.

```javascript
function previewPdfData(view, filePromise, fileName) {
    return view.previewFile({ content: { promise: filePromise }, metaData: { fileName } });
}
```

A common route to a file promise is letting users pick a local file to upload. The HTML for that might look like this:

```html
<label for="file-picker"> Choose a PDF file:</label>
<input type="file" id="file-picker" accept="application/pdf" />
```

With the file uploaded, a small helper function can read it and pass it along to `adobeDCView.previewFile`:

```javascript
function listenForFileUpload(view, fileInput, onError) {
    const handleChange = async () => {
        const file = fileInput.files[0];
        if (!file) return;
        const filePromise = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error || new Error("Cannot read PDF"));
            reader.onabort = () => reject(new Error("PDF read was aborted"));
            reader.readAsArrayBuffer(file);
        });
        try {
            await filePromise;
            await view.previewFile({
                content: { promise: filePromise },
                metaData: { fileName: file.name }
            });
        } catch (error) {
            onError(error);
        }
    };
    fileInput.addEventListener("change", handleChange, false);
    return () => fileInput.removeEventListener("change", handleChange, false);
}
```

Pass the initialized View, a file input element such as document.getElementById("file-picker"), and an error-reporting callback. Call the returned cleanup function when detaching the input.
