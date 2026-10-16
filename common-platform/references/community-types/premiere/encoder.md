# Encoder

Community declaration reference: Premiere/24.0.

```typescript
declare class Encoder {
    /**

    - */
      readonly ENCODE_ENTIRE: number
    /**

    - */
      readonly ENCODE_IN_TO_OUT: number
    /**

    - */
      readonly ENCODE_WORKAREA: number
    /**

    - */
      bind(eventName: EncoderEvent, function_: any): void
    /**

    - */
      encodeFile(
      inputFilePath: string,
      outputFilePath: string,
      presetPath: string,
      removeOnCompletion?: number,
      startTime?: object,
      stopTime?: object,
      ): string
    /**

    - */
      encodeProjectItem(
      projectItem: ProjectItem,
      outputFilePath: string,
      presetPath: string,
      WorkAreaType?: number,
      removeOnCompletion?: number,
      ): string
    /**

    - */
      encodeSequence(
      sequence: Sequence,
      outputFilePath: string,
      presetPath: string,
      WorkAreaType?: number,
      removeOnCompletion?: number,
      ): string
    /**

    - */
      getExporters(): Array<any>
    /**
    - */
      launchEncoder(): boolean
    /**

    - */
      setEmbeddedXMPEnabled(enable: number): void
    /**

    - */
      setSidecarXMPEnabled(enable: number): void
    /**

    - */
      setTimeout(eventName: string, function_: any, milliseconds: number): void
    /**

    - */
      startBatch(): boolean
    /**

    - */
      lastExportMediaFolder(): String
    /**

    - */
      unbind(eventName: string): void
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
