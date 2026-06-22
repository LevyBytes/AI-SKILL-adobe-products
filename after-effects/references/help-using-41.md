# Memory Storage1, Improve Performance

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Memory and storage; Improve performance.

## Memory and storage

Search Last updated on Apr 21, 2026

### Cut render times, sharpen preview responsiveness, and keep system resources working efficiently by tuning how Adobe After Effects handles memory allocation, disk cache, and storage settings.

### Memory preferences

To reach memory preferences, go to Edit > Preferences > Memory (Windows) or After Effects > Settings > Memory & CPU (macOS).

While you adjust the controls in the Memory & CPU dialog box, After Effects keeps refreshing on-screen guidance that explains how memory and CPUs will be parceled out and consumed.

Whether or not Enable Multi-Frames Rendering is turned on, the RAM reserved for other applications preference still applies.

- RAM reserved for other applications: Raise this figure to keep more RAM on hand for the operating system and for programs apart from After Effects and whatever application shares its memory pool. When you already know another application will run alongside After Effects, look up its system requirements and dial this value up to no less than that application's minimum RAM. Since leaving enough memory for the operating system yields the best performance, the setting won't drop below a fixed baseline floor.

### Memory pool shared between After Effects, Premiere, Photoshop, and Audition

A memory pool is shared between After Effects and Adobe Creative Cloud applications. The Memory & CPU preferences panel signals this through the icons sitting along its top for each program; whichever icons appear dimmed belong to programs that aren't currently open.

To keep RAM from being swapped out to disk, a memory balancer continuously redistributes how much memory each program gets. Every program signs up with the memory balancer and supplies these essentials: its minimum memory needs, the ceiling of memory it can take, how much it's using right now, and a priority. That priority comes in three levels — low, normal, and high. After Effects and Premiere claim high only while they're the active application. Normal covers After Effects sitting in the background or Adobe Media Encoder up front. Low applies to background servers belonging to Premiere or Adobe Media Encoder.

Note

One concrete upshot of the shared memory pool: launching Premiere cuts into the RAM After Effects has for previews, while quitting Premiere hands that RAM straight back to After Effects and lengthens how long previews can run.

### Memory Details dialog box

To bring up the Memory Details dialog box, choose Edit > Preferences > Memory & CPU (Windows) or After Effects > Settings > Memory & CPU (macOS), then click the Show Memory Usage Details button found at the foot of the preferences dialog box.

Inside the Memory Details dialog box you'll find extra detail on installed RAM along with present and permitted RAM usage. A table there also lists the processes tied to the applications. For each process the table reports Process ID, Application Name, Min Needed Memory, Max Usable Memory, Max Allowed Memory, Current Memory, and Current Priority.

Hit the Copy button to send that information to the clipboard.

### Memory (RAM) requirements for rendering

Rendering any frame — for a preview or for final output — demands memory that scales with whichever layer in the composition is the heaviest memory consumer.

Compositions render in After Effects one layer per frame at a time. That's why, in judging whether a particular frame fits within available memory, an individual layer's memory footprint matters more than the composition's length or its layer count. A composition's memory need amounts to the memory need of its single most memory-hungry layer.

A layer's memory needs climb under any of these conditions:

Raising the project's color bit depth

Bumping up the composition resolution

Working from a larger source image

Switching on color management

Attaching a mask

Applying per-character 3D properties

Precomposing while leaving transformations uncollapsed

Reaching for blending modes, layer styles, or effects — particularly any that span several layers

Turning on output options like 3:2 pulldown, cropping, and resizing

Casting shadows or depth-of-field effects on 3D layers

Each frame has to sit in one unbroken block of memory; After Effects can't split a frame across fragmented memory.

Note

Improve performance by simplifying your project covers ways to trim memory needs and lift performance.

### Purging memory (RAM)

Now and then After Effects will throw an alert warning that displaying or rendering a composition calls for more memory. When such an out-of-memory alert appears, clear memory or lighten the memory load of your heaviest layers, then have another go.

The Edit > Purge menu gives you commands to release memory on the spot:

- All Cache
- All Memory & Disk Cache
- All Memory
- All Disk Cache
- All 3D Cache
- Undo
- Image Cache Memory
- Snapshot

On big projects purging memory goes faster. Purging won't synchronize the project database, though. To force that synchronization, hold the Option (macOS) or Alt (Windows) key while choosing Edit > Purge > All Memory. Reach for this when the Composition panel isn't updating right and neither Purge > All Memory nor All Memory & Disk Cache fixes it.

### Troubleshooting memory issues

Error

Solution

“Unable to allocate enough memory to render the current frame....”

Lighten this frame's memory load, or add more RAM.

“Unable to allocate [n] MB of memory....”

Lighten this frame's memory load, or add more RAM.

“Image buffers of size [width]x[height] @ [depth] bpc ([n] GB) exceed internal limits...”

Trim what this frame asks of memory; any one frame tops out at 2 GB.

“Memory allocation of [n] GB exceeds internal limits...”

Trim what this frame asks of memory; a single allocation tops out at 2 GB.

“Frame dimensions exceed internal limits. Decrease the dimensions to render this frame.\"

Shrink the composition or solid so it stays beneath 16384. That ceiling covers Advanced 3D or Draft 3D plus solids, images, and textures — including any tucked inside 3D models.

| --- | --- |

### Storage requirements for output files

To work out how many megabytes one uncompressed frame at full resolution takes up, apply this formula:

(height in pixels) x (width in pixels) x (number of bits per channel) / 2,097,152

Note

That 2,097,152 figure is a conversion factor rolling together the bytes in a megabyte (220), the bits in a byte (8), and the channels in a pixel (4).

A few sample frame sizes paired with their per-frame memory needs, expressed in megabytes (MB):

DV NTSC (720x480) frame in an 8-bpc project: 1.3 MB

D1/DV PAL (720x576) frame in an 8-bpc project: 1.6 MB

HDTV (1920x1080) frame in a 16-bpc project: 16 MB

4K digital cinema (4096x2304) frame in a 32-bpc project: 144 MB

Final output usually gets compressed during encoding, so multiplying one frame's memory by the frame rate and the composition's length won't tell you how much disk space the finished movie needs. That product does, however, hint at the upper bound of storage you might require. Take one second — roughly 30 frames — of uncompressed standard-definition 8-bpc video: it runs about 40 MB. At that data rate a feature-length film would eat over 200 GB. Apply DV compression, which trims each second of video to 3.6 MB, and the same movie still works out to more than 20 GB.

Feature-film projects routinely call for terabytes to hold footage and rendered movies, owing to their deeper color bit depth, bigger frames, and far gentler compression ratios.

### Caches: RAM cache, disk cache, and media cache

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

### The global performance cache

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

### Global RAM cache

What the Global RAM cache brings to the table:

- An undo/redo restores cached frames.
- Returning a composition or layer to an earlier state — say, toggling a layer's visibility off and then on — restores cached frames.
- Reusable frames turn up at any point on the timeline — think loop expressions, time remapping, or copy/paste of keyframes — not just the frames sitting next door.
- Frames eligible for reuse get spotted on duplicated layers or duplicated compositions;
- A render queue rendering with anything besides Current Settings won't automatically wipe out the cache.

### Persistent disk cache

After you've saved a project, its disk-cache frames stick around even once you close the project or shut down After Effects. The name for this behavior is persistent disk cache. No longer does the disk cache empty itself when a session ends. Thanks to the persistent disk cache feature, frames held in the disk cache carry over from one session to the next. That spares rendering time while you work the project — or other projects drawing on those same cached frames.

When a project opens, After Effects sweeps the disk cache for frames that match the project and readies them for use. Since the disk cache holds frames from every project opened in the current or earlier sessions, frames disk-cached by one project can be pulled into other projects needing the very same frames. Blue marks creep across your timeline as that scan proceeds.

Note

Earlier After Effects versions didn't write everything to disk that this feature needs, so resave CS5.5 and older projects to get persistent caching.

Note

Frames from Roto Brush stay out of the persistent cache.

Note

Cache Work Area in background leans on the disk cache for frame storage too. See Improve performance using Global Performance Cache.

### Media cache

For certain video and audio formats, After Effects builds and caches versions it can grab quickly when making previews. Each imported audio file is conformed into a fresh .cfa file, while MPEG files get indexed into a fresh .mpgindex file. Because the video and audio don't have to be reprocessed for every preview, the media cache is a big boost to preview performance.

Note

The first time you import a file, expect a pause as the media gets processed and cached.

Links to every cached media file live in a database. After Effects shares this media cache database with Adobe Media Encoder, Premiere, Encore, Soundbooth, letting each of those programs read from and write to one common set of cached media files. Move the database somewhere new inside any one of these applications and the others pick up the new location too. A separate cache folder per program is fine, since one shared database keeps tabs on every one of them.

Go to Edit > Preferences > Disk (Windows) or After Effects > Settings > Disk (macOS); from there, pick either option below:

- Use the Choose Folder buttons to relocate either the media cache database or the media cache itself.

- Hit Clean Database & Cache to strip conformed and indexed files out of the cache and drop their database entries as well. Only files whose footage item has lost its source file get cleared this way.

Ahead of clicking Clean Database & Cache, confirm that any storage devices holding the source media you currently use are plugged into your computer. Footage judged missing because its storage device is disconnected will have its companion media-cache files wiped — which means you'll have to reconform or re-index that footage next time you go to use it.

The video below walks through quick steps for deleting the media cache files in After Effects.

## Improve performance

Search Last updated on Apr 17, 2026

### Trim render times and make previews more responsive by tuning Adobe After Effects performance across system resources, cache settings, and composition workflows.

Performance gains can come from tuning your computer system, After Effects itself, your project, and your workflow. Several tips here lift performance not by rendering faster but by shortening how long other operations — opening a project, for one — take.

Note

Hands down, planning ahead is the single best route to better overall performance: test your workflow and output pipeline early, and verify that what you're handing over matches what your client genuinely wants and expects.

### Improve performance before starting After Effects

- Confirm you're running the current After Effects version, updates included. Select Help > Updates to check for and install them.
- Confirm the newest drivers and plug-ins are in place, video card drivers above all. Head to the provider's website to grab driver and plugin updates.
- Give your system enough RAM to perform well; the recommendation is a minimum of 2 GB per processor core. Check your operating system or hardware documentation for how to inspect and upgrade RAM.
- Shut down applications you don't need. Letting other apps run without enough memory set aside can drive the system to swap RAM to disk, which slashes performance.
- Halt or pause heavy operations running in other applications — video previews in Adobe Bridge, for instance.

- For top performance, hold source footage on a fast local disk. Slow drives or network storage drag performance down, so where you can, dedicate separate fast local drives to source footage and to rendered output.
- Dedicating a separate fast disk or disk array to the disk cache is ideal, and SSDs fit the bill thanks to their speed.

### Improve performance by optimizing memory cache settings

- Set aside enough memory for other applications.
- Turn on caching frames to disk for previews via After Effects > Settings > Disk > Enable Disk Cache. For best performance in After Effects, hand the Maximum Disk Cache Size as much room as you can (on a separate fast drive).

### Improve performance by simplifying your project

Trimming a project down and splitting it into pieces keeps After Effects from churning through elements you never use, and it lets you decide exactly when each step runs — both of which cut wasted, repeated processing and lift performance considerably.

- Strip out any elements the project no longer references.
- Break a sprawling project into a handful of smaller ones, and merge them back together right before you render the final movie. The way to bring them back together is to import every one of those projects into one combined project.
- Ahead of rendering, run the Collect Files command so every source footage file lands on a fast local drive — ideally a different drive than the one you render and export to.
- Pre-render any nested compositions, and output a finished composition as a movie; that stops After Effects from re-rendering the same composition each time it has to show it.
- When you aren't actively editing a particular source item, swap in a still-image or low-resolution proxy in its place.
- Drop the composition down to a lower resolution.
- Flip the Solo switch on the layer you're focused on so it sits by itself.

### Improve performance by modifying screen output

Restricting how much After Effects paints to the screen lets you speed things up without altering any of the project's data. Refreshing what appears on screen consumes both memory and processing cycles, so surface only what matters at the moment and change visibility as the job evolves.

- Switch off output simulation and display color management whenever you don't require them. How fast and how accurately previews are color-managed is governed by the Viewer Quality preferences.
- Turn on hardware-accelerated previews so the GPU assists in painting previews to the screen. Go to Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS), then check Hardware Accelerate Composition, Layer, and Footage Panels.
- Shut any panels you aren't using. Keeping panels open forces After Effects to spend memory and processor time refreshing them, which can drag down whatever you're doing in a different panel.
- Set up a region of interest. When your attention is on just a small portion of the composition, restrict how much of it gets rendered to the screen during previews.
- In the Timeline panel menu, clear Show Cache Indicators so After Effects stops drawing the green and blue bars in the time ruler that mark cached frames.
- From the Appearance preferences, clear the Show Rendering Progress In Info Panel And Flowchart option so the per-frame render details no longer appear on screen.
- In the Render Queue panel, collapse Current Render Details by clicking the triangle next to Current Render.
- Hitting Caps Lock halts updates in the Footage, Layer, and Composition panels. While updates are frozen a red bar appears, yet panel controls still react as you change them; press Caps Lock once more to bring full updates back.

Note

Caps Lock also suspends preview updates in viewers (turning refresh off) while a final render is running, but in that case no red reminder bar shows up.

- Choosing Draft 3D from the Timeline panel menu shuts off every light and shadow cast on 3D layers, and it also turns off a camera's depth-of-field blur.
- While you're arranging and previewing a ray-traced 3D composition, pick anything other than Off from the Fast Previews button to work in fast draft mode.
- In the Timeline panel menu, switch off Live Update so After Effects no longer refreshes compositions on the fly. More detail is available under Preview modes and Fast Previews preferences.
- Display audio waveforms in the Timeline panel only at the moments you genuinely need them.
- Click the Toggle Pixel Aspect Ratio Correction button along the bottom of a Composition, Layer, or Footage panel to switch pixel aspect ratio correction off. The Viewer Quality preferences govern how fast and how accurately previews handle pixel aspect ratio correction and other scaling.
- When you're previewing video on an external monitor, clear Mirror On Computer Monitor.
- Conceal layer controls such as layer handles, masks, and 3D reference axes.
- Reduce a composition's magnification. Showing the Composition, Layer, and Footage panels above 100% magnification slows how quickly After Effects redraws the screen.
- In the Composition panel, set the composition's Resolution/Down Sample Factor to Auto; that keeps After Effects from needlessly rendering rows or columns of pixels that wouldn't reach the screen at low zoom levels anyway.

### Improve performance when using effects

Effects like distortions and blurs can demand a great deal of memory and processor power. Choosing carefully when and how you bring them in lets you raise overall performance by a wide margin.

- Hold off on effects that are heavy on memory and the processor until later. Finish animating your layers and any other work that depends on real-time previews first, then add the memory- or processor-hungry effects such as blurs and glows that can push previews below real time.
- For a quick preview speed boost, disable effects for the time being.
- Cap how many particles a particle effect produces.
- Instead of repeating the same effect with identical settings across several layers, put that effect on an adjustment layer. An effect placed on an adjustment layer runs a single time over the composite of every layer sitting below it.

## See also

- [Application](script-application.md)
