# AudioFormat

Community declaration reference: Audition/2018.

AudioFormat stores sample rate, bit depth, and channel layout.

```typescript
declare class AudioFormat {
    /**
    - 16 bit signed integer
      */
      static readonly SAMPLETYPE_16: number
    /**

    - 24 bit signed integer
      */
      static readonly SAMPLETYPE_24: number
    /**

    - 32 bit floating point
      */
      static readonly SAMPLETYPE_32: number
    /**

    - 8 bit unsigned integer
      */
      static readonly SAMPLETYPE_8: number
    /**

    - Sample bit depth plus data format. Normalized values include 8 bit unsigned integer, little-endian 16 bit signed integer, packed little-endian 24 bit signed integer, or 32 bit floating point (range -1.0 to 1.0).
      */
      bitDepth: number
    /**

    - Channel layout.
      */
      channelLayout: object
    /**

    - Sample rate.
      */
      sampleRate: number
    /**

    -
    - @param samplerate
    - @param bitDepth
    - @param channelLayout Creates AudioFormat.
      */
      constructor(samplerate: number, bitDepth: number, channelLayout: AudioChannelLayout)
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
