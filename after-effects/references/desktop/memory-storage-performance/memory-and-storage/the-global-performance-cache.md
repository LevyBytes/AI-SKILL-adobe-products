# The global performance cache

These pieces make up the global performance cache:

Global RAM cache: Changing a composition doesn't wipe its RAM-cache frames automatically; those frames come back into play if you undo the edit or roll the composition to its earlier state. The RAM cache sheds its oldest frames only once it's full and After Effects has new frames to cache.

Persistent disk cache: Frames cached to disk remain on hand even once After Effects has closed.

Note

Previews don't draw on the disk cache. Its sole role is previews that lack real-time playback of cached frames and audio.

Disk Cache ships enabled. To set disk cache preferences and to switch disk caching on or off:

Head to Edit > Preferences > Disk (Windows) or After Effects > Settings > Disk (macOS), then tick or untick Enable Disk Cache.

Through disk cache preferences you can point the cache at a folder of your choosing.

Click the Choose Folder button, then confirm with OK (Windows) or Choose (macOS).

When you want the disk cache emptied:

Select the Empty Disk Cache button or Edit > Purge > All Memory & Disk Cache option.

Note

Disk caching being on doesn't change the rule that every frame must fit inside one contiguous block of RAM. Turning the disk cache on does nothing for shortfalls of RAM that block holding or rendering a single composition frame.

Disk caching performs best when its folder lives on a separate physical hard disk from your source footage — better still on a drive served by a different drive controller than the one holding that footage. Aim for a fast hard drive or SSD with as much space set aside as you can manage for the disk cache folder. That folder can't be the hard disk's root folder.

Just as it does with the RAM cache, After Effects commits a frame to the disk cache only when pulling it from the cache beats re-rendering it.

How many gigabytes of hard disk space get used is governed by the Maximum Disk Cache Size setting. By default the disk cache size sits at 10% of the volume's total size, capped at 100 GB.

Note

The application verifies that 10 GB stays free on top of whatever Preferences > Media & Disk Cache specifies. After Effects flags you when the disk cache won't have enough room.
