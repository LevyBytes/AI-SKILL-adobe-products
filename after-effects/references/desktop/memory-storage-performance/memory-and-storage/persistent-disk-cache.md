# Persistent disk cache

After you've saved a project, its disk-cache frames stick around even once you close the project or shut down After Effects. The name for this behavior is persistent disk cache. No longer does the disk cache empty itself when a session ends. Thanks to the persistent disk cache feature, frames held in the disk cache carry over from one session to the next. That spares rendering time while you work the project — or other projects drawing on those same cached frames.

When a project opens, After Effects sweeps the disk cache for frames that match the project and readies them for use. Since the disk cache holds frames from every project opened in the current or earlier sessions, frames disk-cached by one project can be pulled into other projects needing the very same frames. Blue marks creep across your timeline as that scan proceeds.

Note

Earlier After Effects versions didn't write everything to disk that this feature needs, so resave CS5.5 and older projects to get persistent caching.

Note

Frames from Roto Brush stay out of the persistent cache.

Note

Cache Work Area in background leans on the disk cache for frame storage too. See Improve performance using Global Performance Cache.
