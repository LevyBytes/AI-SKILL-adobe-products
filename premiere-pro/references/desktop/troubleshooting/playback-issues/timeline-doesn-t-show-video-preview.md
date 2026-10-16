# Timeline doesn’t show video preview

Remove Premiere preview files when the timeline no longer displays video.

Try clearing the preview files, then test whether the timeline preview returns. Premiere can remove rendered files for you, or you can open the saved-preview folder yourself and delete the files there.

Choose the sequence, then choose Sequence > Delete Render Files. Premiere may disable this command when that timeline has not been rendered.

Another route is File > Project Settings > Scratch Disks. Check the folders shown for Audio Previews and Video Previews. Open that folder in macOS Finder or Windows Explorer, then remove the preview files stored there.

After previews are removed, create them again manually with Sequence > Render In to Out when needed; otherwise playback can become uneven.

Note

When cache data is cleared, Premiere builds those cache files again the next time the project opens. During playback or preview, Premiere may take a while to respond normally while the cache and .pek files are rebuilt.
