# Flash.mapPlayerURL

Community declaration reference: Animate/22.0.

Converts an escaped Unicode URL into a UTF-8 or MBCS URL. Use this method before ActionScript consumes the string for external-resource access. It is required when multibyte characters must be handled.
@returns Converted URL string.
@param URI String containing the escaped Unicode URL to map.
@param returnMBCS Boolean value that must be true when an escaped MBCS path should be returned. Otherwise, the return format is UTF-8. The parameter is optional, with false as its default value.

```typescript
declare class Flash {
    mapPlayerURL(URI: string, returnMBCS?: boolean): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
