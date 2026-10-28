# Marker

Community declaration reference: Premiere/24.0.

```typescript
declare class Marker {
    /**

    - */
      comments: string
    /**

    - */
      end: Time
    /**

    - */
      readonly guid: string
    /**

    - */
      name: string
    /**

    - */
      start: Time
    /**

    - */
      type: string
    /**

    - */
      bind(eventName: string, function_: any): void
    /**

    - */
      getWebLinkFrameTarget(): string
    /**

    - */
      getWebLinkURL(): string
    /**

    - */
      setTimeout(eventName: string, function_: any, milliseconds: number): void
    /**

    - */
      setTypeAsChapter(): void
    /**

    - */
      setTypeAsComment(): void
    /**

    - */
      setTypeAsSegmentation(): void
    /**

    - */
      setTypeAsWebLink(url: string, frameTarget: string): void
    /**

    - */
      getColorByIndex(): number
    /**

    - */
      setColorByIndex(index: number): void
    /**

    - */
      unbind(eventName: string): void
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
