# FileSource.file

app.project.item(index).mainSource.file

app.project.item(index).proxySource.file

### Description

The Extendscript File object identifying the file behind this asset. To alter it:

- When the FileSource serves as an AVItem's proxySource, use setProxy() or setProxyWithSequence().
- When the FileSource serves as a FootageItem's mainSource, use replace() or replaceWithSequence().

### Type

File object; read-only.
