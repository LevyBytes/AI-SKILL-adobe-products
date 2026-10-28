# ColorBlendMode.PINLIGHT

Community declaration reference: Photoshop/2015.5.

Replaces colors based on the blend color. For blend colors above 50% gray, the light-source side, pixels darker than that blend are replaced while lighter pixels remain. For blend colors below 50% gray, pixels lighter than that blend are replaced while darker pixels remain. Useful for special effects in an image.

```typescript
declare enum ColorBlendMode {
    PINLIGHT = 17
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
