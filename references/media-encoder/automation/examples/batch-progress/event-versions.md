# Batch progress event versions

Run the main example with its sibling listener helper on Media Encoder 24.0 or later to include audio pre-encode events. It queues all three media files, registers the callbacks and then starts the batch.

`onItemEncodingStarted` and `onEncodingItemProgressUpdate` are available on EncoderHost from 23.1. `onAudioPreEncodeProgress` is available from 24.0.

For Media Encoder 23.0 or earlier, use the linked legacy exporter helper with `app.getExporter()` before starting the batch. Its progress event is `onEncodingItemProgressUpdated` (with a final d), unlike the EncoderHost event. It does not enable the later audio event.

Replace the illustrative Windows or macOS source paths with real files. The example uses several queue items so that the different event types can be observed. The source’s legacy commented handlers are preserved as a separate complete function.
