# FrontEnd.addTeamProjectsItemToBatch

Community declaration reference: MediaEncoder/23.0.

Queues a team project item, yielding an EncoderWrapper instance.
@param projectsURL Team Projects URL or Team Projects Snap; PPro can create a tp2snap file for a ProjectItem through scripting API saveProjectSnapshot.
@param format Format example: â€˜H.264â€™
@param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
@param outputPath Optional. When outputPath is empty, the output file name is derived from projectPath.
@returns EncoderWrapper instance.

```typescript
declare interface FrontEnd {
    addTeamProjectsItemToBatch(
      projectsURL: string,
      format: string,
      presetPath: string,
      outputPath: string,
      ): EncoderWrapper
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
