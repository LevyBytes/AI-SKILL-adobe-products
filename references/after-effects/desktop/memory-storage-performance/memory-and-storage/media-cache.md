# Media cache

For certain video and audio formats, After Effects builds and caches versions it can grab quickly when making previews. Each imported audio file is conformed into a fresh .cfa file, while MPEG files get indexed into a fresh .mpgindex file. Because the video and audio don't have to be reprocessed for every preview, the media cache is a big boost to preview performance.

Note

The first time you import a file, expect a pause as the media gets processed and cached.

Links to every cached media file live in a database. After Effects shares this media cache database with Adobe Media Encoder, Premiere, Encore, Soundbooth, letting each of those programs read from and write to one common set of cached media files. Move the database somewhere new inside any one of these applications and the others pick up the new location too. A separate cache folder per program is fine, since one shared database keeps tabs on every one of them.

Go to Edit > Preferences > Disk (Windows) or After Effects > Settings > Disk (macOS); from there, pick either option below:

- Use the Choose Folder buttons to relocate either the media cache database or the media cache itself.

- Hit Clean Database & Cache to strip conformed and indexed files out of the cache and drop their database entries as well. Only files whose footage item has lost its source file get cleared this way.

Ahead of clicking Clean Database & Cache, confirm that any storage devices holding the source media you currently use are plugged into your computer. Footage judged missing because its storage device is disconnected will have its companion media-cache files wiped — which means you'll have to reconform or re-index that footage next time you go to use it.

The video below walks through quick steps for deleting the media cache files in After Effects.
