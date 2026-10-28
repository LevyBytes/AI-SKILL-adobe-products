# Flash.publishCacheMemoryEntrySizeLimit

Community declaration reference: Animate/22.0.

Maximum entry size, measured in kilobytes, allowed in the in-memory publish cache. Entries at or below the limit stay in memory; larger entries go to disk.
Users with ample memory can raise the value for better performance, while users with limited memory can lower it so the publish cache consumes less memory.

```typescript
declare class Flash {
    publishCacheMemoryEntrySizeLimit: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
