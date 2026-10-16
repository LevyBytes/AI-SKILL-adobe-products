# window.localStorage

`window.localStorage` supplies a local key-value store for preferences and similar data.
Although the data usually persists, several actions can clear it, so keep only values that your plugin can rebuild elsewhere.

Avoid putting passwords or other secure data in `localStorage`; use [storage.secureStorage](../storage-secure-storage/reference-index.md) instead.
