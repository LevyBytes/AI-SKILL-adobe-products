# TextComposer

Community declaration reference: Photoshop/2015.5.

Specifies the composer used for text.

```typescript
declare enum TextComposer {
    /**
    - Reviews candidate line breaks across a span of lines, so earlier lines can be adjusted to avoid poor breaks later in the paragraph. The result is typically steadier spacing with fewer hyphens.
    - The Adobe Every-line composer finds possible breakpoints, scores them, and applies weighted penalties under these rules: even letter and word spacing receives the highest priority; candidate breakpoints are judged by how far they move away from ideal spacing; hyphenation is avoided where possible; breakpoints that need hyphens receive heavier penalties than breaks with uneven spacing; stronger breakpoints are chosen ahead of weaker ones.
      */
      ADOBEEVERYLINE = 2,
    /**

    - Composes type with the older one-line-at-a-time method. Use it when you want direct control over individual line breaks.
    - Breakpoint selection follows these rules: adjusted word spacing is preferred over hyphenation; hyphenation is preferred over adjusted letter spacing; when spacing must change, compression is favored before expansion.
      */
      ADOBESINGLELINE = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
