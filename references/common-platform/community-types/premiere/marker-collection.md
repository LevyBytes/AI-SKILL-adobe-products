# MarkerCollection

Community declaration reference: Premiere/24.0.

```typescript
declare class MarkerCollection {
    /**

    - */
      readonly numMarkers: number
    /**

    - */
      bind(eventName: string, function_: any): void
    /**

    - */
      createMarker(start: number, name: string, duration: number, comments: string): Marker
    /**

    - */
      deleteMarker(marker: Marker): void
    /**

    - */
      getFirstMarker(): Marker
    /**

    - */
      getLastMarker(): Marker
    /**

    - */
      getNextMarker(marker: Marker): Marker
    /**

    - */
      getPrevMarker(marker: Marker): Marker
    /**

    - */
      setTimeout(eventName: string, function_: any, milliseconds: number): void
    /**

    - */
      unbind(eventName: string): void
    /**

    - */
      [index: number]: Marker
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
