# window.localStorage

Use this local key-value store for preferences and similar plugin data.
Although the data can persist, several clearing paths can remove it, so `localStorage` should hold only information your plugin can rebuild elsewhere.

Keep passwords and other sensitive data out of `localStorage`; use [storage.secureStorage](../storage-secure-storage/reference-index.md) for that class of storage.
