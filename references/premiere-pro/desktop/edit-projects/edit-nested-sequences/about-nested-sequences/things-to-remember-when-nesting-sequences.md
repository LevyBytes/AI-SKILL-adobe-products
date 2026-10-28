# Things to remember when nesting sequences

- Do not nest a sequence inside itself or inside a sequence that includes a 16-channel audio track.
- Processing can take longer because every nested instance points back to multiple clips.
- Changes in the source sequence appear in all nested versions, but the duration does not change.
- The initial duration counts empty space at the beginning of the source, not empty space at the end.
- Set In and Out points when needed. Trimming changes only the nested clip, not the source.
- If the source sequence becomes shorter, the nested clip may show black video or silent audio; trim that section if needed.
