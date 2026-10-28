# Caches: RAM cache, disk cache, and media cache

While a composition is in progress, After Effects parks a portion of its rendered frames and source images in RAM, which speeds up previewing and editing. Frames that take hardly any time to render aren't cached. Within the image cache, frames stay uncompressed.

Caching also happens at the footage and layer levels for quicker previews; layers you've changed get rendered during the preview, while the ones left alone are composited straight from the cache.

Once the RAM cache fills, every fresh frame entering it overwrites one cached before it. As After Effects renders preview frames, it quits adding to the image cache the moment that cache is full and then plays back only the frames that managed to fit in the RAM cache.

In the time ruler of the Timeline, Layer, and Footage panels, green bars flag frames cached to RAM. Blue bars in the Timeline panel flag frames cached to disk.

With Layer Cache Indicators you can see at a glance how many frames are cached for each layer — handy for figuring out which layers in a composition are cached.

To switch on the Layer Cache Indicators option, hold Ctrl (Windows) or Command (macOS), then pick Show Cache Indicators from the Timeline panel menu. Those indicators stay hidden unless Show Cache Indicators is turned on in that menu.

Note

Performance dips a little while the cache indicators are showing.

Quitting After Effects clears the RAM cache on its own.

From the Edit > Purge menu you can opt to purge just the RAM cache, or both the RAM cache and the disk cache.

Choosing Edit > Purge > All Memory & Disk Cache wipes every RAM cache's contents (the way the All Memory command already does) together with the disk cache's contents (the way the Empty Disk Cache button under Media & Disk Cache preferences already does).

Note

Clearing the disk cache in one After Effects version leaves other versions' caches intact. Purging it from After Effects, for example, has no bearing on the disk cache for After Effects CS6.
