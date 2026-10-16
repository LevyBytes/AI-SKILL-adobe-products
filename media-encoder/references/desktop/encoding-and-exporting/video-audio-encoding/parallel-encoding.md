# Parallel encoding

Adobe Media Encoder works through sources sequentially, while outputs from a single source can encode in parallel. This supports exporting several formats from the same source at once, but it does not export different sources at the same time.

Choose Parallel encoding when the same source needs multiple formats exported simultaneously.

Parallel encoding exports several formats from one source at the same time. Note

Parallel encoding is enabled by default. To turn it off, choose Edit > Preferences and deselect Enable Parallel Encoding.

When several outputs encode at once, the Encoding panel shows a thumbnail preview, progress bar, and estimated finish time for each encoding output.

Some export settings require an output to use serial encoding instead of parallel mode. After that temporary serial pass finishes, the queue resumes parallel encoding.

### More like this

- Working with log files
- Set preferences
- Files supported for export with Media Encoder
