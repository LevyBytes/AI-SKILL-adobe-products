# Historical path tracking

Premiere checks file paths formerly tied to the media before starting a wider search.

- Current file path
- As many as two previous paths

- Current path
- No limit on historical paths

Standalone projects keep up to three path slots for each media file. Whenever relinked media is moved, the newest path takes the place of the oldest stored path.

After step 3, moving the media back to Media 1 lets Premiere find it automatically because Media 1 remains in the "History 2" slot. If the media returns to Media 1 after step 4, historical path tracking will not find it automatically because Media 1 has already rotated out of the stored history.
