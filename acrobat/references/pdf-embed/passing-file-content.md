# Passing file content

Per the example above, the PDF data travels through the `content` field, supplied as either a file URL or a file promise. Either way, you must include the `metaData` field carrying a mandatory filename.

Call `view.previewFile(file, previewOptions)` with a `content` object and `metaData`. Choose either `content.location` for a URL or `content.promise` for promised file data. `metaData.fileName` is required; add other metadata fields as needed.

Supply both a file URL and a file promise and the promise wins out, with the URL value disregarded.
