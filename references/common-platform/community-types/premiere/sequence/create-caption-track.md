# Sequence.createCaptionTrack

Community declaration reference: Premiere/24.0.

Builds a caption track in the active sequence from caption data on a project item.
@param projectItem Caption source clip, such as .srt.
@param startAtTime Start offset in seconds from the sequence beginning.
@param captionsFormat New-track caption format; optional and defaults to subtitle. Consult the caption-format table.

```typescript
declare class Sequence {
    createCaptionTrack(projectItem: ProjectItem, startAtTime: number, captionFormat: number): Sequence
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
