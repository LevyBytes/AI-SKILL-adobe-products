# What's in src/

Each module focuses on a specific API area. Use this map when you need the implementation for a particular capability:

| â””â”€â”€ manifest.json â† point UDT here, not the one in public/
| File | What it covers |
| --- | --- |
| `project.ts` | Open, save, close projects; active project; graphics white luminance |
| `sequence.ts` | Create sequences; tracks; in/out points; frame rate; sequence settings |
| `projectPanel.ts` | Project items; bins; media paths; proxy; color labels; footage interpretation |
| `markers.ts` | Create, move, and remove sequence markers; marker colors |
| `metadata.ts` | Read and write XMP metadata; project panel columns; metadata schema |
| `effects.ts` | Add, apply, and remove effects |
| `transition.ts` | Add and remove transitions at clip start and end |
| `keyframe.ts` | Set values, add keyframes, get and set interpolation |
| `sourceMonitor.ts` | Open clips, play/pause, get/set position, close clips |
| `encoderManager.ts` | Encode files and project items; toggle embedded/sidecar XMP; launch encoder |
| `export.ts` | Export sequence frames and full sequences |
| `import.ts` | Import files, sequences, and After Effects components |
| `eventManager.ts` | Listen to project and encoder events |
| `sequenceEditor.ts` | Overwrite/insert track items; insert MOGRTs; clone and remove items |
| `transcript.ts` | Export and import transcripts |
| `projectConverter.ts` | Export as AAF, Final Cut Pro XML, or OpenTimelineIO |
| `settings.ts` | Scratch disk and ingest settings |
| `appPreference.ts` | Read and write application preferences |
| `properties.ts` | Get, set, and clear sequence properties |
| `prProduction.ts` | Active production; production scratch disk settings |
| `utils.ts` | Shared logging helper used across all modules |

---
