# Preferences

Community declaration reference: Audition/2018.

Persistence object for storing and restoring arbitrary values.

```typescript
declare class Preferences {
    /**
    -
    - @param key Retrieve a boolean value.
      */
      getBoolValue(key: string): boolean
    /**

    -
    - @param key Retrieve a number value.
      */
      getNumberValue(key: string): number
    /**

    -
    - @param key Retrieve a string value.
      */
      getStringValue(key: string): string
    /**

    -
    - @param key
    - @param value Set a boolean value.
      */
      setBoolValue(key: string, value: boolean): boolean
    /**

    -
    - @param key
    - @param value Set a number value.
      */
      setNumberValue(key: string, value: number): boolean
    /**

    -
    - @param key
    - @param value Write a string value.
      */
      setStringValue(key: string, value: string): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
