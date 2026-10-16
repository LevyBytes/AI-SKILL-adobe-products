# AMEServer

Community declaration reference: Audition/2018.

AMEServer models a connection with Adobe Media Encoder through DynanicLink.

```typescript
declare class AMEServer {
    /**
    - */
      static __(): any
    /**

    - */
      static addEventListener(): any
    /**

    -
    - @param multitrackDocument
    - @param trackRouting
    - @param preset
    - @param temporaryFilesDir
    - @param outputFile Add selected tracks from a multitrack document to the AME queue. Routing arrives as an array of tracks; the first array entry maps to the first channels in the output file. Insert null into the "trackRouting" array to leave a channel unassigned. In addition to the final output file, provide a directory for temporary wave files and the temporary project file. AME deletes the temporary files after export completion. AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS or AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR reports the outcome. Queue the selected multitrack-document tracks in AME.
      */
      addMultitrackDocumentAndRoutingToQueue(
      multitrackDocument: Document,
      trackRouting: any[],
      preset: AMEPreset,
      temporaryFilesDir: string,
      outputFile: string,
      ): boolean
    /**

    - Connect to AME. DynamicLinkConnectionEvent.EVENT_CONNECTION reports the outcome.
    - Open the AME connection.
      */
      connect(): boolean
    /**

    - Close the AME connection.
      */
      disconnect(): boolean
    /**

    - */
      static dispatchEvent(): any
    /**

    - */
      static removeEventListener(): any
    /**

    - Ask AME for the available formats. AMEFormatsEvent.EVENT_REQUESTFORMATS_SUCCESS or AMEFormatsEvent.EVENT_REQUESTFORMATS_ERROR reports the outcome.
    - Request AME's available formats.
      */
      requestFormats(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
