# Document.exportVideo

Community declaration reference: Animate/22.0.

Exports document video and can send it to Adobe Media Encoder for conversion.
@param fileURI String as a file:/// URI giving the fully qualified path where the video is saved.
@param convertInAdobeMediaEncoder Boolean choosing whether to send the recorded video to Adobe Media Encoder. It defaults to true, which sends the video to Adobe Media Encoder. Optional.
@param transparent Boolean choosing whether the background is included in the video. It defaults to false, which includes the movie background in the video. Optional.
@param stopAtFrame Boolean choosing whether recording stops at a particular frame or at a specific time. It defaults to true, stopping when a certain frame is reached. Optional.
@param stopAtFrameOrTime When stopAtFrame is true, this int gives the frame count to record. When stopAtFrame is false, it gives the recording duration in milliseconds. The default is 0; with stopAtFrame true, that records every frame in the main timeline. May be omitted.

```typescript
declare class Document {
    exportVideo(
        fileURI: string,
        convertInAdobeMediaEncoder?: boolean,
        transparent?: boolean,
        stopAtFrame?: boolean,
        stopAtFrameOrTime?: number,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
